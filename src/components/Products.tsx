import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ashwagandha Premium",
      category: "Stress Relief",
      price: "$29.99",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop",
      description: "Premium quality Ashwagandha for stress relief and vitality enhancement.",
      benefits: ["Reduces stress", "Improves sleep", "Boosts energy"]
    },
    {
      id: 2,
      name: "Turmeric Golden Milk",
      category: "Immunity",
      price: "$24.99",
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1609501676725-7186f548e03c?w=400&h=300&fit=crop",
      description: "Organic turmeric blend for daily immunity and inflammation support.",
      benefits: ["Anti-inflammatory", "Immune boost", "Joint health"]
    },
    {
      id: 3,
      name: "Brahmi Mind Tonic",
      category: "Mental Clarity",
      price: "$34.99",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop",
      description: "Traditional Brahmi formulation for enhanced cognitive function.",
      benefits: ["Memory support", "Focus enhancement", "Mental clarity"]
    },
    {
      id: 4,
      name: "Triphala Detox",
      category: "Digestive Health",
      price: "$19.99",
      rating: 4.7,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
      description: "Classic Triphala blend for gentle detoxification and digestive wellness.",
      benefits: ["Digestive support", "Gentle cleanse", "Antioxidant rich"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Premium <span className="gradient-text">Products</span> & <span className="gradient-accent-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of authentic Ayurvedic products, 
            each formulated to support your journey toward optimal health and wellness.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="card-3d group overflow-hidden border-0 shadow-soft hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs bg-accent/20 text-white px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white px-2 py-1 text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-primary">
                    {product.price}
                  </span>
                  <Button variant="primary" size="sm" className="btn-glow">
                    <ShoppingCart size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-3xl p-12">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
            Explore Our Complete Collection
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse through our extensive range of premium Ayurvedic products, 
            consultations, and wellness programs tailored to your unique needs.
          </p>
          <Button variant="hero" size="lg" className="btn-glow shadow-glow">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;