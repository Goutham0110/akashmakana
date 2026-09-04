import { clients } from "@content/home";
import { Container, Placeholder } from "@/components/ui";

export default function Clients() {
  return (
    <section
      className="py-[var(--space-lg)]"
      aria-labelledby="clients-title"
    >
      <Container>
        <p
          id="clients-title"
          className="mb-[var(--space-xs)] text-xs font-semibold uppercase tracking-[0.16em] text-faint"
        >
          Venues and brands we have built for
          <Placeholder />
        </p>
        <div
          data-settle
          className="flex flex-wrap items-center gap-x-[var(--space-lg)] gap-y-[var(--space-sm)]"
        >
          {clients.map((name) => (
            <span
              key={name}
              className="font-display text-[clamp(1.1rem,2.4vw,1.6rem)] uppercase tracking-[0.02em] text-faint"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
