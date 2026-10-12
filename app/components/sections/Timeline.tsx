import type { TimelineItem } from "@/app/types";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="border-t border-line">
      {items.map((item) => (
        <li
          key={`${item.title}-${item.org}`}
          className="grid gap-3 border-b border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
        >
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
              {item.period}
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-ink">
              {item.current && (
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
                />
              )}
              {item.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-emerald">{item.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
