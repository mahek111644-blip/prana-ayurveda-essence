import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Calendar, ArrowLeft, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string;
  category: string;
  tags: string[];
  read_time: number;
  published_at: string;
  doctors: {
    id: string;
    name: string;
    title: string;
    image_url: string;
    specialization: string;
  };
}

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const fetchArticle = async () => {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select(`
          *,
          doctors (
            id,
            name,
            title,
            image_url,
            specialization
          )
        `)
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setArticle(data);
    } catch (error) {
      console.error("Error fetching article:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-40 text-center">
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-40 text-center">
          <p className="text-muted-foreground">Article not found</p>
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
        {/* Hero Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-glow p-8 md:p-12">
              {/* Back Button */}
              <Link to="/articles">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Articles
                </Button>
              </Link>

              {/* Category */}
              {article.category && (
                <Badge variant="secondary" className="mb-4">
                  {article.category}
                </Badge>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.read_time} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(article.published_at).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed text-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Author Info */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-heading font-semibold mb-4">About the Author</h3>
                <Link to={`/doctors/${article.doctors.id}`}>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/20 transition-colors">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={article.doctors.image_url} alt={article.doctors.name} />
                      <AvatarFallback>
                        <User />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{article.doctors.name}</h4>
                      <p className="text-primary">{article.doctors.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {article.doctors.specialization}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;