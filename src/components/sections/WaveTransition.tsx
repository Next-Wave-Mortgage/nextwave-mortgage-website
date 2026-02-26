export default function WaveTransition() {
  return (
    <div
      className="relative z-10 overflow-hidden pointer-events-none"
      style={{ marginTop: "-10rem", marginBottom: "-2px" }}
    >
      {/* Navy fill — top 60% */}
      <div
        className="absolute inset-x-0 top-0"
        style={{ height: "60%", backgroundColor: "#2B5464" }}
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/wave-transition.svg"
        alt=""
        role="presentation"
        className="relative block w-full"
        style={{ height: "clamp(140px, 20vw, 320px)" }}
      />

      {/* Fade wave bottom to cream for seamless Guarantees transition */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "40%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(250,249,245,0.5) 50%, #FAF9F5 100%)",
        }}
      />
    </div>
  );
}
