import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WaveTransition from "@/components/sections/WaveTransition";
import Guarantees from "@/components/sections/Guarantees";
import TheDifference from "@/components/sections/TheDifference";
import ForLoanOriginators from "@/components/sections/ForLoanOriginators";
import NationwideCoverage from "@/components/sections/NationwideCoverage";

export const metadata: Metadata = {
  title: "Next Wave Mortgage | Expert Home Loan Guidance",
  description:
    "Get pre-approved in minutes with Next Wave Mortgage. Expert guidance for home loans, refinancing, and mortgage programs. 100+ lenders, fast closings, 24/7 support.",
  alternates: { canonical: "/" },
};

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
