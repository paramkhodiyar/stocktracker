import Image from "next/image";
import Header from "./components/header/header";
import FeaturesSection from "./components/FeatureCard/FeatureSection";
import IntroSection from "./components/introsection/introsection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
