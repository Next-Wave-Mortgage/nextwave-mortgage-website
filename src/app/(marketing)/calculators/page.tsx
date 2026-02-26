import type { Metadata } from "next";
import RewardsCalculator from "@/components/calculators/RewardsCalculator";

export const metadata: Metadata = {
  title: "Rewards Calculator | Next Wave Mortgage",
  description:
    "See how much you save with Next Wave Mortgage's DPA, cash rebate, and rewards programs compared to going elsewhere.",
};

export default function CalculatorsPage() {
  return <RewardsCalculator />;
}
