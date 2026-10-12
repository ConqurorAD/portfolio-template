import { renderOgImage, ogSize, ogContentType } from "@/app/lib/og";
import portfolio from "@/app/lib/config/portfolio";

const { openGraph } = portfolio;

export const size = ogSize;
export const contentType = ogContentType;

export default function ContactOpenGraphImage() {
  return renderOgImage({
    eyebrow: openGraph.contact.subtitle,
    title: "Let's talk",
    description: openGraph.contact.description,
  });
}
