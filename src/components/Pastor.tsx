import { Card, CardContent } from "@/components/ui/card";
import { Crown, Heart, BookOpen, Eye, Users, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import pastorImage from "/pastor-emmanuel.jpg";

const Pastor = () => {
  const ministryRoles = [
    { role: "Apostle", icon: Crown },
    { role: "Prophet", icon: Eye },
    { role: "Pastor", icon: Heart },
    { role: "Teacher", icon: BookOpen },
    { role: "Evangelist", icon: Users }
  ];

  const books = [
    {
      title: "Achieving an Empowerment to Empower Others",
      link: "https://www.instagram.com/p/BK6sg_ugBy-/?igsh=a3M0OXhyZThqNjY2",
      description: "Authored by Pastor Emmanuel Dare Olafisoye"
    },
    {
      title: "300 Dynamic and Multipurpose Inspirational Prayer",
      link: "https://www.instagram.com/p/BK6sVT9AVeB/?igsh=bWU2dnRjYzJyNnU5",
      description: "Authored by Pastor Emmanuel Dare Olafisoye"
    }
  ];

  return (
    <section id="pastor" className="py-20 bg-gradient-blessed min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-blessed-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy tracking-tight">
            Our Spiritual Leader
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet Pastor Emmanuel Dare Olafisoye, the founding pastor of WOHEM Church
          </p>
        </div>

        {/* Two-Column Grid for Pastor Info and Ministry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
          {/* Left Column: Pastor Info */}
          <div className="animate-divine-rise">
            <Card className="border-border shadow-holy">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-divine">
                    <img 
                      src={pastorImage} 
                      alt="Pastor Emmanuel Dare Olafisoye" 
                      className="w-full h-full object-cover object-top scale-110"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-gradient-holy mb-2">
                    Pastor Emmanuel Dare Olafisoye
                  </h3>
                  <p className="text-lg sm:text-xl text-gradient-divine font-semibold">
                    Founding Pastor & Spiritual Leader
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg sm:text-xl mb-3 text-primary">Divine Calling</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Called as a prophet from birth and ordained as a pastor in 2005, 
                      Pastor Emmanuel received a divine vision that led to the founding 
                      of WOHEM in 2010.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg sm:text-xl mb-3 text-primary">Ministry Passion</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Passionate about delivering people from oppression through prayer 
                      and the Word of God, Pastor Emmanuel leads with compassion and 
                      spiritual authority.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Five-Fold Ministry */}
          <div className="animate-blessed-fade">
            <Card className="border-border shadow-blessed animate-divine-rise">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-gradient-divine mb-6 text-center">
                  Five-Fold Ministry
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground text-center mb-8">
                  Operating in the fullness of the five-fold ministry as described in Ephesians 4:11
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {ministryRoles.map((ministry, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-muted/30 hover-blessed animate-blessed-fade">
                      <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full mx-auto mb-3 w-fit animate-holy-glow">
                        <ministry.icon className="h-6 w-6" />
                      </div>
                      <p className="font-semibold text-xs sm:text-sm">{ministry.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full-Width Books Section */}
        <Card className="w-full border-border shadow-blessed animate-divine-rise mt-8">
          <CardContent className="p-8">
            <h4 className="text-2xl font-bold text-gradient-divine mb-6 text-center">
              Books by Pastor Emmanuel
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <div key={index} className="flex flex-col gap-4 p-4 rounded-lg bg-muted/30 hover-blessed animate-blessed-fade">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full w-fit animate-holy-glow">
                      <Book className="h-6 w-6" />
                    </div>
                    <h5 className="text-base sm:text-lg font-semibold text-primary truncate">{book.title}</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground flex-1">{book.description}</p>
                  <Button
                    variant="default"
                    className="bg-gradient-holy text-primary-foreground hover:bg-gradient-divine animate-holy-glow"
                    onClick={() => window.open(book.link, "_blank")}
                  >
                    View on Instagram
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Full-Width Quote */}
        <Card className="w-full bg-gradient-holy text-primary-foreground border-border shadow-holy animate-blessed-fade animate-holy-shift animate-glow-pulse animate-sacred-breathe mt-8">
          <CardContent className="p-6 sm:p-8 text-center">
            <blockquote className="text-lg sm:text-xl italic leading-relaxed mb-4 animate-hue-rotate">
              "Through prayer and the Word of God, we can deliver people from every 
              form of oppression and lead them into their divine destiny."
            </blockquote>
            <cite className="block font-semibold text-sm sm:text-base not-italic animate-hue-rotate">
              - Pastor Emmanuel Dare Olafisoye
            </cite>
          </CardContent>
        </Card>

        {/* Full-Width Scripture Foundation */}
        <Card className="w-full bg-gradient-divine text-secondary-foreground border-border shadow-blessed animate-blessed-fade animate-holy-shift animate-glow-pulse-divine animate-sacred-breathe mt-8">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="mb-4">
              <Crown className="h-12 w-12 mx-auto mb-4 animate-holy-glow" />
              <h4 className="text-lg sm:text-xl font-bold mb-4 animate-hue-rotate">Biblical Foundation</h4>
            </div>
            <blockquote className="text-lg sm:text-xl italic leading-relaxed mb-4 animate-hue-rotate">
              "And a highway shall be there, and a way, and it shall be called The way of holiness"
            </blockquote>
            <cite className="block font-semibold text-sm sm:text-base not-italic animate-hue-rotate">
              - Isaiah 35:8 (KJV)
            </cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pastor;