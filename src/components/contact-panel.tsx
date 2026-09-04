// Primary contact block for the /contact page. Swaps in for <BookingForm />
// (kept intact in booking-form.tsx) without touching the page around it -
// see src/app/contact/page.tsx.

import { site } from "@/lib/site";
import { asideBlocks } from "@content/contact";
import { Eyebrow, Placeholder } from "@/components/ui";

const channels = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "Call or WhatsApp",
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
];

export default function ContactPanel() {
  return (
    <div className="grid gap-[var(--space-sm)]">
      <div className="relative overflow-hidden rounded-md border border-hairline-strong bg-surface px-[var(--space-md)] py-[var(--space-lg)] [background:radial-gradient(120%_140%_at_12%_8%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%),var(--surface)]">
        <Eyebrow className="mb-[var(--space-xs)]">Reach us directly</Eyebrow>
        <p className="max-w-[var(--measure)] text-[1.05rem] text-muted">
          Send the date, the format and a rough size. We reply within one
          working day and follow up with a plan within three.
        </p>

        <ul className="mt-[var(--space-md)] grid gap-[var(--space-xs)] sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                className="group flex min-h-14 flex-col justify-center rounded-md border border-hairline-strong bg-background px-5 py-3 transition-[border-color,transform,box-shadow] duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_12px_40px_-16px_var(--accent-glow)]"
              >
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-faint">
                  {channel.label}
                </span>
                <span className="font-display text-[1.05rem] text-foreground transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] group-hover:text-accent-bright">
                  {channel.value}
                </span>
              </a>
              <Placeholder />
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md border border-hairline-strong px-[var(--space-md)] py-[var(--space-sm)]">
        <h2 className="mb-2 font-display text-[1.15rem] font-normal uppercase">
          {asideBlocks.ready.title}
        </h2>
        <ul className="grid gap-2">
          {asideBlocks.ready.items.map((item) => (
            <li
              key={item}
              className="grid grid-cols-[1.5rem_1fr] gap-2 text-[0.95rem] text-muted"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className="mt-1 h-[1.1rem] w-[1.1rem] text-accent"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
