import type { Metadata } from "next";
import JoinPage from "@/components/join/JoinPage";

export const metadata: Metadata = {
  title: "Join Next Wave | Loan Originators",
  description:
    "Join Next Wave Mortgage as a Loan Originator. Enterprise-level tools, daily inbound leads, and boutique-style mentorship.",
};

const trustPoints = [
  "Daily inbound leads from day one",
  "Enterprise-level tools and CRM",
  "Boutique-style mentorship and support",
  "7-14 day average closings",
];

const faqs = [
  {
    q: "What support does Next Wave provide for new LOs?",
    a: "We provide full onboarding within your first week, access to our proprietary CRM and lead system, mentorship from senior LOs, and direct access to leadership.",
  },
  {
    q: "Do I need an active NMLS license to join?",
    a: "An active NMLS license is preferred, but not required to start the conversation. If you're in the process of getting licensed, we can discuss the BrokerX program to help you get there.",
  },
  {
    q: "How does the lead system work?",
    a: "We generate daily inbound leads from credit-qualified, pre-approved buyers. These are distributed to our LOs based on state licensing and availability.",
  },
  {
    q: "What states does Next Wave operate in?",
    a: "Next Wave Mortgage is actively growing and licensed in multiple states. Reach out and we'll let you know if we're operating in your state.",
  },
  {
    q: "Is there a cost to join?",
    a: "There is no upfront cost to join Next Wave as a licensed Loan Originator. We invest in your success from day one.",
  },
];

export default function LoanOfficersPage() {
  return (
    <JoinPage
      heading="Join Next Wave"
      subheading="Enterprise-level tools and leads with boutique-style mentorship and a culture that feels like home."
      formType="loan-officer"
      licenseLabel="NMLS ID"
      trustPoints={trustPoints}
      faqs={faqs}
    />
  );
}
