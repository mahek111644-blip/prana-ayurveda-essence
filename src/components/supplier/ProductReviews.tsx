import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";
import { Badge } from "@/components/ui/badge";

type Review = Tables<"reviews">;

interface ProductReviewsProps {
  productSlug?: string;
}

const ProductReviews = ({ productSlug }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
  });

  useEffect(() => {
    fetchReviews();
  }, [productSlug]);

  const fetchReviews = async () => {
    let query = supabase.from("reviews").select("*").eq("approved", true);

    if (productSlug) {
      query = query.eq("product", productSlug);
    }

    const { data } = await query.order("created_at", { ascending: false });

    if (data) {
      setReviews(data);
      calculateStats(data);
    }
  };

  const calculateStats = (reviewData: Review[]) => {
    const total = reviewData.length;
    const sum = reviewData.reduce((acc, review) => acc + (review.rating || 5), 0);
    const average = total > 0 ? sum / total : 0;

    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewData.forEach((review) => {
      const rating = review.rating || 5;
      distribution[rating as keyof typeof distribution]++;
    });

    setStats({
      averageRating: average,
      totalReviews: total,
      ratingDistribution: distribution,
    });
  };

  const RatingBar = ({ stars, count }: { stars: number; count: number }) => {
    const percentage = stats.totalReviews > 0 ? (count / stats.totalReviews) * 100 : 0;
    
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm w-8">{stars}★</span>
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-sm text-muted-foreground w-8 text-right">{count}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overall Rating */}
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">
                {stats.averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.round(stats.averageRating)
                        ? "text-accent fill-accent"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                Based on {stats.totalReviews} {stats.totalReviews === 1 ? "review" : "reviews"}
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <RatingBar
                  key={stars}
                  stars={stars}
                  count={stats.ratingDistribution[stars as keyof typeof stats.ratingDistribution]}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.image_url || undefined} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < (review.rating || 5) ? "text-accent fill-accent" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Badge variant="secondary" className="mb-2">
                    {review.product}
                  </Badge>

                  <p className="text-foreground mb-3">{review.review_text}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>
                      {new Date(review.created_at || "").toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <ThumbsUp size={14} />
                      Helpful
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {reviews.length === 0 && (
        <Card className="p-12 text-center">
          <Star className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No reviews yet</h3>
          <p className="text-muted-foreground">Be the first to review this product</p>
        </Card>
      )}
    </div>
  );
};

export default ProductReviews;
