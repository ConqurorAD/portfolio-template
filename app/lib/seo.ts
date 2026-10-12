import type { Metadata } from "next";
import portfolio from "@/app/lib/config/portfolio";

export type PageKey = "about" | "beckkon" | "projects" | "contact";

export function pageMetadata(page: PageKey): Metadata {
  const { seo, openGraph, profile } = portfolio;
  const og = openGraph[page];
  const title = og.subtitle;
  const description = og.description;
  const canonical = `/${page}`;

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${title} | ${profile.name}`,
      description,
      url: canonical,
      type: page === "about" ? "profile" : "website",
      siteName: seo.applicationName,
      images: [
        {
          url: `/${page}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
      images: [`/${page}/opengraph-image`],
    },
  };
}

export function breadcrumbStructuredData(page: PageKey) {
  const { url } = portfolio;
  const label = page.charAt(0).toUpperCase() + page.slice(1);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${url}/${page}`,
      },
    ],
  };
}
