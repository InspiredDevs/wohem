import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pastor", href: "/pastor" },
    { name: "Ministries", href: "/ministries" },
    { name: "Schedule", href: "/schedule" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-blessed">
      {/* Top Contact Bar */}
      <div className="bg-gradient-holy text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-sm gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>07908 463710</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>info@wohem.org</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Bryant Street, Stratford, London E15 4RU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fda28a5a-8a25-48d6-b45c-22555f2d8339.png" 
              alt="WOHEM Church Logo" 
              className="h-12 w-auto animate-holy-glow"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gradient-holy">WOHEM</h1>
              <p className="text-sm text-muted-foreground">House of Praise</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-holy animate-divine-rise" />
                )}
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="default" className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-divine-rise">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium ${
                    location.pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <ThemeToggle />
                <Button variant="default" className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;