import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, BookOpen, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-ethereal overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radiance"></div>
        <div className="absolute inset-0 bg-gradient-celestial opacity-20"></div>
      </div>

        <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/fda28a5a-8a25-48d6-b45c-22555f2d8339.png" 
              alt="WOHEM Church Logo" 
              className="mx-auto h-32 w-auto mb-6 animate-holy-glow hover-divine"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block">Welcome to</span>{" "}
            <span className="text-gradient-celestial bg-gradient-to-r from-primary-deep via-primary-glow to-secondary bg-clip-text font-black">
              WOHEM
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            <span className="text-gradient-heavenly font-bold">
              The Way of Holiness Endtime Ministry
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            House of Praise • A multicultural Christian community in Stratford, London
          </p>

          {/* Scripture Quote */}
          <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-8 mb-8 shadow-divine border-2 border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-celestial opacity-10 animate-spirit-flow"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 animate-sacred-breathe">
                <Star className="h-6 w-6 text-primary mr-3 animate-heavenly-orbit" />
                <span className="text-base font-bold text-gradient-holy">Scripture Foundation</span>
                <Star className="h-6 w-6 text-primary ml-3 animate-heavenly-orbit" />
              </div>
              <p className="text-xl italic text-foreground leading-relaxed font-medium mb-4">
                "And a highway shall be there, and it shall be called the Way of Holiness; 
                the unclean shall not pass over it, but it shall be for those who walk on the way"
              </p>
              <p className="text-base text-gradient-divine font-bold">- Isaiah 35:8 (ESV)</p>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="relative bg-gradient-sanctuary backdrop-blur-md rounded-3xl p-10 mb-8 shadow-divine border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-ethereal animate-glory-wave"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg font-bold text-gradient-holy">Our Vision</span>
                <Star className="h-6 w-6 text-primary ml-3" />
              </div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-semibold text-center">
                <span className="text-gradient-celestial">"Empowering people to empower others"</span>
                <span className="text-primary mx-3">•</span>
                <span className="text-gradient-heavenly">"Raising future leaders"</span>
                <span className="text-secondary mx-3">•</span>
                <span className="text-gradient-divine">"Rebuilding families and refining society through the love of Christ"</span>
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="relative bg-gradient-holy backdrop-blur-md rounded-3xl p-10 mb-12 shadow-divine border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-celestial opacity-10"></div>
            <div className="relative z-10 text-primary-foreground">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 mr-3" />
                <span className="text-lg font-bold">Our Mission</span>
                <BookOpen className="h-6 w-6 ml-3" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-center">
                The Way of Holiness End Time Ministry (WOHEM) is a ministry raised by God with 
                a definite word found in Isaiah 35:8. It is a divinely ordained ministry to rebuild families, 
                refine society, make impact on communities, reaching to the nations at large and 
                bringing the church back to its initial position.
              </p>
            </div>
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
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;