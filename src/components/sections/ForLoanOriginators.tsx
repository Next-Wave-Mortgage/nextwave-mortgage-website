"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

const perks = [
  {
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    text: "Leads that convert, tech that's simple",
  },
  {
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
        />
      </svg>
    ),
    text: "Mentorship & marketing that scale with you",
  },
  {
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    text: "Leadership that has your back",
  },
];

export default function ForLoanOriginators() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const daysCount = useCountUp(45, isVisible, 1200);
  const scaleCount = useCountUp(5, isVisible, 800);

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
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
      {/* Background — no grid overlay, different glow positions from Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-1/4 h-[600px] w-[600px] rounded-full bg-teal/[0.08] blur-[140px]" />
        <div className="absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left — Copy + perks + CTA */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              For Loan Originators
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
              Grow Your Business
              <br className="hidden lg:block" /> With Us
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Simple tech. Real mentorship. No red tape.
            </p>

            {/* Perks */}
            <div className="mx-auto mt-8 flex max-w-xs flex-col gap-3.5 lg:mx-0 lg:max-w-none">
              {perks.map((perk, i) => (
                <div
                  key={perk.text}
                  className="flex items-center gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-12px)",
                    transition: `opacity 500ms ease ${300 + i * 150}ms, transform 500ms ease ${300 + i * 150}ms`,
                  }}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/[0.1] text-teal ring-1 ring-teal/15">
                    {perk.icon}
                  </div>
                  <span className="text-sm font-medium text-white/60">
                    {perk.text}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 500ms ease 750ms",
              }}
            >
              <Link
                href="/loan-originators"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:bg-teal/10 hover:text-white sm:px-8 sm:py-4 sm:text-base"
              >
                Learn More
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Stats with hierarchy */}
          <div className="flex flex-col gap-4">
            {/* Hero stat */}
            <div
              className="rounded-2xl border border-teal/15 bg-white/[0.06] p-7 backdrop-blur sm:p-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.96)",
                transition:
                  "opacity 600ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 200ms",
              }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tabular-nums text-teal sm:text-6xl">
                  1
                </span>
                <span className="text-2xl font-bold text-teal/60 sm:text-3xl">
                  Week
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-white/40">
                Onboarding to go-live
              </p>
            </div>

            {/* Supporting stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-5 text-center backdrop-blur transition-colors duration-300 hover:border-teal/20 hover:bg-white/[0.06] sm:p-5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 500ms, transform 500ms ease 500ms, border-color 300ms, background-color 300ms",
                }}
              >
                <p className="text-lg font-extrabold tabular-nums text-teal sm:text-2xl">
                  {isVisible ? daysCount : 0}
                </p>
                <p className="mt-1 text-[11px] font-medium text-white/40 sm:mt-1.5 sm:text-xs">
                  Days to Funding
                </p>
              </div>
              <div
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-5 text-center backdrop-blur transition-colors duration-300 hover:border-teal/20 hover:bg-white/[0.06] sm:p-5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 650ms, transform 500ms ease 650ms, border-color 300ms, background-color 300ms",
                }}
              >
                <p className="text-lg font-extrabold tabular-nums text-teal sm:text-2xl">
                  ${isVisible ? scaleCount : 0}M+
                </p>
                <p className="mt-1 text-[11px] font-medium text-white/40 sm:mt-1.5 sm:text-xs">
                  Scale Ready
                </p>
              </div>
              <div
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-5 text-center backdrop-blur transition-colors duration-300 hover:border-teal/20 hover:bg-white/[0.06] sm:p-5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 800ms, transform 500ms ease 800ms, border-color 300ms, background-color 300ms",
                }}
              >
                <p className="text-lg font-extrabold text-teal sm:text-2xl">
                  Direct
                </p>
                <p className="mt-1 text-[11px] font-medium text-white/40 sm:mt-1.5 sm:text-xs">
                  Leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
