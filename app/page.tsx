import Hero from "@/app/components/sections/Hero";
import HomeSections from "@/app/components/sections/HomeSections";
import { Metadata } from "next";
import portfolio from "@/app/lib/config/portfolio";

const { profile, geo, seo, url, socials, skills } = portfolio;

const personId = `${url}/#person`;
const websiteId = `${url}/#website`;
const profilePageId = `${url}/#profile-page`;

const personSameAs = socials
  .filter((link) => link.href.startsWith("https://"))
  .map((link) => link.href);

const knowsAbout = Object.values(skills).flat();

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
      knowsAbout,
      address: {
        "@type": "PostalAddress",
        addressLocality: geo.city,
        addressCountry: geo.countryCode,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      name: seo.title,
      url,
      description: `Portfolio profile for ${profile.name}, a ${profile.role} in ${profile.location}.`,
      mainEntity: { "@id": personId },
      about: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: seo.applicationName,
      url,
      description: `${profile.name}'s portfolio of frontend work, projects, and contact details.`,
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
