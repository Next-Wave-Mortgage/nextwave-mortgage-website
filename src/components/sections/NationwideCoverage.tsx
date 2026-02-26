const hotspots = [
  { state: "TX", left: "45%", top: "75%", delay: "0s" },
  { state: "CO", left: "33%", top: "46%", delay: "0.8s" },
  { state: "FL", left: "82%", top: "86%", delay: "1.6s" },
  { state: "MA", left: "92%", top: "24%", delay: "2.4s" },
];

const stats = [
  { value: "All 50 States", icon: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  )},
  { value: "NMLS #2536820", icon: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
    </svg>
  )},
  { value: "Growing Nationwide", icon: (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  )},
];

export default function NationwideCoverage() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-teal/[0.05] blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy/[0.03] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">
            We Got You Covered
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[42px]">
            National Network, Local Focus
          </h2>
          <p className="mt-4 text-lg text-navy/60">
            Personalized support for loan officers backed by the resources
            and competitive solutions of a rapidly growing national brand.
          </p>
        </div>

        {/* USA map */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/United_States_Map.webp"
            alt="Map of the United States showing nationwide coverage"
            width={800}
            height={500}
            className="w-full opacity-60"
          />

          {/* Hotspot pings */}
          {hotspots.map((spot) => (
            <div
              key={spot.state}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: spot.left, top: spot.top }}
            >
              <span
                className="absolute -inset-2 animate-ping rounded-full bg-teal/40"
                style={{
                  animationDelay: spot.delay,
                  animationDuration: "2.5s",
                }}
              />
              <span className="relative block h-3 w-3 rounded-full bg-teal shadow-[0_0_8px_rgba(28,150,197,0.5)]" />
            </div>
          ))}
        </div>

        {/* Stat row */}
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-navy/[0.08] bg-white/60 px-6 py-5 shadow-[0_1px_3px_rgba(43,84,100,0.06)]">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/[0.07] text-teal ring-1 ring-teal/10">
                  {stat.icon}
                </div>
                <span className="text-sm font-bold text-navy sm:text-base">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment copy */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-[15px] leading-relaxed text-navy/55">
            As we continue to grow rapidly, we remain committed to providing the
            expertise, resources, and competitive solutions to help you succeed.
          </p>
          <p className="mt-3 text-sm font-bold text-navy/70">
            Your goals. Our commitment. The Next Wave difference.
          </p>
        </div>
      </div>
    </section>
  );
}
