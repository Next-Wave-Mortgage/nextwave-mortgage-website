"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

/* ───────────────────────── Icons ───────────────────────── */

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function LockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function DocumentIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function HomeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ───────────────────────── Data ───────────────────────── */

const steps = [
  {
    num: "1",
    title: "Answer a Few Questions",
    desc: "Basic info about you and the home you want. Takes about 2 minutes.",
    icon: DocumentIcon,
  },
  {
    num: "2",
    title: "We Review & Match",
    desc: "Our team matches you with the best loan options from 100+ lenders.",
    icon: ShieldCheckIcon,
  },
  {
    num: "3",
    title: "Get Your Pre-Approval",
    desc: "Receive your letter and start shopping with confidence.",
    icon: HomeIcon,
  },
];

const faqs = [
  {
    q: "Does getting pre-approved affect my credit score?",
    a: "A pre-approval typically involves a soft credit pull, which does not impact your credit score. If you move forward with a full application, a hard inquiry may be required.",
  },
  {
    q: "How long does pre-approval take?",
    a: "Most pre-approvals are completed within 24 hours. The online form takes about 2 minutes, and our team handles the rest.",
  },
  {
    q: "What documents do I need?",
    a: "For the initial pre-approval, you just need basic info \u2014 income, employment, and the type of home you\u2019re looking for. No documents needed upfront.",
  },
  {
    q: "How long is a pre-approval valid?",
    a: "Pre-approval letters are typically valid for 60\u201390 days. If yours expires before you find a home, we can easily renew it.",
  },
];

const trustPoints = [
  "No hidden fees or surprises",
  "Compare rates from 100+ lenders",
  "Dedicated loan officer assigned to you",
  "Available 24/7 \u2014 call, text, or email",
];

/* ───────────────────────── Page ───────────────────────── */

export default function ApplyPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formLoaded, setFormLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let form: ReturnType<typeof import("@formcrafts/embed").createInlineForm> | null = null;

    async function loadForm() {
      const { createInlineForm } = await import("@formcrafts/embed");

      if (!formRef.current) return;

      form = createInlineForm({
        form: "pmqxuun",
        target: formRef.current,
        seamless: true,
      });

      form.on("load", () => {
        setFormLoaded(true);
      });

      form.on("submit:success", () => {
        setSubmitted(true);
      });

      // Forward UTM params from the URL
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
        const utmValues: Record<string, string> = {};
        let hasUtm = false;
        for (const key of utmKeys) {
          const val = params.get(key);
          if (val) { utmValues[key] = val; hasUtm = true; }
        }
        if (hasUtm) {
          form.on("load", () => {
            form?.values(utmValues);
          });
        }
      }
    }

    loadForm();

    return () => { form?.destroy(); };
  }, []);

  return (
    <>
      {/* ── Hero + Form — one seamless unit ── */}
      <section className="relative isolate overflow-hidden bg-navy pb-28 sm:pb-36">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-teal/[0.12] blur-[120px]" />
          <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-teal/[0.08] blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-teal/[0.05] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 text-center sm:py-12 lg:px-8">
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-teal">
            FREE PRE-APPROVAL
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get Pre-Approved{" "}
            <span className="text-teal">in Minutes</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
            Find out how much home you can afford.
            No credit score impact. No commitment.
          </p>
        </div>
      </section>

      {/* Form card — floats up into hero */}
      <section className="relative z-10 -mt-20 pb-10 sm:-mt-28 sm:pb-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(43,84,100,0.18),0_0_0_1px_rgba(43,84,100,0.06)]">
            {/* Card header — white for contrast against navy hero */}
            <div className="border-b border-navy/[0.06] px-8 pb-6 pt-8 text-center sm:px-12 sm:pb-8 sm:pt-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {submitted ? "You\u2019re All Set!" : "Start Your Pre-Approval"}
              </h2>
              <p className="mt-2 text-sm text-navy/50 sm:text-base">
                {submitted
                  ? "We\u2019ve received your info. A loan officer will be in touch shortly."
                  : "Takes about 2 minutes \u2014 no documents needed upfront."}
              </p>
              {!submitted && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {[
                    { icon: ClockIcon, text: "2-minute form" },
                    { icon: ShieldCheckIcon, text: "No credit impact" },
                    { icon: LockIcon, text: "256-bit encryption" },
                  ].map((b) => (
                    <span
                      key={b.text}
                      className="inline-flex items-center gap-1.5 rounded-full bg-navy/[0.05] px-4 py-2 text-xs font-semibold text-navy/50"
                    >
                      <b.icon className="h-4 w-4 text-teal" />
                      {b.text}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Form body */}
            <div className="px-8 py-8 sm:px-14 sm:py-10 md:px-24 md:py-12">
              {/* Loading skeleton */}
              {!formLoaded && !submitted && (
                <div className="space-y-5">
                  <div className="h-6 w-3/5 animate-pulse rounded-lg bg-navy/[0.06]" />
                  <div className="h-14 animate-pulse rounded-xl bg-navy/[0.04]" />
                  <div className="h-14 animate-pulse rounded-xl bg-navy/[0.04]" />
                  <div className="h-14 animate-pulse rounded-xl bg-navy/[0.04]" />
                  <div className="h-12 w-28 animate-pulse rounded-lg bg-teal/15" />
                </div>
              )}

              {/* FormCrafts embed target */}
              <div
                ref={formRef}
                className={`mx-auto transition-opacity duration-500 ${formLoaded ? "opacity-100" : "opacity-0"} ${submitted ? "hidden" : ""}`}
                style={{ minHeight: formLoaded ? undefined : 0 }}
              />

              {/* Success state */}
              {submitted && (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/[0.1]">
                    <CheckIcon />
                  </div>
                  <p className="text-sm text-navy/60">
                    Check your email for next steps. We typically respond within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Security + NMLS below card */}
          <div className="mt-4 flex items-center justify-center gap-5 text-[11px] text-navy/30">
            <span className="inline-flex items-center gap-1">
              <LockIcon className="h-3 w-3" />
              256-bit SSL encrypted
            </span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheckIcon className="h-3 w-3" />
              NMLS# {siteConfig.nmls}
            </span>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-xs font-bold tracking-[0.15em] text-navy/30">
            HOW IT WORKS
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/[0.08] text-teal">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-teal/50">
                  STEP {step.num}
                </span>
                <h3 className="mt-1 text-sm font-extrabold text-navy">
                  {step.title}
                </h3>
                <p className="mx-auto mt-1 max-w-[200px] text-xs leading-relaxed text-navy/45">
                  {step.desc}
                </p>
                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-6 hidden -translate-x-1/2 text-navy/15 sm:block">
                    <ArrowRightIcon className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Next Wave ── */}
      <section className="bg-cream/60 py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-1 text-xs font-bold tracking-[0.15em] text-teal">
              WHY NEXT WAVE
            </h2>
            <h3 className="mb-6 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
              Your Pre-Approval,{" "}
              <span className="text-teal">Your Way</span>
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
              Pre-Approval FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-navy/[0.06] bg-cream/50 p-5"
              >
                <h3 className="text-sm font-extrabold text-navy">
                  {faq.q}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/55">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-center text-xs leading-relaxed text-navy/35">
            For information purposes only. This is not a commitment to lend or
            extend credit. Information and/or dates are subject to change without
            notice. All loans are subject to credit approval.
          </p>
        </div>
      </section>
    </>
  );
}
