import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pastor from "@/components/Pastor";
import Ministries from "@/components/Ministries";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Pastor />
        <Ministries />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
