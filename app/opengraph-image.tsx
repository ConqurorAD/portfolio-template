import { renderOgImage, ogSize, ogContentType } from "@/app/lib/og";
import portfolio from "@/app/lib/config/portfolio";

const { profile, openGraph } = portfolio;

export const size = ogSize;
export const contentType = ogContentType;

export default function HomeOpenGraphImage() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: profile.tagline,
    description: openGraph.home.description,
  });
}
