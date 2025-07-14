import Header from "@/components/Header";
import RotatingBanner from "@/components/RotatingBanner";
import Services from "@/components/Services";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RotatingBanner />
      <Services />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
