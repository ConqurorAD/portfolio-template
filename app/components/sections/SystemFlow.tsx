import type { SystemStage } from "@/app/types";

interface SystemFlowProps {
  stages: SystemStage[];
}

export default function SystemFlow({ stages }: SystemFlowProps) {
  return (
    <ol className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {stages.map((stage) => (
        <li key={stage.step} className="flex flex-col bg-paper p-6">
          <span className="font-display text-sm text-emerald">{stage.step}</span>
          <h3 className="mt-6 text-base font-semibold tracking-tight text-ink">
            {stage.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{stage.body}</p>
        </li>
      ))}
    </ol>
  );
}
