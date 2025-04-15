import Image from "next/image";
import Header from "./components/header";
import FeaturesSection from "./components/FeatureSection";
import IntroSection from "./components/introsection";
import ActionSection from "./components/ActionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <FeaturesSection />
      <ActionSection />
      <Footer />
    </>
  );
}
