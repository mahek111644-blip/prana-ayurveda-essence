import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User, Share, BookOpen, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ArticleDetail = () => {
  const { id } = useParams();

  // Mock article data - in a real app, you'd fetch this based on the ID
  const article = {
    id: 1,
    title: "The Science Behind Ayurvedic Doshas: Understanding Your Body Type",
    content: `
      <h2>Understanding the Three Doshas</h2>
      <p>Ayurveda, the ancient Indian system of medicine, recognizes three fundamental energies or doshas that govern our physical and mental processes: Vata, Pitta, and Kapha. Each person has a unique combination of these doshas, which determines their constitution or 'prakriti'.</p>
      
      <h3>Vata Dosha: The Energy of Movement</h3>
      <p>Vata is composed of the elements of space and air. It governs all movement in the body, including breathing, circulation, and nerve impulses. People with a predominant Vata constitution tend to be:</p>
      <ul>
        <li>Energetic and creative</li>
        <li>Quick thinking and adaptable</li>
        <li>Prone to anxiety when imbalanced</li>
        <li>Have irregular appetite and sleep patterns</li>
      </ul>
      
      <h3>Pitta Dosha: The Energy of Transformation</h3>
      <p>Pitta is made up of fire and water elements. It controls digestion, metabolism, and temperature regulation. Pitta-dominant individuals often exhibit:</p>
      <ul>
        <li>Strong leadership qualities</li>
        <li>Good digestion and metabolism</li>
        <li>Tendency toward irritability when stressed</li>
        <li>Medium build with good muscle tone</li>
      </ul>
      
      <h3>Kapha Dosha: The Energy of Structure</h3>
      <p>Kapha consists of earth and water elements, providing structure and stability to the body. Those with Kapha dominance typically have:</p>
      <ul>
        <li>Calm and steady temperament</li>
        <li>Strong immunity and endurance</li>
        <li>Tendency to gain weight easily</li>
        <li>Loving and compassionate nature</li>
      </ul>
      
      <h2>Identifying Your Dominant Dosha</h2>
      <p>Understanding your dominant dosha helps you make lifestyle choices that support your natural constitution. Consider consulting with a qualified Ayurvedic practitioner for a comprehensive assessment.</p>
      
      <h2>Balancing Your Doshas</h2>
      <p>When doshas become imbalanced, it can lead to physical and mental health issues. Ayurveda offers various methods to restore balance, including:</p>
      <ul>
        <li>Dietary modifications based on your constitution</li>
        <li>Herbal remedies and supplements</li>
        <li>Yoga and meditation practices</li>
        <li>Seasonal lifestyle adjustments</li>
        <li>Regular daily routines (dinacharya)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The dosha system provides a personalized approach to health and wellness. By understanding your unique constitution and making appropriate lifestyle choices, you can maintain optimal health and prevent disease naturally.</p>
    `,
    image: "/api/placeholder/800/400",
    category: "wellness",
    readTime: "8 min read",
    publishDate: "December 15, 2024",
    views: "2.1k",
    likes: "156",
    doctor: {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Ayurvedic Medicine",
      experience: "15 years",
      image: "/api/placeholder/80/80",
      bio: "Dr. Priya Sharma is a renowned Ayurvedic physician with over 15 years of clinical experience. She specializes in constitutional assessment and personalized treatment protocols."
    }
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Turmeric: The Golden Spice of Ayurveda",
      image: "/api/placeholder/300/200",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Ayurvedic Nutrition: Eating According to Your Dosha",
      image: "/api/placeholder/300/200",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Back Navigation */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4">
          <Link to="/articles">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4 bg-primary/90 text-primary-foreground">
                Wellness
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.publishDate}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {article.views} views
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  {article.likes} likes
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="btn-glow">
                  <Heart className="w-4 h-4 mr-2" />
                  Like Article
                </Button>
                <Button variant="outline" className="border-accent/30">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div 
                  className="prose prose-lg max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  style={{
                    lineHeight: '1.8',
                    fontSize: '18px'
                  }}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Doctor Profile */}
                <Card className="glass border-accent/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <img
                        src={article.doctor.image}
                        alt={article.doctor.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {article.doctor.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {article.doctor.specialization}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {article.doctor.experience} experience
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {article.doctor.bio}
                      </p>
                      <Link to={`/doctors/${article.doctor.id}`}>
                        <Button className="w-full btn-glow">
                          <User className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="glass border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedArticles.map((relatedArticle) => (
                        <Link 
                          key={relatedArticle.id}
                          to={`/articles/${relatedArticle.id}`}
                          className="block"
                        >
                          <div className="flex gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                            <img
                              src={relatedArticle.image}
                              alt={relatedArticle.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-foreground text-sm line-clamp-2 mb-1">
                                {relatedArticle.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {relatedArticle.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;