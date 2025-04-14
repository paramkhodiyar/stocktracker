import Image from "next/image";
import Header from "./components/header/header";
import FeaturesSection from "./components/FeatureCard/FeatureSection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <Footer />
    </>
  );
}
