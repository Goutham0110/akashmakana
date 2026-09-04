import type { Metadata } from "next";
import PageHead from "@/components/page-head";
import WorkGallery from "@/components/work-gallery";
import { Container, Button, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected DJ nights, standup tours and live shows produced by AM Productions across India. All photography here is placeholder until the real gallery is supplied.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <PageHead eyebrow="Work" title="Nights we built, start to finish">
        <p>
          A working sample of the last two years. Filter by format. Every image
          is a placeholder until AM Productions supplies its own show
          photography.
        </p>
      </PageHead>

      <Container>
        <WorkGallery />
      </Container>

      <section className="py-[var(--space-xl)]">
        <Container>
          <CtaBand
            eyebrow="Planning something"
            heading="Your night could be the next one in this grid"
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
