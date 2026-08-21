import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about John Doe, a frontend developer in Springfield, USA, specializing in React, Next.js, and TypeScript web applications.",
  keywords: [
    "about John Doe",
    "frontend developer Springfield",
    "frontend developer USA",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
  ],
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About John Doe | Frontend Developer in Springfield, USA",
    description:
      "Professional profile, technical stack, and career journey of John Doe, a frontend developer in Springfield, USA.",
    url: "/about",
    type: "profile",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/about/opengraph-image",
        width: 1200,
        height: 630,
        alt: "About John Doe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About John Doe | Frontend Developer in Springfield, USA",
    description:
      "Professional profile, technical stack, and career journey of John Doe, a frontend developer in Springfield, USA.",
    images: ["/about/opengraph-image"],
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
      name: "About",
      item: "https://www.example.com/about",
    },
  ],
};

export default function AboutLayout({
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
