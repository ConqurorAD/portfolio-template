import type { Project } from "@/app/types";
import portfolio from "@/app/lib/config/portfolio";

const projects: Project[] = portfolio.projects;

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
