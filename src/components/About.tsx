import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, Globe, BookOpen, Heart } from "lucide-react";
import BibleVerse from "./BibleVerse";
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

const titleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
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

const hoverVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)",
    transition: { duration: 0.3 },
  },
};

const About = () => {
  const missions = [
    {
      icon: Users,
      title: "Empowering People",
      description: "Empowering people to empower others through spiritual growth and community support",
    },
    {
      icon: Target,
      title: "Raising Leaders",
      description: "Developing future Christian leaders for global impact and ministry",
    },
    {
      icon: BookOpen,
      title: "Gospel Teaching",
      description: "Promoting in-depth gospel teaching with integrity and truth",
    },
    {
      icon: Heart,
      title: "Salvation & Deliverance",
      description: "Educating about salvation and providing deliverance through Christ's love",
    },
  ];

  const visions = [
    {
      icon: Globe,
      title: "Individual Greatness",
      description: "Discover and develop the unique greatness within each person",
    },
    {
      icon: Target,
      title: "Holistic Prosperity",
      description: "Foster spiritual, economic, and financial prosperity for all members",
    },
    {
      icon: Users,
      title: "Global Leadership",
      description: "Train Christian leaders who will make a global impact",
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Support our community through compassion and outreach programs",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient-holy animate-spirit-flow bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_auto] bg-clip-text"
          >
            About WOHEM
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
          >
            The Way of Holiness End Time Ministry is a community-based, multicultural Christian church
            inspired by Isaiah 35:8, dedicated to rebuilding families and refining society.
          </motion.p>

          <motion.div variants={itemVariants}>
            <BibleVerse
              verse="And a highway shall be there, and a way, and it shall be called The way of holiness; the unclean shall not pass over it; but it shall be for those: the wayfaring men, though fools, shall not err therein"
              reference="Isaiah 35:8 (KJV)"
              className="max-w-3xl mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* About Description */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="rounded-2xl p-8 md:p-12 mb-16 shadow-holy border dark:border-foundation-border-dark border-foundation-border-light bg-foundation-bg-light dark:bg-foundation-bg-dark relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r dark:from-spirit-dark-from dark:via-spirit-dark-via dark:to-spirit-dark-to from-spirit-light-from via-spirit-light-via to-spirit-light-to opacity-10 animate-spirit-flow bg-[length:300%_auto]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r dark:from-spirit-dark-from dark:via-spirit-dark-via dark:to-spirit-dark-to from-spirit-light-from via-spirit-light-via to-spirit-light-to animate-spirit-flow bg-[length:300%_auto]"
            >
              Our Foundation
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-foreground dark:text-foreground font-medium mb-6"
            >
              WOHEM is built on the biblical foundation of Isaiah 35:8 - "And a highway shall be there,
              and a way, and it shall be called The way of holiness." We are committed to creating a
              path of holiness that leads people to spiritual transformation and community impact.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-muted-foreground dark:text-muted-foreground mb-8"
            >
              Our vision is to empower members spiritually, economically, and financially, nurturing
              their gifts and talents to develop Christian leaders for future generations while
              making a lasting impact in our communities.
            </motion.p>

            <motion.div variants={itemVariants}>
              <BibleVerse
                verse="For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope"
                reference="Jeremiah 29:11 (ESV)"
                className="max-w-2xl mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Mission */}
          <div>
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-holy text-primary-foreground rounded-full mb-4">
                <Target className="h-8 w-8 animate-float" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-holy mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Transforming lives and communities through the power of Christ
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  className="border-border shadow-blessed group"
                >
                  <Card className="hover-blessed">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-holy text-primary-foreground p-3 rounded-lg group-hover:animate-sanctuary-pulse">
                          <mission.icon className="h-6 w-6 animate-float" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-gradient-holy transition-all duration-300">
                          {mission.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Vision */}
          <div>
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-divine text-secondary-foreground rounded-full mb-4">
                <Eye className="h-8 w-8 animate-float" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-divine mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                Building a community of empowered believers and future leaders
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {visions.map((vision, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  className="border-border shadow-blessed group"
                >
                  <Card className="hover-blessed">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-divine text-secondary-foreground p-3 rounded-lg group-hover:animate-sanctuary-pulse">
                          <vision.icon className="h-6 w-8 animate-float" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-gradient-divine transition-all duration-300">
                          {vision.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{vision.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;