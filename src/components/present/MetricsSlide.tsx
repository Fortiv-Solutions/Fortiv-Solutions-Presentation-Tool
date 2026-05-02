import { SlideShell, type SlideProps } from "./SlideShell";

export function MetricsSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Outcome">
      <div className="relative z-10 w-full">
        <h2 className="mx-auto max-w-4xl text-balance font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Real numbers from <span className="bg-gradient-to-br from-brand to-brand/40 bg-clip-text text-transparent">real deployments.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          The measurable impact of integrating {solution.name} into enterprise operations.
        </p>

        <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {solution.metrics.map((m) => (
            <div
              key={m.label}
              className="group relative flex flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-black/20 p-12 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:bg-white/5 hover:shadow-[0_0_40px_-10px_rgba(var(--brand),0.3)]"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 font-display text-7xl font-bold tracking-tighter text-foreground drop-shadow-lg md:text-8xl">
                {m.value}
              </div>
              <div className="relative z-10 mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand/80">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
