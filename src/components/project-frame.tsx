import Image from "next/image";
import Link from "next/link";
import type { Project } from "@content/work";

// A single mosaic tile linking to the work page. The Work page itself uses a
// button variant that opens the lightbox instead.
export default function ProjectFrame({
  project,
  className,
  sizes,
}: {
  project: Project;
  className?: string;
  sizes: string;
}) {
  return (
    <Link
      href="/work"
      className={`group relative block min-h-48 overflow-hidden rounded-md border border-hairline bg-surface ${className ?? ""}`}
    >
      <span className="absolute left-3 top-3 z-10 rounded-sm bg-accent px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-accent-contrast">
        {project.tag}
      </span>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={sizes}
        className="object-cover [filter:saturate(0.92)_brightness(0.82)] transition-[transform,filter] duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04] group-hover:[filter:saturate(1.05)_brightness(1)] group-focus-visible:[filter:saturate(1.05)_brightness(1)] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_92%,transparent),transparent)] px-[var(--space-xs)] pb-[var(--space-xs)] pt-[var(--space-sm)]">
        <strong className="font-display text-[1.05rem] font-normal uppercase tracking-[0.01em]">
          {project.title}
        </strong>
        <span className="text-[0.82rem] text-muted">{project.meta}</span>
      </span>
    </Link>
  );
}
