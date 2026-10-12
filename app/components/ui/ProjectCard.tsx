import type { Project } from "@/app/types";
import { Icon } from "@/app/lib/icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "summary" | "full";
}

export default function ProjectCard({
  project,
  index,
  variant = "summary",
}: ProjectCardProps) {
  const body = variant === "full" ? project.description : project.summary;

  return (
    <article className="group flex h-full flex-col border border-line bg-paper-soft/40 p-6 transition-colors hover:border-line-strong hover:bg-paper-soft sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-sm text-emerald">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
          {project.category}
        </span>
      </div>

      <h3 className="mt-8 font-display text-2xl font-medium tracking-tight text-ink">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-ink-soft">{body}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.focus.map((tag) => (
          <li
            key={tag}
            className="border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-soft"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
        {project.status && (
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            {project.status}
          </span>
        )}
        <div className="ml-auto flex items-center gap-4">
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald link-underline"
            >
              {link.label}
              <Icon
                name={link.external ? "ArrowUpRight" : "ArrowRight"}
                className="h-3.5 w-3.5"
              />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
