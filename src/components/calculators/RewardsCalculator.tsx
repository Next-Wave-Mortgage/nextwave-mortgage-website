"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import DonutChart from "./DonutChart";
import type { DonutSegment } from "./DonutChart";
import { siteConfig } from "@/lib/site";

/* ── Loan programs ─────────────────────────────────────── */
type LoanProgram = "fha" | "va" | "usda" | "conventional";

const PROGRAMS: {
  id: LoanProgram;
  label: string;
  desc: string;
  pct: number;
}[] = [
  { id: "fha", label: "FHA", desc: "3.5% Down", pct: 0.035 },
  { id: "va", label: "VA", desc: "0% Down", pct: 0 },
  { id: "usda", label: "USDA", desc: "0% Down", pct: 0 },
  { id: "conventional", label: "Conv.", desc: "3% Down", pct: 0.03 },
];

/* ── Currency formatter ────────────────────────────────── */
const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/* ── Smooth count-up hook (animates between values) ────── */
function useCountUp(target: number, duration = 800) {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);

  useEffect(() => {
    const from = prevRef.current;
    prevRef.current = target;
    if (from === target) return;

    const startTime = performance.now();
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (target - from) * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return display;
}

/* ── SVG Icons ─────────────────────────────────────────── */
function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clipRule="evenodd"
      />
    </svg>
  );
}


