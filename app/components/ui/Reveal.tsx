import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/app/lib/utils/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Lightweight entrance animation driven entirely by CSS (see globals.css).
 * No client JavaScript is required and the animation is disabled for users who
 * prefer reduced motion.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
