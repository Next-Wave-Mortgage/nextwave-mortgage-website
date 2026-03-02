"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(43,84,100,0.08)]" : ""
      }`}
    >
      {/* Accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-teal via-navy to-teal" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/images/Next_Wave_Mortgage_Logo.png"
            alt={siteConfig.name}
            width={220}
            height={56}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3.5 py-2 text-[15px] font-semibold text-navy transition-colors duration-200 hover:text-teal"
            >
              {item.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-teal transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}

          <Link
            href={siteConfig.cta.href}
            className="ml-4 rounded-lg bg-teal px-6 py-2.5 text-[15px] font-bold text-white shadow-[0_2px_12px_rgba(28,150,197,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_4px_20px_rgba(43,84,100,0.3)]"
          >
            {siteConfig.cta.label}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors duration-200 hover:bg-teal-light lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex h-5 w-6 flex-col items-center justify-center">
            <span
              className={`block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`mt-[4px] block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`mt-[4px] block h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay + menu */}
      <div
        className={`fixed inset-0 top-[calc(3px+3.5rem+1px)] z-40 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`relative mx-4 mt-2 overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(43,84,100,0.15)] transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-[16px] font-semibold text-navy transition-colors duration-200 hover:bg-teal-light hover:text-teal"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-gray-100 pt-4">
              <Link
                href={siteConfig.cta.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-teal px-5 py-3.5 text-center text-[16px] font-bold text-white shadow-[0_2px_12px_rgba(28,150,197,0.35)] transition-all duration-200 hover:bg-navy"
              >
                {siteConfig.cta.label}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
