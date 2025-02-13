import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import UserReviews from "@/components/base/UserReviews";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
