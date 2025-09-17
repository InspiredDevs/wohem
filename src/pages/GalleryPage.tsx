import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import BibleVerse from "@/components/BibleVerse";
import { Camera, Heart } from "lucide-react";
import worship1 from "@/assets/worship-16.jpg";
import worship2 from "@/assets/worship-17.jpg";
import worship3 from "@/assets/worship-18.jpg";
import worship4 from "@/assets/worship-19.jpg";
import worship5 from "@/assets/worship-20.jpg";
import worship6 from "@/assets/worship-21.jpg";
import worship7 from "@/assets/worship-22.jpg";
import worship8 from "@/assets/worship-23.jpg";
import worship9 from "@/assets/worship-9.jpg";
import worship10 from "@/assets/worship-10.jpg";
import worship11 from "@/assets/worship-11.jpg";
import worship12 from "@/assets/worship-12.jpg";
import worship13 from "@/assets/worship-13.jpg";
import worship14 from "@/assets/worship-14.jpg";
import worship15 from "@/assets/worship-15.jpg";
import worship24 from "@/assets/worship-24.jpg";
import worship25 from "@/assets/worship-25.jpg";
import worship26 from "@/assets/worship-26.jpg";
import worship27 from "@/assets/worship-27.jpg";
import worship28 from "@/assets/worship-28.jpg";
import worship29 from "@/assets/worship-29.jpg";
import worship30 from "@/assets/worship-30.jpg";

const GalleryPage = () => {
  const worshipImages = [
    {
      src: worship1,
      title: "Fellowship & Community",
      description: "Our church family gathering together in love and unity",
    },
    {
      src: worship2,
      title: "Pastoral Ministry",
      description: "Pastor Emmanuel ministering with anointing and spiritual authority",
    },
    {
      src: worship3,
      title: "Worship & Praise",
      description: "Congregation lifting hands in unified worship and praise to God",
    },
    {
      src: worship4,
      title: "Prophetic Ministry",
      description: "Ministering under the anointing with prophetic utterances",
    },
    {
      src: worship5,
      title: "Church Celebration",
      description: "Celebrating God's goodness together as one church family",
    },
    {
      src: worship6,
      title: "Musical Worship",
      description: "Our musicians creating an atmosphere of worship through sacred music",
    },
    {
      src: worship7,
      title: "Community & Children",
      description: "Welcoming families and children into our loving church community",
    },
    {
      src: worship8,
      title: "Men's Fellowship",
      description: "Brothers gathering for fellowship, prayer, and spiritual growth",
    },
    {
      src: worship9,
      title: "Youth Worship",
      description: "Our young generation passionately worshipping with contemporary praise",
    },
    {
      src: worship10,
      title: "Community Outreach",
      description: "Serving our community with love and compassion through charity work",
    },
    {
      src: worship11,
      title: "Healing Ministry",
      description: "Praying for healing and restoration through the power of faith",
    },
    {
      src: worship12,
      title: "Instrumental Worship",
      description: "Skilled instrumentalists creating beautiful melodies for worship",
    },
    {
      src: worship13,
      title: "Family Worship",
      description: "Generations coming together to worship God as one church family",
    },
    {
      src: worship14,
      title: "Altar Call",
      description: "Lives being transformed as people respond to God's calling",
    },
    {
      src: worship15,
      title: "Morning Prayer",
      description: "Starting each day with prayer and devotion in God's presence",
    },
    {
      src: worship24,
      title: "Worship Ministry",
      description: "Passionate worship led by our talented musicians and singers",
    },
    {
      src: worship25,
      title: "Women's Fellowship",
      description: "Sisters united in faith, prayer, and spiritual growth together",
    },
    {
      src: worship26,
      title: "Congregational Praise",
      description: "The entire church family lifting voices in unified worship",
    },
    {
      src: worship27,
      title: "Young Generation",
      description: "Our youth actively participating in church activities and growth",
    },
    {
      src: worship28,
      title: "Altar Ministry",
      description: "Pastoral care and prayer at the altar of worship",
    },
    {
      src: worship29,
      title: "Pastoral Leadership",
      description: "Pastor Emmanuel leading the congregation in worship and praise",
    },
    {
      src: worship30,
      title: "Musical Excellence",
      description: "Our skilled musicians creating beautiful worship atmospheres",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-blessed-fade">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy animate-spirit-flow bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_auto] bg-clip-text">
                Worship Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Witness the beauty of worship and fellowship at WOHEM Church
              </p>
              <BibleVerse
                verse="Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name"
                reference="Psalm 100:4 (NIV)"
                className="max-w-2xl mx-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {worshipImages.map((image, index) => (
                <Card key={index} className="hover-blessed border-border shadow-blessed animate-divine-rise overflow-hidden group">
                  <div className="relative overflow-hidden aspect-w-4 aspect-h-3">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gradient-holy">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {image.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Card className="bg-gradient-holy text-primary-foreground p-8 shadow-divine animate-holy-float">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 mr-2" />
                    <h3 className="text-2xl font-bold">Join Our Worship Experience</h3>
                    <Heart className="h-6 w-6 ml-2 animate-sanctuary-pulse" />
                  </div>
                  <p className="text-lg mb-6">
                    Come and be part of our vibrant community where every service is filled with
                    God's presence, love, and transformative power.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-sm opacity-90 italic">
                      "Let everything that has breath praise the Lord. Praise the Lord!"
                    </p>
                    <p className="text-xs font-semibold mt-2">- Psalm 150:6 (NIV)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;