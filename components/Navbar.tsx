"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Accountability", href: "/#accountability" },
  { label: "Quality", href: "/#quality" },
  { label: "Health & Safety", href: "/#health", shortLabel: "Health" },
  { label: "O&M", href: "/#operation", shortLabel: "O&M" },
  { label: "Testimonials", href: "/#testimonials", shortLabel: "Reviews" },
  { label: "Case Studies", href: "/#case-studies", shortLabel: "Cases" },
  { label: "Blog", href: "/#blog" },
] as const;

const linkClassName =
  "rounded-lg px-2 py-1.5 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white xl:px-3";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
          open ? "top-2 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300",
          open ? "top-2 -rotate-45" : "top-4",
        )}
      />
    </span>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="w-full px-3 pt-2 sm:px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <nav
          className={cn(
            "hero-glass flex items-center justify-between gap-2 rounded-2xl px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.28)] transition-all duration-300 sm:gap-3 sm:px-4 sm:py-2.5 md:px-5 md:py-3",
            scrolled &&
              "border-white/25 bg-black/45 shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
          )}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 flex-col leading-none"
            onClick={() => setMenuOpen(false)}
          >
            <span className="truncate text-sm font-bold tracking-tight text-white transition-colors group-hover:text-primary sm:text-base">
              Robinson &amp; Lawlor
            </span>
            <span className="mt-0.5 hidden text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-primary/90 sm:mt-1 sm:block sm:text-[0.65rem] sm:tracking-[0.22em]">
              Renewables
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  <span className="xl:hidden">
                    {"shortLabel" in link ? link.shortLabel : link.label}
                  </span>
                  <span className="hidden xl:inline">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <ThemeToggle />

            <Link
              href="mailto:info@robinsonandlawlor.co.uk"
              className="hidden rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 md:inline-flex"
            >
              Contact
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        <div
          id="mobile-nav"
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            menuOpen
              ? "mt-2 max-h-[calc(100dvh-5.5rem)] opacity-100 sm:mt-3"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="burger_menu_bg max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border-white/20 p-3 sm:p-4">
            <ul className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3.5 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="mailto:info@robinsonandlawlor.co.uk"
              className="mt-3 flex w-full min-h-11 items-center justify-center rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
