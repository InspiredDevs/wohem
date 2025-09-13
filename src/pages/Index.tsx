import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
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
    <Layout>
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
            <div className="relative bg-gradient-celestial text-primary-foreground rounded-3xl p-16 shadow-divine animate-holy-float overflow-hidden">
              <div className="absolute inset-0 bg-gradient-heavenly opacity-30 animate-sacred-breathe"></div>
              <div className="absolute top-4 left-4 w-6 h-6 bg-secondary-glow rounded-full animate-celestial-dance opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary-glow rounded-full animate-heavenly-orbit opacity-60"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8 animate-glory-wave">
                  Welcome to Our Church Family
                </h3>
                <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed animate-divine-rise">
                  Experience the transformative power of worship, fellowship, and spiritual growth 
                  in our vibrant multicultural community where every heart finds its home in Christ.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="secondary" size="lg" className="text-lg px-10 py-6 hover-blessed shadow-holy animate-sacred-breathe">
                    <Heart className="mr-3 h-6 w-6" />
                    Visit Us This Sunday
                  </Button>
                  <Link to="/about">
                    <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 hover-blessed shadow-blessed animate-sacred-breathe">
                      <BookOpen className="mr-3 h-6 w-6" />
                      Learn More About WOHEM
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
