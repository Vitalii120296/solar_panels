import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Accountability", href: "/#accountability" },
  { label: "Quality", href: "/#quality" },
  { label: "Health and Safety", href: "/#health" },
  { label: "Operation and Maintenance", href: "/#operation" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Blog", href: "/#blog" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto bg-background/35 border-10 border-white/0 text-sidebar-foreground">
      <div className="absolute -z-10 inset-0 backdrop-blur-md pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="section-eyebrow text-primary">Renewables</p>
            <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
              Robinson &amp; Lawlor
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-sidebar-foreground/75 sm:text-base">
              Reliable. Precise. Proven. End-to-end utility-scale renewable
              engineering with directly managed UK teams.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-sidebar-foreground/90 sm:mb-4">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-col sm:gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-relaxed text-sidebar-foreground/75 transition-colors duration-300 hover:text-sidebar-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-sidebar-foreground/90 sm:mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-sidebar-foreground/75">
              <li>
                <a
                  href="mailto:info@robinsonandlawlor.co.uk"
                  className="break-all transition-colors duration-300 hover:text-sidebar-accent"
                >
                  info@robinsonandlawlor.co.uk
                </a>
              </li>
              <li>United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-sidebar-border/30 pt-6 text-sm text-sidebar-foreground/60 sm:mt-10 sm:gap-3 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Robinson &amp; Lawlor. All rights reserved.</p>
          <p>Utility-scale solar construction &amp; engineering</p>
        </div>
      </div>
    </footer>
  );
}
