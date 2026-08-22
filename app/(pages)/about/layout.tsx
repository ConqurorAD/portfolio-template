import type { Metadata } from "next";
import { pageMetadata, breadcrumbStructuredData } from "@/app/lib/seo";

export const metadata: Metadata = pageMetadata("about");

const breadcrumbStructuredDataJson = breadcrumbStructuredData("about");

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
          __html: JSON.stringify(breadcrumbStructuredDataJson).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      {children}
    </>
  );
}
