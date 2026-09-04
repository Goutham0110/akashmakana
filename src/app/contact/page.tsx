import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/page-head";
import ContactPanel from "@/components/contact-panel";
import { asideBlocks } from "@content/contact";
import { Container, Placeholder } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell AM Productions the date, the format and the rough size. You get a single-page plan and a fixed quote within three working days.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHead eyebrow="Contact" title="Tell us the date and the idea">
        <p>You get a single-page plan and a fixed quote within three working days.</p>
      </PageHead>

      <Container>
        <div className="grid gap-[var(--space-lg)] py-[var(--space-lg)] lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-[var(--space-xl)]">
          <ContactPanel />

          <aside aria-label="Other ways to reach us" className="grid gap-[var(--space-md)]">
            <div>
              <h2 className="mb-2 font-display text-[1.15rem] font-normal uppercase">
                {asideBlocks.where.title}
              </h2>
              <p className="text-[0.97rem] text-muted">{asideBlocks.where.body}</p>
            </div>

            <figure className="relative aspect-[3/2] overflow-hidden rounded-md border border-hairline">
              <Image
                src={asideBlocks.image.src}
                alt={asideBlocks.image.alt}
                fill
                sizes="(min-width: 60rem) 30vw, 100vw"
                className="object-cover [filter:saturate(0.9)_brightness(0.8)]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_90%,transparent),transparent)] px-[var(--space-xs)] pb-[var(--space-2xs)] pt-[var(--space-sm)] text-[0.78rem] text-muted">
                {asideBlocks.image.caption}
                <Placeholder />
              </figcaption>
            </figure>
          </aside>
        </div>
      </Container>
    </main>
  );
}
