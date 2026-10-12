import { ImageResponse } from "next/og";

import portfolio from "@/app/lib/config/portfolio";

const { profile, url } = portfolio;

const PAPER = "#faf8f2";
const INK = "#1b1b18";
const MUTED = "#6d6c64";
const LINE = "#e1dccf";
const EMERALD = "#0c6b4f";

interface OgContent {
  eyebrow: string;
  title: string;
  description: string;
}

const domain = url.replace(/^https?:\/\//, "");

/**
 * Shared social card renderer so every page's Open Graph image uses the same
 * warm editorial language as the site.
 */
export function renderOgImage({ eyebrow, title, description }: OgContent) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: 72,
          fontFamily: '"Segoe UI", Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 16,
                background: INK,
                color: PAPER,
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              AV
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 26, fontWeight: 600 }}>{profile.name}</span>
              <span style={{ fontSize: 20, color: MUTED }}>{profile.role}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: 999,
              border: `1px solid ${LINE}`,
              color: MUTED,
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 940 }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 6,
              borderRadius: 999,
              background: EMERALD,
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 28,
              lineHeight: 1.4,
              color: MUTED,
              maxWidth: 880,
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 26,
            fontSize: 22,
            color: MUTED,
          }}
        >
          <span>{profile.organisation}</span>
          <span style={{ color: EMERALD }}>{domain}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export const ogSize = {
  width: 1200,
  height: 630,
} as const;

export const ogContentType = "image/png";
