import type { Metadata } from "next";
import JoinPage from "@/components/join/JoinPage";

export const metadata: Metadata = {
  title: "Partner With Next Wave | Real Estate Agents",
  description:
    "Partner with Next Wave Mortgage and receive pre-approved, credit-qualified buyers. Zero cost to you.",
};

const trustPoints = [
  "Pre-approved, credit-qualified buyers",
  "7-14 day average closings",
  "Zero cost to you — ever",
  "Dedicated LO assigned to your clients",
];

const faqs = [
  {
    q: "How does the agent partnership work?",
    a: "We connect you with pre-approved buyers who are actively looking for homes. You get qualified leads, and we handle the mortgage side — fast closings, great communication, and happy clients.",
  },
  {
    q: "Is there any cost to partner with Next Wave?",
    a: "No. There is absolutely zero cost to partner with us. We earn our revenue from the lending side, so our partnership is a free value-add for your business.",
  },
  {
    q: "Do I need an MLS ID to get started?",
    a: "An active MLS ID is preferred but not required to start the conversation. If you're newly licensed or in the process, we'd still love to hear from you.",
  },
  {
    q: "What areas do you serve?",
    a: "Next Wave Mortgage is licensed in multiple states and growing. Fill out the form and we'll confirm coverage in your area.",
  },
  {
    q: "How quickly can my clients get pre-approved?",
    a: "Most pre-approvals are completed within 24 hours. Our streamlined process means your buyers can start shopping with confidence right away.",
  },
];

export default function RealEstateAgentsPage() {
  return (
    <JoinPage
      heading="Partner With Next Wave"
      subheading="We generate pre-approved, credit-qualified buyers every day. Partner with us and we'll send them straight to you."
      formType="real-estate-agent"
      licenseLabel="MLS ID"
      trustPoints={trustPoints}
      faqs={faqs}
    />
  );
}
