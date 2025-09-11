import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, Globe, BookOpen, Heart } from "lucide-react";

const About = () => {
  const missions = [
    {
      icon: Users,
      title: "Empowering People",
      description: "Empowering people to empower others through spiritual growth and community support"
    },
    {
      icon: Target,
      title: "Raising Leaders",
      description: "Developing future Christian leaders for global impact and ministry"
    },
    {
      icon: BookOpen,
      title: "Gospel Teaching",
      description: "Promoting in-depth gospel teaching with integrity and truth"
    },
    {
      icon: Heart,
      title: "Salvation & Deliverance",
      description: "Educating about salvation and providing deliverance through Christ's love"
    }
  ];

  const visions = [
    {
      icon: Globe,
      title: "Individual Greatness",
      description: "Discover and develop the unique greatness within each person"
    },
    {
      icon: Target,
      title: "Holistic Prosperity",
      description: "Foster spiritual, economic, and financial prosperity for all members"
    },
    {
      icon: Users,
      title: "Global Leadership",
      description: "Train Christian leaders who will make a global impact"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Support our community through compassion and outreach programs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-blessed-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
            About WOHEM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Way of Holiness End Time Ministry is a community-based, multicultural Christian church 
            inspired by Isaiah 35:8, dedicated to rebuilding families and refining society.
          </p>
        </div>

        {/* About Description */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mb-16 shadow-holy border border-border animate-divine-rise">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gradient-divine">
              Our Foundation
            </h3>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              WOHEM is built on the biblical foundation of Isaiah 35:8 - "And a highway shall be there, 
              and a way, and it shall be called The way of holiness." We are committed to creating a 
              path of holiness that leads people to spiritual transformation and community impact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our vision is to empower members spiritually, economically, and financially, nurturing 
              their gifts and talents to develop Christian leaders for future generations while 
              making a lasting impact in our communities.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="animate-divine-rise">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-holy text-primary-foreground rounded-full mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-holy mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Transforming lives and communities through the power of Christ
              </p>
            </div>

            <div className="space-y-6">
              {missions.map((mission, index) => (
                <Card key={index} className="hover-blessed border-border shadow-blessed">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-holy text-primary-foreground p-3 rounded-lg">
                        <mission.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{mission.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {mission.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="animate-blessed-fade">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-divine text-secondary-foreground rounded-full mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-divine mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                Building a community of empowered believers and future leaders
              </p>
            </div>

            <div className="space-y-6">
              {visions.map((vision, index) => (
                <Card key={index} className="hover-blessed border-border shadow-blessed">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-divine text-secondary-foreground p-3 rounded-lg">
                        <vision.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{vision.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {vision.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;