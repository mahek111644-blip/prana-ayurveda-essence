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

          {/* Story Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                Welcome to Prana Ayurveda Essence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Welcome to Prana Ayurveda Essence, where ancient wisdom meets modern wellness. Rooted in the timeless traditions of Ayurveda, we are dedicated to guiding you on a transformative journey toward holistic health and inner harmony.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                🌱 Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Prana Ayurveda Essence, we believe that true well-being encompasses the balance of body, mind, and spirit. Inspired by the 5,000-year-old healing science of Ayurveda, our approach is centered on personalized care, natural remedies, and sustainable practices. We honor the wisdom of our ancestors while embracing the advancements of today to offer you authentic, effective, and compassionate wellness solutions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                🌿 Our Offerings
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We offer a curated range of Ayurvedic products and services designed to support your unique health needs. From herbal formulations and dietary supplements to personalized consultations and lifestyle guidance, each offering is crafted with the utmost care and respect for nature's healing powers.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10 mb-8">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                🌸 Our Commitment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We are committed to:
              </p>
              <ul className="space-y-4 ml-4">
                <li className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Purity:</strong> Using only the finest natural ingredients, free from harmful chemicals and additives.
                </li>
                <li className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Authenticity:</strong> Staying true to traditional Ayurvedic formulations and practices.
                </li>
                <li className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Sustainability:</strong> Implementing eco-friendly practices in sourcing, packaging, and operations.
                </li>
                <li className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Education:</strong> Empowering you with knowledge to make informed decisions about your health and wellness.
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-accent/10">
              <h2 className="text-3xl font-heading font-bold gradient-text mb-6">
                🌿 Join Us on the Path to Wellness
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Prana Ayurveda Essence, we are more than a wellness brand—we are your partners in health. Whether you're seeking to rejuvenate your energy, manage stress, or achieve overall balance, we are here to support you every step of the way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thank you for choosing us as your trusted source for Ayurvedic wellness. Together, let's embrace the essence of life and embark on a journey toward holistic health.
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
