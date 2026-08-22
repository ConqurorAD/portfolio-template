# Portfolio Website Template

A bold, motion-rich personal portfolio template built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

The project ships with dummy placeholder content ("John Doe") so you can clone it, swap in your own data, and deploy your own portfolio in minutes.

## Highlights

- App Router architecture with reusable sections and components
- Dynamic, animated pages powered by Framer Motion
- Rich portfolio sections: hero, principles, projects, about, contact
- Magnetic buttons, mouse glow, scroll progress bar, confetti easter egg
- Dark theme with lamp-mode toggle
- Semantic HTML with Schema.org structured data (Person, WebSite, Breadcrumbs, ItemList)
- Per-page Open Graph images generated at build time with `next/og`
- Sitemap and robots.txt generated automatically
- Typed, data-driven content for easy maintenance

## Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)  |
| Runtime/UI | React 19, React DOM 19              |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS 4                      |
| Animation  | Framer Motion                       |
| Icons      | Lucide React                        |
| Effects    | canvas-confetti                     |
| Linting    | ESLint 9 + eslint-config-next       |

## Routes

- `/` - Hero + working principles + selected work
- `/about` - Profile, introduction, work experience, education, skills
- `/projects` - All selected project cards
- `/contact` - Contact cards, social links, availability info

---

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm (or pnpm / yarn / bun if you prefer)

### Installation

```bash
# 1. Clone or download this template
git clone <your-repo-url> my-portfolio
cd my-portfolio

# 2. Install dependencies
npm install

# 3. (Optional) Set up environment variables
cp .env.local.example .env.local

# 4. Start the dev server
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Customization Guide

### Single source of truth

**All content is driven by one file:** `app/lib/config/portfolio.ts`. Edit that single
config to change your name, role, location, social links, projects, page copy, SEO, and
Open Graph text. There are no duplicate or hardcoded data files to keep in sync — every
page, component, layout, sitemap, robots file, and generated OG image reads from this config.

Helper modules that consume the config:

| File                       | Purpose                                                              |
| -------------------------- | ------------------------------------------------------------------- |
| `app/lib/config/portfolio.ts` | The complete portfolio data (single source of truth)              |
| `app/lib/icons.ts`         | Maps icon names (strings in the config) to Lucide components        |
| `app/lib/seo.ts`           | Builds per-page metadata + breadcrumb structured data from config   |
| `app/types/project.ts`     | Project query helpers (`getProjects`, `getFeaturedProjects`, ...)   |

To add or change content, follow these rules:

- **Icons** are referenced by string name (e.g. `"github"`, `"ArrowRight"`). Add any new
  icon name to the registry in `app/lib/icons.ts` (it already includes every icon used by
  the template).
- **Projects** live in `portfolio.projects` — add an entry with `title`, `description`,
  `longDescription`, `role`, `image`, `tags`, `liveUrl`, `githubUrl`, and `featured`.
- **Social links** live in `portfolio.socials` (name, href, icon name, tooltip).
- **Page copy** (hero, home sections, about, contact, projects) lives under the matching
  keys in `portfolio` (e.g. `portfolio.hero`, `portfolio.contactPage`, `portfolio.projectsPage`).
- **Images** are referenced by path in `portfolio.images` and the project `image` fields.

> Note: keep the `image` paths pointing at your own files in `public/projects/` (and
> `public/heroimage.png`, `public/about.png`, `public/imagecp.png`, `public/picofme.png`).

### SEO & Metadata

All metadata, structured data, `sitemap.ts`, and `robots.ts` are generated from the config.
Update the `url`, `seo`, `openGraph`, and `socials` sections of `portfolio.ts` — no other
file needs editing for SEO changes.

### Open Graph Images

OG images are rendered from JSX and read their text from the config (profile name, role,
location, skills, and `openGraph.*` copy). They automatically stay in sync with your data.

- `app/opengraph-image.tsx` (home)
- `app/(pages)/about/opengraph-image.tsx`
- `app/(pages)/projects/opengraph-image.tsx`
- `app/(pages)/contact/opengraph-image.tsx`

### Replace Images

Swap these files in `public/` with your own (keep the same filenames to avoid code changes):

| File                    | Used for                              |
| ----------------------- | ------------------------------------- |
| `public/heroimage.png`  | Home page hero portrait               |
| `public/about.png`      | About page profile photo              |
| `public/imagecp.png`    | Contact page portrait                 |
| `public/picofme.png`    | SEO fallback image (referenced in config/metadata) |
| `public/projects/*.png` | Project card screenshots (16:10 works best) |

### 6. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in (both optional):

```bash
# Umami analytics website ID (leave empty to disable analytics script)
UMAMI_ID=

# Google Search Console verification token (leave empty to disable meta tag)
GOOGLE_VERIFICATION=
```

These are read in `app/layout.tsx` and `app/lib/config/portfolio.ts`. Nothing is required for local development.

### 7. Branding Extras

- Favicon: replace `app/icon.svg` and `app/apple-icon.png`
- Theme colors: edit CSS variables in `app/globals.css` (`--brand-primary`, `--brand-signal`, etc.)
- Site name in `package.json` (`"name"` field)

---

## Project Structure

```text
app/
	layout.tsx                # Global shell, fonts, metadata, analytics script
	page.tsx                  # Home page composition + JSON-LD
	globals.css               # Tailwind theme, brand colors, effects
	robots.ts                 # robots.txt generator
	sitemap.ts                # sitemap.xml generator
	opengraph-image.tsx       # Home OG image (generated)
	(pages)/
		about/                  # About page + layout metadata + OG image
		projects/               # Projects page + layout metadata + OG image
		contact/                # Contact page + layout metadata + OG image
	components/
		sections/               # Hero, HomeSections
		layout/                 # Navigation, Footer, SystemBar, MouseGlow
		ui/                     # OptimizedImage, Tooltip, ThemeToggle, ProgressBar
		animations/             # MagneticWrapper
	lib/
		config/portfolio.ts     # Central portfolio config — single source of truth
		icons.ts                # Icon name → Lucide component registry
		seo.ts                  # Per-page metadata + breadcrumb JSON-LD builders
		hooks/                  # useTime, useMousePosition
		utils/                  # cn() class-name helper
	types/                    # Shared app-level types + project data
public/
	projects/                 # Project images
	heroimage.png, about.png, imagecp.png, picofme.png
```

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server                 |
| `npm run build`   | Create optimized production build        |
| `npm run start`   | Serve the production build               |
| `npm run lint`    | Run ESLint checks                        |

## SEO Checklist Before Going Live

1. Set `url` in `app/lib/config/portfolio.ts` to your real domain (this drives metadata, sitemap, and robots).
2. Add your `GOOGLE_VERIFICATION` token to `.env.local` and verify in Google Search Console.
4. Optionally add your `UMAMI_ID` for privacy-friendly analytics.
5. Deploy, then submit your sitemap: `https://your-domain.com/sitemap.xml`.

## Deployment

The app deploys cleanly on Vercel or any Node-compatible host.

Recommended Vercel flow:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables (`UMAMI_ID`, `GOOGLE_VERIFICATION`) if you use them.
4. Build command: `npm run build` (default).
5. Deploy and point your custom domain at the project.

## Notes

- React Compiler is enabled in `next.config.ts`.
- Path alias `@/*` maps to the repository root (configured in `tsconfig.json`).
- No database or API keys are needed - everything is static content.

## License

No license file is included. Add a `LICENSE` if you plan to publish the template publicly.
