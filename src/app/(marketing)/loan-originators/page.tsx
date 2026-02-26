import type { Metadata } from "next";
import LOHero from "@/components/sections/lo/LOHero";
import WaveTransition from "@/components/sections/WaveTransition";
import WhatYouGet from "@/components/sections/lo/WhatYouGet";
import LeadEngine from "@/components/sections/lo/LeadEngine";
import YourPlatform from "@/components/sections/lo/YourPlatform";
import BrokerXGrowth from "@/components/sections/lo/BrokerXGrowth";

export const metadata: Metadata = {
  title: "Loan Originators | Next Wave Mortgage",
  description:
    "Enterprise-level tools and leads with boutique-style mentorship. Join Next Wave Mortgage and grow your business with high-quality leads, a full digital platform, and real support.",
};

export default function LoanOriginatorsPage() {
  return (
    <>
      <LOHero />
      <WaveTransition />
      <WhatYouGet />
      <LeadEngine />
      <YourPlatform />
      <BrokerXGrowth />
    </>
  );
}
