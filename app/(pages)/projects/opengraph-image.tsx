import { renderOgImage, ogSize, ogContentType } from "@/app/lib/og";
import portfolio from "@/app/lib/config/portfolio";

const { openGraph } = portfolio;

export const size = ogSize;
export const contentType = ogContentType;

export default function ProjectsOpenGraphImage() {
  return renderOgImage({
    eyebrow: openGraph.projects.subtitle,
    title: "Selected work",
    description: openGraph.projects.description,
  });
}
