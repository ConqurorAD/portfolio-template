import Link from "next/link";

import Reveal from "@/app/components/ui/Reveal";
import ProjectCard from "@/app/components/ui/ProjectCard";
import { Icon } from "@/app/lib/icons";
import portfolio from "@/app/lib/config/portfolio";

export default function ProjectsPage() {
  const { projectsPage, projects, profile, url } = portfolio;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${profile.name} — Selected work`,
    description: projectsPage.description,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        about: project.category,
        url: `${url}/projects#${project.id}`,
      },
    })),
  };

  return (
    <div className="shell py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">{projectsPage.kicker}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-xl mt-5 text-[clamp(2.2rem,5.5vw,4rem)] text-ink">
              {projectsPage.heading.map((line) => (
                <span
                  key={line.text}
                  className={line.accent ? "block text-emerald" : "block"}
                >
                  {line.text}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 text-lg leading-8 text-ink-soft">
              {projectsPage.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <dl className="border-t border-line">
            <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Projects
              </dt>
              <dd className="font-display text-2xl text-ink">
                {String(projects.length).padStart(2, "0")}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Main context
              </dt>
              <dd className="text-sm font-medium text-ink">Beckkon Systems</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <dt className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Focus
              </dt>
              <dd className="text-sm font-medium text-ink">
                Hardware · Software · Product
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 80} className="h-full">
            <div id={project.id} className="h-full scroll-mt-24">
              <ProjectCard project={project} index={index} variant="full" />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border border-line bg-paper-soft/50 p-6 sm:flex-row sm:items-center sm:p-8">
          <p className="max-w-2xl text-sm leading-7 text-ink-soft">
            {projectsPage.note}
          </p>
          <Link
            href="/beckkon"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Read the Beckkon case study
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
