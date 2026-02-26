import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large radial glow top-right */}
        <div className="absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full bg-teal/[0.12] blur-[120px]" />
        {/* Smaller accent bottom-left */}
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-teal/[0.08] blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Diagonal accent lines */}
        <div className="absolute -right-20 top-1/2 h-px w-[600px] -rotate-[30deg] bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
        <div className="absolute -left-20 top-1/3 h-px w-[400px] -rotate-[30deg] bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      </div>

      {/* ── Flanking visual elements (desktop only) ── */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {/* Left — Concentric circles */}
        <div
          className="absolute left-[6%] top-1/2 -translate-y-1/2"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <div className="relative h-48 w-48 opacity-[0.08]">
            <div className="absolute inset-0 rounded-full border-2 border-white" />
            <div className="absolute inset-4 rounded-full border border-dashed border-white/70" />
            <div className="absolute inset-10 rounded-full bg-teal/30" />
          </div>
        </div>

        {/* Right — Ghost rate card */}
        <div
          className="absolute right-[6%] top-1/2 -translate-y-1/2"
          style={{ animation: "float 6s ease-in-out infinite 3s" }}
        >
          <div className="w-44 rounded-xl border border-white/[0.06] bg-white/[0.04] p-5 opacity-[0.07]">
            <div className="mb-3 h-3 w-20 rounded bg-white/60" />
            <div className="mb-2 h-8 w-28 rounded bg-teal/40" />
            <div className="mb-1.5 h-2 w-full rounded bg-white/30" />
            <div className="mb-1.5 h-2 w-3/4 rounded bg-white/30" />
            <div className="h-2 w-1/2 rounded bg-white/30" />
            <div className="mt-4 h-7 w-full rounded-lg bg-teal/30" />
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pb-40 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ride The Wave to{" "}
            <span className="relative inline-block text-teal">
              Homeownership
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8.5c50-7 100-7 148-1s100 5 148-2"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-teal/40"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-lg font-bold text-white/90 sm:text-xl">
            Big enough to back you. Small enough to know you.
          </p>

          {/* Body */}
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/70">
            At Next Wave, we bring the strength of enterprise-level tools
            together with the heart of a boutique firm — giving you seamless
            tech, direct access to leadership, and a culture of belonging. The
            result: faster closings, stronger client relationships, and real
            growth
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href={siteConfig.cta.href}
              className="group relative overflow-hidden rounded-xl bg-teal px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.5)] sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                {siteConfig.cta.label}
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/loan-originators"
              className="group flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:bg-teal/10 hover:text-white sm:px-8 sm:py-4 sm:text-base"
            >
              See How We&apos;re Different
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

        {/* ── Social proof bar ── */}
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-5 backdrop-blur sm:mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              {
                value: "NMLS #2536820",
                label: "Licensed Nationwide",
                icon: (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                value: "100%",
                label: "Digital Process",
                icon: (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
              },
              {
                value: "24hr",
                label: "Pre-Approval",
                icon: (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/[0.12] text-teal">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold leading-tight text-teal sm:text-base">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom removed — WaveTransition handles the visual bridge */}
    </section>
  );
}
