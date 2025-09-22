import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Ashwagandha: Ancient Wisdom Meets Modern Research",
      excerpt: "Discover how modern science validates the traditional uses of Ashwagandha for stress relief and cognitive enhancement.",
      image: "https://images.unsplash.com/photo-1609038677224-c8ae18b08b96?w=600&h=400&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Research"
    },
    {
      id: 2,
      title: "Ayurvedic Morning Routines for Optimal Health",
      excerpt: "Transform your mornings with time-tested Ayurvedic practices that promote balance and vitality throughout the day.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Lifestyle"
    },
    {
      id: 3,
      title: "Understanding Your Dosha: A Complete Guide to Ayurvedic Body Types",
      excerpt: "Learn about the three doshas and how understanding your unique constitution can guide your wellness journey.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      date: "March 5, 2024",
      readTime: "12 min read",
      category: "Education"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Wisdom & <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest research, traditional wisdom, and practical tips 
            for incorporating Ayurveda into your modern lifestyle.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="card-3d group overflow-hidden border-0 shadow-soft hover:shadow-glow transition-all duration-500 bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 text-sm rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-white" size={24} />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium hover:text-primary-dark transition-colors cursor-pointer">
                    Read More
                  </span>
                  <ArrowRight 
                    size={16} 
                    className="text-primary group-hover:translate-x-1 transition-transform" 
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="primary" size="lg" className="btn-glow">
            Explore More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;