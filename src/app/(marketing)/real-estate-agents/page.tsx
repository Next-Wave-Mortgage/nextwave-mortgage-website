import type { Metadata } from "next";
import AgentHero from "@/components/sections/agents/AgentHero";
import WaveTransition from "@/components/sections/WaveTransition";
import WhyPartner from "@/components/sections/agents/WhyPartner";
import HowItWorks from "@/components/sections/agents/HowItWorks";
import TheEdge from "@/components/sections/agents/TheEdge";

export const metadata: Metadata = {
  title: "Real Estate Agents | Next Wave Mortgage",
  description:
    "Partner with Next Wave Mortgage and receive pre-approved, credit-qualified buyer referrals. Faster closings, zero cost to you, and a steady pipeline of serious buyers.",
};

export default function RealEstateAgentsPage() {
  return (
    <>
      <AgentHero />
      <WaveTransition />
      <WhyPartner />
      <HowItWorks />
      <TheEdge />
    </>
  );
}
