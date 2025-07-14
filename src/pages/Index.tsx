import Header from "@/components/Header";
import RotatingBanner from "@/components/RotatingBanner";
import QuickAccess from "@/components/QuickAccess";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RotatingBanner />
      <QuickAccess />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
