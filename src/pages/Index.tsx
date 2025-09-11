import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Calendar, 
  Camera, 
  Mail, 
  ChevronRight,
  Cross,
  Hand,
  Music
} from "lucide-react";

const Index = () => {
  const quickLinks = [
    {
      title: "About WOHEM",
      description: "Learn about our mission, vision, and biblical foundation",
      icon: Heart,
      href: "/about",
      color: "primary"
    },
    {
      title: "Our Pastor",
      description: "Meet Pastor Emmanuel Dare Olafisoye and his ministry",
      icon: Cross,
      href: "/pastor", 
      color: "divine"
    },
    {
      title: "Ministries",
      description: "Discover our various ministries and how to get involved",
      icon: Users,
      href: "/ministries",
      color: "primary"
    },
    {
      title: "Service Schedule",
      description: "Find our weekly services, prayer calls, and events",
      icon: Calendar,
      href: "/schedule",
      color: "divine"
    },
    {
      title: "Worship Gallery",
      description: "Experience our community through beautiful worship moments",
      icon: Camera,
      href: "/gallery",
      color: "primary"
    },
    {
      title: "Contact Us",
      description: "Get in touch and visit our church community",
      icon: Mail,
      href: "/contact",
      color: "divine"
    }
  ];

  const highlights = [
    {
      icon: Hand,
      title: "Daily Prayer",
      description: "Join us every evening at 8:00 PM for community prayer",
      time: "8:00 PM Daily"
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Tuesday evening Bible study via phone conference",
      time: "Tuesdays 7:00 PM"
    },
    {
      icon: Music,
      title: "Sunday Worship",
      description: "Experience powerful worship and teaching every Sunday",
      time: "9:30 - 11:30 AM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sanctuary">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Links Section */}
        <section className="py-20 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-blessed-fade">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
                Explore WOHEM
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover everything our church community has to offer through our various pages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.href} className="group">
                  <Card className={`hover-blessed border-border shadow-blessed transition-all duration-500 group-hover:shadow-${link.color === 'primary' ? 'holy' : 'divine'} animate-divine-rise`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`p-3 rounded-lg ${link.color === 'primary' ? 'bg-gradient-holy' : 'bg-gradient-divine'} ${link.color === 'primary' ? 'text-primary-foreground' : 'text-secondary-foreground'} animate-sanctuary-pulse`}>
                          <link.icon className="h-6 w-6" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardTitle className={`text-xl group-hover:${link.color === 'primary' ? 'text-gradient-holy' : 'text-gradient-divine'} transition-all duration-300`}>
                        {link.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Service Highlights */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-holy border border-border animate-blessed-fade">
              <h3 className="text-3xl font-bold text-center mb-8 text-gradient-divine">
                Join Us This Week
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-gradient-sanctuary hover-sanctuary">
                    <div className="bg-gradient-holy text-primary-foreground p-4 rounded-full mx-auto mb-4 w-fit animate-holy-glow">
                      <highlight.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gradient-holy">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {highlight.description}
                    </p>
                    <div className="bg-gradient-divine text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {highlight.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-holy text-primary-foreground rounded-2xl p-12 shadow-divine animate-holy-float">
                <h3 className="text-3xl font-bold mb-6">
                  Welcome to Our Church Family
                </h3>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Experience the transformative power of worship, fellowship, and spiritual growth 
                  in our vibrant multicultural community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" className="text-lg px-8 py-4 hover-blessed">
                    <Heart className="mr-2 h-5 w-5" />
                    Visit Us This Sunday
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/20 text-primary-foreground hover:bg-white/10 hover-blessed">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Learn More About WOHEM
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
