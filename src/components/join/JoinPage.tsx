"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import ContactForm from "@/components/forms/ContactForm";

/* ── FAQ Accordion ─────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-navy/[0.06]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-teal"
      >
        <span className="text-[15px] font-bold text-navy">{q}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-navy/30 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-navy/55">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Check icon ────────────────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

/* ── Types ─────────────────────────────────────────────── */
interface JoinPageProps {
  heading: string;
  subheading: string;
  formType: "loan-officer" | "real-estate-agent";
  licenseLabel: string;
  trustPoints: string[];
  faqs: { q: string; a: string }[];
}

/* ── Component ─────────────────────────────────────────── */
export default function JoinPage({
  heading,
  subheading,
  formType,
  licenseLabel,
  trustPoints,
  faqs,
}: JoinPageProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-navy pb-28 sm:pb-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-teal/[0.12] blur-[120px]" />
          <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-teal/[0.08] blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-teal/[0.05] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 text-center sm:py-12 lg:px-8">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-teal">
            {formType === "loan-officer"
              ? "FOR LOAN ORIGINATORS"
              : "FOR REAL ESTATE AGENTS"}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
            {subheading}
          </p>
        </div>
      </section>

      {/* ── Floating form card ── */}
      <section className="relative z-10 -mt-20 pb-10 sm:-mt-28 sm:pb-14">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(43,84,100,0.18),0_0_0_1px_rgba(43,84,100,0.06)]">
            <div className="border-b border-navy/[0.06] px-8 pb-6 pt-8 text-center sm:px-12 sm:pb-8 sm:pt-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Get Started
              </h2>
              <p className="mt-2 text-sm text-navy/50 sm:text-base">
                Fill out the form below and we&apos;ll be in touch within 1
                business day.
              </p>
            </div>

            <div className="px-8 py-8 sm:px-12 sm:py-10">
              <ContactForm type={formType} licenseLabel={licenseLabel} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-5 text-[11px] text-navy/30">
            <span className="inline-flex items-center gap-1">
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              256-bit SSL encrypted
            </span>
            <span className="inline-flex items-center gap-1">
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
              NMLS# {siteConfig.nmls}
            </span>
          </div>
        </div>
      </section>

      {/* ── Trust Points ── */}
      <section className="bg-cream/60 py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-1 text-xs font-bold tracking-[0.15em] text-teal">
              WHY NEXT WAVE
            </h2>
            <h3 className="mb-6 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
              Built for{" "}
              <span className="text-teal">Your Success</span>
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-xl border border-navy/[0.06] bg-white px-4 py-3 shadow-[0_1px_4px_rgba(43,84,100,0.04)]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/[0.1] text-teal">
                  <CheckIcon />
                </span>
                <span className="text-sm font-medium text-navy/70">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 text-xs font-bold tracking-[0.15em] text-teal">
              COMMON QUESTIONS
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-navy/50">
              Still have questions?{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-bold text-teal transition-colors hover:text-navy"
              >
                Reach out to our team
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="bg-cream/40 py-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-navy/35">
            For information purposes only. This is not a commitment to lend or
            extend credit. Information and/or dates are subject to change without
            notice. All loans are subject to credit approval.
          </p>
        </div>
      </section>
    </>
  );
}
