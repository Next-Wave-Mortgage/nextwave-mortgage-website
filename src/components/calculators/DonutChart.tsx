"use client";

import { useEffect, useState } from "react";

export interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
}

const SIZE = 240;
const STROKE = 38;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP = 3;

export default function DonutChart({ segments }: DonutChartProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let outer: number;
    let inner: number;
    outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, []);

  const total = segments.reduce((sum, s) => sum + Math.max(0, s.value), 0);
  const filtered = segments.filter((s) => s.value > 0);

  let accumulated = 0;
  const gapPerSegment = filtered.length > 1 ? GAP : 0;
  const totalGap = gapPerSegment * filtered.length;
  const usableCircumference = CIRCUMFERENCE - totalGap;

  const arcs = filtered.map((seg) => {
    const fraction = total > 0 ? seg.value / total : 0;
    const dashLen = fraction * usableCircumference;
    const offset = accumulated;
    accumulated += dashLen + gapPerSegment;
    return { ...seg, fraction, dashLen, offset };
  });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {filtered.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-[3px]"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-[13px] font-medium text-navy/60">
              {seg.label}
            </span>
          </div>
        ))}
      </div>

      {/* Donut SVG — fills available width */}
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[320px]">
        {/* Background ring */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#f0efeb"
          strokeWidth={STROKE}
        />

        {/* Segments */}
        {arcs.map((arc, i) => (
          <circle
            key={arc.label}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={arc.color}
            strokeWidth={STROKE}
            strokeDasharray={`${animate ? arc.dashLen : 0} ${CIRCUMFERENCE - (animate ? arc.dashLen : 0)}`}
            strokeDashoffset={-arc.offset}
            strokeLinecap="butt"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: `stroke-dasharray 800ms cubic-bezier(0.34, 1.56, 0.64, 1) ${150 + i * 120}ms`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
