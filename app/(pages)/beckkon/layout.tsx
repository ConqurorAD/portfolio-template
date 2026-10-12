import type { Metadata } from "next";
import { pageMetadata, breadcrumbStructuredData } from "@/app/lib/seo";

export const metadata: Metadata = pageMetadata("beckkon");

const breadcrumbStructuredDataJson = breadcrumbStructuredData("beckkon");

export default function BeckkonLayout({
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
