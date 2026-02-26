const features = [
  {
    num: "01",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: "Mortgage-Focused",
    description: "Not a bank side project. This is all we do.",
  },
  {
    num: "02",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
    title: "Lower Overhead, Better Rates",
    description: "Lean operations mean savings we pass to you.",
  },
  {
    num: "03",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    title: "Direct Access",
    description: "Talk to decision-makers, not phone trees.",
  },
];

export default function TheDifference() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Top edge divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/[0.08] to-transparent" />

      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px] rounded-full bg-teal/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy/[0.02] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — Header + accent */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              Why Next Wave
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
              The Difference
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Built lean. Built fast. Built around you.
            </p>

            {/* Decorative accent block */}
            <div className="pointer-events-none mt-12 hidden select-none lg:block">
              <div className="flex items-end gap-3">
                <span className="text-[140px] font-extrabold leading-none tracking-tight text-navy/[0.03]">
                  03
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-1 w-12 rounded-full bg-teal/30" />
                <div className="h-1 w-6 rounded-full bg-teal/15" />
                <div className="h-1 w-3 rounded-full bg-teal/10" />
              </div>
            </div>
          </div>

          {/* Right — Numbered feature rows */}
          <div className="flex flex-col">
            {features.map((feature, i) => (
              <div key={feature.num} className="group relative">
                {/* Divider between rows */}
                {i > 0 && (
                  <div className="mx-1 h-px bg-gradient-to-r from-navy/[0.08] via-navy/[0.06] to-transparent" />
                )}

                {/* Row content */}
                <div className="relative overflow-hidden rounded-2xl px-5 py-8 transition-all duration-300 hover:bg-cream/50 sm:px-6 sm:py-9">
                  {/* Left accent bar on hover */}
                  <div className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-teal opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-5">
                    {/* Number + icon */}
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-2xl font-extrabold tabular-nums text-teal/25 transition-colors duration-300 group-hover:text-teal/60 sm:text-3xl">
                        {feature.num}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/[0.07] text-teal ring-1 ring-teal/10 transition-colors duration-300 group-hover:bg-teal/[0.12] group-hover:ring-teal/20">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-lg font-bold text-navy sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-navy/55 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
