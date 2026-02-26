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
    text: "Pre-underwriting before property selection -- no last-minute surprises",
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    text: "7-14 day closings that compete with cash buyers",
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
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    text: "Real-time updates so you always know where the deal stands",
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
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

/* ── Component ─────────────────────────────────────────────────── */
export default function TheEdge() {
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

  const closingDays = useCountUp(14, isVisible);

  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
      {/* Radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-teal/[0.08] blur-[140px]" />
        <div className="absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-teal/[0.05] blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left -- Header + features */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              The Next Wave Edge
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              Close Faster. Win More.
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Our pre-underwriting process gives your buyers a competitive edge
              in any market.
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal ring-1 ring-teal/20">
                    {feature.icon}
                  </div>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-white/60 sm:text-base">
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

          {/* Right -- Stat cards */}
          <div className="flex flex-col gap-4">
            {/* Hero stat */}
            <div
              className="rounded-2xl border border-teal/15 bg-white/[0.04] p-8 text-center backdrop-blur sm:p-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.96)",
                transition:
                  "opacity 600ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 200ms",
              }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold tabular-nums text-teal sm:text-6xl">
                  7-{closingDays}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/50">
                Day Closings
              </p>
            </div>

            {/* Two supporting stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-6 text-center backdrop-blur transition-colors duration-300 hover:border-teal/20 sm:p-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 500ms, transform 500ms ease 500ms, border-color 300ms",
                }}
              >
                <span className="text-3xl font-extrabold text-teal sm:text-4xl">
                  24/7
                </span>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-widest text-white/40">
                  Deal Visibility
                </p>
              </div>
              <div
                className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-6 text-center backdrop-blur transition-colors duration-300 hover:border-teal/20 sm:p-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 500ms ease 600ms, transform 500ms ease 600ms, border-color 300ms",
                }}
              >
                <span className="text-3xl font-extrabold text-teal sm:text-4xl">
                  Zero
                </span>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-widest text-white/40">
                  Cost to You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
