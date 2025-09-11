import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, BookOpen, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-blessed overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-radiance animate-holy-glow"></div>
      </div>

      {/* Floating Bible Verses */}
      <div className="absolute top-20 left-10 animate-verse-slide">
        <div className="bg-card/70 backdrop-blur-sm rounded-lg p-3 shadow-blessed max-w-xs">
          <p className="text-xs text-muted-foreground italic">
            "And a highway shall be there, and it shall be called the Way of Holiness" 
            <span className="text-primary font-semibold"> - Isaiah 35:8</span>
          </p>
        </div>
      </div>
      
      <div className="absolute top-32 right-10 animate-verse-slide delay-1000">
        <div className="bg-card/70 backdrop-blur-sm rounded-lg p-3 shadow-blessed max-w-xs">
          <p className="text-xs text-muted-foreground italic">
            "Be strong and courageous! Do not be afraid" 
            <span className="text-primary font-semibold"> - Joshua 1:9</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-divine-rise">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/fda28a5a-8a25-48d6-b45c-22555f2d8339.png" 
              alt="WOHEM Church Logo" 
              className="mx-auto h-32 w-auto mb-6 animate-holy-glow hover-divine"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-gradient-holy animate-spirit-flow bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_auto] bg-clip-text">WOHEM</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gradient-divine animate-grace-bounce">
            The Way of Holiness Endtime Ministry
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            House of Praise • A multicultural Christian community in Stratford, London
          </p>

          {/* Scripture Quote */}
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-holy border border-border animate-blessed-fade">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">Scripture Foundation</span>
              <Star className="h-5 w-5 text-primary ml-2" />
            </div>
            <p className="text-lg italic text-foreground leading-relaxed">
              "And a highway shall be there, and it shall be called the Way of Holiness; 
              the unclean shall not pass over it, but it shall be for those who walk on the way"
            </p>
            <p className="text-sm text-primary font-semibold mt-2">- Isaiah 35:8 (ESV)</p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-holy border border-border animate-blessed-fade">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              "Empowering people to empower others • Raising future leaders • 
              Rebuilding families and refining society through the love of Christ"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-holy hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 hover-blessed"
            >
              <Heart className="mr-2 h-5 w-5" />
              Join Our Family
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4 hover-blessed"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Service Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-blessed hover-blessed border border-border">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Sunday Service</h3>
              <p className="text-muted-foreground">9:30 AM - 11:30 AM</p>
              <p className="text-sm text-muted-foreground mt-1">Every Sunday</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-blessed hover-blessed border border-border">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-divine text-secondary-foreground p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Bible Study</h3>
              <p className="text-muted-foreground">Tuesdays 7:00 PM</p>
              <p className="text-sm text-muted-foreground mt-1">Phone Conference Available</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-blessed hover-blessed border border-border">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">Prayer Call</h3>
              <p className="text-muted-foreground">Daily 8:00 PM</p>
              <p className="text-sm text-muted-foreground mt-1">Connect with us daily</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;