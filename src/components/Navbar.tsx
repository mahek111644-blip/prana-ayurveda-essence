import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-2xl font-heading font-bold text-primary hover:text-primary-dark transition-all duration-300 filter blur-[0.5px] hover:blur-none"
            >
              Prana Ayurveda
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Search Bar & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-64 glass border-accent/30 focus:border-primary"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-foreground hover:text-primary"
                  >
                    <X size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-foreground hover:text-primary"
                >
                  <Search size={20} />
                </Button>
              )}
            </div>

            {/* Login/Register */}
            <Link to="/profile">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary flex items-center space-x-1"
              >
                <User size={18} />
                <span>Profile</span>
              </Button>
            </Link>

            {/* Get Started Button */}
            <Button variant="hero" className="btn-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-lg rounded-lg mt-2 border border-accent/20">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 glass border-accent/30 focus:border-primary"
                  />
                  <Button variant="ghost" size="sm">
                    <Search size={16} />
                  </Button>
                </div>
              </div>
              
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Login */}
              <div className="px-3 py-2">
                <Link to="/profile" className="block">
                  <Button variant="outline" size="sm" className="w-full mb-2 flex items-center justify-center space-x-2">
                    <User size={16} />
                    <span>Profile</span>
                  </Button>
                </Link>
              </div>
              
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;