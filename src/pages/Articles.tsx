import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, User, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "wellness", name: "Wellness" },
    { id: "nutrition", name: "Nutrition" },
    { id: "herbs", name: "Herbs & Medicine" },
    { id: "lifestyle", name: "Lifestyle" },
    { id: "meditation", name: "Meditation" }
  ];

  const articles = [
    {
      id: 1,
      title: "The Science Behind Ayurvedic Doshas: Understanding Your Body Type",
      excerpt: "Discover how Vata, Pitta, and Kapha doshas influence your health and wellbeing. Learn to identify your dominant dosha and create a personalized wellness routine.",
      image: "/api/placeholder/400/250",
      category: "wellness",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      doctor: {
        id: 1,
        name: "Dr. Priya Sharma",
        specialization: "Ayurvedic Medicine",
        experience: "15 years",
        image: "/api/placeholder/60/60"
      }
    },
    {
      id: 2,
      title: "Turmeric: The Golden Spice of Ayurveda",
      excerpt: "Explore the incredible healing properties of turmeric and how this ancient spice can transform your health naturally.",
      image: "/api/placeholder/400/250",
      category: "herbs",
      readTime: "6 min read",
      publishDate: "Dec 12, 2024",
      doctor: {
        id: 2,
        name: "Dr. Rajesh Kumar",
        specialization: "Herbal Medicine",
        experience: "20 years",
        image: "/api/placeholder/60/60"
      }
    },
    {
      id: 3,
      title: "Ayurvedic Nutrition: Eating According to Your Dosha",
      excerpt: "Learn how to nourish your body with the right foods based on your unique constitution and seasonal changes.",
      image: "/api/placeholder/400/250",
      category: "nutrition",
      readTime: "10 min read",
      publishDate: "Dec 10, 2024",
      doctor: {
        id: 3,
        name: "Dr. Meera Patel",
        specialization: "Ayurvedic Nutrition",
        experience: "12 years",
        image: "/api/placeholder/60/60"
      }
    },
    {
      id: 4,
      title: "Daily Meditation Practices for Modern Life",
      excerpt: "Simple yet powerful meditation techniques rooted in ancient wisdom that fit seamlessly into contemporary lifestyles.",
      image: "/api/placeholder/400/250",
      category: "meditation",
      readTime: "7 min read",
      publishDate: "Dec 8, 2024",
      doctor: {
        id: 4,
        name: "Dr. Arjun Singh",
        specialization: "Mind-Body Medicine",
        experience: "18 years",
        image: "/api/placeholder/60/60"
      }
    },
    {
      id: 5,
      title: "Creating an Ayurvedic Lifestyle: Simple Changes, Profound Results",
      excerpt: "Transform your daily routine with time-tested Ayurvedic principles that promote balance, vitality, and longevity.",
      image: "/api/placeholder/400/250",
      category: "lifestyle",
      readTime: "12 min read",
      publishDate: "Dec 5, 2024",
      doctor: {
        id: 5,
        name: "Dr. Kavita Gupta",
        specialization: "Lifestyle Medicine",
        experience: "14 years",
        image: "/api/placeholder/60/60"
      }
    },
    {
      id: 6,
      title: "Ashwagandha: The Ultimate Stress-Fighting Adaptogen",
      excerpt: "Discover how this powerful herb can help you manage stress, improve energy, and enhance overall wellbeing.",
      image: "/api/placeholder/400/250",
      category: "herbs",
      readTime: "9 min read",
      publishDate: "Dec 3, 2024",
      doctor: {
        id: 6,
        name: "Dr. Suresh Reddy",
        specialization: "Herbal Therapy",
        experience: "22 years",
        image: "/api/placeholder/60/60"
      }
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary-foreground mb-4">
              Prana Ayurveda
            </h1>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6">
              Articles & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover ancient wisdom through modern insights from certified Ayurvedic doctors and wellness experts
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg glass border-accent/30 focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="card-3d glass border-accent/20 hover:shadow-glow transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {categories.find(cat => cat.id === article.category)?.name}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div>{article.publishDate}</div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Doctor Info */}
                  <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-secondary/30">
                    <img
                      src={article.doctor.image}
                      alt={article.doctor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {article.doctor.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {article.doctor.specialization} • {article.doctor.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link to={`/articles/${article.id}`} className="flex-1">
                      <Button className="w-full btn-glow">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to={`/doctors/${article.doctor.id}`}>
                      <Button variant="outline" size="icon" className="border-accent/30 hover:border-primary">
                        <User className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No articles found matching your criteria.</p>
              <Button 
                onClick={() => {setSearchTerm(""); setSelectedCategory("all");}}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;