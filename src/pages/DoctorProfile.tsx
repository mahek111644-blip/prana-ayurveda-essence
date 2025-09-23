import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Calendar, Award, BookOpen, Users, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DoctorProfile = () => {
  const { id } = useParams();

  // Mock doctor data - in a real app, you'd fetch this based on the ID
  const doctor = {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Ayurvedic Medicine",
    experience: "15 years",
    image: "/api/placeholder/200/200",
    rating: 4.9,
    reviewCount: 234,
    location: "Mumbai, India",
    education: [
      "BAMS - Bachelor of Ayurvedic Medicine and Surgery",
      "MD in Ayurveda - Panchakarma Specialist",
      "PhD in Traditional Medicine Research"
    ],
    certifications: [
      "Certified Panchakarma Therapist",
      "Ayurvedic Lifestyle Counselor",
      "Herbal Medicine Specialist"
    ],
    bio: "Dr. Priya Sharma is a renowned Ayurvedic physician with over 15 years of clinical experience in traditional Indian medicine. She specializes in constitutional assessment, personalized treatment protocols, and Panchakarma therapies. Dr. Sharma has helped thousands of patients achieve optimal health through natural healing methods.",
    expertise: [
      "Constitutional Assessment (Prakriti Analysis)",
      "Panchakarma Therapies",
      "Chronic Disease Management",
      "Women's Health & Wellness",
      "Digestive Disorders",
      "Stress & Anxiety Management"
    ],
    languages: ["English", "Hindi", "Marathi", "Sanskrit"],
    consultationFee: "₹1,500",
    availability: "Mon-Sat, 9 AM - 6 PM",
    totalPatients: "5000+",
    articlesPublished: 45
  };

  const articles = [
    {
      id: 1,
      title: "The Science Behind Ayurvedic Doshas: Understanding Your Body Type",
      excerpt: "Discover how Vata, Pitta, and Kapha doshas influence your health and wellbeing.",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      likes: 156
    },
    {
      id: 7,
      title: "Panchakarma: The Ultimate Ayurvedic Detox Experience",
      excerpt: "Learn about the five-step purification process that cleanses body and mind.",
      readTime: "12 min read",
      publishDate: "Dec 1, 2024",
      likes: 203
    },
    {
      id: 8,
      title: "Women's Health Through Ayurvedic Lens",
      excerpt: "Holistic approach to women's wellness using ancient Ayurvedic principles.",
      readTime: "10 min read",
      publishDate: "Nov 28, 2024",
      likes: 178
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

      {/* Doctor Profile Header */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="glass border-accent/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-primary h-32"></div>
                <div className="relative px-6 pb-6">
                  <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full border-4 border-card object-cover shadow-large"
                    />
                    <div className="flex-1">
                      <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                        {doctor.name}
                      </h1>
                      <p className="text-xl text-primary font-semibold mb-3">
                        {doctor.specialization}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-semibold">{doctor.rating}</span>
                          <span>({doctor.reviewCount} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {doctor.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {doctor.experience} experience
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button className="btn-glow">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Consultation
                        </Button>
                        <Button variant="outline" className="border-accent/30">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button variant="outline" className="border-accent/30">
                          <Mail className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* About */}
                <Card className="glass border-accent/20">
                  <CardHeader>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      About Dr. {doctor.name.split(' ').pop()}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {doctor.bio}
                    </p>
                  </CardContent>
                </Card>

                {/* Expertise */}
                <Card className="glass border-accent/20">
                  <CardHeader>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      Areas of Expertise
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {doctor.expertise.map((area, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass border-accent/20">
                    <CardHeader>
                      <h2 className="text-xl font-heading font-semibold text-foreground">
                        Education
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {doctor.education.map((edu, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass border-accent/20">
                    <CardHeader>
                      <h2 className="text-xl font-heading font-semibold text-foreground">
                        Certifications
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {doctor.certifications.map((cert, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Badge variant="secondary" className="text-xs">
                              ✓
                            </Badge>
                            <span className="text-muted-foreground text-sm">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Published Articles */}
                <Card className="glass border-accent/20">
                  <CardHeader>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      Published Articles
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {articles.map((article) => (
                        <Link 
                          key={article.id}
                          to={`/articles/${article.id}`}
                          className="block p-4 rounded-lg border border-accent/20 hover:border-primary/50 hover:bg-secondary/20 transition-all"
                        >
                          <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{article.publishDate}</span>
                            <span>{article.readTime}</span>
                            <span>{article.likes} likes</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="text-center mt-6">
                      <Button variant="outline" className="border-accent/30">
                        View All Articles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card className="glass border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                      Quick Stats
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Patients Treated</span>
                        </div>
                        <span className="font-semibold text-foreground">{doctor.totalPatients}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Articles Published</span>
                        </div>
                        <span className="font-semibold text-foreground">{doctor.articlesPublished}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Average Rating</span>
                        </div>
                        <span className="font-semibold text-foreground">{doctor.rating}/5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Consultation Info */}
                <Card className="glass border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                      Consultation Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Fee</span>
                        <p className="font-semibold text-foreground">{doctor.consultationFee}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Availability</span>
                        <p className="font-semibold text-foreground">{doctor.availability}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Languages</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {doctor.languages.map((lang, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 btn-glow">
                      Book Appointment
                    </Button>
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

export default DoctorProfile;