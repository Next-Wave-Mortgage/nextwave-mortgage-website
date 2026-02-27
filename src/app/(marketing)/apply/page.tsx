import type { Metadata } from "next";
import ApplyPage from "@/components/apply/ApplyPage";

export const metadata: Metadata = {
  title: "Get Pre-Approved | Next Wave Mortgage",
  description:
    "Take the first step toward homeownership with a free, no-obligation pre-approval from Next Wave Mortgage. Quick, simple, and stress-free.",
};

export default function ApplyRoute() {
  return <ApplyPage />;
}
