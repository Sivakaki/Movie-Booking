import { FeatureSection } from "../components/Featuresection.jsx";
import { Herosection } from "../components/Herosection.jsx";
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
