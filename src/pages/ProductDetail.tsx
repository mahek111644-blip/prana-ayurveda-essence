import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Star, ShoppingCart, Heart, Check, Award } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    checkUser();
    fetchProduct();
  }, [slug]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      toast({
        title: "Error",
        description: "Product not found",
        variant: "destructive",
      });
      navigate("/products");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    try {
      const { error } = await supabase
        .from("cart_items")
        .upsert({
          user_id: user.id,
          product_id: product.id,
          quantity: quantity
        });

      if (error) throw error;

      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const addToWishlist = async () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add items to wishlist",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    try {
      const { error } = await supabase
        .from("wishlist")
        .insert({ user_id: user.id, product_id: product.id });

      if (error) throw error;

      toast({
        title: "Added to Wishlist",
        description: "Product has been added to your wishlist",
      });
    } catch (error: any) {
      if (error.code === "23505") {
        toast({
          title: "Already in Wishlist",
          description: "This product is already in your wishlist",
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  const buyNow = async () => {
    await addToCart();
    navigate("/checkout");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!product) {
    return null;
  }

  const benefits = product.description?.split('.').filter((b: string) => b.trim()) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-20">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="relative rounded-lg overflow-hidden bg-accent/10 p-8">
              <img
                src={product.image_url || "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&h=600&fit=crop"}
                alt={product.name}
                className="w-full h-auto object-contain"
              />
              {product.featured && (
                <Badge className="absolute top-4 left-4">Featured</Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-heading font-bold mb-2">{product.name}</h1>
                {product.rating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.review_count} reviews)
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Doctor Verified</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-primary mb-6">₹{product.price}</div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <span className="font-medium">In Stock ({product.stock} available)</span>
                </div>
              ) : (
                <div className="text-red-600 font-medium">Out of Stock</div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">About this product</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            {benefits.length > 0 && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
                  <p className="text-muted-foreground">{product.ingredients}</p>
                </CardContent>
              </Card>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="font-semibold text-sm mb-2 block">Quantity</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="flex-1"
                size="lg"
                onClick={buyNow}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={addToCart}
                disabled={product.stock === 0}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={addToWishlist}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Doctor Verification Card */}
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Doctor Verified Product</h4>
                    <p className="text-sm text-muted-foreground">
                      This product has been verified and approved by certified Ayurvedic doctors
                      for safety and efficacy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;