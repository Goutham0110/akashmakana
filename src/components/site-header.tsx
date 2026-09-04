"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, primaryCta } from "@content/nav";
import { Container } from "@/components/ui";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 52rem)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-[100] border-b backdrop-blur-md transition-[background-color,border-color] duration-[var(--dur)] ease-[var(--ease-out)] ${
        scrolled
          ? "border-hairline bg-[color-mix(in_oklab,var(--background)_94%,transparent)]"
          : "border-transparent bg-[color-mix(in_oklab,var(--background)_82%,transparent)]"
      }`}
    >
      <Container>
        <div className="flex min-h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="AM Productions home"
            className="inline-flex items-baseline gap-[0.4ch] whitespace-nowrap font-display text-xl uppercase leading-none tracking-[0.02em]"
          >
            AM<span className="text-accent">.</span>Productions
            <span className="self-center text-[0.6rem] font-semibold tracking-[0.22em] text-faint">
              EST. INDIA
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-hairline-strong lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="h-6 w-6"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          <nav
            id="primary-nav"
            aria-label="Primary"
            data-open={open}
            className="max-lg:fixed max-lg:inset-x-0 max-lg:top-[4.5rem] max-lg:z-[110] max-lg:flex-col max-lg:items-stretch max-lg:gap-0 max-lg:border-b max-lg:border-hairline max-lg:bg-surface max-lg:px-5 max-lg:pb-6 max-lg:pt-4 max-lg:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)] max-lg:transition-[opacity,transform] max-lg:duration-[var(--dur)] max-lg:ease-[var(--ease-out)] max-lg:data-[open=false]:pointer-events-none max-lg:data-[open=false]:-translate-y-2 max-lg:data-[open=false]:opacity-0 max-sm:px-5 flex lg:static lg:flex-row lg:items-center lg:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className="group relative border-b border-hairline py-4 text-lg font-medium text-muted transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:text-foreground aria-[current=page]:text-foreground lg:border-0 lg:py-2 lg:text-[0.9375rem]"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-[var(--dur)] ease-[var(--ease-out)] group-hover:scale-x-100 group-aria-[current=page]:scale-x-100 lg:block" />
              </Link>
            ))}
            <Link
              href={primaryCta.href}
              className="mt-4 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-accent px-6 py-3 text-[0.9375rem] font-semibold text-accent-contrast transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:bg-accent-bright lg:mt-0"
            >
              {primaryCta.label}
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
