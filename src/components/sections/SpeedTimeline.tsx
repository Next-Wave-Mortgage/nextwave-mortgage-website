"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  { value: 60, unit: "min", label: "Initial Disclosures Sent" },
  { value: 24, unit: "hrs", label: "Underwriter Approval" },
  { value: 7, unit: "days", label: "Clear to Close" },
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
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

function TimelineStep({
  step,
  index,
  isVisible,
}: {
  step: (typeof timeline)[number];
  index: number;
  isVisible: boolean;
}) {
  const delay = 400 + index * 350;
  const labelDelay = delay + 300;
  const active = isVisible;

  const count = useCountUp(step.value, active, 1000 + index * 200);

  return (
    <div className="relative z-10 flex flex-col items-center">
      {/* Card */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-2xl border border-teal/15 bg-white shadow-[0_2px_12px_rgba(28,150,197,0.1)] transition-all sm:h-24 sm:w-24"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1) translateY(0)" : "scale(0.6) translateY(20px)",
          transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, box-shadow 300ms ease`,
          boxShadow: isVisible
            ? "0 2px 12px rgba(28,150,197,0.1), 0 0 0 0 rgba(28,150,197,0)"
            : "0 2px 12px rgba(28,150,197,0.1)",
          animation: isVisible ? `timeline-glow 2s ease ${delay + 600}ms` : "none",
        }}
      >
        <span className="text-xl font-extrabold tabular-nums text-teal sm:text-2xl">
          {active ? count : 0} {step.unit}
        </span>
      </div>

      {/* Label */}
      <span
        className="mt-3 max-w-[100px] text-center text-xs font-medium text-navy/40 sm:max-w-none sm:text-sm"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(8px)",
          transition: `opacity 500ms ease ${labelDelay}ms, transform 500ms ease ${labelDelay}ms`,
        }}
      >
        {step.label}
      </span>
    </div>
  );
}

export default function SpeedTimeline() {
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
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Keyframes for glow pulse */}
      <style jsx>{`
        @keyframes timeline-glow {
          0% {
            box-shadow: 0 2px 12px rgba(28, 150, 197, 0.1),
              0 0 0 0 rgba(28, 150, 197, 0.3);
          }
          50% {
            box-shadow: 0 2px 12px rgba(28, 150, 197, 0.1),
              0 0 0 12px rgba(28, 150, 197, 0);
          }
          100% {
            box-shadow: 0 2px 12px rgba(28, 150, 197, 0.1),
              0 0 0 0 rgba(28, 150, 197, 0);
          }
        }
      `}</style>

      <div ref={ref} className="mx-auto mt-20 max-w-2xl">
        {/* Title */}
        <p
          className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-navy/30"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms ease 200ms, transform 600ms ease 200ms",
          }}
        >
          Our Speed Guarantee
        </p>

        <div className="relative flex items-center justify-between">
          {/* Connecting line — draws left to right */}
          <div className="absolute inset-x-0 top-1/2 z-0 mx-16 -translate-y-1/2 sm:mx-20">
            <div
              className="h-[2px] bg-gradient-to-r from-teal/20 via-teal/40 to-teal/20"
              style={{
                transformOrigin: "left",
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1000ms cubic-bezier(0.16,1,0.3,1) 300ms",
              }}
            />
          </div>

          {/* Steps */}
          {timeline.map((step, i) => (
            <TimelineStep
              key={step.label}
              step={step}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </>
  );
}
