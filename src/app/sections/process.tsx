import { process } from "@content/home";
import { Container } from "@/components/ui";

export default function Process() {
  return (
    <section className="py-[var(--space-xl)]" aria-labelledby="process-title">
      <Container>
        <div data-settle className="mb-[var(--space-md)]">
          <h2
            id="process-title"
            className="display text-[clamp(2.1rem,6vw,3.75rem)]"
          >
            Three stages, no surprises on the night
          </h2>
        </div>

        <ol
          data-settle-stagger
          className="grid gap-[var(--space-md)] lg:grid-cols-3"
        >
          {process.map((step, i) => (
            <li
              key={step.title}
              className="border-t-2 border-accent pt-[var(--space-sm)]"
            >
              <h3 className="mb-2 font-display text-[1.2rem] font-normal uppercase">
                <span className="text-faint">
                  {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;
                </span>
                {step.title}
              </h3>
              <p className="text-[0.98rem] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
