import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/page-head";
import {
  story,
  principles,
  crew,
  numbers,
  timeline,
} from "@content/about";
import {
  Container,
  Eyebrow,
  Button,
  ArrowLink,
  CtaBand,
  Placeholder,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "AM Productions is run by Akash Makana. A small event production crew that builds DJ nights, standup tours and live shows across India.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHead eyebrow="About" title="A small crew that has done a lot of nights">
        <p>
          Placeholder copy in the AM Productions voice. Swap for the real story,
          bios and photos once supplied.
        </p>
      </PageHead>

      <Container>
        <div className="grid gap-[var(--space-md)] py-[var(--space-lg)] lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-[var(--space-lg)]">
          <div data-settle>
            <p className="text-[clamp(1.15rem,2.2vw,1.4rem)] leading-[1.5] text-foreground">
              {story.lede}
            </p>
            {story.paragraphs.map((p) => (
              <p key={p} className="mt-[var(--space-sm)] text-muted">
                {p}
              </p>
            ))}
            <p className="mt-[var(--space-sm)]">
              <ArrowLink href="/contact">Work with us</ArrowLink>
            </p>
          </div>
          <figure
            data-settle
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-hairline"
          >
            <Image
              src={story.portrait.src}
              alt={story.portrait.alt}
              fill
              sizes="(min-width: 56rem) 45vw, 100vw"
              className="object-cover [filter:saturate(0.9)_brightness(0.85)]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_92%,transparent),transparent)] px-[var(--space-xs)] pb-[var(--space-2xs)] pt-[var(--space-sm)] text-[0.8rem] text-muted">
              {story.portrait.caption}
              <Placeholder />
            </figcaption>
          </figure>
        </div>
      </Container>

      <section aria-labelledby="principles-title">
        <Container className="pb-[var(--space-sm)] pt-[var(--space-md)]">
          <Eyebrow id="principles-title">How we work</Eyebrow>
        </Container>
        <div
          data-settle-stagger
          className="grid gap-px border-y border-hairline bg-hairline lg:grid-cols-3"
        >
          {principles.map((p) => (
            <div
              key={p.index}
              className="bg-background px-5 py-[var(--space-md)] sm:px-8 lg:px-12"
            >
              <h3 className="mb-2 font-display text-[1.15rem] font-normal uppercase">
                <span className="mr-2 text-accent">{p.index}</span>
                {p.title}
              </h3>
              <p className="text-[0.97rem] text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[var(--space-lg)]" aria-labelledby="team-title">
        <Container>
          <div data-settle className="mb-[var(--space-md)]">
            <Eyebrow className="mb-[var(--space-xs)]">The crew</Eyebrow>
            <h2
              id="team-title"
              className="display text-[clamp(2.1rem,6vw,3.75rem)]"
            >
              Who you will be dealing with
              <Placeholder />
            </h2>
          </div>
          <div
            data-settle
            className="grid gap-[var(--space-md)] [grid-template-columns:repeat(auto-fit,minmax(13rem,1fr))]"
          >
            {crew.map((member) => (
              <article key={member.name + member.role}>
                <div className="relative mb-[var(--space-sm)] aspect-[4/5] overflow-hidden rounded-md border border-hairline bg-surface">
                  <Image
                    src={member.photo.src}
                    alt={member.photo.alt}
                    fill
                    sizes="(min-width: 48rem) 25vw, 45vw"
                    className="object-cover [filter:grayscale(0.5)_brightness(0.85)]"
                  />
                </div>
                <h3 className="text-[1.05rem] font-semibold">
                  {member.name}
                  {member.placeholder && <Placeholder />}
                </h3>
                <p className="text-[0.9rem] text-muted">{member.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[var(--space-lg)]" aria-labelledby="numbers-title">
        <Container>
          <p
            id="numbers-title"
            className="mb-[var(--space-sm)] text-xs font-semibold uppercase tracking-[0.16em] text-faint"
          >
            By the numbers
            <Placeholder />
          </p>
          <div
            data-settle
            className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline sm:grid-cols-3"
          >
            {numbers.map((n) => (
              <div
                key={n.label}
                className="bg-surface px-[var(--space-xs)] py-[var(--space-sm)]"
              >
                <b className="mb-2 block font-display text-[clamp(2rem,5vw,3rem)] font-normal leading-[0.9]">
                  {n.value}
                  {n.sup && <span className="text-[0.7em] text-accent">{n.sup}</span>}
                </b>
                <span className="text-[0.9rem] text-muted">{n.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[var(--space-lg)]" aria-labelledby="story-title">
        <Container>
          <div data-settle className="mb-[var(--space-md)]">
            <Eyebrow className="mb-[var(--space-xs)]">Timeline</Eyebrow>
            <h2
              id="story-title"
              className="display text-[clamp(2.1rem,6vw,3.75rem)]"
            >
              How it grew
              <Placeholder />
            </h2>
          </div>
          <ol data-settle className="grid border-b border-hairline">
            {timeline.map((m) => (
              <li
                key={m.year}
                className="grid grid-cols-[5rem_1fr] gap-[var(--space-sm)] border-t border-hairline py-[var(--space-sm)]"
              >
                <time className="font-display text-[1.1rem] text-accent">
                  {m.year}
                </time>
                <p className="text-muted">
                  <strong className="block text-foreground">{m.title}</strong>
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-[var(--space-xl)]">
        <Container>
          <CtaBand
            eyebrow="Next step"
            heading="If the crew sounds right, send us a date"
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
