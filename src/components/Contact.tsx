import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Facebook, Clock, Users } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Bryant Street Methodist Church & Community Centre",
      secondary: "Bryant Street, Stratford, London, E15 4RU",
      action: "Get Directions",
      gradient: "bg-gradient-holy"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "07908 463710",
      secondary: "07961 718754",
      action: "Call Now",
      gradient: "bg-gradient-divine"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@wohem.org",
      secondary: "We respond within 24 hours",
      action: "Send Email",
      gradient: "bg-gradient-holy"
    },
    {
      icon: Globe,
      title: "Website",
      primary: "www.wohem.org",
      secondary: "Visit our official website",
      action: "Visit Site",
      gradient: "bg-gradient-divine"
    }
  ];

  const quickInfo = [
    {
      icon: Clock,
      title: "Service Times",
      info: "Sundays 9:30 AM - 11:30 AM"
    },
    {
      icon: Users,
      title: "New Visitors",
      info: "Warmly welcomed!"
    },
    {
      icon: Phone,
      title: "Daily Prayer",
      info: "8:00 PM - 8:45 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-blessed-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Whether you're seeking prayer, have questions, 
            or want to join our church family, we're here for you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((contact, index) => (
            <Card key={index} className="hover-blessed border-border shadow-blessed group animate-divine-rise">
              <CardHeader className="text-center pb-4">
                <div className={`${contact.gradient} text-white p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="font-semibold text-primary">{contact.primary}</p>
                <p className="text-sm text-muted-foreground">{contact.secondary}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-border shadow-holy animate-blessed-fade">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Welcome Message */}
                <div>
                  <h3 className="text-3xl font-bold text-gradient-holy mb-6">
                    Welcome to Our Family
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      At WOHEM, we believe that everyone who walks through our doors 
                      is part of God's plan. Whether you're seeking spiritual guidance, 
                      looking for a church home, or need prayer support, our doors and 
                      hearts are always open.
                    </p>
                    <p className="leading-relaxed">
                      Visitors and those seeking a place of worship are warmly welcomed! 
                      Come as you are, and discover the love and community that awaits you.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {quickInfo.map((info, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                        <div className="bg-gradient-divine text-secondary-foreground p-2 rounded-lg">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{info.title}</p>
                          <p className="text-sm text-muted-foreground">{info.info}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social & Online Presence */}
                <div>
                  <h3 className="text-2xl font-bold text-gradient-divine mb-6">
                    Stay Connected Online
                  </h3>
                  
                  {/* Facebook */}
                  <Card className="mb-6 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-gradient-holy text-primary-foreground p-3 rounded-lg">
                          <Facebook className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">Facebook</h4>
                          <p className="text-sm text-muted-foreground">Follow our live services</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Search for: <span className="font-semibold text-primary">Emmanuel Dare Olafisoye</span>
                      </p>
                      <Button className="w-full bg-gradient-holy hover:opacity-90">
                        Follow on Facebook
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Prayer Request */}
                  <Card className="border-border bg-gradient-divine text-secondary-foreground">
                    <CardContent className="p-6 text-center">
                      <h4 className="font-bold text-xl mb-4">Need Prayer?</h4>
                      <p className="mb-6">
                        Our pastoral team is here to pray with you and provide spiritual support.
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white hover:text-secondary bg-transparent"
                      >
                        Request Prayer
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-divine-rise">
          <div className="bg-gradient-holy text-primary-foreground rounded-2xl p-8 shadow-divine">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Church Family?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Come and experience the love of Christ in a welcoming, multicultural community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Plan Your Visit
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Contact Pastor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;