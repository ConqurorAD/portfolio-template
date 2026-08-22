import type { Metadata } from "next";
import { pageMetadata, breadcrumbStructuredData } from "@/app/lib/seo";

export const metadata: Metadata = pageMetadata("projects");

const breadcrumbStructuredDataJson = breadcrumbStructuredData("projects");

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
