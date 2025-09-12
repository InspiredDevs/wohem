import { Card, CardContent } from "@/components/ui/card";
import { Crown, Heart, BookOpen, Eye, Users } from "lucide-react";
import pastorImage from "/pastor-emmanuel.jpg";

const Pastor = () => {
  const ministryRoles = [
    { role: "Apostle", icon: Crown },
    { role: "Prophet", icon: Eye },
    { role: "Pastor", icon: Heart },
    { role: "Teacher", icon: BookOpen },
    { role: "Evangelist", icon: Users }
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

            {/* Five-Fold Ministry & Quote */}
            <div className="space-y-8 animate-blessed-fade">
              {/* Five-Fold Ministry */}
              <Card className="border-border shadow-blessed animate-divine-rise">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gradient-divine mb-6 text-center">
                    Five-Fold Ministry
                  </h4>
                  <p className="text-muted-foreground text-center mb-8">
                    Operating in the fullness of the five-fold ministry as described in Ephesians 4:11
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {ministryRoles.map((ministry, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-muted/30 hover-blessed animate-blessed-fade">
                        <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full mx-auto mb-3 w-fit animate-holy-glow">
                          <ministry.icon className="h-6 w-6" />
                        </div>
                        <p className="font-semibold text-sm">{ministry.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quote */}
              <Card className="border-border shadow-holy bg-gradient-holy text-primary-foreground animate-blessed-fade">
                <CardContent className="p-8 text-center">
                  <blockquote className="text-lg italic leading-relaxed mb-4">
                    "Through prayer and the Word of God, we can deliver people from every 
                    form of oppression and lead them into their divine destiny."
                  </blockquote>
                  <cite className="block font-semibold not-italic">
                    - Pastor Emmanuel Dare Olafisoye
                  </cite>
                </CardContent>
              </Card>

              {/* Scripture Foundation */}
              <Card className="border-border shadow-blessed bg-gradient-divine text-secondary-foreground animate-divine-rise">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <Crown className="h-12 w-12 mx-auto mb-4 animate-holy-glow" />
                    <h4 className="text-xl font-bold mb-4">Biblical Foundation</h4>
                  </div>
                  <blockquote className="text-lg italic leading-relaxed mb-4">
                    "And a highway shall be there, and a way, and it shall be called The way of holiness"
                  </blockquote>
                  <cite className="block font-semibold not-italic text-sm">
                    - Isaiah 35:8 (KJV)
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

export default Pastor;