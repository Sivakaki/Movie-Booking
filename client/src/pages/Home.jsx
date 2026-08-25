import { FeatureSection } from "../components/Featuresection";
import { Herosection } from "../components/Herosection";
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
