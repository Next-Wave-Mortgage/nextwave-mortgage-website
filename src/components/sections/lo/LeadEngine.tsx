"use client";

import { useEffect, useRef, useState } from "react";

/* ── Count-up hook ─────────────────────────────────────────────── */
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
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return count;
}

/* ── Feature rows ──────────────────────────────────────────────── */
const features = [
  {
    text: "Hundreds of lead-generating web properties driving thousands of monthly visitors",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    text: "Inbound internet leads delivered directly to you every day",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    text: "High-intent buyers — pre-approved and ready to close",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
];

/* ── Component ─────────────────────────────────────────────────── */
export default function LeadEngine() {
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
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const propertyCount = useCountUp(100, isVisible);
  const buyerPercent = useCountUp(95, isVisible);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-teal/[0.04] blur-[120px]" />
        <div className="absolute -left-24 bottom-1/4 h-[300px] w-[300px] rounded-full bg-teal/[0.03] blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left — Header + features */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              Your Lead Pipeline
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Leads That Convert
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Not cold lists. Pre-approved, credit-qualified buyers actively
              searching for homes.
            </p>

            {/* Feature rows */}
            <div className="mt-10 flex flex-col gap-5">
              {features.map((feature, i) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-12px)",
                    transition: `opacity 500ms ease ${300 + i * 150}ms, transform 500ms ease ${300 + i * 150}ms`,
                  }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/[0.07] text-teal ring-1 ring-teal/10">
                    {feature.icon}
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-navy/70 sm:text-base">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative accent (desktop) */}
            <div className="pointer-events-none mt-12 hidden select-none lg:block">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 rounded-full bg-teal/30" />
                <div className="h-1 w-6 rounded-full bg-teal/15" />
                <div className="h-1 w-3 rounded-full bg-teal/10" />
              </div>
            </div>
          </div>

          {/* Right — Stat cards */}
          <div className="flex flex-col gap-4">
            {/* Hero stat */}
            <div
              className="rounded-2xl border border-teal/15 bg-navy p-8 text-center sm:p-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.96)",
                transition:
                  "opacity 600ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 200ms",
              }}
            >
              <span className="text-6xl font-extrabold tabular-nums text-teal sm:text-7xl">
                {propertyCount}s
              </span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/50">
                Web Properties
              </p>
            </div>

            {/* Two supporting stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl border border-navy/[0.08] bg-cream px-4 py-6 text-center transition-colors duration-300 hover:border-teal/20 sm:p-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 500ms, transform 500ms ease 500ms, border-color 300ms",
                }}
              >
                <span className="text-3xl font-extrabold tabular-nums text-navy sm:text-4xl">
                  Daily
                </span>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-widest text-navy/40">
                  Inbound Leads
                </p>
              </div>
              <div
                className="rounded-2xl border border-navy/[0.08] bg-cream px-4 py-6 text-center transition-colors duration-300 hover:border-teal/20 sm:p-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 600ms, transform 500ms ease 600ms, border-color 300ms",
                }}
              >
                <span className="text-3xl font-extrabold tabular-nums text-navy sm:text-4xl">
                  {buyerPercent}%
                </span>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-widest text-navy/40">
                  Start Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
