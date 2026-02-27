import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Privacy | Next Wave Mortgage",
  description:
    "Review the privacy policy and terms of service for Next Wave Mortgage, LLC.",
};

/* ─── Section data ─── */

interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
}

const privacySections: PolicySection[] = [
  {
    id: "collection",
    title: "Information Collection",
    paragraphs: [
      "We may collect personal information, such as your name, contact details, and financial information, to provide our services effectively.",
      "With your consent, information may be collected through our website, communication channels, or third-party sources.",
    ],
  },
  {
    id: "use",
    title: "Use of Information",
    paragraphs: [
      "Your information is used to facilitate and enhance our mortgage services. We may use your data for communication, transaction processing, and personalizing your Next Wave Mortgage, LLC experience.",
    ],
  },
  {
    id: "sharing",
    title: "Information Sharing",
    paragraphs: [
      "Your personal information will not be sold, rented, or shared with third parties without your explicit consent, except as the law requires.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    paragraphs: [
      "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.",
      "We strive to protect your personal information; no method of transmission over the Internet or electronic storage is entirely secure; thus, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    paragraphs: [
      "Our website may use cookies to enhance user experience. You can modify your browser settings to disable cookies, but this may affect the functionality of our website.",
    ],
  },
];

interface TermItem {
  title: string;
  text: string;
}

const termsItems: TermItem[] = [
  {
    title: "Accuracy of Information",
    text: "You are responsible for providing accurate and complete information during the application process.",
  },
  {
    title: "Service Availability",
    text: "Next Wave Mortgage, LLC strives to maintain continuous service availability, but we are not liable for interruptions due to technical issues, maintenance, or unforeseen circumstances.",
  },
  {
    title: "Intellectual Property",
    text: "All content on our website and related materials are the intellectual property of Next Wave Mortgage, LLC. Unauthorized use or reproduction is prohibited.",
  },
  {
    title: "Limitation of Liability",
    text: "Next Wave Mortgage, LLC is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services.",
  },
  {
    title: "Modification of Terms",
    text: "Next Wave Mortgage, LLC reserves the right to modify these Privacy and Terms at any time. Updated versions will be posted on our website.",
  },
];

const tocItems = [
  { id: "privacy", label: "Privacy Policy" },
  ...privacySections.map((s) => ({ id: s.id, label: s.title })),
  { id: "terms", label: "Terms of Service" },
];

/* ─── Icons ─── */

function LockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

/* ─── Page ─── */

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-teal/[0.12] blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-teal/[0.08] blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-12 text-center sm:py-14 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal/[0.12] px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-teal">
            <LockIcon />
            LEGAL
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Terms &amp; <span className="text-teal">Privacy</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            {siteConfig.companyName} is committed to protecting the privacy of
            our clients and visitors. Please review our policies below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
            {/* Table of Contents — sticky sidebar */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-navy/40">
                  ON THIS PAGE
                </p>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-1.5 text-xs font-medium text-navy/50 transition-colors hover:bg-navy/[0.05] hover:text-navy"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div>
              {/* Privacy Policy */}
              <div
                id="privacy"
                className="mb-10 rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_2px_16px_rgba(43,84,100,0.05)] sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.08] text-teal">
                    <LockIcon />
                  </div>
                  <h2 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                    Privacy Policy
                  </h2>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-navy/60">
                  This Privacy Policy outlines how we collect, use, and
                  safeguard your personal information. By engaging with our
                  services or accessing our website, you agree to the terms
                  outlined in this policy.
                </p>

                <div className="space-y-8">
                  {privacySections.map((section) => (
                    <div key={section.id} id={section.id}>
                      <h3 className="mb-2.5 text-sm font-extrabold tracking-tight text-navy">
                        {section.title}
                      </h3>
                      <div className="space-y-2.5">
                        {section.paragraphs.map((p, i) => (
                          <p
                            key={i}
                            className="text-sm leading-relaxed text-navy/60"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms of Service */}
              <div
                id="terms"
                className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_2px_16px_rgba(43,84,100,0.05)] sm:p-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.08] text-teal">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                    Terms of Service
                  </h2>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-navy/60">
                  By using {siteConfig.companyName}&apos;s services, you agree
                  to the following terms:
                </p>

                <div className="space-y-4">
                  {termsItems.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-cream/80 p-4"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/[0.08] text-[10px] font-bold text-navy/50">
                          {i + 1}
                        </span>
                        <h3 className="text-sm font-extrabold text-navy">
                          {item.title}
                        </h3>
                      </div>
                      <p className="ml-7 text-sm leading-relaxed text-navy/60">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact + Last Updated */}
              <div className="mt-8 rounded-2xl border border-navy/[0.08] bg-white p-5 text-center shadow-[0_2px_16px_rgba(43,84,100,0.05)] sm:p-6">
                <p className="text-sm text-navy/60">
                  Please review these policies regularly to stay informed about
                  how we collect, use, and protect your information. If you have
                  any questions or concerns, contact us at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-semibold text-teal underline underline-offset-2 transition-colors hover:text-teal/80"
                  >
                    {siteConfig.contact.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
