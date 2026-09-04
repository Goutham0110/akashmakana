import Link from "next/link";
import { navLinks } from "@content/nav";
import { site } from "@/lib/site";
import { Container, Placeholder } from "@/components/ui";

const linkClass =
  "w-fit text-muted transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:text-foreground";
const labelClass =
  "mb-[var(--space-xs)] text-xs font-semibold uppercase tracking-[0.16em] text-faint";

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface-sunken pb-[var(--space-md)] pt-[var(--space-lg)]">
      <Container>
        <div className="grid gap-[var(--space-md)] md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display mb-[var(--space-xs)] text-[clamp(2.1rem,6vw,3.75rem)]">
              AM<span className="text-accent">.</span>Productions
            </p>
            <p className="max-w-[var(--measure)] text-muted">
              An event production house run by Akash Makana. Based in India, on
              the road most weekends.
            </p>
          </div>

          <div>
            <p className={labelClass}>Site</p>
            <nav className="flex flex-col gap-3" aria-label="Footer">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className={labelClass}>Get in touch</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${site.contact.email}`} className={linkClass}>
                {site.contact.email}
                <Placeholder />
              </a>
              <a href={site.contact.phoneHref} className={linkClass}>
                {site.contact.phone}
                <Placeholder />
              </a>
              <a href="#" className={linkClass}>
                Instagram
                <Placeholder />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-lg)] flex flex-wrap items-center justify-between gap-4 gap-x-[var(--space-md)] border-t border-hairline pt-[var(--space-sm)] text-sm text-faint">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. Content and photography
            pending.
          </span>
          <span>Built by AM Productions</span>
        </div>
      </Container>
    </footer>
  );
}
