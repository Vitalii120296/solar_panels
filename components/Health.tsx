import Image from "next/image";

const Health = () => {
  return (
    <section id="health" className="section-wrap">
      <div className="mx-auto flex flex-col gap-8 md:gap-10">
        <div className="mx-auto md:text-left">
          <p className="section-eyebrow text-center">Health &amp; Safety</p>
          <h2 className="section-title mt-3">Health &amp; Safety First</h2>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-12">
          <div className="relative mx-auto aspect-5/4 w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-border/60 shadow-md md:mx-0 md:max-w-xs lg:max-w-sm">
            <Image
              src="/images/health/safety_first.jpg"
              alt="Health and safety on site"
              fill
              className="object-cover"
            />
          </div>

          <div className="section-body space-y-4 sm:space-y-5">
            <p className="text-lg font-semibold text-foreground">
              We prioritize the health and safety of our team, clients, and
              communities.
            </p>
            <p>
              Our comprehensive health and safety program includes rigorous
              training, strict protocols, and continuous monitoring to ensure a
              safe working environment on all our projects.
            </p>
            <p className="font-semibold text-foreground">
              A strong safety culture is essential for project success and
              sustainability.
            </p>
            <p>
              We foster a culture of safety through regular training, open
              communication, and a commitment to continuous improvement in all
              aspects of our operations.
            </p>
            <p>
              Our permanent UK based site teams operate controlled,
              incident-free environments, protecting people, property and
              project timelines while safeguarding our clients&apos; reputation.
            </p>
            <p className="text-lg font-bold text-primary">
              Zero RIDDOR incidents in the last six years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Health;
