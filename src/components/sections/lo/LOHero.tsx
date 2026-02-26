import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const stats = [
  {
    value: "1 Week",
    label: "Onboarding",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    value: "Daily",
    label: "Inbound Leads",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path d="M12.577 18.89a.75.75 0 01-.497-.186l-4.126-3.59a4.999 4.999 0 01-1.702-3.757V5.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v6.107a3.5 3.5 0 001.192 2.63l4.126 3.59a.75.75 0 01-.993 1.313zM8.75 3.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM15.75 6a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z" />
        <path d="M17.25 4.5H13.5a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5z" />
      </svg>
    ),
  },
  {
    value: "7-14 Day",
    label: "Closings",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function LOHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-52 sm:pb-56 lg:pb-60">
      {/* ── Full-bleed background image ────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="/images/lo-hero.png"
          alt=""
          fill
          className="object-cover object-[center_30%]"
          priority
          quality={90}
        />
        {/* Multi-layer overlay for text readability */}
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/50" />
      </div>

      {/* ── Decorative accents on top ──────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal/[0.08] blur-[140px]" />
        <div className="absolute -bottom-48 -right-32 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[120px]" />
        <div className="absolute -left-20 top-1/2 h-px w-[600px] rotate-[25deg] bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
        <div className="absolute -right-20 top-1/3 h-px w-[500px] -rotate-[20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 sm:pt-40 lg:px-8 lg:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal backdrop-blur-sm sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            For Loan Originators
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Big Enough to Back You.
            <br />
            <span className="text-teal">Small Enough to Know You.</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Enterprise-level tools and leads with boutique-style mentorship,
            leadership access, and a culture that feels like home.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={siteConfig.cta.href}
              className="group relative overflow-hidden rounded-xl bg-teal px-8 py-4 text-sm font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.55)] sm:text-base"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex items-center gap-2">
                Join Next Wave
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

            <a
              href="#what-you-get"
              className="group flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:bg-teal/10 hover:text-white sm:text-base"
            >
              See What You Get
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/[0.1] bg-white/[0.05] px-6 py-5 backdrop-blur-md sm:mt-14">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/[0.15] text-teal">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-extrabold leading-tight text-teal sm:text-base">
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/50">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
