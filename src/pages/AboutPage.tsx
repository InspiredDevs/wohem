import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-ethereal relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-primary-glow rounded-full animate-celestial-dance opacity-60"></div>
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-secondary-glow rounded-full animate-heavenly-orbit opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary rounded-full animate-glory-wave opacity-70"></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-secondary rounded-full animate-sacred-breathe opacity-40"></div>
      
      <Header />
      <main className="pt-32 relative z-10">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;