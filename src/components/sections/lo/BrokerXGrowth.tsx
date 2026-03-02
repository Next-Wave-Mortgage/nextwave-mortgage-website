"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Count-up hook ─────────────────────────────────────────────── */
function useCountUp(target: number, active: boolean, duration = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let prev = 0;
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.round(eased * target);
      if (cur !== prev) {
        prev = cur;
        setCount(cur);
      }
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return count;
}

/* ── Check icon ────────────────────────────────────────────────── */
function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-teal"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Journey steps ─────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Train",
    desc: "5-week intensive program",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Certify",
    desc: "Pass licensing exams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Earn",
    desc: "Get leads from day one",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const trainingPoints = [
  "Master mortgage fundamentals and advanced lending strategies",
  "Gain hands-on experience with real-world scenarios",
  "Fully prepared to pass licensing exams and thrive in the industry",
];

const leadsPoints = [
  "Connect with pre-approved buyers immediately",
  "Build a strong client base from day one",
  "Close more deals, faster",
];

/* ── Component ─────────────────────────────────────────────────── */
export default function BrokerXGrowth() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const weekCount = useCountUp(5, isVisible);

  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 sm:py-32">
      {/* ── Background accents ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-teal/[0.05] blur-[140px]" />
        <div className="absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-teal/[0.04] blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header with badge ────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Now enrolling badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.06] px-4 py-1.5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.95)",
              transition: "opacity 500ms ease, transform 500ms ease",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-teal sm:text-sm">
              Now Enrolling
            </span>
          </div>

          <h2
            className="mt-5 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[46px] lg:leading-[1.1]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 100ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 100ms",
            }}
          >
            Elevate Your
            <br className="hidden sm:block" />{" "}
            <span className="text-teal">Mortgage Career</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy/60 sm:text-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 500ms ease 200ms, transform 500ms ease 200ms",
            }}
          >
            Elite training and exclusive buyer leads — giving you a competitive
            edge from day one.
          </p>
        </div>

        {/* ── Journey steps — Train → Certify → Earn ───────────── */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Connecting line */}
          <div className="absolute inset-x-0 top-10 z-0 mx-20 hidden sm:block lg:mx-28">
            <div
              className="h-[2px] bg-gradient-to-r from-teal/15 via-teal/30 to-teal/15"
              style={{
                transformOrigin: "left",
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1) 400ms",
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                  transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${350 + i * 200}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${350 + i * 200}ms`,
                }}
              >
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-navy/[0.08] bg-white text-teal shadow-[0_2px_16px_rgba(28,150,197,0.1)] transition-all duration-300 hover:border-teal/25 hover:shadow-[0_4px_24px_rgba(28,150,197,0.18)]">
                    {step.icon}
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal text-[10px] font-extrabold text-white shadow-[0_2px_8px_rgba(28,150,197,0.3)]">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-navy">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-navy/45">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Giant week counter ───────────────────────────────── */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "opacity 800ms cubic-bezier(0.16,1,0.3,1) 600ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 600ms",
          }}
        >
          <div className="inline-flex items-baseline gap-3">
            <span className="text-8xl font-extrabold tabular-nums text-teal drop-shadow-[0_4px_24px_rgba(28,150,197,0.2)] sm:text-9xl">
              {weekCount}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-extrabold text-navy sm:text-3xl">
                Weeks
              </span>
              <span className="text-sm text-navy/40">
                to launch your career
              </span>
            </div>
          </div>
        </div>

        {/* ── Two pillar cards ─────────────────────────────────── */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Training card — navy bg for contrast */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-navy p-8 shadow-[0_4px_32px_rgba(43,84,100,0.15)] sm:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 800ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 800ms",
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-teal/[0.10] blur-[80px] transition-all duration-500 group-hover:bg-teal/[0.18]" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/[0.15] text-teal ring-1 ring-teal/20">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal/70">
                5-Week Intensive
              </span>
            </div>

            <h3 className="relative mt-5 text-2xl font-extrabold text-white sm:text-[26px]">
              World-Class Training
            </h3>
            <p className="relative mt-2 text-[15px] leading-relaxed text-white/50">
              Our comprehensive program equips aspiring loan officers with the
              knowledge, skills, and confidence to excel.
            </p>

            <div className="relative mt-7 flex flex-col gap-4">
              {trainingPoints.map((point, i) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 500ms ease ${1000 + i * 120}ms, transform 500ms ease ${1000 + i * 120}ms`,
                  }}
                >
                  <Check />
                  <span className="text-[15px] leading-relaxed text-white/70">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Leads card — white bg */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-white p-8 shadow-[0_4px_32px_rgba(43,84,100,0.08)] transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(28,150,197,0.12)] sm:p-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 950ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 950ms, box-shadow 500ms",
            }}
          >
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-[200px] w-[200px] rounded-full bg-teal/[0.05] blur-[80px] transition-all duration-500 group-hover:bg-teal/[0.10]" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/[0.07] text-teal ring-1 ring-teal/10">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.75} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal">
                Elite Agent Leads
              </span>
            </div>

            <h3 className="relative mt-5 text-2xl font-extrabold text-navy sm:text-[26px]">
              Ready-to-Buy Clients
            </h3>
            <p className="relative mt-2 text-[15px] leading-relaxed text-navy/55">
              Fast-track your success. Once training is complete, you get
              direct access to high-quality, credit-qualified buyers actively
              looking for homes.
            </p>

            <div className="relative mt-7 flex flex-col gap-4">
              {leadsPoints.map((point, i) => (
                <div
                  key={point}
                  className="flex items-start gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-12px)",
                    transition: `opacity 500ms ease ${1150 + i * 120}ms, transform 500ms ease ${1150 + i * 120}ms`,
                  }}
                >
                  <Check />
                  <span className="text-[15px] leading-relaxed text-navy/70">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom CTA banner ────────────────────────────────── */}
        <div
          className="mx-auto mt-14 max-w-5xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1) 1200ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 1200ms",
          }}
        >
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-navy/[0.06] bg-navy px-8 py-8 text-center shadow-[0_4px_24px_rgba(43,84,100,0.12)] sm:flex-row sm:text-left">
            <div className="flex-1">
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Next Wave + BrokerX Pro ={" "}
                <span className="text-teal">Your Formula for Success</span>
              </p>
              <p className="mt-1.5 text-[15px] text-white/45">
                Start training. Get leads. Build your career.
              </p>
            </div>
            <Link
              href="/join/loan-officers"
              className="group relative shrink-0 overflow-hidden rounded-xl bg-teal px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.55)] sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
