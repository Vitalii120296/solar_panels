export default function OperationAndMaintenance() {
  return (
    <section id="operation" className="section-wrap">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12">
        <div className="space-y-3 text-center sm:space-y-4">
          <p className="section-eyebrow">O + M and Asset Longevity</p>
          <h2 className="section-title">
            Built to deliver. <br className="hidden sm:block" />
            Maintained to perform.
          </h2>
          <p className="section-lead mx-auto max-w-xl">
            Our work doesn&apos;t end at handover.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <p className="text-xl font-semibold leading-snug sm:text-2xl">
              Supporting <span className="text-primary">750MWp</span> of
              operational assets nationwide.
            </p>

            <p className="section-body text-muted-foreground">
              We provide dedicated operation and maintenance services that keep
              assets performing at design yield. From corrective maintenance to
              quality checks, testing and documentation, we ensure EPCs and
              developers enjoy long-term returns with minimal downtime.
            </p>
          </div>

          <article className="surface-card relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <p className="section-eyebrow">Long-term value</p>
              <h3 className="text-xl font-semibold sm:text-2xl">
                Enduring performance
              </h3>

              <p className="section-body text-muted-foreground">
                Safeguarded for the long term through proactive maintenance
                strategies, precision monitoring, and continuous optimisation
                across all assets.
              </p>
            </div>

            <div className="relative z-10 mt-6 border-t border-border/60 pt-5 sm:mt-8">
              <div className="flex flex-wrap gap-2">
                {[
                  "Operation & Maintenance",
                  "Quality Assurance",
                  "Asset Management",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-foreground/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <p className="text-center text-base font-bold text-primary sm:text-lg">
          Enduring performance, safeguarded for the long term.
        </p>
      </div>
    </section>
  );
}
