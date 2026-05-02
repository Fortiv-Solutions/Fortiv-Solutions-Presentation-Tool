import { SlideShell, type SlideProps } from "./SlideShell";

export function TitleSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow={solution.category}>
      <h1 className="max-w-5xl text-balance font-display text-6xl font-semibold leading-[1.02] tracking-tight md:text-8xl">
        {solution.name}
      </h1>
      <p className="mt-8 max-w-3xl text-pretty text-xl text-muted-foreground md:text-2xl">
        {solution.fullTitle}
      </p>
      <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
        {solution.metrics.map((m) => (
          <span
            key={m.label}
            className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-medium text-brand"
          >
            <span className="font-display font-semibold">{m.value}</span>
            <span className="ml-1.5 text-brand/80">{m.label}</span>
          </span>
        ))}
      </div>
      <div className="mt-16 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Press → to begin
      </div>
    </SlideShell>
  );
}
