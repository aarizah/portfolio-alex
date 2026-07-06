# Project content architecture

Each project has one unified content file — the single source of truth for everything the case study page renders:

```txt
src/content/projects/{slug}/
  content.ts   # typed case-study data (all section copy + structured fields)
  source.md    # raw/source notes for AI-assisted extraction and rewriting
```

Assets that must be served publicly live separately:

```txt
public/projects/{slug}/
  hero.webp
  demo.mp4
  screenshots/
```

Rules:

- Put **all** narrative copy, section eyebrows, headlines, impact story, CTA text, home-card copy (`meta.recruiterShortcut`), and structured data in `content.ts`.
- Section React components must not contain project-specific fallbacks — they only render props from `content.ts`.
- Keep raw long-form project notes in `source.md`; use it as input when expanding or rewriting `content.ts`.
- Keep only public media assets in `public/projects/{slug}`.
- Register new projects in `registry.ts`.
