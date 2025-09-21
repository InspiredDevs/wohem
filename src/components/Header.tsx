import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pastor", href: "/pastor" },
    { name: "Ministries", href: "/ministries" },
    { name: "Schedule", href: "/schedule" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const accountDetails = [
    { label: "Account Name", value: "The Way of Holiness Endtime Ministry (WOHEM)" },
    { label: "Account Number", value: "11755250" },
    { label: "Sort Code", value: "40-09-06" },
    { label: "Bank", value: "HSBC" }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-primary/30 shadow-divine">
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 group hover-blessed">
            <div className="relative">
              <img 
                src="/lovable-uploads/fda28a5a-8a25-48d6-b45c-22555f2d8339.png" 
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
            <Button
              variant="default"
              className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow"
              onClick={() => setIsDonateModalOpen(true)}
            >
              Donate
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
                <div className="flex flex-col space-y-3">
                  <Button
                    variant="default"
                    className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow"
                    asChild
                  >
                    <Link to="/contact">
                      Join Us
                    </Link>
                  </Button>
                  <Button
                    variant="default"
                    className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsDonateModalOpen(true);
                    }}
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Donation Modal */}
        <Dialog open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen}>
          <DialogContent className="bg-card border-border shadow-holy animate-divine-rise max-w-[90vw] sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-gradient-holy">
                Support WOHEM’s Mission
              </DialogTitle>
            </DialogHeader>
            <div className="py-4 sm:py-6 space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Donate or partner with us to support our homeless project and hospice initiatives. Your generosity helps us spread the love of Christ and make a lasting impact in our community.
              </p>
              <div className="bg-muted/30 p-4 sm:p-6 rounded-lg shadow-blessed">
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Partnership Information</h3>
                {accountDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <p className="text-xs sm:text-sm text-muted-foreground flex-1 min-w-0 truncate">
                      <span className="font-medium text-foreground">{detail.label}:</span> {detail.value}
                    </p>
                    {detail.label === "Account Number" && (
                      <Button
                        variant="outline"
                        className="p-1.5 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => copyToClipboard(detail.value)}
                      >
                        {isCopied ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                For additional ways to give or to discuss partnership opportunities, please contact us.
              </p>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsDonateModalOpen(false)}
              >
                Close
              </Button>
              <Button
                variant="default"
                className="bg-gradient-holy text-primary-foreground hover:bg-gradient-divine transition-all duration-300 shadow-holy"
                asChild
              >
                <Link to="/contact">
                  Click to Contact Us
                </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;