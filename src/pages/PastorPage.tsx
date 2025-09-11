import Header from "@/components/Header";
import Pastor from "@/components/Pastor";
import Footer from "@/components/Footer";

const PastorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Pastor />
      </main>
      <Footer />
    </div>
  );
};

export default PastorPage;