import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through time, tradition, and transformation
            </p>
          </div>

          {/* Story Content - Placeholder for user's content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                The Beginning
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                [Your story content will go here - Please share the source and I'll update this section with your company's story]
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                [Mission statement content will go here]
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                [Values and philosophy content will go here]
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                Looking Forward
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                [Future vision content will go here]
              </p>
            </div>
          </article>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              onClick={() => navigate('/products')}
              className="shadow-glow"
            >
              Explore Our Products
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
