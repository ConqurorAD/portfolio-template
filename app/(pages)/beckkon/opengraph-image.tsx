import { renderOgImage, ogSize, ogContentType } from "@/app/lib/og";
import portfolio from "@/app/lib/config/portfolio";

const { beckkon, openGraph } = portfolio;

export const size = ogSize;
export const contentType = ogContentType;

export default function BeckkonOpenGraphImage() {
  return renderOgImage({
    eyebrow: openGraph.beckkon.subtitle,
    title: beckkon.name,
    description: openGraph.beckkon.description,
  });
}
