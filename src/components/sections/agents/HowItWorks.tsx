"use client";

import { useEffect, useRef, useState } from "react";

/* ── Journey steps ─────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "We Generate Leads",
    desc: "Our hundreds of web properties attract thousands of homebuyers every month",
    icon: (
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
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We Pre-Approve Them",
    desc: "Buyers get credit-qualified and pre-approved before they ever talk to you",
    icon: (
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
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We Send Them to You",
    desc: "You get matched with serious, ready-to-close buyers in your market",
    icon: (
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
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },
];

/* ── Component ─────────────────────────────────────────────────── */
export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

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

  /* Sequential step activation: step 0 at 600ms, step 1 at 1200ms, step 2 at 1800ms */
  useEffect(() => {
    if (!isVisible) return;
    const timers = steps.map((_, i) =>
      setTimeout(() => setActiveStep(i), 600 + i * 600),
    );
    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes hiw-pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes hiw-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes hiw-travel-dot {
          0% { left: 0%; opacity: 0; }
          5% { opacity: 1; }
          45% { opacity: 1; }
          50% { left: 100%; opacity: 0; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes hiw-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes hiw-badge-pop {
          0% { transform: scale(0) rotate(-180deg); }
          60% { transform: scale(1.2) rotate(10deg); }
          80% { transform: scale(0.9) rotate(-5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes hiw-icon-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(28,150,197,0); }
          50% { box-shadow: 0 0 20px 4px rgba(28,150,197,0.15); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-teal/[0.04] blur-[120px]" />
        <div className="absolute -left-24 bottom-1/4 h-[300px] w-[300px] rounded-full bg-teal/[0.03] blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-sm font-bold uppercase tracking-widest text-teal"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 500ms ease, transform 500ms ease",
            }}
          >
            Simple Process
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
            How It Works
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
            Three steps to a pipeline full of ready-to-buy clients.
          </p>
        </div>

        {/* ── Journey steps ──────────────────────────────────────── */}
        <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">
          {/* Connecting lines between steps (desktop) */}
          <div className="absolute inset-x-0 top-[52px] z-0 mx-24 hidden sm:block lg:mx-32">
            {/* Line segment 1→2 */}
            <div className="absolute left-0 right-1/2 top-0 h-[2px] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal/10 via-teal/30 to-teal/30"
                style={{
                  transformOrigin: "left",
                  transform: activeStep >= 0 ? "scaleX(1)" : "scaleX(0)",
                  transition:
                    "transform 800ms cubic-bezier(0.16,1,0.3,1) 0ms",
                }}
              />
              {/* Traveling dot */}
              {activeStep >= 0 && (
                <div
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(28,150,197,0.5)]"
                  style={{
                    animation: "hiw-travel-dot 1.2s ease-in-out forwards",
                    animationDelay: "0ms",
                  }}
                />
              )}
            </div>
            {/* Line segment 2→3 */}
            <div className="absolute left-1/2 right-0 top-0 h-[2px] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal/30 via-teal/30 to-teal/10"
                style={{
                  transformOrigin: "left",
                  transform: activeStep >= 1 ? "scaleX(1)" : "scaleX(0)",
                  transition:
                    "transform 800ms cubic-bezier(0.16,1,0.3,1) 0ms",
                }}
              />
              {/* Traveling dot */}
              {activeStep >= 1 && (
                <div
                  className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(28,150,197,0.5)]"
                  style={{
                    animation: "hiw-travel-dot 1.2s ease-in-out forwards",
                    animationDelay: "0ms",
                  }}
                />
              )}
            </div>
          </div>

          {/* Steps grid */}
          <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {steps.map((step, i) => {
              const isActive = activeStep >= i;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon container */}
                  <div className="relative">
                    {/* Pulse rings (fire once when step activates) */}
                    {isActive && (
                      <>
                        <div
                          className="absolute inset-0 rounded-2xl border-2 border-teal/40"
                          style={{
                            animation:
                              "hiw-pulse-ring 1s cubic-bezier(0,0,0.2,1) forwards",
                          }}
                        />
                        <div
                          className="absolute inset-0 rounded-2xl border-2 border-teal/25"
                          style={{
                            animation:
                              "hiw-pulse-ring 1s cubic-bezier(0,0,0.2,1) 200ms forwards",
                          }}
                        />
                      </>
                    )}

                    {/* Icon box */}
                    <div
                      className="flex h-[88px] w-[88px] items-center justify-center rounded-2xl border bg-white text-teal transition-all duration-500 sm:h-24 sm:w-24"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateY(0) scale(1)"
                          : "translateY(24px) scale(0.7)",
                        transition: `opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)`,
                        borderColor: isActive
                          ? "rgba(28,150,197,0.2)"
                          : "rgba(43,84,100,0.08)",
                        boxShadow: isActive
                          ? "0 4px 24px rgba(28,150,197,0.15)"
                          : "0 2px 16px rgba(28,150,197,0.08)",
                        animation: isActive
                          ? "hiw-float 4s ease-in-out infinite, hiw-icon-glow 3s ease-in-out infinite"
                          : "none",
                        animationDelay: `${i * 0.3}s, ${i * 0.5}s`,
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Number badge (pops in with spin) */}
                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[10px] font-extrabold text-white shadow-[0_2px_12px_rgba(28,150,197,0.4)]"
                      style={{
                        opacity: isActive ? 1 : 0,
                        animation: isActive
                          ? "hiw-badge-pop 600ms cubic-bezier(0.34,1.56,0.64,1) forwards"
                          : "none",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Text content */}
                  <h3
                    className="mt-5 text-lg font-extrabold text-navy sm:text-xl"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: `opacity 400ms ease 200ms, transform 400ms ease 200ms`,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 max-w-[240px] text-sm leading-relaxed text-navy/45 sm:text-[15px]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(10px)",
                      transition: `opacity 400ms ease 350ms, transform 400ms ease 350ms`,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Accent callout card ────────────────────────────────── */}
        <div
          className="mx-auto mt-14 max-w-2xl sm:mt-16"
          style={{
            opacity: activeStep >= 2 ? 1 : 0,
            transform: activeStep >= 2 ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 600ms cubic-bezier(0.16,1,0.3,1) 400ms, transform 600ms cubic-bezier(0.16,1,0.3,1) 400ms",
          }}
        >
          <div className="group relative overflow-hidden rounded-2xl border border-teal/15 bg-teal/[0.04] px-6 py-6 sm:px-8">
            {/* Shimmer sweep */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(28,150,197,0.06) 50%, transparent 100%)",
                animation:
                  activeStep >= 2
                    ? "hiw-shimmer 3s ease-in-out infinite"
                    : "none",
                animationDelay: "1s",
              }}
            />

            <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal/[0.1] text-teal">
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
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </div>
              <p className="text-[15px] font-semibold leading-relaxed text-navy/70">
                You focus on showing homes. We handle the mortgage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
