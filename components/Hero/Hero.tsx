import HeroAnimations from "./HeroAnimations";

const HERO_STATS = [
  { value: "1.2GW+", label: "Installed nationwide" },
  { value: "20+", label: "Years in renewables" },
  { value: "Zero", label: "RIDDOR incidents" },
];

function Hero() {
  return (
    <>
      <div
        id="hero-background"
        className="pointer-events-none fixed inset-0 -z-10 h-lvh w-full overflow-hidden"
        aria-hidden="true"
      >
        <video
          id="hero-video"
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/video/solar_panel.mp4" type="video/mp4" />
        </video>

        <div id="hero-overlay" className="absolute inset-0 bg-black/60" />
      </div>

      <section
        id="hero"
        className="relative z-10 h-screen min-h-[640px]  overflow-hidden"
      >
        <div className="relative flex h-screen flex-col justify-between gap-6 px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:gap-8 md:px-10 md:pb-12 md:pt-32 lg:px-16 lg:pb-14">
          <div
            id="title-background"
            className="hero-glass mx-auto w-full max-w-4xl rounded-2xl"
          >
            <div className="px-4 py-6 text-center sm:px-6 sm:py-8 md:px-10 md:py-10">
              <p
                id="hero-eyebrow"
                className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary sm:mb-4 sm:text-xs sm:tracking-[0.28em] md:text-sm"
              >
                Utility-Scale Solar
              </p>
              <h1
                id="title"
                className="hero-text-shadow text-[1.75rem] font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Utility-Scale Renewable Engineering.
              </h1>
              <p
                id="subtitle"
                className="hero-text-shadow mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg md:text-xl"
              >
                Reliable. Precise. Proven.
              </p>
            </div>
          </div>

          <div className="grid items-end gap-4 sm:gap-6 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div id="hero-content">
              <div className="hero-glass max-w-xl space-y-3 rounded-2xl p-4 sm:space-y-4 sm:p-6 md:p-7">
                <p className="border-l-2 border-primary pl-3 text-sm leading-relaxed text-white/95 sm:pl-4 sm:text-base md:text-lg">
                  Projects don&apos;t fail on paper. They fail on site.
                </p>
                <p className="border-l-2 border-white/25 pl-3 text-sm leading-relaxed text-white/80 sm:pl-4 md:text-base">
                  Well-managed, UK-based teams delivering every aspect of
                  utility-scale construction.
                </p>
                <p className="hidden border-l-2 border-white/25 pl-3 text-sm leading-relaxed text-white/80 sm:block sm:pl-4 md:text-base">
                  End-to-end control ensures certainty, quality, and predictable
                  outcomes on every project.
                </p>
              </div>
            </div>

            <div
              id="hero-stats"
              className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:flex-col"
            >
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="hero-glass rounded-xl px-2.5 py-2.5 sm:min-w-36 sm:px-4 sm:py-3"
                >
                  <p className="text-lg font-bold text-primary sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[0.6rem] uppercase leading-tight tracking-wide text-white/70 sm:mt-1 sm:text-xs sm:tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="scroll-hint"
          className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:bottom-6 sm:flex sm:gap-3"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/55">
            Scroll to explore
          </span>
          <div className="relative h-14 w-px overflow-hidden bg-white/15">
            <div className="animate-scroll-line absolute inset-0 bg-linear-to-b from-primary to-primary/20" />
          </div>
        </div>
      </section>

      <HeroAnimations />
    </>
  );
}

export default Hero;
