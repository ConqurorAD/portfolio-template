import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import SystemBar from "@/app/components/layout/SystemBar";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";
import MouseGlow from "@/app/components/layout/MouseGlow";
import ProgressBar from "@/app/components/ui/ProgressBar";
import { cn } from "@/app/lib/utils/cn";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),

  title: {
    default: "John Doe | Frontend Developer in Springfield, USA",
    template: "%s | John Doe",
  },

  description:
    "John Doe is a frontend developer in Springfield, USA, building fast, accessible web applications with React, Next.js, and TypeScript. Explore his portfolio of projects, skills, and experience.",

  applicationName: "John Doe Portfolio",
  authors: [{ name: "John Doe", url: "https://www.example.com" }],
  creator: "John Doe",
  publisher: "John Doe",
  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: [
    "John Doe",
    "frontend developer",
    "frontend developer Springfield",
    "frontend developer USA",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "frontend engineer",
    "web developer USA",
    "React.js developer USA",
    "Next.js developer USA",
  ],

  verification: {
    google: process.env.GOOGLE_VERIFICATION,
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
    url: "https://www.example.com",
    title: "John Doe | Frontend Developer in Springfield, USA",
    description:
      "John Doe is a frontend developer in Springfield, USA, building fast, accessible web applications with React, Next.js, and TypeScript.",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "https://www.example.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "John Doe - Frontend Developer in Springfield, USA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "John Doe | Frontend Developer in Springfield, USA",
    description:
      "John Doe is a frontend developer in Springfield, USA, building fast, accessible web applications with React, Next.js, and TypeScript.",
    images: ["https://www.example.com/opengraph-image"],
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
      className={cn(
        geistSans.variable,
        geistMono.variable,
        geistSans.className,
      )}
    >
      <body className="antialiased app-bg text-foreground overflow-x-hidden transition-colors duration-300">
        <div aria-hidden="true" className="lamp-beam" />

        <MouseGlow />

        <SystemBar />
        <ProgressBar />
        <Navigation />

        <main className="relative z-10  pt-0 ">{children}</main>
        <Footer />

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_ID ?? ""}
        />
      </body>
    </html>
  );
}
