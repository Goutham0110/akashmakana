import Image from "next/image";
import { hero } from "@content/home";
import { Container, Eyebrow, Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative isolate grid min-h-[min(100svh,56rem)] grid-rows-[1fr_auto] overflow-hidden border-b border-hairline sm:min-h-[min(94svh,48rem)]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_38%] [filter:saturate(1.04)_contrast(1.03)]"
        />
        <div className="absolute inset-0 [background:linear-gradient(to_top,var(--background)_2%,color-mix(in_oklab,var(--background)_34%,transparent)_44%,color-mix(in_oklab,var(--background)_74%,transparent)_100%),linear-gradient(105deg,color-mix(in_oklab,var(--background)_78%,transparent)_8%,transparent_62%)]" />
      </div>

      <Container className="relative flex max-w-[54rem] flex-col self-end pb-[var(--space-lg)] pt-[var(--space-xl)]">
        <Eyebrow className="mb-[var(--space-sm)]">{hero.eyebrow}</Eyebrow>
        <h1 className="display mb-[var(--space-md)] max-w-[15ch] text-[clamp(2.75rem,9vw,5.75rem)]">
          {hero.headline}
          <span className="block text-accent">{hero.headlineAccent}</span>
        </h1>
        <div className="mb-[var(--space-md)] flex flex-wrap gap-[var(--space-xs)]">
          <Button href="/contact" size="lg">
            Plan a night
          </Button>
          <Button href="/work" variant="ghost" size="lg">
            See the work
          </Button>
        </div>
        <p className="max-w-[46ch] text-[1.05rem] text-foreground">{hero.note}</p>
      </Container>

      <div
        aria-hidden="true"
        className="relative overflow-hidden border-t border-hairline bg-[color-mix(in_oklab,var(--background)_88%,transparent)] backdrop-blur-sm"
      >
        <ul className="flex w-max animate-[marquee_34s_linear_infinite] list-none gap-6 whitespace-nowrap py-3 font-display text-[0.8rem] uppercase tracking-[0.04em] text-faint motion-reduce:animate-none sm:gap-10 sm:py-3.5 sm:text-[0.9rem]">
          {[...hero.marquee, ...hero.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-6 after:text-accent after:content-['/'] sm:gap-10">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
