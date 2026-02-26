const tools = [
  {
    title: "Loan Origination System",
    description: "Streamlined workflow from app to close",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Borrower Point of Sale",
    description: "Borrowers apply online in minutes",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Products & Pricing Engine",
    description: "Compare rates across lenders instantly",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Lender Integrations",
    description: "Real-time status, simplified submissions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.75}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
  },
];

export default function YourPlatform() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-teal/[0.08] blur-[140px]" />
        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-teal/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">
            Your Tech Stack
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Simple Tech, Powerful Results
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Cloud-based. 24/7 access. Everything in one place.
          </p>
        </div>

        {/* 2x2 frosted glass grid */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 backdrop-blur transition-all duration-300 hover:border-teal/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal ring-1 ring-teal/10 transition-colors duration-300 group-hover:bg-teal/[0.18] group-hover:ring-teal/25">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {tool.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/50">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing speed callout */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-teal/15 bg-white/[0.04] px-8 py-7 backdrop-blur">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={1.75}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>

            <div className="flex-1">
              <p className="text-base font-bold text-white sm:text-lg">
                Pre-underwriting before property selection{" "}
                <span className="text-teal">
                  &rarr; Close in 7-14 days
                </span>
              </p>
              <p className="mt-1 text-sm text-white/45">
                Compete with cash buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
