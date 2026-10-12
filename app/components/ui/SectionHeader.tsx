import type { HeadingLine } from "@/app/types";

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  heading: HeadingLine[];
  description?: string;
  className?: string;
  tone?: "light" | "dark";
}

export default function SectionHeader({
  id,
  eyebrow,
  heading,
  description,
  className,
  tone = "light",
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        id={id}
        className={`display-xl mt-4 text-[clamp(1.8rem,4vw,3rem)] ${
          dark ? "text-[#f4f2ec]" : "text-ink"
        }`}
      >
        {heading.map((line) => (
          <span
            key={line.text}
            className={
              line.accent
                ? `block ${dark ? "text-[#4fb894]" : "text-emerald"}`
                : "block"
            }
          >
            {line.text}
          </span>
        ))}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 ${
            dark ? "text-[#b8b7ac]" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
