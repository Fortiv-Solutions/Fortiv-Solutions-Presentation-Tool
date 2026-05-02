import { SlideShell, type SlideProps } from "./SlideShell";

export function TitleSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow={solution.category}>
      <div className="relative z-10 w-full">
        <h1 className="mx-auto max-w-5xl text-balance font-display text-6xl font-semibold leading-[1.1] tracking-tight md:text-8xl">
          {solution.name}
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
          {solution.fullTitle}
        </p>
        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {solution.metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md transition-colors hover:border-brand/30 hover:bg-white/10"
            >
              <span className="font-display text-lg font-bold text-foreground">{m.value}</span>
              <div className="h-4 w-px bg-white/20"></div>
              <span className="text-sm font-medium text-brand/90">{m.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex animate-pulse items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Press space to begin <span className="text-brand">→</span>
        </div>
      </div>
    </SlideShell>
  );
}
