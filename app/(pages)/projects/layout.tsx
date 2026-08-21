import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore John Doe's selected projects built with React, Next.js, and TypeScript — e-commerce platforms, community websites, and more from Springfield, USA.",
  keywords: [
    "John Doe projects",
    "Next.js projects",
    "React portfolio projects",
    "frontend developer portfolio",
    "web developer USA projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Projects by John Doe | Frontend Developer in Springfield, USA",
    description:
      "A curated collection of React and Next.js projects built by John Doe, a frontend developer in Springfield, USA.",
    url: "/projects",
    type: "website",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/projects/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Projects by John Doe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by John Doe | Frontend Developer in Springfield, USA",
    description:
      "A curated collection of React and Next.js projects built by John Doe, a frontend developer in Springfield, USA.",
    images: ["/projects/opengraph-image"],
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.example.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: "https://www.example.com/projects",
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {children}
    </>
  );
}
