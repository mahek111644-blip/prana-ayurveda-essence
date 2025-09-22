import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    { name: "Stress Relief", href: "#" },
    { name: "Immunity Boosters", href: "#" },
    { name: "Digestive Health", href: "#" },
    { name: "Mental Clarity", href: "#" },
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Youtube size={20} />, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-accent/50 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <a href="#hero" className="text-3xl font-heading font-bold gradient-accent-text">
                Prana Ayurveda
              </a>
              <p className="mt-4 text-white/80 leading-relaxed">
                Authentic Ayurvedic wellness products crafted with ancient wisdom 
                and modern quality standards. Transform your health naturally.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-white/80 text-sm">123 Wellness St, Ayurveda District, WC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent" />
                <span className="text-white/80 text-sm">hello@pranaayurveda.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Leaf size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Leaf size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Leaf size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/20">
          <div className="text-center">
            <h4 className="font-heading font-semibold text-xl mb-2">
              Stay Updated with Wellness Tips
            </h4>
            <p className="text-white/80 mb-6">
              Get weekly Ayurvedic insights and exclusive offers delivered to your inbox.
            </p>
            <a 
              href="#newsletter" 
              className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity btn-glow"
            >
              <Mail size={16} />
              Subscribe to Newsletter
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Prana Ayurveda. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;