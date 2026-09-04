"use client";

import { useRef, useState, type FormEvent } from "react";
import { formatOptions, crowdRanges } from "@content/contact";
import { ArrowLink } from "@/components/ui";

type Errors = Record<string, string>;

const inputClass =
  "min-h-12 w-full rounded-md border border-hairline-strong bg-surface px-4 py-3.5 text-foreground transition-[border-color,box-shadow] duration-[var(--dur-fast)] ease-[var(--ease-out)] placeholder:text-faint focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-glow)] focus:outline-none";

const invalidClass = "border-danger shadow-[0_0_0_3px_rgba(255,107,94,0.22)]";

function Field({
  label,
  required,
  error,
  children,
  htmlFor,
  hint,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
  hint?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-[0.9rem] font-semibold tracking-[0.01em]">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[0.82rem] text-faint">{hint}</p>}
      <p className="min-h-4 text-[0.82rem] text-danger-text" aria-live="polite">
        {error}
      </p>
    </div>
  );
}

export default function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ tone?: "error"; message: string }>({
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const clearError = (key: string) => {
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors: Errors = {};

    const name = String(data.get("name") ?? "").trim();
    if (!name) nextErrors.name = "Add your name so we can reply.";

    const email = String(data.get("email") ?? "").trim();
    if (!email) nextErrors.email = "Add your email so we can reply.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      nextErrors.email = "That email address looks incomplete.";

    const brief = String(data.get("brief") ?? "").trim();
    if (!brief) nextErrors.brief = "Add your brief so we can reply.";

    const format = String(data.get("format") ?? "");
    if (!format)
      nextErrors.format = "Pick the kind of night so we route it to the right lead.";

    setErrors(nextErrors);

    const firstBadKey = Object.keys(nextErrors)[0];
    if (firstBadKey) {
      setStatus({ tone: "error", message: "Check the highlighted fields and send again." });
      const el = form.elements.namedItem(firstBadKey) as HTMLElement | null;
      el?.focus();
      return;
    }

    // Prototype-equivalent: no network request yet. Wire to a real endpoint
    // or form service before launch.
    setStatus({ message: "" });
    setSubmitted(true);
    requestAnimationFrame(() => {
      successRef.current?.focus();
      successRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
    });
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-md border border-accent bg-surface px-[var(--space-md)] py-[var(--space-md)] [background:radial-gradient(120%_140%_at_12%_8%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_55%),var(--surface)]"
      >
        <div className="mb-[var(--space-sm)] grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-contrast">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="display mb-[var(--space-xs)] text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-normal">
          Brief received
        </h2>
        <p className="text-muted">
          This confirms your brief is in. On the live site this form sends to
          the team now, and you get a reply within one working day.
        </p>
        <p className="mt-[var(--space-sm)]">
          <ArrowLink href="/work">Look at recent work while you wait</ArrowLink>
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="grid gap-[var(--space-sm)]">
      <p
        role="status"
        aria-live="polite"
        className={`text-[0.9rem] ${status.tone === "error" ? "font-semibold text-danger-text" : "text-muted"}`}
      >
        {status.message}
      </p>

      <div className="grid gap-[var(--space-sm)] sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Akash Makana"
            aria-invalid={!!errors.name}
            onChange={() => clearError("name")}
            className={`${inputClass} ${errors.name ? invalidClass : ""}`}
          />
        </Field>
        <Field label="Company or venue" htmlFor="org">
          <input
            id="org"
            name="org"
            type="text"
            autoComplete="organization"
            placeholder="Optional"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-[var(--space-sm)] sm:grid-cols-2">
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            onChange={() => clearError("email")}
            className={`${inputClass} ${errors.email ? invalidClass : ""}`}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91"
            className={inputClass}
          />
        </Field>
      </div>

      <fieldset className="m-0 grid gap-2 border-0 p-0">
        <legend
          className={`mb-1 text-[0.9rem] font-semibold ${errors.format ? "text-danger-text" : ""}`}
        >
          What kind of night <span className="text-accent">*</span>
        </legend>
        <div
          role="radiogroup"
          aria-label="Event format"
          className={`flex flex-wrap gap-2 ${errors.format ? "rounded-sm outline outline-1 outline-offset-[6px] outline-danger" : ""}`}
        >
          {formatOptions.map((opt) => (
            <label
              key={opt.value}
              className="relative inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill border border-hairline-strong px-4 py-2.5 text-[0.9rem] font-medium text-muted transition-[color,border-color,background-color] duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:border-foreground hover:text-foreground has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-accent-contrast has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent-bright has-[:focus-visible]:outline-offset-2"
            >
              <input
                type="radio"
                name="format"
                value={opt.value}
                onChange={() => clearError("format")}
                className="absolute h-px w-px opacity-0"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        <p className="min-h-4 text-[0.82rem] text-danger-text" aria-live="polite">
          {errors.format}
        </p>
      </fieldset>

      <div className="grid gap-[var(--space-sm)] sm:grid-cols-2">
        <Field label="Event date" htmlFor="date" hint="Rough is fine. Put anything if it is not fixed.">
          <input
            id="date"
            name="date"
            type="date"
            className={`${inputClass} [color-scheme:dark]`}
          />
        </Field>
        <Field label="City" htmlFor="city">
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            placeholder="Where is it happening"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Expected crowd" htmlFor="size">
        <select id="size" name="size" className={inputClass}>
          <option value="">Select a range</option>
          {crowdRanges.map((range) => (
            <option key={range}>{range}</option>
          ))}
        </select>
      </Field>

      <Field label="The idea" htmlFor="brief" required error={errors.brief}>
        <textarea
          id="brief"
          name="brief"
          rows={5}
          placeholder="Who is playing or performing, what the venue is, what you want the night to feel like, and anything already booked."
          aria-invalid={!!errors.brief}
          onChange={() => clearError("brief")}
          className={`${inputClass} min-h-32 resize-y leading-[1.5] ${errors.brief ? invalidClass : ""}`}
        />
      </Field>

      <div className="mt-[var(--space-xs)] flex flex-wrap items-center gap-[var(--space-sm)]">
        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md border border-transparent bg-accent px-8 py-4 text-base font-semibold text-accent-contrast transition-[transform,background-color,box-shadow] duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-[0_12px_40px_-12px_var(--accent-glow)] motion-reduce:hover:translate-y-0"
        >
          Send the brief
        </button>
        <p className="text-[0.82rem] text-faint">
          We reply within one working day, plan within three.
        </p>
      </div>
    </form>
  );
}
