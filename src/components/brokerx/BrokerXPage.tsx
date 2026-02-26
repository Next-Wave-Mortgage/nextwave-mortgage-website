"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

/* ── Timeline data ────────────────────────────────────── */
const timeline = [
  {
    weeks: "Weeks 1–2",
    mode: "Virtual",
    title: "Mortgage Foundations",
    desc: "Learn essential mortgage topics, including federal laws and ethics, through NMLS-approved training sessions, meeting the 20-hour requirement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    weeks: "Weeks 3–4",
    mode: "Virtual",
    title: "Exam Preparation",
    desc: "Prepare for the SAFE MLO exam with review sessions and practice tests. Take the exam either online or in-person at an approved test center.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    weeks: "Week 5",
    mode: "In-Person",
    title: "Hands-On Skills",
    desc: "Gain hands-on experience at UWM headquarters with role-playing exercises and networking opportunities to solidify your skills.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

/* ── Benefits data ────────────────────────────────────── */
const benefits = [
  "Top-tier wholesale lending resources to help you succeed from day one",
  "Ongoing support and mentorship from experienced LOs and industry professionals",
  "Opportunities for growth and advancement as you build your career with us",
];

/* ── FAQ data ─────────────────────────────────────────── */
const faqs = [
  {
    q: "What is the BrokerX program?",
    a: "The BrokerX program is a 5-week training course designed to prepare aspiring mortgage loan originators (MLOs) to pass the SAFE MLO test and start their career in the mortgage industry.",
  },
  {
    q: "How long is the BrokerX program?",
    a: "The program lasts 5 weeks, with 4 weeks of virtual training and 1 week of in-person skills development.",
  },
  {
    q: "What is the cost of the BrokerX program?",
    a: "The program costs $250, which covers training. Additional fees include the SAFE MLO test fee and background check costs.",
  },
  {
    q: "Who is eligible to join the BrokerX program?",
    a: "The program is open to individuals interested in becoming licensed MLOs and who meet the eligibility requirements to take the SAFE MLO test.",
  },
  {
    q: "What kind of training will I receive?",
    a: "You will receive NMLS-approved webinars, small group discussions, test preparation, and hands-on skills development during the program.",
  },
  {
    q: "What is the SAFE MLO test?",
    a: "The SAFE MLO test is the required exam for individuals seeking to become licensed mortgage loan originators.",
  },
  {
    q: "Can I take the SAFE MLO test online?",
    a: "Yes, the SAFE MLO test can be taken either online with a proctor or in person at an approved test center.",
  },
  {
    q: "What happens during the final week of training?",
    a: "In the final week, you'll receive in-person, hands-on skills development, including role-playing and networking at UWM headquarters.",
  },
  {
    q: "Does BrokerX provide job placement?",
    a: "While BrokerX does not guarantee job placement, Next Wave Mortgage, LLC offers career opportunities for graduates of the program.",
  },
  {
    q: "How do I apply for the BrokerX program?",
    a: "You can apply by filling out the form on this page for a consultation with our recruitment team to get started.",
  },
];

/* ── Check icon ───────────────────────────────────────── */
function Check() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-teal">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

/* ── FAQ Accordion item ───────────────────────────────── */
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
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-navy/55">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main page component ──────────────────────────────── */
export default function BrokerXPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(28,150,197,0.18) 0%, transparent 65%)",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(28,150,197,0.12) 0%, transparent 60%)",
              animation: "float 8s ease-in-out infinite 4s",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-[0.06]">
          <svg viewBox="0 0 1440 100" fill="none" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0 50c240-40 480 40 720 0s480-40 720 0v50H0z" fill="white" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.08] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Now Enrolling
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Become a Loan Originator{" "}
            <span className="bg-gradient-to-r from-teal via-[#5dd8f0] to-teal bg-clip-text text-transparent">
              with Next Wave
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            Your fast-track path to a successful mortgage career. Get licensed
            in 5 weeks through the BrokerX Program and join a winning team.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#apply"
              className="group relative overflow-hidden rounded-xl bg-teal px-8 py-4 text-sm font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.55)] sm:text-base"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                Apply Now
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
            <a
              href="#how-it-works"
              className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:bg-teal/10 hover:text-white sm:text-base"
            >
              See the Program
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-white/[0.1] bg-white/[0.05] px-6 py-5 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                { value: "5 Weeks", label: "To Licensed" },
                { value: "$250", label: "Program Cost" },
                { value: "100%", label: "Career Support" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-sm font-extrabold leading-tight text-teal sm:text-base">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Next Wave + BrokerX ─────────────────── */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/[0.05] blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              The Partnership
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px]">
              Why Next Wave Partners with BrokerX
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy/60">
              We&apos;re committed to growing our team with the best-trained
              professionals in the mortgage industry. BrokerX&apos;s
              industry-leading curriculum gives you the knowledge and skills to
              thrive as a Loan Originator with Next Wave Mortgage.
            </p>
          </div>

          {/* Value props */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
            {[
              {
                title: "World-Class Training",
                desc: "Comprehensive, NMLS-approved curriculum covering everything from federal laws to real-world lending strategies.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                ),
              },
              {
                title: "Fast-Track Licensing",
                desc: "Go from zero to licensed MLO in just 5 weeks with structured virtual training and hands-on skills development.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Career Launch Pad",
                desc: "Graduate directly into a role with Next Wave Mortgage, with access to leads, mentorship, and top-tier resources.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-navy/[0.08] bg-white p-7 shadow-[0_1px_3px_rgba(43,84,100,0.06)] transition-all duration-300 hover:border-teal/20 hover:shadow-[0_4px_24px_rgba(28,150,197,0.08)]"
              >
                <div className="absolute inset-y-0 left-0 w-[3px] bg-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/[0.07] text-teal ring-1 ring-teal/10">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5-Week Program Timeline ─────────────────── */}
      <section id="how-it-works" className="scroll-mt-16 relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-teal/[0.04] blur-[120px]" />

        <div ref={timelineRef} className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              The Program
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px]">
              5 Weeks to Licensed
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">
              A structured path from aspiring LO to licensed mortgage professional.
            </p>
          </div>

          {/* Timeline cards */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-teal/20 via-teal/30 to-teal/10 sm:block" />

              <div className="space-y-6">
                {timeline.map((step, i) => (
                  <div
                    key={step.weeks}
                    className="relative flex gap-6"
                    style={{
                      opacity: timelineVisible ? 1 : 0,
                      transform: timelineVisible ? "translateY(0)" : "translateY(24px)",
                      transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 200}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${200 + i * 200}ms`,
                    }}
                  >
                    {/* Step indicator */}
                    <div className="hidden shrink-0 sm:flex">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-navy/[0.08] bg-white text-teal shadow-[0_2px_16px_rgba(28,150,197,0.1)]">
                        {step.icon}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="group flex-1 overflow-hidden rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(43,84,100,0.06)] transition-all duration-300 hover:border-teal/20 hover:shadow-[0_4px_24px_rgba(28,150,197,0.08)] sm:p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-extrabold text-teal">
                          {step.weeks}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${step.mode === "Virtual" ? "bg-navy/[0.05] text-navy/50" : "bg-teal/[0.15] text-teal"}`}>
                          {step.mode}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-extrabold text-navy">{step.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-navy/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join the Team ───────────────────────────── */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-teal/[0.05] blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:flex lg:items-start lg:gap-16">
            {/* Left — content */}
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-teal">
                Your Future
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Join a Winning Team
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/60">
                At Next Wave Mortgage, we are more than just a mortgage
                company — we are a team of dedicated professionals committed to
                helping you grow and succeed in your career.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <Check />
                    <span className="text-[15px] leading-relaxed text-navy/70">{b}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[15px] leading-relaxed text-navy/50">
                With BrokerX, you&apos;ll receive the tools you need to launch
                your career, and with Next Wave Mortgage, you&apos;ll be joining
                a team that supports your long-term success.
              </p>
            </div>

            {/* Right — big stat card */}
            <div className="mt-10 shrink-0 lg:mt-0">
              <div className="relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-navy p-8 text-center shadow-[0_4px_32px_rgba(43,84,100,0.15)] sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-teal/[0.10] blur-[80px]" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal/70">
                    Program Duration
                  </p>
                  <p className="mt-3 text-8xl font-extrabold tabular-nums text-teal drop-shadow-[0_4px_24px_rgba(28,150,197,0.2)]">
                    5
                  </p>
                  <p className="text-2xl font-extrabold text-white">Weeks</p>
                  <p className="mt-2 text-sm text-white/40">
                    to launch your career
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-3xl font-extrabold text-white">$250</p>
                    <p className="text-sm text-white/40">total program cost</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Apply / Contact Form ────────────────────── */}
      <section id="apply" className="scroll-mt-16 relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-navy/[0.04] blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:flex lg:gap-16">
            {/* Left — text */}
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-teal">
                Get Started
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Ready to Start Your Mortgage Career?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/60">
                We&apos;re looking for motivated individuals who are ready to
                take the next step. Fill out the form to request more
                information and schedule a one-on-one consultation with our
                recruitment team.
              </p>
            </div>

            {/* Right — form */}
            <div className="mt-10 w-full max-w-md shrink-0 lg:mt-0">
              <form
                className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_4px_24px_rgba(43,84,100,0.08)] sm:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-navy">
                      First Name <span className="text-teal">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-navy">
                      Last Name <span className="text-teal">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-bold text-navy">
                    Email <span className="text-teal">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-bold text-navy">
                    Phone Number <span className="text-teal">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative mt-6 w-full overflow-hidden rounded-xl bg-teal py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.5)]"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">Request Information</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[100px]" />

        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <div className="mt-12">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          {/* Bottom CTA */}
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
    </div>
  );
}
