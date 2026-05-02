import { SlideShell, type SlideProps } from "./SlideShell";

export function MetricsSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Outcome">
      <h2 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        Real numbers from <span className="text-brand">real deployments.</span>
      </h2>
      <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {solution.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-3xl border border-hairline bg-card p-10 text-center shadow-sm"
          >
            <div className="font-display text-7xl font-semibold tracking-tight text-brand md:text-8xl">
              {m.value}
            </div>
            <div className="mt-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
