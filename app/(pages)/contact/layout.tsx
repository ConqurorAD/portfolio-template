import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact John Doe, a frontend developer in Springfield, USA, for React and Next.js projects, freelance work, or collaboration opportunities.",
  keywords: [
    "contact John Doe",
    "hire frontend developer",
    "freelance React developer",
    "Next.js developer USA",
    "frontend developer Springfield",
    "John Doe contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact John Doe | Frontend Developer in Springfield, USA",
    description:
      "Get in touch with John Doe, a frontend developer in Springfield, USA, for web development and collaboration opportunities.",
    url: "/contact",
    type: "website",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/contact/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact John Doe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact John Doe | Frontend Developer in Springfield, USA",
    description:
      "Get in touch with John Doe, a frontend developer in Springfield, USA, for web development and collaboration opportunities.",
    images: ["/contact/opengraph-image"],
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
      name: "Contact",
      item: "https://www.example.com/contact",
    },
  ],
};

export default function ContactLayout({
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
