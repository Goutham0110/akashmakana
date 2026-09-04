import { stats } from "@content/home";
import { Placeholder } from "@/components/ui";

export default function TrackRecord() {
  return (
    <section
      aria-label="Track record"
      className="grid gap-px border-y border-hairline bg-hairline sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          data-settle
          className="bg-background px-5 py-[var(--space-md)] sm:px-8 lg:px-12"
        >
          <div className="font-display text-[clamp(2.75rem,7vw,4.25rem)] leading-[0.9]">
            {stat.value}
            {stat.sup && (
              <sup className="ml-0.5 top-[-0.55em] text-[0.5em] text-accent">
                {stat.sup}
              </sup>
            )}
          </div>
          <p className="mt-3 text-[0.95rem] text-balance text-muted">
            {stat.label}
            {stat.placeholder && <Placeholder />}
          </p>
        </div>
      ))}
    </section>
  );
}
