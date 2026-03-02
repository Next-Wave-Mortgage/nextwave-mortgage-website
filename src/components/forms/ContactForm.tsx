"use client";

import { useState } from "react";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormProps {
  type: "loan-officer" | "real-estate-agent";
  licenseLabel: string;
}

export default function ContactForm({ type, licenseLabel }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [noLicense, setNoLicense] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          state: data.get("state"),
          licenseId: noLicense ? "" : data.get("licenseId") || "",
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal/[0.1]">
          <svg
            className="h-7 w-7 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-navy">
          We&apos;ve Got Your Info!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-navy/55">
          A member of our team will reach out within 1 business day. Check your
          email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-navy">
            First Name <span className="text-teal">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            required
            className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold text-navy">
            Last Name <span className="text-teal">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            required
            className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="mb-1.5 block text-sm font-bold text-navy">
          Email <span className="text-teal">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1.5 block text-sm font-bold text-navy">
          Phone <span className="text-teal">*</span>
        </label>
        <input
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </div>

      {/* State */}
      <div>
        <label className="mb-1.5 block text-sm font-bold text-navy">
          State <span className="text-teal">*</span>
        </label>
        <select
          name="state"
          required
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
        >
          <option value="" disabled>
            Select your state
          </option>
          {US_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* License ID */}
      {!noLicense && (
        <div>
          <label className="mb-1.5 block text-sm font-bold text-navy">
            {licenseLabel}
          </label>
          <input
            name="licenseId"
            type="text"
            className="w-full rounded-xl border border-navy/[0.12] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
          />
        </div>
      )}

      {/* No license checkbox */}
      <label className="flex cursor-pointer items-center gap-2.5">
        <input
          type="checkbox"
          checked={noLicense}
          onChange={(e) => setNoLicense(e.target.checked)}
          className="h-4 w-4 rounded border-navy/20 text-teal accent-teal"
        />
        <span className="text-sm text-navy/60">
          I don&apos;t have my {licenseLabel} yet
        </span>
      </label>

      {/* Error */}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative mt-2 w-full overflow-hidden rounded-xl bg-teal py-4 text-base font-bold text-white shadow-[0_4px_24px_rgba(28,150,197,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(28,150,197,0.5)] disabled:pointer-events-none disabled:opacity-70"
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative inline-flex items-center gap-2">
          {status === "submitting" ? (
            <>
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </span>
      </button>
    </form>
  );
}
