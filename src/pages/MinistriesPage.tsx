import Header from "@/components/Header";
import Ministries from "@/components/Ministries";
import Footer from "@/components/Footer";

const MinistriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Ministries />
      </main>
      <Footer />
    </div>
  );
};

export default MinistriesPage;