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

/* ── Component ─────────────────────────────────────────────────── */
export default function WhyPartner() {
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

  const closingDays = useCountUp(14, isVisible);
  const buyerCount = useCountUp(100, isVisible);

  return (
    <section className="relative bg-cream py-24 sm:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-teal/[0.04] blur-[140px]" />
        <div className="absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-teal/[0.03] blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-sm font-bold uppercase tracking-widest text-teal"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 500ms ease, transform 500ms ease",
            }}
          >
            The Partnership
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px] lg:leading-[1.1]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 600ms cubic-bezier(0.16,1,0.3,1) 100ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 100ms",
            }}
          >
            Why Agents Choose Next Wave
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-lg text-navy/60"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition:
                "opacity 500ms ease 200ms, transform 500ms ease 200ms",
            }}
          >
            We bring the buyers. You bring the expertise. Everyone wins.
          </p>
        </div>

        {/* ── Bento layout ────────────────────────────────────────── */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:flex-row">
          {/* ── Left: Featured card (Pre-Approved Referrals) ──────── */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-white p-8 shadow-[0_2px_12px_rgba(43,84,100,0.06)] transition-all duration-500 hover:border-teal/20 hover:shadow-[0_8px_40px_rgba(28,150,197,0.12)] sm:p-10 lg:w-[42%] lg:shrink-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 600ms cubic-bezier(0.16,1,0.3,1) 300ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 300ms, border-color 300ms, box-shadow 500ms",
            }}
          >
            {/* Hover accent bar */}
            <div className="absolute inset-y-0 left-0 w-[3px] bg-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Hover glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-[200px] w-[200px] rounded-full bg-teal/[0.04] blur-[80px] transition-all duration-500 group-hover:bg-teal/[0.10]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/[0.07] text-teal ring-1 ring-teal/10 transition-colors duration-300 group-hover:bg-teal/10 group-hover:ring-teal/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>

              {/* Big animated stat */}
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tabular-nums text-navy sm:text-5xl lg:text-6xl">
                  {buyerCount}s
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-teal">
                Pre-Approved Buyers
              </p>

              <h3 className="mt-6 text-xl font-extrabold text-navy sm:text-2xl">
                Pre-Approved Referrals
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy/55">
                Credit-qualified buyers actively searching for homes, sent
                directly to you. No cold leads, no
                tire-kickers&thinsp;&mdash;&thinsp;just serious buyers ready to
                write offers.
              </p>

              {/* Mini proof points */}
              <div className="mt-6 flex flex-col gap-2.5">
                {[
                  "Credit-qualified before referral",
                  "Matched to your market area",
                  "Actively searching for homes",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0 text-teal"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-navy/50">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column ──────────────────────────────────────── */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {/* Card 2: Faster Closings (navy) */}
            <div
              className="group relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-navy p-7 shadow-[0_4px_32px_rgba(43,84,100,0.15)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(28,150,197,0.2)] sm:p-8 lg:p-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 600ms cubic-bezier(0.16,1,0.3,1) 450ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 450ms, box-shadow 500ms",
              }}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-[250px] w-[250px] rounded-full bg-teal/[0.10] blur-[100px] transition-all duration-500 group-hover:bg-teal/[0.18]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-teal/[0.06] blur-[80px]" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                {/* Stat side */}
                <div className="shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold tabular-nums text-teal drop-shadow-[0_4px_24px_rgba(28,150,197,0.3)] sm:text-6xl lg:text-7xl">
                      7-{closingDays}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-white/40">
                    Day Closings
                  </p>
                </div>

                {/* Content side */}
                <div className="flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.15] text-teal ring-1 ring-teal/20">
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
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold text-white sm:text-2xl">
                    Faster Closings
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/50">
                    Pre-underwriting means your buyers compete with cash offers.
                    No last-minute surprises, no drawn-out timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom row: Cards 3 + 4 side by side */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Card 3: Grow Your Pipeline */}
              <div
                className="group relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(43,84,100,0.06)] transition-all duration-500 hover:border-teal/20 hover:shadow-[0_8px_40px_rgba(28,150,197,0.12)] sm:p-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition:
                    "opacity 600ms cubic-bezier(0.16,1,0.3,1) 600ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 600ms, border-color 300ms, box-shadow 500ms",
                }}
              >
                {/* Hover accent bar */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.07] text-teal ring-1 ring-teal/10 transition-colors duration-300 group-hover:bg-teal/10 group-hover:ring-teal/20">
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
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      />
                    </svg>
                  </div>

                  {/* Mini trend bar visual */}
                  <div className="mt-5 flex items-end gap-1">
                    {[28, 40, 36, 52, 48, 64, 60, 76, 84, 92].map((h, i) => (
                      <div
                        key={i}
                        className="w-2 rounded-full bg-teal/20 transition-all duration-500 group-hover:bg-teal/35"
                        style={{
                          height: `${h * 0.3}px`,
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                          transformOrigin: "bottom",
                          transition: `opacity 400ms ease ${700 + i * 50}ms, transform 400ms cubic-bezier(0.16,1,0.3,1) ${700 + i * 50}ms, background-color 300ms`,
                        }}
                      />
                    ))}
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-navy">
                    Grow Your Pipeline
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy/55">
                    A steady stream of serious buyers without spending a dime on
                    marketing. More deals, less legwork.
                  </p>
                </div>
              </div>

              {/* Card 4: True Partnership */}
              <div
                className="group relative overflow-hidden rounded-3xl border border-navy/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(43,84,100,0.06)] transition-all duration-500 hover:border-teal/20 hover:shadow-[0_8px_40px_rgba(28,150,197,0.12)] sm:p-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transition:
                    "opacity 600ms cubic-bezier(0.16,1,0.3,1) 750ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 750ms, border-color 300ms, box-shadow 500ms",
                }}
              >
                {/* Hover accent bar */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.07] text-teal ring-1 ring-teal/10 transition-colors duration-300 group-hover:bg-teal/10 group-hover:ring-teal/20">
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
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                      />
                    </svg>
                  </div>

                  {/* Trust signals */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    {["Dedicated LO", "Transparent", "On Your Side"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-teal/15 bg-teal/[0.05] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-teal"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-navy">
                    True Partnership
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy/55">
                    Dedicated loan officers, transparent communication, and a
                    team that has your back on every deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
