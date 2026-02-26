import type { Metadata } from "next";
import BrokerXPage from "@/components/brokerx/BrokerXPage";

export const metadata: Metadata = {
  title: "BrokerX Program | Next Wave Mortgage",
  description:
    "Fast-track your mortgage career with Next Wave Mortgage's BrokerX Program. Get licensed in 5 weeks with world-class training and mentorship.",
};

export default function BrokerXProgramPage() {
  return <BrokerXPage />;
}
