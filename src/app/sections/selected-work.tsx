import { homeTeaser } from "@content/work";
import { Container, ArrowLink, Placeholder } from "@/components/ui";
import ProjectFrame from "@/components/project-frame";

const spanClass = [
  "col-span-2 row-span-2 md:col-span-4",
  "row-span-2 md:col-span-2 md:row-span-1",
  "row-span-2 md:col-span-2 md:row-span-1",
  "col-span-2 md:col-span-3 md:row-span-2",
  "col-span-2 md:col-span-3 md:row-span-2",
];

const spanSizes = [
  "(min-width: 46rem) 66vw, 100vw",
  "(min-width: 46rem) 33vw, 50vw",
  "(min-width: 46rem) 33vw, 50vw",
  "(min-width: 46rem) 50vw, 100vw",
  "(min-width: 46rem) 50vw, 100vw",
];

export default function SelectedWork() {
  return (
    <section className="py-[var(--space-xl)]" aria-labelledby="work-title">
      <Container>
        <div className="mb-[var(--space-md)] grid gap-[var(--space-md)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[var(--space-lg)]">
          <div data-settle>
            <h2
              id="work-title"
              className="display text-[clamp(2.1rem,6vw,3.75rem)]"
            >
              Recent nights
              <Placeholder />
            </h2>
          </div>
          <p
            data-settle
            className="max-w-[var(--measure)] text-[clamp(1.15rem,2.2vw,1.4rem)] leading-[1.5] text-muted"
          >
            A slice of the last two years. Every photo here is a stand-in until
            AM Productions supplies its own show gallery.
          </p>
        </div>

        <div
          data-settle
          className="grid grid-cols-2 gap-3 [grid-auto-rows:clamp(8rem,32vw,10rem)] md:grid-cols-6 md:[grid-auto-rows:clamp(9rem,15vw,13rem)]"
        >
          {homeTeaser.map((project, i) => (
            <ProjectFrame
              key={project.id}
              project={project}
              className={spanClass[i]}
              sizes={spanSizes[i]}
            />
          ))}
        </div>

        <p className="mt-[var(--space-md)]">
          <ArrowLink href="/work">See the full gallery</ArrowLink>
        </p>
      </Container>
    </section>
  );
}
