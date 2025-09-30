import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Ananya Patel",
      location: "Mumbai, India",
      rating: 5,
      text: "Prana Ayurveda has transformed my wellness routine. The Ashwagandha blend helped me manage stress naturally, and I feel more balanced than ever.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      product: "Ashwagandha Premium"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India", 
      rating: 5,
      text: "The quality is exceptional. I've tried many Ayurvedic brands, but Prana's formulations are in a league of their own. Highly recommend!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      product: "Turmeric Golden Milk"
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Bangalore, India",
      rating: 5,
      text: "As someone who practices traditional Ayurveda, I appreciate the authenticity of these products. They truly honor the ancient wisdom.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face", 
      product: "Brahmi Mind Tonic"
    },
    {
      id: 4,
      name: "Arjun Reddy",
      location: "Hyderabad, India",
      rating: 5,
      text: "The customer service is outstanding, and the products delivered exactly what was promised. My sleep and energy levels have improved dramatically.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      product: "Triphala Detox"
    },
    {
      id: 5,
      name: "Meera Iyer",
      location: "Chennai, India",
      rating: 5,
      text: "I love how natural and pure these products are. No artificial additives, just pure Ayurvedic goodness that works.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      product: "Complete Wellness Package"
    },
    {
      id: 6,
      name: "Vikram Singh",
      location: "Pune, India",
      rating: 5,
      text: "My digestion has improved significantly since I started using Prana's Triphala. The results are visible within weeks!",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
      product: "Triphala Detox"
    },
    {
      id: 7,
      name: "Kavita Menon",
      location: "Kochi, India",
      rating: 5,
      text: "Being a yoga instructor, I recommend Prana Ayurveda to all my students. The quality and authenticity are unmatched.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
      product: "Ashwagandha Premium"
    },
    {
      id: 8,
      name: "Aditya Desai",
      location: "Ahmedabad, India",
      rating: 5,
      text: "The Brahmi tonic has helped me stay focused during long work hours. No more afternoon slumps!",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      product: "Brahmi Mind Tonic"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      visibleReviews.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visibleReviews;
  };

  return (
    <section id="reviews" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have transformed their health and wellness 
            journey with our authentic Ayurvedic products.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Desktop View - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleReviews().map((review, index) => (
              <Card 
                key={review.id}
                className={`card-3d group overflow-hidden border-0 shadow-soft hover:shadow-glow transition-all duration-500 bg-card ${
                  index === 1 ? 'transform scale-105' : ''
                }`}
              >
                <CardContent className="p-8">
                  <Quote className="text-accent mb-4" size={32} />
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>

                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.location}
                      </p>
                      <p className="text-xs text-primary font-medium mt-1">
                        {review.product}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden mb-8">
            <Card className="card-3d overflow-hidden border-0 shadow-soft bg-card">
              <CardContent className="p-8">
                <Quote className="text-accent mb-4" size={32} />
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={reviews[currentIndex].image} 
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {reviews[currentIndex].location}
                    </p>
                    <p className="text-xs text-primary font-medium mt-1">
                      {reviews[currentIndex].product}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevReview}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-soft"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-primary' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors shadow-soft"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-heading font-bold gradient-text mb-2">5000+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold gradient-text mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Recommend Us</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold gradient-text mb-2">10+</div>
            <div className="text-muted-foreground">Years Trust</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;