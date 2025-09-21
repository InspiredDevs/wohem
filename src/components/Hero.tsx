import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
    transition: { duration: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-ethereal overflow-hidden">
      {/* Background Layers with Pulse Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radiance animate-pulse-gradient"></div>
        <div className="absolute inset-0 bg-gradient-celestial opacity-20 animate-pulse-gradient-delayed"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div variants={logoVariants} className="mb-8">
            <img
              src="/lovable-uploads/fda28a5a-8a25-48d6-b45c-22555f2d8339.png"
              alt="WOHEM Church Logo"
              className="mx-auto h-32 w-auto mb-6"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block">Welcome to</span>{" "}
            <span className="text-gradient-celestial bg-gradient-to-r from-primary-deep via-primary-glow to-secondary bg-clip-text font-black">
              WOHEM
            </span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold mb-4">
            <span className="text-gradient-heavenly font-bold">
              The Way of Holiness Endtime Ministry
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            House of Praise • A multicultural Christian community in Stratford, London
          </motion.p>

          {/* Scripture Quote */}
          <motion.div
            variants={itemVariants}
            className="relative bg-card/90 backdrop-blur-md rounded-3xl p-8 mb-8 shadow-divine border-2 border-primary/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-celestial opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary mr-3 animate-float" />
                <span className="text-base font-bold text-gradient-holy">Scripture Foundation</span>
                <Star className="h-6 w-6 text-primary ml-3 animate-float" />
              </div>
              <p className="text-xl italic text-foreground leading-relaxed font-medium mb-4">
                "And a highway shall be there, and it shall be called the Way of Holiness; 
                the unclean shall not pass over it, but it shall be for those who walk on the way"
              </p>
              <p className="text-base text-gradient-divine font-bold">- Isaiah 35:8 (ESV)</p>
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-sanctuary backdrop-blur-md rounded-3xl p-10 mb-8 shadow-divine border border-primary/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-ethereal"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-primary mr-3 animate-float" />
                <span className="text-lg font-bold text-gradient-holy">Our Vision</span>
                <Star className="h-6 w-6 text-primary ml-3 animate-float" />
              </div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-semibold text-center">
                <span className="text-gradient-celestial">"Empowering people to empower others"</span>
                <span className="text-primary mx-3">•</span>
                <br />
                <span className="text-primary mx-3">•</span>
                <span className="text-gradient-heavenly">"Raising future leaders"</span>
                <br />
                <span className="text-secondary mx-3">•</span>
                <span className="text-gradient-divine">"Rebuilding families and refining society through the love of Christ"</span>
              </p>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-holy backdrop-blur-md rounded-3xl p-10 mb-12 shadow-divine border border-primary/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-celestial opacity-10"></div>
            <div className="relative z-10 text-primary-foreground">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 mr-3 animate-float" />
                <span className="text-lg font-bold">Our Mission</span>
                <BookOpen className="h-6 w-6 ml-3 animate-float" />
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-center">
                The Way of Holiness End Time Ministry (WOHEM) is a ministry raised by God with 
                a definite word found in Isaiah 35:8. It is a divinely ordained ministry to rebuild families, 
                refine society, make impact on communities, reaching to the nations at large and 
                bringing the church back to its initial position.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                size="lg"
                className="bg-gradient-holy hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 hover-blessed"
                asChild
              >
                <Link to="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Family
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4 hover-blessed"
                asChild
              >
                <Link to="/about">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Service Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Sunday Service",
                time: "9:30 AM - 11:30 AM",
                frequency: "Every Sunday",
                icon: Users,
              },
              {
                title: "Bible Study",
                time: "Tuesdays 7:00 PM",
                frequency: "Phone Conference Available",
                icon: BookOpen,
              },
              {
                title: "Prayer Call",
                time: "Daily 8:00 PM",
                frequency: "Connect with us daily",
                icon: Heart,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="bg-card rounded-xl p-6 shadow-blessed hover-blessed border border-border"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gradient-holy text-primary-foreground p-3 rounded-full">
                    <card.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.time}</p>
                <p className="text-sm text-muted-foreground mt-1">{card.frequency}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;