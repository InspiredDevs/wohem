import eventImage from "@/assets/21days-event.jpg";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-gradient-sanctuary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-blessed-fade">
          <span className="inline-block px-6 py-2 bg-gradient-holy text-primary-foreground rounded-full text-sm font-semibold mb-4 animate-sanctuary-pulse">
            Upcoming Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
            Join Us for Special Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't miss our upcoming special services and events designed to strengthen your faith
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-divine border-border hover-blessed animate-divine-rise">
            <div className="relative">
              <img
                src={eventImage}
                alt="21 Days Prophetic & Revival Event"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gradient-divine">
                    21 Days Prophetic & Revival
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join us for an extraordinary 21-day journey of prophetic ministry and spiritual revival. 
                    Experience the power of God through worship, prayer, and prophetic ministry with Pastor Emmanuel Olafisoye.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>September 1st - 21st, 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>09:30 - 10:30 PM Daily</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>12 Bryant Street, London E15 4RU</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-holy text-primary-foreground p-6 rounded-2xl">
                  <h4 className="text-xl font-bold mb-4">Join Us Online</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Zoom Meeting</p>
                      <p className="opacity-90">Meeting ID: wohem</p>
                      <p className="opacity-90">Access Code: 848600#</p>
                    </div>
                    <div>
                      <p className="font-semibold">London Caller</p>
                      <p className="opacity-90">0330 998 1320</p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    className="w-full mt-6 hover-blessed"
                    onClick={() => window.open('https://us02web.zoom.us/j/8183032171?pwd=TW9XEeFIA25tZvNttjM3YmXLWXdGdz09', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Join Zoom Meeting
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;