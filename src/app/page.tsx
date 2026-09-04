import Hero from "./sections/hero";
import TrackRecord from "./sections/track-record";
import Offer from "./sections/offer";
import SelectedWork from "./sections/selected-work";
import Clients from "./sections/clients";
import { Container, Button, CtaBand } from "@/components/ui";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrackRecord />
      <SelectedWork />
      <hr className="border-hairline" />
      <Clients />
      <hr className="border-hairline" />
      <Offer />
      <section className="pb-[var(--space-xl)]">
        <Container>
          <CtaBand heading="Tell us the date. We will tell you what it takes.">
            <Button href="/contact" size="lg">
              Start a booking
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Read the services
            </Button>
          </CtaBand>
        </Container>
      </section>
    </main>
  );
}
