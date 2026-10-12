import type { Metadata } from "next";

import Hero from "@/app/components/sections/Hero";
import HomeSections from "@/app/components/sections/HomeSections";
import portfolio from "@/app/lib/config/portfolio";

const { profile, geo, seo, url, socials } = portfolio;

const personId = `${url}/#person`;
const websiteId = `${url}/#website`;
const profilePageId = `${url}/#profile-page`;
const orgId = `${url}/#organisation`;

const personSameAs = socials
  .filter((link) => link.href.startsWith("https://") && !link.href.includes("beckkon"))
  .map((link) => link.href);

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: profile.role,
      description: seo.description,
      url,
      image: `${url}${seo.image}`,
      sameAs: personSameAs,
      worksFor: { "@id": orgId },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology (BHU), Varanasi",
      },
      knowsAbout: [
        "IoT",
        "BLE",
        "LoRaWAN",
        "Embedded systems",
        "Product strategy",
        "Entrepreneurship",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: geo.city,
        addressCountry: geo.countryCode,
      },
    },
    {
      "@type": "Organization",
      "@id": orgId,
      name: "Beckkon Systems Pvt. Ltd.",
      url: portfolio.beckkon.linkHref,
      description: portfolio.beckkon.summary,
      founder: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      name: seo.title,
      url,
      description: `Portfolio profile for ${profile.name}, ${profile.role} at ${profile.organisation}.`,
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: seo.applicationName,
      url,
      description: seo.description,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
  ],
};

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
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
