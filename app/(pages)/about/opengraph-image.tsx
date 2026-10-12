import { renderOgImage, ogSize, ogContentType } from "@/app/lib/og";
import portfolio from "@/app/lib/config/portfolio";

const { profile, openGraph } = portfolio;

export const size = ogSize;
export const contentType = ogContentType;

export default function AboutOpenGraphImage() {
  return renderOgImage({
    eyebrow: openGraph.about.subtitle,
    title: profile.name,
    description: openGraph.about.description,
  });
}
