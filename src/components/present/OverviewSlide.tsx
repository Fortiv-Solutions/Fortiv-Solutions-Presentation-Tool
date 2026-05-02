import { SlideShell, type SlideProps } from "./SlideShell";

export function OverviewSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Overview" align="start">
      <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        What <span className="text-brand">{solution.name}</span> does.
      </h2>
      <p className="mt-8 max-w-4xl text-pretty text-xl leading-relaxed text-foreground/85 md:text-2xl">
        {solution.description}
      </p>
      <div className="mt-12 grid w-full max-w-4xl grid-cols-3 gap-4">
        {solution.deploymentSteps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-hairline bg-card p-5">
            <div className="font-display text-sm font-semibold tabular-nums text-brand">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 font-display text-base font-semibold">{s.title}</h3>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
