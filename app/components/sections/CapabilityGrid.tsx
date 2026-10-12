import type { Capability } from "@/app/types";
import { Icon } from "@/app/lib/icons";

interface CapabilityGridProps {
  items: Capability[];
}

export default function CapabilityGrid({ items }: CapabilityGridProps) {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {items.map((capability) => (
        <article key={capability.title} className="bg-paper p-7 sm:p-8">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-emerald-soft text-emerald">
            <Icon name={capability.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink">
            {capability.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-ink-soft">
            {capability.body}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {capability.items.map((item) => (
              <li
                key={item}
                className="border border-line px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
