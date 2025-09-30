import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, BookOpen, ArrowLeft, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  bio: string;
  image_url: string;
  experience_years: number;
  certifications: string[];
}

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  category: string;
  read_time: number;
}

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchDoctorData();
    }
  }, [id]);

  const fetchDoctorData = async () => {
    try {
      // Fetch doctor details
      const { data: doctorData, error: doctorError } = await supabase
        .from("doctors")
        .select("*")
        .eq("id", id)
        .single();

      if (doctorError) throw doctorError;
      setDoctor(doctorData);

      // Fetch doctor's articles
      const { data: articlesData, error: articlesError } = await supabase
        .from("articles")
        .select("id, title, slug, excerpt, image_url, category, read_time")
        .eq("doctor_id", id)
        .order("published_at", { ascending: false });

      if (articlesError) throw articlesError;
      setArticles(articlesData || []);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-40 text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-40 text-center">
          <p className="text-muted-foreground">Doctor not found</p>
          <Link to="/articles">
            <Button className="mt-4">Back to Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/articles">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Back to Articles
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="w-48 h-48 border-4 border-primary/20">
                <AvatarImage src={doctor.image_url} alt={doctor.name} />
                <AvatarFallback className="text-4xl">
                  <User size={64} />
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  {doctor.name}
                </h1>
                <p className="text-xl text-primary mb-4">{doctor.title}</p>
                <Badge variant="secondary" className="mb-4">
                  {doctor.specialization}
                </Badge>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award size={20} />
                    <span>{doctor.experience_years}+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen size={20} />
                    <span>{articles.length} articles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-heading font-bold mb-6">About</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {doctor.bio}
            </p>

            {/* Certifications */}
            {doctor.certifications && doctor.certifications.length > 0 && (
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Articles Section */}
        {articles.length > 0 && (
          <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Articles by {doctor.name}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {articles.map((article) => (
                  <Link key={article.id} to={`/articles/${article.slug}`}>
                    <Card className="h-full hover:shadow-glow transition-all duration-300 overflow-hidden group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={article.image_url}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        {article.category && (
                          <Badge variant="secondary" className="w-fit mb-2">
                            {article.category}
                          </Badge>
                        )}
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3">
                          {article.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DoctorProfile;