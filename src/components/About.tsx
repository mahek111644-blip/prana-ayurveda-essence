import { Button } from "@/components/ui/button";
import { Leaf, Shield, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "Pure, organic ingredients sourced directly from nature"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Quality", 
      description: "Rigorous testing ensures the highest standards"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Ancient Wisdom",
      description: "Time-tested Ayurvedic formulations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Care",
      description: "Guided by certified Ayurvedic practitioners"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Where Ancient <span className="gradient-text">Wisdom</span> Meets Modern <span className="gradient-accent-text">Wellness</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Prana Ayurveda, we honor the 5,000-year-old tradition of Ayurvedic healing 
                while embracing modern quality standards. Our mission is to make authentic 
                Ayurvedic wellness accessible to everyone seeking natural health solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Each product is carefully crafted using traditional methods passed down through 
                generations, ensuring you receive the most potent and pure formulations nature 
                has to offer.
              </p>
              <Button variant="primary" size="lg" className="btn-glow shadow-glow">
                Read Our Story
              </Button>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-3d bg-card p-6 rounded-2xl shadow-soft border border-accent/10 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">15+</div>
            <div className="text-muted-foreground">Product Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">50+</div>
            <div className="text-muted-foreground">Ayurvedic Formulas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">99%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;