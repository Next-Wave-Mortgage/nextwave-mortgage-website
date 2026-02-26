"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TeamMember, TeamMemberDetail } from "@/lib/team";

/* ───────────────────────── Initials Avatar ─────────────────────── */

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-teal">
      <span className="text-6xl font-extrabold text-white/80 sm:text-7xl">
        {initials}
      </span>
    </div>
  );
}

/* ───────────────────── Animated Section Wrapper ────────────────── */

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────── Contact Icon SVGs ─────────────────────── */

function EnvelopeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v9.75" />
    </svg>
  );
}

/* ──────────────────────── Page Component ───────────────────────── */

export default function TeamMemberPage({
  member,
  detail,
}: {
  member: TeamMember;
  detail: TeamMemberDetail;
}) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-teal/[0.12] blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-teal/[0.08] blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
          <Link
            href="/our-team"
            className="group mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-teal"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Team
          </Link>
          <div className="text-center">
            <div className="mb-2 inline-flex items-center rounded-full bg-teal/[0.12] px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-teal">
              {member.title.toUpperCase()}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {member.name}
            </h1>
            <p className="mt-2 text-sm text-white/50">
              NMLS# {member.nmls}
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
            {/* Left Column — Photo + Contact */}
            <FadeIn>
              <div className="space-y-6">
                {/* Photo Card */}
                <div className="overflow-hidden rounded-2xl border border-navy/[0.08] bg-white shadow-[0_4px_24px_rgba(43,84,100,0.06)]">
                  <div className="h-1 bg-gradient-to-r from-teal via-teal/80 to-navy" />
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="origin-top scale-[1.12] object-cover"
                        sizes="380px"
                        priority
                      />
                    ) : (
                      <InitialsAvatar name={member.name} />
                    )}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_4px_24px_rgba(43,84,100,0.06)]">
                  <h3 className="mb-4 text-xs font-bold tracking-[0.15em] text-navy/40">
                    CONTACT
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${detail.email}`}
                      className="flex items-center gap-3 text-sm text-navy/70 transition-colors hover:text-teal"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/[0.08] text-teal">
                        <EnvelopeIcon />
                      </span>
                      {detail.email}
                    </a>
                    <a
                      href={`tel:${detail.phone.replace(/-/g, "")}`}
                      className="flex items-center gap-3 text-sm text-navy/70 transition-colors hover:text-teal"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/[0.08] text-teal">
                        <PhoneIcon />
                      </span>
                      {detail.phone}
                    </a>
                    {detail.location && (
                      <div className="flex items-center gap-3 text-sm text-navy/70">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/[0.08] text-teal">
                          <MapPinIcon />
                        </span>
                        {detail.location}
                      </div>
                    )}
                    {detail.calendlyUrl && (
                      <a
                        href={detail.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-navy/70 transition-colors hover:text-teal"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/[0.08] text-teal">
                          <CalendarIcon />
                        </span>
                        Schedule a Meeting
                      </a>
                    )}
                  </div>

                  {/* Licensed States */}
                  <div className="mt-5 border-t border-navy/[0.06] pt-5">
                    <h4 className="mb-2 text-xs font-bold tracking-[0.15em] text-navy/40">
                      LICENSED IN
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {detail.licensedStates.map((state) => (
                        <span
                          key={state}
                          className="rounded-md bg-navy/[0.05] px-2.5 py-1 text-xs font-semibold text-navy/60"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply CTA */}
                  <a
                    href={detail.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.4)]"
                  >
                    Apply Now
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Right Column — Bio */}
            <FadeIn delay={150}>
              <div className="space-y-8">
                {/* Bio */}
                <div>
                  <h2 className="mb-1 text-xs font-bold tracking-[0.15em] text-teal">
                    ABOUT
                  </h2>
                  <h3 className="mb-5 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    {member.name}
                  </h3>
                  <div className="space-y-4">
                    {detail.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-navy/70"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                {detail.expertise && detail.expertise.length > 0 && (
                  <div className="rounded-2xl border border-navy/[0.08] bg-white p-6 shadow-[0_2px_16px_rgba(43,84,100,0.04)]">
                    <h3 className="mb-4 text-xs font-bold tracking-[0.15em] text-navy/40">
                      AREAS OF EXPERTISE
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {detail.expertise.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 rounded-lg bg-cream/80 px-3.5 py-2.5"
                        >
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          <span className="text-sm font-medium text-navy/70">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Personal */}
                {detail.personal && detail.personal.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-xs font-bold tracking-[0.15em] text-navy/40">
                      BEYOND THE OFFICE
                    </h3>
                    <div className="space-y-4">
                      {detail.personal.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-[15px] leading-relaxed text-navy/70"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
