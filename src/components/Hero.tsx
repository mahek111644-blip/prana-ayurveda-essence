import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax and Blur */}
      <div 
        className="absolute inset-0 parallax bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'translateZ(0) scale(1.1)',
          filter: 'blur(4px)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 to-primary/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-accent-glow float">
        <Leaf size={40} />
      </div>
      <div className="absolute top-40 right-20 text-accent-light float-delayed">
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-40 left-20 text-accent-glow float">
        <Heart size={36} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          {/* Brand Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
            <span className="block text-secondary-foreground font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
              Prana Ayurveda
            </span>
          </h1>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight">
            <span className="block text-white drop-shadow-2xl font-bold">
              Authentic
            </span>
            <span className="block text-primary font-bold drop-shadow-2xl">
              Ayurveda
            </span>
            <span className="block text-white drop-shadow-2xl font-bold">
              Anytime.
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient wisdom of Ayurveda with our premium, authentic products crafted 
            to restore balance and enhance your natural well-being.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="btn-glow animate-pulse-glow">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="glass border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up">
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-heading font-bold text-accent-light mb-2">10+</div>
            <div className="text-white/80">Years of Excellence</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-heading font-bold text-accent-light mb-2">5000+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-heading font-bold text-accent-light mb-2">100%</div>
            <div className="text-white/80">Natural Products</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;