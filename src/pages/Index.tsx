import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import pastorHeroImage from "@/assets/pastor-hero.jpg";
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

  // Framer Motion variants
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUpDelayed = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  });

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  };

  return (
    <Layout>
      <Hero />
      
      {/* Pastor Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="relative overflow-hidden rounded-3xl shadow-divine"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={pastorHeroImage}
              alt="Pastor Emmanuel Olafisoye - The Way of Holiness Endtime Ministry"
              className="w-full h-auto object-contain"
              loading="eager"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              exit="exit"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy">
              Explore WOHEM
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover everything our church community has to offer through our various pages
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Link to={link.href} className="group">
                  <Card className={`hover-blessed border-border shadow-blessed transition-all duration-500 group-hover:shadow-${link.color === 'primary' ? 'holy' : 'divine'}`}>
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
              </motion.div>
            ))}
          </motion.div>

          {/* Service Highlights */}
          <motion.div 
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-holy border border-border"
            variants={fadeInUpDelayed(0.6)}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient-divine">
              Join Us This Week
            </h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-6 rounded-xl bg-gradient-sanctuary hover-sanctuary"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            variants={fadeInUpDelayed(1.2)}
            initial="initial"
            animate="animate"
          >
            <div className="relative bg-gradient-celestial text-primary-foreground rounded-3xl p-16 shadow-divine animate-holy-float overflow-hidden">
              <div className="absolute inset-0 bg-gradient-heavenly opacity-30 animate-sacred-breathe"></div>
              <div className="absolute top-4 left-4 w-6 h-6 bg-secondary-glow rounded-full animate-celestial-dance opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-primary-glow rounded-full animate-heavenly-orbit opacity-60"></div>
              <motion.div 
                className="relative z-10"
                variants={fadeInUpDelayed(1.5)}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-4xl font-bold mb-8 animate-glory-wave">
                  Welcome to Our Church Family
                </h3>
                <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed animate-divine-rise">
                  Experience the transformative power of worship, fellowship, and spiritual growth 
                  in our vibrant multicultural community where every heart finds its home in Christ.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" size="lg" className="text-lg px-10 py-6 hover-blessed shadow-holy animate-sacred-breathe">
                      <Heart className="mr-3 h-6 w-6" />
                      Visit Us This Sunday
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <UpcomingEvents />
    </Layout>
  );
};

export default Index;