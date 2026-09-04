"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Arms the CSS settle-in. Content is visible by default; we only add the
// hidden state (`.settle-armed` on <html>) once the observer and a hard
// fallback are in place, then reveal each [data-settle] element on scroll.
// Re-runs on route change so a fresh page's elements get observed.
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>(
      "[data-settle], [data-settle-stagger]",
    );

    const revealAll = () => {
      root.classList.remove("settle-armed");
      els.forEach((el) => el.classList.add("is-in"));
    };

    if (!els.length || reduce || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    root.classList.add("settle-armed");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    els.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(revealAll, 1600);
    window.addEventListener("beforeprint", revealAll);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("beforeprint", revealAll);
      root.classList.remove("settle-armed");
    };
  }, [pathname]);

  return null;
}
