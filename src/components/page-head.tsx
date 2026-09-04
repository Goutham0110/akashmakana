import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

export default function PageHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-hairline">
      <Container className="pb-[var(--space-md)] pt-[var(--space-lg)]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display my-[var(--space-sm)] max-w-[16ch] text-[clamp(2.75rem,9vw,5.75rem)]">
          {title}
        </h1>
        {children && (
          <div className="max-w-[var(--measure)] text-muted">{children}</div>
        )}
      </Container>
    </div>
  );
}
