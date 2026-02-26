/** Single source of truth for site-wide configuration. */
export const siteConfig = {
  name: "Next Wave Mortgage",
  url: "https://nextwavemortgage.com",
  description:
    "Next Wave Mortgage — expert guidance for home loans, refinancing, and mortgage programs.",
  companyName: "Next Wave Mortgage, LLC",
  nmls: "2536820",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  contact: {
    phone: "617-529-9317",
    email: "hello@nextwavemortgage.com",
    address: "2430 E Commercial BLVD #3, Fort Lauderdale, FL 33308",
  },
  nav: [
    { label: "Loan Originators", href: "/loan-originators" },
    { label: "Real Estate Agents", href: "/real-estate-agents" },
    { label: "Rewards Calculator", href: "/calculators" },
    { label: "Insights & Resources", href: "/blog" },
    { label: "Our Team", href: "/our-team" },
  ],
  footerNav: [
    { label: "Our Team", href: "/our-team" },
    { label: "BrokerX Program", href: "/brokerx" },
    { label: "Terms and Privacy", href: "/terms" },
    { label: "Licenses", href: "/licenses" },
  ],
  cta: {
    label: "Get Pre-Approved",
    href: "/apply",
  },
  legal: [
    "Next Wave Mortgage, LLC is not affiliated with any government agencies. These materials are not from VA, HUD or FHA, and were not approved by VA, HUD or FHA, or any other government agency.",
    "Reverse mortgage borrowers are required to obtain an eligibility certificate by receiving counseling sessions with a HUD-approved agency. The youngest borrower must be at least 62 years old. Monthly reverse mortgage advances may affect eligibility for some other programs.",
    "This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates, and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply.",
  ],
  nmlsUrl: "http://www.nmlsconsumeraccess.org",
} as const;
