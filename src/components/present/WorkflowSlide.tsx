import { SlideShell, type SlideProps } from "./SlideShell";
import { ArrowRight } from "lucide-react";

export function WorkflowSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Workflow" align="start">
      <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
        End-to-end <span className="text-brand">automation flow.</span>
      </h2>
      <div className="mt-10 w-full overflow-x-auto">
        <ol className="flex min-w-max items-stretch gap-2">
          {solution.workflow.map((w, i) => (
            <li key={w.title} className="flex items-stretch">
              <div className="flex w-64 flex-col rounded-2xl border border-hairline bg-card p-5 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xs font-semibold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {w.timing && (
                    <span className="rounded-full bg-brand/8 px-2 py-0.5 text-[10px] font-medium text-brand">
                      {w.timing}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold leading-tight">{w.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.description}</p>
              </div>
              {i < solution.workflow.length - 1 && (
                <div className="flex items-center px-1 text-brand/40">
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </SlideShell>
  );
}
