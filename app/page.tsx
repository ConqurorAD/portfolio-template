import Hero from "@/app/components/sections/Hero";
import HomeSections from "@/app/components/sections/HomeSections";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import { Metadata } from "next";

const siteUrl = "https://www.example.com";
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const profilePageId = `${siteUrl}/#profile-page`;

const personSameAs = SOCIAL_LINKS.filter((link) =>
  link.href.startsWith("https://"),
).map((link) => link.href);

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "John Doe",
      jobTitle: "Frontend Developer",
      description:
        "Frontend developer in Springfield, USA building fast, accessible web applications with React, Next.js, and TypeScript.",
      url: siteUrl,
      image: `${siteUrl}/picofme.png`,
      sameAs: personSameAs,
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Web Development",
        "UI Engineering",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Springfield",
        addressCountry: "US",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      name: "John Doe | Frontend Developer in Springfield, USA",
      url: siteUrl,
      description:
        "Portfolio profile for John Doe, a frontend developer in Springfield, USA.",
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: "John Doe Portfolio",
      url: siteUrl,
      description:
        "John Doe's portfolio of frontend work, projects, and contact details.",
      publisher: { "@id": personId },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  title: "John Doe | Frontend Developer in Springfield, USA",
  description:
    "John Doe is a frontend developer in Springfield, USA, building fast, accessible web applications with React, Next.js, and TypeScript.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <HomeSections />
    </>
  );
}
