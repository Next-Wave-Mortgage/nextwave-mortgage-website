"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { leadership, team, teamDetails, type TeamMember } from "@/lib/team";

/* ───────────────────────── Compact Hero ───────────────────────── */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-teal/[0.12] blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-teal/[0.08] blur-[80px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-12 text-center sm:py-14 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Meet Our{" "}
          <span className="text-teal">Team</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Licensed professionals with decades of combined experience — here to
          guide you through every step.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── Initials Avatar ─────────────────────── */

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy to-teal">
      <span className="text-4xl font-extrabold text-white/80 sm:text-5xl">
        {initials}
      </span>
    </div>
  );
}

/* ──────────────────── Founders Row (Phil + Ryan) ──────────────── */

function FounderCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const hasDetail = member.slug in teamDetails;

  const card = (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-navy/[0.08] bg-white shadow-[0_4px_24px_rgba(43,84,100,0.06)] transition-all duration-700 hover:shadow-[0_12px_40px_rgba(43,84,100,0.12)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="h-1 bg-gradient-to-r from-teal via-teal/80 to-navy" />
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="origin-top scale-[1.12] object-cover object-top transition-transform duration-500 group-hover:scale-[1.15]"
            sizes="(max-width: 640px) 100vw, 384px"
          />
        ) : (
          <InitialsAvatar name={member.name} />
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="w-full p-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
              NMLS #{member.nmls}
            </span>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="p-5 text-center">
        <div className="mb-2 inline-flex items-center rounded-full bg-teal/[0.08] px-3 py-1 text-[10px] font-bold tracking-wider text-teal">
          {member.title === "President" ? "PRESIDENT" : "FOUNDER"}
        </div>
        <h3 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-teal">{member.title}</p>
        {hasDetail && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-teal/[0.08] px-4 py-1.5 text-xs font-bold text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
            View Profile
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (hasDetail) {
    return <Link href={`/our-team/${member.slug}`}>{card}</Link>;
  }
  return card;
}

function FoundersSection() {
  return (
    <section className="bg-cream py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {leadership.map((member, i) => (
            <FounderCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Team Member Card ─────────────────────── */

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hasDetail = member.slug in teamDetails;

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

  const card = (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl border border-navy/[0.06] bg-white shadow-[0_2px_16px_rgba(43,84,100,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(43,84,100,0.1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${(index % 5) * 80}ms` }}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="origin-top scale-[1.12] object-cover object-top transition-transform duration-500 group-hover:scale-[1.15]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <InitialsAvatar name={member.name} />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="w-full p-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
              NMLS #{member.nmls}
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 text-center sm:p-5">
        <h3 className="text-base font-extrabold tracking-tight text-navy sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs font-medium text-teal sm:text-sm">
          {member.title}
        </p>
        {hasDetail && (
          <span className="mt-2.5 inline-flex items-center gap-1 rounded-lg bg-teal/[0.08] px-3 py-1 text-[11px] font-bold text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
            View Profile
            <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (hasDetail) {
    return <Link href={`/our-team/${member.slug}`}>{card}</Link>;
  }
  return card;
}

/* ──────────────────────── Team Grid Section ───────────────────── */

function TeamGridSection() {
  return (
    <section className="relative bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-2 text-xs font-bold tracking-[0.2em] text-teal">
            THE TEAM
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Your Dedicated Mortgage Experts
          </h2>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Join CTA Section ─────────────────────── */

function JoinCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-teal/[0.1] blur-[100px]" />
        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-teal/[0.06] blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Want to Be Part of the Wave?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          We&apos;re always looking for talented loan officers who want better
          tools, better splits, and a team that actually has their back.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/loan-originators"
            className="group relative overflow-hidden rounded-xl bg-teal px-7 py-3 text-sm font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.5)]"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              Learn About Joining
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
            href="/brokerx-program"
            className="group flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-teal/30 hover:bg-teal/10 hover:text-white"
          >
            BrokerX Program
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
    </section>
  );
}

/* ──────────────────────── Page Composition ─────────────────────── */

export default function OurTeamPage() {
  return (
    <>
      <Hero />
      <FoundersSection />
      <TeamGridSection />
      <JoinCTA />
    </>
  );
}
