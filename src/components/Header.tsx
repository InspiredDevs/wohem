import { useState } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState({ accountNumber: false, sortCode: false });
  const [fabPosition, setFabPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const location = useLocation();

  const navigation = [
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
    { label: "Sort Code", value: "400906" },
    { label: "Bank", value: "HSBC" }
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(prev => ({ ...prev, [field]: true }));
      setTimeout(() => setIsCopied(prev => ({ ...prev, [field]: false })), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.clientX - fabPosition.x;
    const startY = e.clientY - fabPosition.y;

    const handleMouseMove = (e) => {
      const newX = Math.max(0, Math.min(window.innerWidth - 60, e.clientX - startX));
      const newY = Math.max(80, Math.min(window.innerHeight - 60, e.clientY - startY));
      setFabPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    const startX = touch.clientX - fabPosition.x;
    const startY = touch.clientY - fabPosition.y;

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const newX = Math.max(0, Math.min(window.innerWidth - 60, touch.clientX - startX));
      const newY = Math.max(80, Math.min(window.innerHeight - 60, touch.clientY - startY));
      setFabPosition({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-primary/30 shadow-divine">
        <nav className="container mx-auto px-4 py-4 relative">
          <div className="flex justify-between items-center">
            <Link to="/">
              <div className="flex items-center space-x-3 group hover-blessed">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/fda28a5a-8a25-48d6-b45c-22555f2d8339.png" 
                    alt="WOHEM Church Logo" 
                    className="h-10 sm:h-12 w-auto"
                    loading="eager"
                  />
                </div>
                <div className="hidden md:block">
                  <h1 className="text-lg sm:text-xl font-bold text-gradient-celestial">WOHEM</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">House of Praise</p>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative group text-foreground hover:text-primary transition-all duration-500 font-medium text-sm lg:text-base ${
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
                className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow text-xs lg:text-sm px-3 lg:px-4"
                asChild
              >
                <Link to="/contact">
                  Join Us
                </Link>
              </Button>
              <Button
                variant="default"
                className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow text-xs lg:text-sm px-3 lg:px-4"
                onClick={() => setIsDonateModalOpen(true)}
              >
                Donate
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-divine-rise">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium text-sm ${
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
                      className="bg-gradient-holy hover:opacity-90 transition-opacity animate-holy-glow text-xs px-3"
                      asChild
                    >
                      <Link to="/contact">
                        Join Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Floating Donate Button - Only visible on mobile/tablet */}
      <div
        className="fixed md:hidden z-40 w-16 h-16 bg-gradient-holy rounded-full shadow-holy animate-holy-glow flex items-center justify-center text-primary-foreground font-bold text-xs cursor-pointer select-none transition-all duration-200 hover:scale-110 active:scale-95"
        style={{
          right: `${fabPosition.x}px`,
          top: `${fabPosition.y}px`,
          transform: isDragging ? 'scale(1.1)' : 'scale(1)',
          zIndex: isDragging ? 50 : 40,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={(e) => {
          if (!isDragging) {
            setIsDonateModalOpen(true);
          }
        }}
        aria-label="Open donation modal"
      >
        <span className="text-xs font-bold">DONATE</span>
      </div>

      {/* Donate Modal */}
      <Dialog open={isDonateModalOpen} onOpenChange={setIsDonateModalOpen}>
        <DialogContent className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-[95vw] max-h-[calc(100vh-2rem)] bg-card border-border shadow-holy animate-divine-rise rounded-lg p-0 m-2 overflow-y-auto overscroll-contain">
          {/* Header Section */}
          <DialogHeader className="p-4 sm:p-6">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-holy text-center">
              Support WOHEM's Mission
            </DialogTitle>
          </DialogHeader>
          
          {/* Scrollable Content */}
          <div className="px-4 sm:px-6 pb-6">
            {/* Mission Description */}
            <div className="mb-6">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                Support WOHEM's Homeless Project and Hospice initiatives to provide hope, shelter, and compassionate care to the vulnerable. Your donation restores lives and brings dignity to our community.
              </p>
            </div>

            {/* Account Details Card */}
            <div className="bg-muted/30 rounded-lg shadow-blessed border border-border/50 mb-6">
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-4 text-center">
                  Partnership Information
                </h3>
                
                <div className="space-y-4">
                  {accountDetails.map((detail, index) => (
                    <div key={index} className="space-y-2">
                      {/* Label */}
                      <div className="text-xs sm:text-sm font-medium text-foreground/80 uppercase tracking-wide">
                        {detail.label}
                      </div>
                      
                      {/* Value with Copy Button for Account Number and Sort Code */}
                      <div className="flex items-center gap-2 bg-background/50 rounded-md p-3 border border-border/30">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base md:text-lg font-mono text-foreground break-all">
                            {detail.value}
                          </p>
                        </div>
                        {(detail.label === "Account Number" || detail.label === "Sort Code") && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-shrink-0 h-8 w-8 p-0 border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={() => copyToClipboard(detail.value, detail.label.toLowerCase().replace(' ', ''))}
                            aria-label={isCopied[detail.label.toLowerCase().replace(' ', '')] ? `Copied ${detail.label}` : `Copy ${detail.label}`}
                          >
                            {isCopied[detail.label.toLowerCase().replace(' ', '')] ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="text-center mb-6">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground italic">
                For additional ways to give or to discuss partnership opportunities, please contact us.
              </p>
            </div>

            {/* Footer Buttons - Now part of scrollable content */}
            <div className="flex flex-col sm:flex-row w-full gap-3">
              <Button
                variant="outline"
                className="flex-1 h-11 sm:h-12 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base"
                onClick={() => setIsDonateModalOpen(false)}
                aria-label="Close donation modal"
              >
                Close
              </Button>
              <Button
                variant="default"
                className="flex-1 h-11 sm:h-12 bg-gradient-holy text-primary-foreground hover:bg-gradient-divine transition-all duration-300 shadow-holy text-sm sm:text-base"
                asChild
              >
                <Link to="/contact" onClick={() => setIsDonateModalOpen(false)} aria-label="Contact us for donation inquiries">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;