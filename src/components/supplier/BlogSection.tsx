import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";
import { useNavigate } from "react-router-dom";

type Article = Tables<"articles">;

const BlogSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(3);

    setArticles(data || []);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Educational <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest Ayurvedic wisdom, research insights, and wellness tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-glow transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/articles/${article.slug}`)}
            >
              <CardContent className="p-0">
                {article.image_url && (
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {article.category && (
                      <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-xs rounded-full">
                        {article.category}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(article.published_at || "").toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.read_time || 5} min read
                    </div>
                  </div>

                  <h3 className="font-heading font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {article.excerpt}
                  </p>

                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-primary text-sm font-medium">Read More</span>
                    <ArrowRight
                      size={16}
                      className="text-primary group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/articles")}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            View All Articles
          </Button>
        </div>

        {articles.length === 0 && (
          <Card className="p-12 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
            <p className="text-muted-foreground">Check back soon for educational content</p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
