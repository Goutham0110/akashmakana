"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { projects, workFilters, type WorkFilter } from "@content/work";

const spanClass: Record<string, string> = {
  wide: "sm:col-span-6 lg:col-span-4 lg:aspect-[16/10]",
  tall: "sm:col-span-3 lg:col-span-2 lg:aspect-[4/5]",
  mid: "sm:col-span-3 lg:col-span-3 lg:aspect-[3/2]",
};

const spanSizes: Record<string, string> = {
  wide: "(min-width: 60rem) 66vw, (min-width: 44rem) 100vw, 100vw",
  tall: "(min-width: 60rem) 33vw, (min-width: 44rem) 50vw, 100vw",
  mid: "(min-width: 60rem) 50vw, (min-width: 44rem) 50vw, 100vw",
};

function IconButton({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`grid h-12 w-12 place-items-center rounded-md border border-hairline-strong bg-[color-mix(in_oklab,var(--background)_60%,transparent)] transition-[background-color,border-color] duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:border-foreground hover:bg-background ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

export default function WorkGallery() {
  const [filter, setFilter] = useState<WorkFilter["id"]>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (dir: number) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        return (i + dir + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) {
      dialog.showModal();
    }
  }, [openIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      const returnTo = openIndex;
      setOpenIndex(null);
      if (returnTo !== null) triggerRefs.current[returnTo]?.focus();
    };
    const onCancel = (e: Event) => {
      e.preventDefault();
      close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      }
    };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? visible[openIndex] : null;

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="sticky top-[4.5rem] z-20 flex flex-wrap items-center gap-2.5 bg-[color-mix(in_oklab,var(--background)_92%,transparent)] py-[var(--space-md)] backdrop-blur-md"
      >
        {workFilters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`min-h-11 rounded-pill border px-4 py-2 text-[0.9rem] font-semibold tracking-[0.01em] transition-[color,border-color,background-color] duration-[var(--dur-fast)] ease-[var(--ease-out)] ${
                active
                  ? "border-accent bg-accent text-accent-contrast"
                  : "border-hairline-strong text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          );
        })}
        <span
          aria-live="polite"
          className="ml-auto text-[0.85rem] tracking-[0.02em] text-faint"
        >
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="grid gap-3 py-[var(--space-md)] sm:grid-cols-6 lg:gap-5">
        {visible.length === 0 ? (
          <p className="col-span-full rounded-md border border-dashed border-hairline-strong px-[var(--space-md)] py-[var(--space-xl)] text-center text-muted">
            No projects in that format yet. Try another filter.
          </p>
        ) : (
          visible.map((project, i) => (
            <button
              key={project.id}
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => setOpenIndex(i)}
              className={`group relative block aspect-[3/2] w-full overflow-hidden rounded-md border border-hairline bg-surface text-left ${spanClass[project.span]}`}
            >
              <span className="absolute left-3 top-3 z-10 rounded-sm bg-accent px-2 py-0.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-accent-contrast">
                {project.tag}
              </span>
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-sm border border-hairline-strong bg-[color-mix(in_oklab,var(--background)_70%,transparent)] opacity-0 transition-opacity duration-[var(--dur-fast)] ease-[var(--ease-out)] group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:opacity-100"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                </svg>
              </span>
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes={spanSizes[project.span]}
                priority={i === 0}
                className="object-cover [filter:saturate(0.9)_brightness(0.8)] transition-[transform,filter] duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-[1.04] group-hover:[filter:saturate(1.06)_brightness(1)] group-focus-visible:scale-[1.04] group-focus-visible:[filter:saturate(1.06)_brightness(1)] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
              />
              <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_94%,transparent)_10%,transparent)] px-[var(--space-xs)] pb-[var(--space-xs)] pt-[var(--space-md)]">
                <strong className="font-display text-[1.05rem] font-normal uppercase tracking-[0.01em]">
                  {project.title}
                </strong>
                <span className="text-[0.82rem] text-muted">{project.meta}</span>
              </span>
            </button>
          ))
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Project image viewer"
        className="m-auto w-[min(92vw,68rem)] max-w-none overflow-hidden rounded-md border border-hairline-strong bg-surface p-0 text-foreground backdrop:bg-[color-mix(in_oklab,#000_82%,transparent)] backdrop:backdrop-blur-sm"
      >
        {current && (
          <>
            <IconButton
              label="Close viewer"
              onClick={close}
              className="absolute right-3 top-3 z-[2]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </IconButton>
            <div className="relative grid max-h-[74vh] min-h-[40vh] place-items-center bg-surface-sunken">
              <IconButton
                label="Previous image"
                onClick={() => step(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </IconButton>
              <Image
                key={current.id}
                src={current.image.full}
                alt={current.image.alt}
                width={current.image.width * 2}
                height={current.image.height * 2}
                sizes="92vw"
                className="max-h-[74vh] w-full object-contain"
              />
              <IconButton
                label="Next image"
                onClick={() => step(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </IconButton>
            </div>
            <div className="flex items-center justify-between gap-[var(--space-sm)] border-t border-hairline px-[var(--space-sm)] py-[var(--space-xs)]">
              <div>
                <strong className="block font-display text-[1.1rem] font-normal uppercase">
                  {current.title}
                </strong>
                <span className="text-[0.85rem] text-muted">
                  {current.fullMeta}
                </span>
              </div>
              <span className="whitespace-nowrap text-[0.8rem] tracking-[0.08em] text-faint">
                {(openIndex ?? 0) + 1} / {visible.length}
              </span>
            </div>
            <p className="px-[var(--space-sm)] pb-[var(--space-xs)] text-[0.8rem] text-faint">
              Placeholder imagery. Arrow keys navigate, Esc closes.
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
