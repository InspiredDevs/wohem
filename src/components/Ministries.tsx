import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Users, UserCheck, BookOpen, Music, Heart } from "lucide-react";
import BibleVerse from "./BibleVerse";

const Ministries = () => {
  const ministries = [
    {
      title: "Children's Ministry",
      icon: Baby,
      mission: "Raise godly children to fulfill their purpose",
      description: "Fun, family-oriented lessons teaching love for God and others",
      highlights: [
        "Fruits of the Spirit curriculum",
        "Ten Commandments teaching",
        "Biblical stories and lessons",
        "Encouraging sharing God's love"
      ],
      gradient: "bg-gradient-holy"
    },
    {
      title: "Women's Ministry",
      icon: Heart,
      mission: "Pursue divine purpose through stewardship and discipleship",
      description: "Encouraging women to walk in their God-given calling",
      highlights: [
        "Knowing God's unconditional love",
        "Breaking spiritual barriers",
        "Fostering intimacy with Holy Spirit",
        "Leadership development"
      ],
      gradient: "bg-gradient-divine"
    },
    {
      title: "Men's Ministry",
      icon: UserCheck,
      mission: "Equip men to align with God's purpose (Genesis 1:26)",
      description: "Building strong Christian men and leaders",
      highlights: [
        "Personal relationship with Jesus",
        "Christian fellowship",
        "Leadership development",
        "Breakfast meetings and events"
      ],
      gradient: "bg-gradient-holy"
    },
    {
      title: "Bible Study Department",
      icon: BookOpen,
      mission: "Deepen understanding of God's Word and nature",
      description: "Equipping members for spiritual growth and warfare",
      highlights: [
        "In-depth Bible study",
        "Spiritual warfare training",
        "Renewal of the mind",
        "Holy Spirit fellowship"
      ],
      gradient: "bg-gradient-divine"
    },
    {
      title: "Music and Worship",
      icon: Music,
      mission: "Create atmosphere for communing with God",
      description: "Raising spirit-filled worship leaders and musicians",
      highlights: [
        "Spirit-filled worship",
        "Music lessons available",
        "Multiple instruments",
        "Expressive praise (Psalm 149:6)"
      ],
      gradient: "bg-gradient-holy"
    },
    {
      title: "Community Outreach",
      icon: Users,
      mission: "Support community through compassion and outreach",
      description: "Serving our local community with Christ's love",
      highlights: [
        "St. Joseph's Hospice support",
        "Food bank donations",
        "Homeless assistance program",
        "Future day centre plans"
      ],
      gradient: "bg-gradient-divine"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-blessed-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy animate-spirit-flow bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_auto] bg-clip-text">
            Our Ministries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the various ministries at WOHEM where you can grow, serve, and make a difference
          </p>
          
          <BibleVerse 
            verse="As each has received a gift, use it to serve one another, as good stewards of God's varied grace"
            reference="1 Peter 4:10 (ESV)"
            className="max-w-2xl mx-auto"
          />
        </div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="hover-blessed border-border shadow-blessed group animate-divine-rise">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${ministry.gradient} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <ministry.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {ministry.title}
                  </CardTitle>
                </div>
                <p className="text-sm font-semibold text-gradient-divine">
                  {ministry.mission}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {ministry.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Key Focus Areas:</h4>
                  <ul className="space-y-1">
                    {ministry.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Music Ministry Details */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-holy border border-border animate-blessed-fade">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gradient-divine mb-4">
              Bridge Music Arts
            </h3>
            <p className="text-lg text-muted-foreground">
              Professional music lessons for all ages and skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { instrument: "Keyboards", level: "All Levels", image: "/src/assets/keyboard.jpg" },
              { instrument: "Acoustic Guitar", level: "Beginner to Advanced", image: "/src/assets/acoustic-guitar.jpg" },
              { instrument: "Bass Guitar", level: "All Levels", image: "/src/assets/bass-guitar.jpg" },
              { instrument: "Drums", level: "All Ages", image: "/src/assets/drums.jpg" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-muted/30 hover-blessed group overflow-hidden">
                <div className="relative mb-4 rounded-lg overflow-hidden shadow-blessed">
                  <img 
                    src={item.image} 
                    alt={item.instrument}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-holy/20 group-hover:bg-gradient-holy/10 transition-all duration-300"></div>
                </div>
                <h4 className="font-semibold mb-2 text-gradient-holy">{item.instrument}</h4>
                <p className="text-sm text-muted-foreground">{item.level}</p>
              </div>
            ))}
          </div>

          {/* Bible Verse about Music */}
          <div className="mt-8 p-6 bg-gradient-sanctuary rounded-xl border border-border animate-blessed-fade">
            <div className="flex items-center justify-center mb-3">
              <Music className="h-5 w-5 text-primary mr-2 animate-sanctuary-pulse" />
              <span className="text-sm font-semibold text-primary">Musical Ministry Scripture</span>
              <Music className="h-5 w-5 text-primary ml-2 animate-sanctuary-pulse" />
            </div>
            <p className="text-sm italic text-foreground mb-2">
              "Let the high praises of God be in their mouth, and a two-edged sword in their hand"
            </p>
            <p className="text-xs text-primary font-semibold">- Psalm 149:6 (KJV)</p>
          </div>

          <div className="text-center mt-8 p-6 bg-gradient-divine text-secondary-foreground rounded-xl">
            <p className="font-semibold mb-2">Contact Bridge Music Arts</p>
            <p className="text-sm">📞 07951 192016 | ✉️ music@designbridgeintl.com</p>
            <p className="text-sm">🌐 www.designbridgeintl.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;