import { SlideShell, type SlideProps } from "./SlideShell";
import { ArrowRight } from "lucide-react";

export function WorkflowSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Workflow" align="start">
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          End-to-end <span className="text-brand">automation flow.</span>
        </h2>
        
        <div className="mt-16 w-full overflow-x-auto pb-8 scrollbar-hide">
          <ol className="flex min-w-max items-stretch gap-4 px-2">
            {solution.workflow.map((w, i) => (
              <li key={w.title} className="group relative flex items-stretch">
                <div className="flex w-72 flex-col rounded-[2rem] border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(var(--brand),0.4)]">
                  <div className="mb-6 flex items-baseline justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 font-display text-sm font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {w.timing && (
                      <span className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                        {w.timing}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
                </div>
                {i < solution.workflow.length - 1 && (
                  <div className="flex items-center px-2 text-brand/30 transition-colors group-hover:text-brand">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SlideShell>
  );
}
