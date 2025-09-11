import { Card, CardContent } from "@/components/ui/card";
import { Crown, Heart, BookOpen, Music, Trophy } from "lucide-react";

const Pastor = () => {
  const ministryRoles = [
    { role: "Apostle", icon: Crown },
    { role: "Prophet", icon: Eye },
    { role: "Pastor", icon: Heart },
    { role: "Teacher", icon: BookOpen },
    { role: "Evangelist", icon: Users }
  ];

  const interests = [
    { name: "Singing", icon: Music },
    { name: "Drumming", icon: Music },
    { name: "Teaching", icon: BookOpen },
    { name: "Sports", icon: Trophy }
  ];

  return (
    <section id="pastor" className="py-20 bg-gradient-blessed">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-blessed-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
            Our Spiritual Leader
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet Pastor Emmanuel Dare Olafisoye, the founding pastor of WOHEM Church
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Pastor Info */}
            <div className="animate-divine-rise">
              <Card className="border-border shadow-holy">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 bg-gradient-holy rounded-full mx-auto mb-6 flex items-center justify-center shadow-divine">
                      <Crown className="h-16 w-16 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-gradient-holy mb-2">
                      Pastor Emmanuel Dare Olafisoye
                    </h3>
                    <p className="text-lg text-gradient-divine font-semibold">
                      Founding Pastor & Spiritual Leader
                    </p>
                  </div>

                  {/* Pastor's Journey */}
                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Divine Calling</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Called as a prophet from birth and ordained as a pastor in 2005, 
                        Pastor Emmanuel received a divine vision that led to the founding 
                        of WOHEM in 2010.
                      </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Ministry Passion</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Passionate about delivering people from oppression through prayer 
                        and the Word of God, Pastor Emmanuel leads with compassion and 
                        spiritual authority.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Five-Fold Ministry & Interests */}
            <div className="space-y-8 animate-blessed-fade">
              {/* Five-Fold Ministry */}
              <Card className="border-border shadow-blessed">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gradient-divine mb-6 text-center">
                    Five-Fold Ministry
                  </h4>
                  <p className="text-muted-foreground text-center mb-8">
                    Operating in the fullness of the five-fold ministry as described in Ephesians 4:11
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ministryRoles.map((ministry, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-muted/30 hover-blessed">
                        <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full mx-auto mb-3 w-fit">
                          <ministry.icon className="h-6 w-6" />
                        </div>
                        <p className="font-semibold text-sm">{ministry.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Personal Interests */}
              <Card className="border-border shadow-blessed">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gradient-holy mb-6 text-center">
                    Personal Interests
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 hover-blessed">
                        <div className="bg-gradient-divine text-secondary-foreground p-2 rounded-lg">
                          <interest.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium">{interest.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quote */}
              <Card className="border-border shadow-holy bg-gradient-holy text-primary-foreground">
                <CardContent className="p-8 text-center">
                  <blockquote className="text-lg italic leading-relaxed">
                    "Through prayer and the Word of God, we can deliver people from every 
                    form of oppression and lead them into their divine destiny."
                  </blockquote>
                  <cite className="block mt-4 font-semibold not-italic">
                    - Pastor Emmanuel Dare Olafisoye
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import missing icons
import { Eye, Users } from "lucide-react";

export default Pastor;