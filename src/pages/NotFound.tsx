import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Star } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-ethereal flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radiance animate-sacred-breathe"></div>
        <div className="absolute inset-0 bg-gradient-celestial opacity-20 animate-spirit-flow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-glow rounded-full animate-celestial-dance opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-secondary-glow rounded-full animate-heavenly-orbit opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-glory-wave opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-secondary rounded-full animate-sacred-breathe opacity-40"></div>
      </div>
      
      <div className="text-center max-w-2xl mx-auto px-4 relative z-10">
        {/* 404 Number */}
        <div className="mb-12 relative">
          <h1 className="text-8xl md:text-9xl font-black text-gradient-celestial animate-divine-shimmer bg-[length:300%_auto] leading-none">
            404
          </h1>
          <div className="absolute -inset-8 bg-gradient-heavenly opacity-20 blur-3xl animate-holy-glow"></div>
        </div>
        
        {/* Message */}
        <div className="mb-12 animate-blessed-fade">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-heavenly">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-divine-rise">
            It seems you've wandered off the path. Let's guide you back to our sanctuary where every soul finds peace.
          </p>
          
          {/* Scripture verse */}
          <div className="relative bg-card/90 backdrop-blur-md rounded-3xl p-8 shadow-divine border-2 border-primary/20 animate-blessed-fade overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-sanctuary animate-spirit-flow opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 animate-sacred-breathe">
                <Star className="h-5 w-5 text-primary mr-2 animate-heavenly-orbit" />
                <span className="text-sm font-bold text-gradient-holy">Words of Comfort</span>
                <Star className="h-5 w-5 text-primary ml-2 animate-heavenly-orbit" />
              </div>
              <p className="text-lg italic text-foreground font-medium">
                "He makes me lie down in green pastures, he leads me beside quiet waters"
              </p>
              <p className="text-base text-gradient-divine font-bold mt-2">- Psalm 23:2</p>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-glory-wave">
          <Button asChild size="lg" className="bg-gradient-celestial hover:opacity-90 text-lg px-8 py-4 hover-blessed shadow-holy animate-sacred-breathe">
            <Link to="/">
              <Home className="mr-3 h-6 w-6" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-4 hover-blessed animate-sacred-breathe">
            <Link to="/contact">
              <ArrowLeft className="mr-3 h-6 w-6" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;