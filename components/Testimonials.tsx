const TESTIMONIALS = [
  {
    quote:
      "I have worked with Robinson and Lawlor for over ten years on multiple utility-scale solar farm projects. They consistently deliver high-quality mechanical and electrical installation to an excellent standard. Reliable, professional and detail-focused.",
    name: "Mick Wilkie",
    role: "Project Manager — Greencells GmbH",
  },
  {
    quote:
      "Iqony has worked with Robinson and Lawlor for several years across major solar projects. They delivered safely, on time, and managed site operations, installation and electrical works to a high standard.",
    name: "James Bracegirdle",
    role: "Managing Director — Iqony Renewables UK",
  },
  {
    quote:
      "I am pleased to recommend Robinson and Lawlor for Solar PV and electrical contracting. Their professionalism and quality have been consistent across all projects over the last 5+ years.",
    name: "Hamza Kose",
    role: "Principal Engineer — Ameresco",
  },
  {
    quote:
      "From tendering to commissioning, Robinson and Lawlor demonstrated a controlled, professional approach with strong management of programme, quality and safety.",
    name: "Gary McKiernan",
    role: "Operations Director — Greenvolt Next UK",
  },
] as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <article className="surface-card surface-card-hover group flex flex-col border-l-4 border-l-primary/80 p-5 sm:p-6 md:p-8">
      <div
        className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-6xl leading-none text-primary/10 transition-colors duration-300 group-hover:text-primary/15 sm:text-8xl"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <blockquote className="relative z-10 flex-1 text-base leading-7 text-foreground/90">
        {quote}
      </blockquote>

      <footer className="relative z-10 mt-5 flex items-center gap-3 border-t border-border/60 pt-4 sm:mt-6 sm:gap-4 sm:pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold tracking-wide text-primary ring-2 ring-primary/15 sm:h-11 sm:w-11">
          {getInitials(name)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{name}</p>
          <p className="text-sm leading-snug text-muted-foreground">{role}</p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrap">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3 text-center sm:gap-4">
          <p className="section-eyebrow">
            Decades of Delivery • Trusted Partnerships
          </p>

          <h2 className="section-title">
            Experience, Reliability{" "}
            <br className="hidden sm:block" />
            and Results you can measure
          </h2>

          <p className="mx-auto max-w-2xl text-base font-semibold leading-relaxed sm:text-lg">
            69 years in engineering, 20+ years in renewables, 15+ years
            specialising in solar.
          </p>
        </div>

        <p className="section-lead mx-auto max-w-3xl text-center">
          For nearly seven decades, Robinson and Lawlor has built infrastructure
          that lasts. Our clients — EPCs — rely on us for certainty, quality and
          accountability.
        </p>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
