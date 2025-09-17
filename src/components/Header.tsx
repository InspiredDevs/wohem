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
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-primary/30 shadow-divine">
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group hover-blessed">
            <div className="relative">
              <img 
                src="./src/assets/wohem-logo.png" 
                alt="WOHEM Church Logo" 
                className="h-12 w-auto"
                loading="eager"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gradient-celestial">WOHEM</h1>
              <p className="text-sm text-muted-foreground">House of Praise</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative group text-foreground hover:text-primary transition-all duration-500 font-medium ${
                  location.pathname === item.href ? "text-primary" : ""
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-celestial scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div> */}
                {/* <div className="absolute inset-0 bg-gradient-sanctuary opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500 -z-10 animate-glory-wave"></div> */}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-celestial animate-divine-rise" />
                )}
              </Link>
            ))}
            <ThemeToggle />
            <Button
              variant="default"
              className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow"
              asChild
            >
              <Link to="/contact">
                Join Us
              </Link>
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
                <Button
                  variant="default"
                  className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow"
                  asChild
                >
                  <Link to="/contact">
                    Join Us
                  </Link>
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