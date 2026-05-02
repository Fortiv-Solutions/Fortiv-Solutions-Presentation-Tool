import { SlideShell, type SlideProps } from "./SlideShell";
import { Check, X } from "lucide-react";

export function ComparisonSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Without vs. With" align="start">
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          The <span className="bg-gradient-to-r from-brand to-brand/50 bg-clip-text text-transparent">before-and-after.</span>
        </h2>
        
        <div className="mt-14 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <div className="p-6">Dimension</div>
            <div className="flex items-center gap-2 border-l border-white/5 p-6">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/20 text-rose-500">
                <X className="h-4 w-4" />
              </div>
              Legacy Process
            </div>
            <div className="flex items-center gap-2 border-l border-white/5 p-6 text-brand">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20">
                <Check className="h-4 w-4" />
              </div>
              With Fortiv
            </div>
          </div>
          
          <div className="divide-y divide-white/5">
            {solution.comparison.map((c, i) => (
              <div
                key={c.dimension}
                className="grid grid-cols-[1.5fr_1fr_1fr] items-center text-sm transition-colors hover:bg-white/5"
              >
                <div className="p-6 font-display text-base font-semibold text-foreground/90">{c.dimension}</div>
                <div className="border-l border-white/5 p-6 text-muted-foreground">{c.without}</div>
                <div className="border-l border-white/5 p-6 font-semibold text-brand/90">{c.with}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
