import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/page-head";
import Process from "@/app/sections/process";
import { services, addOns } from "@content/services";
import {
  Container,
  Eyebrow,
  Button,
  CtaBand,
  Placeholder,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What AM Productions handles: DJ and music nights, standup and comedy tours, live concerts, and full turnkey event production across India.",
};

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="mt-1 h-[1.1rem] w-[1.1rem] flex-none text-accent"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHead eyebrow="Services" title="What we actually do on the day">
        <p>
          Four ways to work with us. Pick the one that matches where you are.
          Copy below is placeholder written in the AM Productions voice, ready to
          be replaced.
        </p>
      </PageHead>

      <Container>
        <nav
          aria-label="Jump to service"
          className="sticky top-[4.5rem] z-20 flex flex-wrap gap-2 border-b border-hairline bg-[color-mix(in_oklab,var(--background)_92%,transparent)] py-[var(--space-sm)] backdrop-blur-md"
        >
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="rounded-pill border border-hairline-strong px-3.5 py-2 text-[0.85rem] font-semibold text-muted transition-[color,border-color] duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:border-foreground hover:text-foreground"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </Container>

      <Container>
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-h`}
            className="grid scroll-mt-32 gap-[var(--space-md)] border-b border-hairline py-[var(--space-lg)] last:border-b-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-[var(--space-lg)]"
          >
            <div data-settle>
              <span className="font-display text-[0.95rem] tracking-[0.05em] text-accent">
                {service.index}
              </span>
              <h2
                id={`${service.id}-h`}
                className="display my-2 mb-[var(--space-xs)] text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-normal"
              >
                {service.title}
              </h2>
              <p className="mb-[var(--space-sm)] text-[1.05rem] text-foreground">
                {service.lede}
              </p>
              <ul className="grid gap-2.5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[1.25rem_1fr] gap-2.5 text-[0.98rem] text-muted"
                  >
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-[var(--space-sm)] flex flex-wrap items-center gap-x-[var(--space-sm)] gap-y-[var(--space-xs)]">
                <Button href="/contact">{service.cta}</Button>
                <span className="text-[0.85rem] text-faint">
                  {service.priceHint}
                  {service.priceHintPlaceholder && <Placeholder />}
                </span>
              </div>
            </div>

            <figure
              data-settle
              className={`relative aspect-[4/3] overflow-hidden rounded-md border border-hairline ${
                i % 2 === 1 ? "lg:order-first" : ""
              }`}
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(min-width: 60rem) 50vw, 100vw"
                className="object-cover [filter:saturate(0.95)_brightness(0.85)]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_92%,transparent),transparent)] px-[var(--space-xs)] pb-[var(--space-2xs)] pt-[var(--space-sm)] text-[0.78rem] text-muted">
                {service.image.caption}
                <Placeholder />
              </figcaption>
            </figure>
          </section>
        ))}
      </Container>

      <section className="py-[var(--space-xl)]" aria-labelledby="addon-title">
        <Container>
          <div data-settle className="mb-[var(--space-md)]">
            <Eyebrow className="mb-[var(--space-xs)]">Bolt-ons</Eyebrow>
            <h2
              id="addon-title"
              className="display text-[clamp(2.1rem,6vw,3.75rem)]"
            >
              Add these to any booking
            </h2>
          </div>
          <div
            data-settle
            className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
          >
            {addOns.map((addon) => (
              <div
                key={addon.title}
                className="bg-surface px-[var(--space-xs)] py-[var(--space-sm)]"
              >
                <h3 className="mb-1.5 font-display text-base font-normal uppercase">
                  {addon.title}
                </h3>
                <p className="text-[0.9rem] text-muted">{addon.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <hr className="border-hairline" />

      <Process />

      <section className="pb-[var(--space-xl)]">
        <Container>
          <CtaBand
            eyebrow="Not sure which one"
            heading="Send the date and the rough idea. We will point you at the right one."
          >
            <Button href="/contact" size="lg">
              Start a booking
            </Button>
          </CtaBand>
        </Container>
      </section>
    </main>
  );
}
