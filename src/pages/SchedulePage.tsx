import Header from "@/components/Header";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Schedule />
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;