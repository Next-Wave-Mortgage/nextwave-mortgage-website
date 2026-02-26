import type { Metadata } from "next";
import OurTeamPage from "@/components/team/OurTeamPage";

export const metadata: Metadata = {
  title: "Our Team | Next Wave Mortgage",
  description:
    "Meet the experienced team behind Next Wave Mortgage. Our licensed loan officers and leadership are here to guide you through every step of the mortgage process.",
};

export default function OurTeamPageRoute() {
  return <OurTeamPage />;
}
