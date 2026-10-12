import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";
import portfolio from "@/app/lib/config/portfolio";

const { seo, url, profile } = portfolio;

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(url),

  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },

  description: seo.description,

  applicationName: seo.applicationName,
  authors: [{ name: profile.name, url }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: seo.keywords,

  verification: {
    google: seo.googleVerification,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    title: seo.title,
    description: seo.description,
    siteName: seo.applicationName,
    images: [
      {
        url: `${url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.role} at ${profile.organisation}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`${url}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${geistSans.className}`}
    >
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>

        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={portfolio.analytics?.umamiId ?? ""}
        />
      </body>
    </html>
  );
}
