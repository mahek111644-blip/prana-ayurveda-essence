import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail, Gift } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 text-primary/20 float">
        <Leaf size={60} />
      </div>
      <div className="absolute bottom-20 right-16 text-accent/20 float-delayed">
        <Leaf size={48} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-primary/10 float">
        <Leaf size={32} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-primary text-white shadow-glow">
                <Mail size={32} />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Join Our <span className="gradient-text">Wellness</span> Community
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Get exclusive access to ancient Ayurvedic wisdom, wellness tips, special offers, 
              and early access to new products. Start your journey to balanced living today.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Gift className="text-accent" size={20} />
                <span className="text-muted-foreground">Exclusive offers & discounts</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Leaf className="text-primary" size={20} />
                <span className="text-muted-foreground">Weekly wellness tips</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="text-accent" size={20} />
                <span className="text-muted-foreground">Early product access</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="glass rounded-3xl p-8 md:p-12 shadow-large">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg border-accent/20 focus:border-primary"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="btn-glow shadow-accent px-8"
                  >
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4">
                  By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  Welcome to Our Community!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for subscribing. Check your inbox for a special welcome gift!
                </p>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Join <span className="font-semibold text-primary">12,000+</span> wellness enthusiasts 
              who trust Prana Ayurveda for their natural health journey
            </p>
            
            <div className="flex justify-center items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-3">
                And many more...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;