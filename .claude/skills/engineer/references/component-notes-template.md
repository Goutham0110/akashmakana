# Component / section notes template

Append to a `NOTES.md` beside the component, or to the project's component log, only if the repo already keeps such notes. Keep it short — this is a pointer for the next person, not documentation.

```markdown
## <SectionOrComponentName>

**Route / where used:** app/(marketing)/page.tsx — hero
**Rendering:** Server Component. Client leaf: <MobileMenuToggle> only.
**Content source:** content/home.ts → `hero` object. Missing `subhead` renders nothing (no fallback needed).
**Responsive:** fluid clamp() 375–1280px, single breakpoint at md for the two-column split.
**Motion:** headline words stagger in on mount (motion). Reduced-motion: instant, no stagger.
**Assets:** hero.webp — priority image, LCP element. sizes="100vw".

### Non-obvious decisions
- <why this rendering boundary, this motion choice, this content shape — 1–2 lines each>

### Known gaps / follow-ups
- <anything deferred, with a one-line reason>

### Verified
- Browser: 375 / 768 / 1280 — OK
- States: focus-visible, reduced-motion — OK
- Perf: LCP <2.5s local, no CLS
```

Skip any line that doesn't apply. If there are no non-obvious decisions and no gaps, a one-line note is fine.
