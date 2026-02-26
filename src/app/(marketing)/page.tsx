import Hero from "@/components/sections/Hero";
import WaveTransition from "@/components/sections/WaveTransition";
import Guarantees from "@/components/sections/Guarantees";
import TheDifference from "@/components/sections/TheDifference";
import ForLoanOriginators from "@/components/sections/ForLoanOriginators";
import NationwideCoverage from "@/components/sections/NationwideCoverage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveTransition />
      <Guarantees />
      <TheDifference />
      <ForLoanOriginators />
      <NationwideCoverage />
    </>
  );
}
