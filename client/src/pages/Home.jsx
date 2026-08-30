import { FeatureSection } from "../components/FeatureSection.jsx";
import { Herosection } from "../components/HeroSection.jsx";
import { TrailerSection } from "../components/TrailerSection";

export const Home = () => {
  return (
    <>
      <Herosection />
      <FeatureSection />
      <TrailerSection />
    </>
  );
};
