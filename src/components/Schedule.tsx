import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Phone, Users, Heart, BookOpen, Star } from "lucide-react";

const Schedule = () => {
  const sundayServices = [
    { week: "1st Sunday", service: "Holy Communion & Anointing Service", icon: Heart },
    { week: "2nd Sunday", service: "Language-Centred Prayer", icon: Users },
    { week: "3rd Sunday", service: "Prophetic Declaration", icon: Star },
    { week: "4th Sunday", service: "Family Sunday & Youth Programme", icon: Users },
    { week: "5th Sunday", service: "Festival of Praise", icon: Heart },
    { week: "1st-3rd Sunday (June)", service: "Rivers of Living Water", icon: Heart }
  ];

  const weeklyPrograms = [
    {
      day: "Tuesday",
      events: [
        {
          title: "Bible Study",
          time: "7:00 PM - 8:00 PM",
          type: "Phone Conference",
          details: "0330 088 1934, Access Code: 297769#",
          icon: BookOpen
        },
        {
          title: "Holy Ghost Prayer Service",
          time: "7:00 PM - 8:30 PM",
          type: "Physical Location (4th Tuesday)",
          details: "Belmont Primary School, Grays, RM17 5YN",
          icon: Heart
        }
      ]
    },
    {
      day: "Friday",
      events: [
        {
          title: "Solution Night",
          time: "8:00 PM - 9:30 PM",
          type: "Physical Location (Last Friday)",
          details: "Bryant Street",
          icon: Heart
        }
      ]
    },
    {
      day: "Saturday",
      events: [
        {
          title: "Heal My Foundation",
          time: "9:00 AM - 11:00 AM",
          type: "Physical Location (2nd Saturday)",
          details: "Bryant Street",
          icon: Heart
        },
        {
          title: "Additional Program",
          time: "11:30 AM - 1:30 PM",
          type: "Physical Location (2nd Saturday)",
          details: "Bryant Street",
          icon: Users
        }
      ]
    }
  ];

  const phonePrograms = [
    { title: "Daily Prayer Call", time: "8:00 PM - 8:45 PM", frequency: "Daily" },
    { title: "Night of Wonders", time: "8:00 PM - 9:30 PM", frequency: "1st Friday" },
    { title: "Intercessory Prayer", time: "9:00 PM - 10:00 PM", frequency: "Every Thursday" }
  ];

  const whatsappPrograms = [
    { title: "Hour of Mercy", time: "9:30 PM - 10:30 PM", frequency: "1st to 21st of Each Month" }
  ];

  const facebookPrograms = [
    { title: "The Voice of God", time: "10:00 PM - 11:00 PM", frequency: "Every Wednesday" },
    { title: "Word of Spirit and Life", time: "10:00 PM - 11:00 PM", frequency: "Every Thursday", note: "In Yoruba with English translation" }
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-blessed">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-blessed-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
            Service Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth throughout the week
          </p>
        </div>

        {/* Sunday Services */}
        <div className="mb-16 animate-divine-rise">
          <Card className="border-border shadow-holy">
            <CardHeader className="text-center pb-6">
              <div className="bg-gradient-holy text-primary-foreground p-4 rounded-full w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl text-gradient-holy">Sunday Services</CardTitle>
              <p className="text-lg text-muted-foreground">9:30 AM - 11:30 AM</p>
              <p className="text-sm text-muted-foreground">Bryant Street Methodist Church & Community Centre</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sundayServices.map((service, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-muted/30 hover-blessed">
                    <div className="bg-gradient-divine text-secondary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold mb-2 text-primary">{service.week}</h4>
                    <p className="text-sm text-muted-foreground">{service.service}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {weeklyPrograms.map((day, index) => (
            <Card key={index} className="border-border shadow-blessed hover-blessed animate-blessed-fade">
              <CardHeader className="text-center">
                <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl text-gradient-holy">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {day.events.map((event, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted/30">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-gradient-divine text-secondary-foreground p-2 rounded-lg">
                        <event.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-secondary mb-1">{event.type}</p>
                    <p className="text-xs text-muted-foreground">{event.details}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Phone & Online Programs */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Telephone Conference */}
          <Card className="border-border shadow-blessed animate-divine-rise">
            <CardHeader className="text-center">
              <div className="bg-gradient-holy text-primary-foreground p-4 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-gradient-holy">Telephone Conference</CardTitle>
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="font-semibold">📞 0330 088 1934</p>
                <p className="text-sm text-muted-foreground">Access Code: 297769#</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {phonePrograms.map((program, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <h4 className="font-semibold text-primary">{program.title}</h4>
                    <p className="text-sm text-muted-foreground">{program.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary">{program.frequency}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* WhatsApp Conference */}
          <Card className="border-border shadow-blessed animate-divine-rise">
            <CardHeader className="text-center">
              <div className="bg-gradient-holy text-primary-foreground p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-gradient-holy">WhatsApp Conference</CardTitle>
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="font-semibold mb-2">Join via WhatsApp</p>
                <a
                  href="https://chat.whatsapp.com/F0zSpAXAXQA4iZECzPOSM4?mode=ems_share_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-holy text-primary-foreground font-semibold py-2 px-6 rounded-full hover:bg-gradient-divine transition-all duration-300 shadow-holy"
                >
                  Join WhatsApp Group
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {whatsappPrograms.map((program, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <h4 className="font-semibold text-primary">{program.title}</h4>
                    <p className="text-sm text-muted-foreground">{program.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-secondary">{program.frequency}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Facebook Live */}
          <Card className="border-border shadow-blessed animate-blessed-fade">
            <CardHeader className="text-center">
              <div className="bg-gradient-divine text-secondary-foreground p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl text-gradient-divine">Facebook Live</CardTitle>
              <p className="text-lg font-semibold text-primary mt-2">
                Join our live sessions on Facebook!
              </p>
              <a
                href="https://web.facebook.com/emmanuel.olafisoye?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-gradient-holy text-primary-foreground font-semibold py-2 px-6 rounded-full hover:bg-gradient-divine transition-all duration-300 shadow-holy"
              >
                Watch Live on Facebook
              </a>
            </CardHeader>
            <CardContent className="space-y-4">
              {facebookPrograms.map((program, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-primary">{program.title}</h4>
                    <p className="text-sm font-medium text-secondary">{program.frequency}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{program.time}</p>
                  {program.note && (
                    <p className="text-xs text-muted-foreground italic">{program.note}</p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;