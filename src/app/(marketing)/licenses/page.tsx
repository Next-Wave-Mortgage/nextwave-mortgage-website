import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Licenses | Next Wave Mortgage",
  description:
    "View state licenses and regulatory information for Next Wave Mortgage, LLC. NMLS ID 2536820.",
};

/* ─── License data ─── */

interface License {
  state: string;
  abbr: string;
  lines: string[];
  note?: string;
}

const licenses: License[] = [
  {
    state: "Colorado",
    abbr: "CO",
    lines: ["Regulated by DORA"],
  },
  {
    state: "Florida",
    abbr: "FL",
    lines: ["Florida Mortgage Lender | License #MLD2501"],
  },
  {
    state: "Massachusetts",
    abbr: "MA",
    lines: ["Massachusetts Mortgage Broker | License # MB2536820"],
    note: "In Massachusetts we are a mortgage broker, which means we arrange loans but we do not make loans.",
  },
  {
    state: "New Hampshire",
    abbr: "NH",
    lines: ["New Hampshire Mortgage Banker | License # 26847-MB"],
  },
  {
    state: "Rhode Island",
    abbr: "RI",
    lines: [
      "Rhode Island Loan Broker License | License # 20244752LB",
      "Rhode Island Lender License | License # 20244751LL",
    ],
  },
  {
    state: "Texas",
    abbr: "TX",
    lines: [],
    note: "Consumers wishing to file a complaint against a company or a residential mortgage loan originator should complete and send a complaint form to the Texas Department of Savings and Mortgage Lending, 2601 North Lamar, Suite 201, Austin, Texas 78705. Complaint forms and instructions may be obtained from the Department\u2019s website at www.sml.texas.gov. A toll-free consumer hotline is available at 1-877-276-5550. The Department maintains a recovery fund to make payments of certain actual out of pocket damages sustained by borrowers caused by acts of licensed residential mortgage loan originators. A written application for reimbursement from the recovery fund must be filed with and investigated by the Department prior to the payment of a claim. For more information about the recovery fund, please consult the Department\u2019s website at www.sml.texas.gov.",
  },
];

/* ─── Icon ─── */

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

/* ─── Page ─── */

export default function LicensesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-teal/[0.12] blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-teal/[0.08] blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-12 text-center sm:py-14 lg:px-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal/[0.12] px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-teal">
            <ShieldIcon />
            NMLS# {siteConfig.nmls}
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            State <span className="text-teal">Licenses</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            {siteConfig.companyName} is licensed to operate in the following
            states. For additional information, visit the{" "}
            <a
              href={siteConfig.nmlsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal underline underline-offset-2 transition-colors hover:text-teal/80"
            >
              NMLS Consumer Access
            </a>{" "}
            page.
          </p>
        </div>
      </section>

      {/* Licenses Grid */}
      <section className="bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-4">
            {licenses.map((lic) => (
              <div
                key={lic.abbr}
                className="overflow-hidden rounded-2xl border border-navy/[0.08] bg-white shadow-[0_2px_16px_rgba(43,84,100,0.05)]"
              >
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  {/* State badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/[0.05]">
                    <span className="text-sm font-extrabold text-navy">
                      {lic.abbr}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold tracking-tight text-navy">
                      {lic.state}
                    </h2>
                    {lic.lines.map((line, i) => (
                      <p
                        key={i}
                        className="mt-1 text-sm text-navy/60"
                      >
                        {line}
                      </p>
                    ))}
                    {lic.note && (
                      <div className="mt-3 rounded-lg bg-cream/80 p-3.5 text-xs leading-relaxed text-navy/50">
                        {lic.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NMLS Link */}
          <div className="mt-8 text-center">
            <a
              href={siteConfig.nmlsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(43,84,100,0.3)]"
            >
              <ShieldIcon />
              Visit NMLS Consumer Access
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
