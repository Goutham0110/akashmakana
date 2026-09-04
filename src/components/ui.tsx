import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const cx = (...parts: (string | false | undefined)[]) =>
  parts.filter(Boolean).join(" ");

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "mx-auto w-full max-w-[var(--container-site)] px-5 sm:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  as: As = "p",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "h2";
  id?: string;
}) {
  return (
    <As
      id={id}
      className={cx(
        "inline-flex items-center text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-accent-bright",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Placeholder({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "ml-2 inline-block rounded-sm border border-dashed border-hairline-strong px-2 py-0.5 align-middle text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent-bright",
        className,
      )}
    >
      placeholder
    </span>
  );
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border px-6 py-3 text-[0.9375rem] font-semibold tracking-[0.02em] transition-[transform,background-color,border-color,color,box-shadow] duration-[var(--dur-fast)] ease-[var(--ease-out)] motion-reduce:transition-none";

const buttonVariants = {
  primary:
    "border-transparent bg-accent text-accent-contrast hover:bg-accent-bright hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_var(--accent-glow)] active:translate-y-0 motion-reduce:hover:translate-y-0",
  ghost:
    "border-hairline-strong bg-transparent text-foreground hover:border-foreground hover:bg-surface",
};

type ButtonProps = {
  href: string;
  variant?: keyof typeof buttonVariants;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = cx(
    buttonBase,
    buttonVariants[variant],
    size === "lg" && "min-h-14 px-8 py-4 text-base",
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  const classes = cx(
    "group inline-flex items-center gap-2 border-b-2 border-accent pb-0.5 font-semibold text-foreground transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:text-accent-bright",
    className,
  );
  const inner = (
    <>
      {children}
      <ArrowIcon className="h-4 w-4 flex-none transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out)] group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function CtaBand({
  eyebrow,
  heading,
  children,
}: {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <div
      data-settle
      className="relative overflow-hidden rounded-md border border-hairline-strong bg-surface px-[var(--space-md)] py-[var(--space-lg)] [background:radial-gradient(120%_140%_at_12%_8%,color-mix(in_oklab,var(--accent)_20%,transparent),transparent_55%),var(--surface)]"
    >
      {eyebrow && (
        <Eyebrow className="mb-[var(--space-sm)]">{eyebrow}</Eyebrow>
      )}
      <h2 className="display mb-[var(--space-sm)] max-w-[20ch] text-[clamp(2.1rem,6vw,3.75rem)]">
        {heading}
      </h2>
      <div className="flex flex-wrap items-center gap-4 gap-y-4">{children}</div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) {
  return (
    <div data-settle>
      <Eyebrow className="mb-[var(--space-xs)]">{eyebrow}</Eyebrow>
      <h2 id={id} className="display text-[clamp(2.1rem,6vw,3.75rem)]">
        {title}
      </h2>
    </div>
  );
}
