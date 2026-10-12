# Aditya Verma — Personal Portfolio

The personal site of **Aditya Verma**, an Engineering Physics student at IIT (BHU),
Varanasi, and co-founder and Chief Product Officer of **Beckkon Systems** — an
IIT (BHU)-incubated startup building connected technology for school safety and
student tracking.

Built as a premium, minimalist editorial website: warm paper base, charcoal type,
and a deliberate deep-emerald accent.

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)  |
| Runtime/UI | React 19, React DOM 19              |
| Language   | TypeScript (strict)                 |
| Styling    | Tailwind CSS 4 (CSS-first `@theme`) |
| Icons      | Lucide React                        |
| Analytics  | Umami (optional)                    |

## Routes

- `/` — Hero, about preview, Beckkon case study band, selected work, capabilities, journey, contact CTA
- `/about` — Profile, focus, interests, journey
- `/beckkon` — Full Beckkon Systems case study (system architecture, role, capabilities)
- `/projects` — The systems Aditya is building at Beckkon
- `/contact` — Email, Beckkon, socials, location

## Single source of truth

**All content lives in [`app/lib/config/portfolio.ts`](app/lib/config/portfolio.ts).**
Every page, layout, metadata tag, sitemap entry and generated Open Graph image
reads from it. There are no duplicate content files to keep in sync.

Helper modules:

| File                     | Purpose                                            |
| ------------------------ | -------------------------------------------------- |
| `app/lib/config/portfolio.ts` | The complete portfolio content (single source)  |
| `app/lib/icons.tsx`      | Maps icon names (strings) to Lucide components      |
| `app/lib/seo.ts`         | Per-page metadata + breadcrumb structured data      |
| `app/lib/og.tsx`         | Shared editorial Open Graph card renderer           |

## Before you go live

The content uses a few neutral placeholders because verified personal details have
not been provided yet. Search for `TODO(personal)` in the config and replace:

1. `url` — the real production domain (drives metadataBase, canonical, sitemap, robots).
2. `contact.email` — Aditya's real email address.
3. `socials[*].href` — real LinkedIn, GitHub and X profile URLs.
4. `images.portrait` — an authentic portrait at a path in `public/` (the current
   layout is intentionally designed to work without a portrait).

The `beckkon.com` link is the only external URL that is authoritative.

## Design system

Tokens are defined in `app/globals.css` under `@theme`:

- `paper` / `paper-soft` — warm off-white surfaces
- `ink` / `ink-soft` / `muted` — charcoal text scale
- `line` / `line-strong` — hairline borders
- `emerald` / `emerald-deep` / `emerald-soft` — the single accent
- `night` / `night-soft` / `night-line` — dark charcoal bands

Utility classes: `shell` (page width), `eyebrow` (small caps label), `display-xl`
(editorial display type), `night` (dark section), `link-underline`.

Motion is CSS-only and fully disabled under `prefers-reduced-motion`.

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server          |
| `npm run build`   | Create optimized production build |
| `npm run start`   | Serve the production build        |
| `npm run lint`    | Run ESLint checks                 |

## Deployment

Deploys cleanly on Vercel or any Node-compatible host. Add `UMAMI_ID` and/or
`GOOGLE_VERIFICATION` as environment variables if you use them; nothing is required
for local development.