/* ── Main component ────────────────────────────────────── */
export default function RewardsCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(300_000);
  const [sellerCredit, setSellerCredit] = useState(0);
  const [loanProgram, setLoanProgram] = useState<LoanProgram>("fha");

  /* ── Calculations ──────────────────────────────────── */
  const calc = useMemo(() => {
    const program = PROGRAMS.find((p) => p.id === loanProgram)!;
    const downPct = program.pct;
    const downPayment = purchasePrice * downPct;
    const closingCosts = purchasePrice * 0.03;
    const dpa = purchasePrice * 0.05;
    const cashRebate = purchasePrice * 0.01;
    const heroesRewards = dpa + cashRebate;

    const rawCashToClose_NW =
      downPayment + closingCosts - dpa - cashRebate - sellerCredit;
    const rawCashToClose_other = downPayment + closingCosts - sellerCredit;

    const cashToClose_NW = Math.max(0, rawCashToClose_NW);
    const cashToClose_other = Math.max(0, rawCashToClose_other);

    const savings = Math.max(0, cashToClose_other - cashToClose_NW);

    const ctcPct_NW = Math.max(0, (downPct + 0.03) * 100 - 6);
    const ctcPct_other = (downPct + 0.03) * 100;

    const total = downPayment + closingCosts;
    const clamp = (v: number) => Math.max(0, Math.min(v, total));

    const nwSegments: DonutSegment[] = [
      { label: "Cash to Close", value: clamp(cashToClose_NW), color: "#75ab00" },
      { label: "Cash Rebate", value: clamp(cashRebate), color: "#1C96C5" },
      { label: "DPA", value: clamp(dpa), color: "#2B5464" },
      ...(sellerCredit > 0
        ? [{ label: "Seller Credit", value: clamp(sellerCredit), color: "#f59e0b" }]
        : []),
    ];

    return {
      downPayment,
      closingCosts,
      dpa,
      cashRebate,
      heroesRewards,
      cashToClose_NW,
      cashToClose_other,
      savings,
      nwSegments,
      downPct,
      ctcPct_NW,
      ctcPct_other,
      programLabel: program.label,
    };
  }, [purchasePrice, sellerCredit, loanProgram]);

  const animatedSavings = useCountUp(calc.savings);

  const parseNum = (v: string) => {
    const n = parseInt(v.replace(/[^0-9]/g, ""), 10);
    return Number.isNaN(n) ? 0 : n;
  };

  /* ── Render ────────────────────────────────────────── */
  return (
    <div>
      {/* ── Hero Banner ── */}
      <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-28">
        {/* Animated gradient mesh */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-32 -top-32 h-[700px] w-[700px] rounded-full opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(28,150,197,0.18) 0%, transparent 65%)",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-40 -left-20 h-[600px] w-[600px] rounded-full opacity-100"
            style={{
              background: "radial-gradient(circle, rgba(28,150,197,0.12) 0%, transparent 60%)",
              animation: "float 8s ease-in-out infinite 4s",
            }}
          />
          <div
            className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(28,150,197,0.08) 0%, transparent 70%)",
              animation: "float 10s ease-in-out infinite 2s",
            }}
          />
        </div>

        {/* Wave pattern (brand-aligned) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-[0.06]">
          <svg viewBox="0 0 1440 100" fill="none" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0 50c240-40 480 40 720 0s480-40 720 0v50H0z" fill="white" />
            <path d="M0 65c200-30 400 30 600 0s400-30 600 0 400 30 600 0v35H0z" fill="white" opacity="0.5" />
          </svg>
        </div>

        {/* Decorative orbs (desktop) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="absolute left-[7%] top-[20%]"
            style={{ animation: "float 7s ease-in-out infinite 1s" }}
          >
            <div className="h-3 w-3 rounded-full bg-teal/40" />
          </div>
          <div
            className="absolute left-[12%] bottom-[25%]"
            style={{ animation: "float 5s ease-in-out infinite 3s" }}
          >
            <div className="h-2 w-2 rounded-full bg-teal/30" />
          </div>
          <div
            className="absolute right-[10%] top-[30%]"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-teal/35" />
          </div>
          <div
            className="absolute right-[15%] bottom-[20%]"
            style={{ animation: "float 8s ease-in-out infinite 2s" }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          {/* Eyebrow with icon */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.08] px-4 py-1.5 backdrop-blur-sm">
            <svg className="h-4 w-4 text-teal" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Rewards Calculator
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            See How Much You{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-teal via-[#5dd8f0] to-teal bg-clip-text text-transparent">
                Save
              </span>
              <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-teal/0 via-teal to-teal/0" />
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Estimate your upfront cost reduction with Next Wave&apos;s DPA,
            cash rebate, and rewards programs.
          </p>

          {/* Scroll hint */}
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-1.5 text-white/25">
              <span className="text-[11px] font-medium uppercase tracking-wider">Scroll to calculate</span>
              <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator Section ───────────────────────── */}
      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[100px]" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-navy/[0.04] blur-[100px]" />

        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* ── Inputs ─────────────────────────────── */}
          <div className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(43,84,100,0.06)] sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Purchase Price */}
              <div>
                <label className="mb-1.5 block text-sm font-bold text-navy">
                  Home Purchase Price
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-0 top-0 flex h-full w-10 items-center justify-center rounded-l-xl bg-teal text-sm font-bold text-white">
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={purchasePrice.toLocaleString("en-US")}
                    onChange={(e) => setPurchasePrice(parseNum(e.target.value))}
                    className="w-full rounded-xl border border-navy/[0.12] bg-white py-3 pl-14 pr-4 text-[15px] font-semibold text-navy tabular-nums outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>
              </div>

              {/* Loan Program */}
              <div>
                <label className="mb-1.5 block text-sm font-bold text-navy">
                  Loan Program
                </label>
                <div className="flex gap-1 rounded-xl border border-navy/[0.12] bg-cream/60 p-1">
                  {PROGRAMS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setLoanProgram(p.id)}
                      className={`flex-1 rounded-lg px-2 py-2.5 text-center transition-all duration-200 ${
                        loanProgram === p.id
                          ? "bg-teal shadow-sm"
                          : "hover:bg-navy/[0.04]"
                      }`}
                    >
                      <span
                        className={`block text-sm font-bold leading-tight ${
                          loanProgram === p.id ? "text-white" : "text-navy/70"
                        }`}
                      >
                        {p.label}
                      </span>
                      <span
                        className={`block text-[10px] font-semibold leading-tight ${
                          loanProgram === p.id ? "text-white/70" : "text-navy/40"
                        }`}
                      >
                        {p.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Seller Credit */}
              <div>
                <label className="mb-1.5 block text-sm font-bold text-navy">
                  Seller Credit
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-0 top-0 flex h-full w-10 items-center justify-center rounded-l-xl bg-teal text-sm font-bold text-white">
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={sellerCredit.toLocaleString("en-US")}
                    onChange={(e) => setSellerCredit(parseNum(e.target.value))}
                    className="w-full rounded-xl border border-navy/[0.12] bg-white py-3 pl-14 pr-4 text-[15px] font-semibold text-navy tabular-nums outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>
              </div>

              {/* Down payment info */}
              <div className="flex items-end pb-1">
                <p className="text-sm text-navy/50">
                  {calc.programLabel} Minimum Down Payment:{" "}
                  <span className="font-bold text-navy">
                    {(calc.downPct * 100).toFixed(calc.downPct === 0 ? 0 : 1)}%
                  </span>{" "}
                  ({fmt.format(calc.downPayment)})
                </p>
              </div>
            </div>
          </div>

          {/* ── Next Wave Rewards (Hero feature) ─── */}
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10">
                <svg className="h-4.5 w-4.5 text-teal" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-lg font-extrabold text-navy">
                Your Next Wave Rewards
              </h2>
              <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-extrabold text-teal">
                6% Back
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* DPA Card */}
              <div className="relative overflow-hidden rounded-2xl border border-teal/15 bg-gradient-to-br from-teal/[0.04] to-transparent p-5">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-teal/[0.05]" />
                <p className="text-xs font-bold uppercase tracking-wider text-teal/70">
                  Down Payment Assistance
                </p>
                <p className="mt-2 text-3xl font-extrabold tabular-nums text-navy">
                  {fmt.format(calc.dpa)}
                </p>
                <p className="mt-1 text-sm text-navy/40">
                  5% of purchase price
                </p>
              </div>

              {/* Cash Rebate Card */}
              <div className="relative overflow-hidden rounded-2xl border border-teal/15 bg-gradient-to-br from-teal/[0.04] to-transparent p-5">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-teal/[0.05]" />
                <p className="text-xs font-bold uppercase tracking-wider text-teal/70">
                  Cash Rebate
                </p>
                <p className="mt-2 text-3xl font-extrabold tabular-nums text-navy">
                  {fmt.format(calc.cashRebate)}
                </p>
                <p className="mt-1 text-sm text-navy/40">
                  1% of purchase price
                </p>
              </div>
            </div>
          </div>

          {/* ── Unified Cost Comparison ────────────── */}
          <div className="mt-10">
            <h2 className="mb-4 text-lg font-extrabold text-navy">
              Cost Breakdown
            </h2>

            <div className="overflow-hidden rounded-2xl border border-navy/[0.08] bg-white shadow-[0_1px_3px_rgba(43,84,100,0.06)]">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-navy/[0.06] bg-cream/50 px-5 py-3 sm:px-6">
                <span className="text-xs font-bold uppercase tracking-wider text-navy/40" />
                <span className="w-24 text-right text-xs font-bold uppercase tracking-wider text-teal sm:w-28">
                  With NW
                </span>
                <span className="w-24 text-right text-xs font-bold uppercase tracking-wider text-navy/35 sm:w-28">
                  Without
                </span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-navy/[0.05]">
                <ComparisonRow
                  label={`${calc.programLabel} Down Payment (${(calc.downPct * 100).toFixed(calc.downPct === 0 ? 0 : 1)}%)`}
                  withNW={fmt.format(calc.downPayment)}
                  withoutNW={fmt.format(calc.downPayment)}
                />
                <ComparisonRow
                  label="Closing Costs (3%)"
                  withNW={fmt.format(calc.closingCosts)}
                  withoutNW={fmt.format(calc.closingCosts)}
                />
                <ComparisonRow
                  label="Down Payment Assistance (5%)"
                  withNW={`-${fmt.format(calc.dpa)}`}
                  withoutNW="—"
                  highlight="credit"
                  withoutMuted
                />
                <ComparisonRow
                  label="Cash Rebate (1%)"
                  withNW={`-${fmt.format(calc.cashRebate)}`}
                  withoutNW="—"
                  highlight="credit"
                  withoutMuted
                />
                {sellerCredit > 0 && (
                  <ComparisonRow
                    label="Seller Credit"
                    withNW={`-${fmt.format(sellerCredit)}`}
                    withoutNW={`-${fmt.format(sellerCredit)}`}
                    highlight="credit"
                  />
                )}
              </div>

              {/* Totals row */}
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t-2 border-navy/[0.10] bg-navy/[0.02] px-5 py-4 sm:px-6">
                <span className="text-sm font-extrabold text-navy">
                  Cash to Close
                </span>
                <span className="w-24 text-right text-lg font-extrabold tabular-nums text-teal sm:w-28 sm:text-xl">
                  {fmt.format(calc.cashToClose_NW)}
                </span>
                <span className="w-24 text-right text-lg font-extrabold tabular-nums text-navy/40 sm:w-28 sm:text-xl">
                  {fmt.format(calc.cashToClose_other)}
                </span>
              </div>
            </div>
          </div>

          {/* ── Visual Cash-to-Close Comparison ──── */}
          <div className="mt-10">
            <h2 className="mb-5 text-lg font-extrabold text-navy">
              Cash to Close Comparison
            </h2>

            <div className="space-y-4">
              {/* With Next Wave bar */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="h-4.5 w-4.5 text-teal" />
                    <span className="text-sm font-bold text-navy">With Next Wave</span>
                  </div>
                  <span className="text-xl font-extrabold tabular-nums text-teal sm:text-2xl">
                    {fmt.format(calc.cashToClose_NW)}
                  </span>
                </div>
                <div className="h-10 overflow-hidden rounded-xl bg-navy/[0.04] sm:h-12">
                  <div
                    className="flex h-full items-center rounded-xl bg-gradient-to-r from-teal to-teal/80 px-4 transition-all duration-700 ease-out"
                    style={{
                      width: `${Math.max(
                        calc.cashToClose_other > 0
                          ? (calc.cashToClose_NW / calc.cashToClose_other) * 100
                          : 0,
                        3,
                      )}%`,
                    }}
                  >
                    <span className="text-xs font-bold text-white/80">
                      {calc.ctcPct_NW.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Without Next Wave bar */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XIcon className="h-4.5 w-4.5 text-navy/30" />
                    <span className="text-sm font-bold text-navy/50">Without Next Wave</span>
                  </div>
                  <span className="text-xl font-extrabold tabular-nums text-navy/40 sm:text-2xl">
                    {fmt.format(calc.cashToClose_other)}
                  </span>
                </div>
                <div className="h-10 overflow-hidden rounded-xl bg-navy/[0.04] sm:h-12">
                  <div className="flex h-full w-full items-center rounded-xl bg-gradient-to-r from-navy/20 to-navy/10 px-4 transition-all duration-700 ease-out">
                    <span className="text-xs font-bold text-navy/40">
                      {calc.ctcPct_other.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Where Your Money Goes (Single donut) ── */}
          <div className="mt-10">
            <h2 className="mb-4 text-lg font-extrabold text-navy">
              Where Your Money Goes
            </h2>
            <div className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_1px_3px_rgba(43,84,100,0.06)]">
              <p className="mb-2 text-center text-sm font-semibold text-navy/40">
                With Next Wave Mortgage
              </p>
              <DonutChart segments={calc.nwSegments} />
            </div>
          </div>

          {/* ── Savings Banner ─────────────────────── */}
          {calc.savings > 0 && (
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-[#1a3d4a] shadow-[0_8px_40px_rgba(43,84,100,0.25)]">
              {/* Animated gradient orbs */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute -left-20 -top-20 h-60 w-60 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(28,150,197,0.2) 0%, transparent 70%)",
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(28,150,197,0.15) 0%, transparent 65%)",
                    animation: "float 6s ease-in-out infinite 3s",
                  }}
                />
                <div
                  className="absolute right-1/3 top-0 h-32 w-32 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(28,150,197,0.08) 0%, transparent 70%)",
                    animation: "float 8s ease-in-out infinite 1.5s",
                  }}
                />
              </div>

              {/* Decorative sparkles */}
              <div className="pointer-events-none absolute inset-0 hidden sm:block">
                <div
                  className="absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-teal/50"
                  style={{ animation: "float 4s ease-in-out infinite" }}
                />
                <div
                  className="absolute right-[12%] top-[25%] h-1 w-1 rounded-full bg-teal/40"
                  style={{ animation: "float 5s ease-in-out infinite 1s" }}
                />
                <div
                  className="absolute left-[15%] bottom-[20%] h-1 w-1 rounded-full bg-white/20"
                  style={{ animation: "float 6s ease-in-out infinite 2s" }}
                />
                <div
                  className="absolute right-[8%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-teal/30"
                  style={{ animation: "float 4.5s ease-in-out infinite 0.5s" }}
                />
              </div>

              <div className="relative flex flex-col items-center px-6 py-10 text-center sm:py-14">
                {/* Savings label */}
                <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.1] px-4 py-1.5">
                  <svg className="h-4 w-4 text-teal" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal">
                    Your Total Savings
                  </span>
                </div>

                {/* The big number */}
                <p
                  className="mt-5 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl font-extrabold tabular-nums text-transparent sm:text-7xl lg:text-8xl"
                  style={{
                    filter: "drop-shadow(0 0 40px rgba(28,150,197,0.3))",
                  }}
                >
                  {fmt.format(animatedSavings)}
                </p>

                <p className="mt-3 text-sm font-medium text-white/40 sm:text-base">
                  less to close with Next Wave vs. going elsewhere
                </p>

                {/* CTA button */}
                <Link
                  href={siteConfig.cta.href}
                  className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-teal px-8 py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(28,150,197,0.55)]"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">Ready? Get Pre-Approved</span>
                  <svg
                    className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
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
          )}
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <p className="text-xs leading-relaxed text-navy/40">
          <span className="font-bold text-navy/50">Disclaimer</span> —
          Rewards Calculator is for educational, estimation and illustrative
          purposes only. The estimates are based on information you provide.
          Qualification may require additional information. Please consult
          with a licensed mortgage professional for personalized advice and
          information regarding your specific scenario. This is not a
          commitment to lend.
        </p>
      </section>
    </div>
  );
}

/* ── Comparison Row sub-component ──────────────────────── */
function ComparisonRow({
  label,
  withNW,
  withoutNW,
  highlight,
  withoutMuted = false,
}: {
  label: string;
  withNW: string;
  withoutNW: string;
  highlight?: "credit";
  withoutMuted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-5 py-3 sm:px-6">
      <span
        className={`text-sm ${
          highlight === "credit"
            ? "font-semibold text-teal"
            : "text-navy/70"
        }`}
      >
        {label}
      </span>
      <span
        className={`w-24 text-right text-sm font-bold tabular-nums sm:w-28 ${
          highlight === "credit" ? "text-teal" : "text-navy"
        }`}
      >
        {withNW}
      </span>
      <span
        className={`w-24 text-right text-sm tabular-nums sm:w-28 ${
          withoutMuted ? "font-medium text-navy/25" : "font-bold text-navy/50"
        }`}
      >
        {withoutNW}
      </span>
    </div>
  );
}
