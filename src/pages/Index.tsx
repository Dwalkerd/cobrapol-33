import Header from "@/components/Header";
import RotatingBanner from "@/components/RotatingBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RotatingBanner />
      <About />
      <Services />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
