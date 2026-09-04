import Image from "next/image";
import Link from "next/link";
import { services } from "@content/services";
import { Container } from "@/components/ui";

export default function Offer() {
  return (
    <section className="py-[var(--space-xl)]" aria-labelledby="offer-title">
      <Container>
        <div className="mb-[var(--space-md)] grid gap-[var(--space-md)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[var(--space-lg)]">
          <div data-settle>
            <h2
              id="offer-title"
              className="display text-[clamp(2.1rem,6vw,3.75rem)]"
            >
              Three kinds of night, one crew
            </h2>
          </div>
          <p
            data-settle
            className="max-w-[var(--measure)] text-[clamp(1.15rem,2.2vw,1.4rem)] leading-[1.5] text-muted"
          >
            Same people from the first call to load-out. You are not handed to a
            junior team once the contract is signed.
          </p>
        </div>

        <div
          data-settle-stagger
          className="grid gap-3 sm:grid-cols-2"
        >
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-md border border-hairline sm:min-h-[26rem]"
            >
              <span className="absolute left-4 top-4 z-10 flex h-9 min-w-9 items-center justify-center rounded-sm bg-accent px-2 font-display text-sm tracking-[0.04em] text-accent-contrast">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(min-width: 40rem) 50vw, 100vw"
                className="object-cover [filter:saturate(0.92)_brightness(0.8)] transition-[transform,filter] duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04] group-hover:[filter:saturate(1.05)_brightness(0.92)] group-focus-visible:scale-[1.04] group-focus-visible:[filter:saturate(1.05)_brightness(0.92)] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <span className="relative z-10 flex flex-col gap-2 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_94%,transparent)_30%,transparent)] px-[var(--space-sm)] pb-[var(--space-sm)] pt-[var(--space-lg)]">
                <h3 className="display text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-normal">
                  {service.title}
                </h3>
                <p className="max-w-[42ch] text-[0.95rem] text-muted">
                  {service.teaser}
                </p>
                <span className="mt-1 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-accent-bright">
                  View this service
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="h-4 w-4 flex-none transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out)] group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
