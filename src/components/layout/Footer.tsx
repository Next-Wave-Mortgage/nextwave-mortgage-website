"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

/* ── Icons ── */

function MapPinIcon() {
  return (
    <svg
      className="mt-0.5 h-[18px] w-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="mt-0.5 h-[18px] w-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="mt-0.5 h-[18px] w-[18px] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  );
}

/* Placeholder social icons — swap for real SVGs when URLs are added */
function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.866 20.452H3.809V9h3.057v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: FacebookIcon,
    href: siteConfig.social.facebook,
    label: "Facebook",
  },
  {
    icon: InstagramIcon,
    href: siteConfig.social.instagram,
    label: "Instagram",
  },
  {
    icon: LinkedInIcon,
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
  },
];

const activeSocials = socialLinks.filter((s) => s.href);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {/* ─── CTA banner ─── */}
      <section className="relative isolate overflow-hidden bg-navy">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-teal/15 blur-[80px]" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-teal/20 via-teal/5 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-20 sm:flex-row sm:py-16 lg:px-8">
          <div className="max-w-xl sm:max-w-none">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              Ready to get started?
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Get Pre-Approved in Minutes
            </h2>
            <p className="mt-3 text-lg text-white/60">
              Fast, easy, and hassle-free — your path to homeownership starts
              here.
            </p>
          </div>

          <Link
            href={siteConfig.cta.href}
            className="group relative shrink-0 overflow-hidden rounded-xl bg-teal px-10 py-4.5 text-lg font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(28,150,197,0.5)]"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              {siteConfig.cta.label}
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </section>

      {/* ─── Main footer ─── */}
      <div className="relative bg-[#1e3f4d]">
        {/* Top edge glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_auto]">
            {/* Col 1 — Brand */}
            <div className="flex flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Next_Wave_Mortgage_Logo.webp"
                alt={siteConfig.name}
                width={164}
                height={44}
                className="brightness-0 invert"
              />

              <p className="mt-6 text-[15px] leading-relaxed text-white/60">
                {siteConfig.companyName}
                <span className="mx-2 text-white/20">|</span>
                NMLS ID{" "}
                <a
                  href={siteConfig.nmlsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white/80 underline decoration-white/20 underline-offset-2 transition-all duration-200 hover:text-teal hover:decoration-teal"
                >
                  {siteConfig.nmls}
                </a>
              </p>

              <p className="mt-1.5 text-sm text-white/30">
                &copy; {new Date().getFullYear()} {siteConfig.companyName}. All
                rights reserved.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-3">
                {(activeSocials.length > 0
                  ? activeSocials
                  : socialLinks
                ).map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/40 ring-1 ring-white/10 transition-all duration-200 hover:bg-teal/20 hover:text-teal hover:ring-teal/30"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Contact */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                Contact Info
              </h3>

              <ul className="mt-6 flex flex-col gap-5 text-[15px] text-white/60">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 transition-colors duration-200 hover:text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-200 group-hover:bg-teal/20 group-hover:ring-teal/30">
                      <MapPinIcon />
                    </span>
                    <span className="pt-1 leading-snug">
                      {siteConfig.contact.address}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-center gap-3 transition-colors duration-200 hover:text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-200 group-hover:bg-teal/20 group-hover:ring-teal/30">
                      <EnvelopeIcon />
                    </span>
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                    className="group flex items-center gap-3 transition-colors duration-200 hover:text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-all duration-200 group-hover:bg-teal/20 group-hover:ring-teal/30">
                      <PhoneIcon />
                    </span>
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 — Links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                General Info
              </h3>

              <ul className="mt-6 flex flex-col gap-3.5">
                {siteConfig.footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center text-[15px] text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      <span className="mr-2 h-px w-0 bg-teal transition-all duration-300 group-hover:w-4" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Back to top */}
            <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-start">
              <button
                type="button"
                onClick={scrollToTop}
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-teal/20 hover:text-teal hover:ring-teal/30 hover:shadow-[0_4px_20px_rgba(28,150,197,0.2)]"
                aria-label="Back to top"
              >
                <ArrowUpIcon />
              </button>
              <span className="mt-2 text-[11px] font-medium tracking-wider text-white/20">
                TOP
              </span>
            </div>
          </div>

          {/* ─── Divider ─── */}
          <div className="mt-14 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="h-1.5 w-1.5 rounded-full bg-teal/30" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* ─── Legal disclaimers ─── */}
          <div className="mt-8 flex flex-col gap-3">
            {siteConfig.legal.map((text, i) => (
              <p key={i} className="text-[11px] leading-relaxed text-white/25">
                {text}
              </p>
            ))}
            <p className="text-[11px] leading-relaxed text-white/25">
              Complaints may be directed to:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline underline-offset-2 transition-colors duration-200 hover:text-white/40"
              >
                {siteConfig.contact.email}
              </a>
              . For licensing information, please visit{" "}
              <a
                href={siteConfig.nmlsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors duration-200 hover:text-white/40"
              >
                nmlsconsumeraccess.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
