import { SlideShell, type SlideProps } from "./SlideShell";

export function OverviewSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Executive Overview" align="start">
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Meet <span className="text-brand">{solution.name}</span>.
        </h2>
        <p className="mt-8 max-w-4xl text-pretty text-xl leading-relaxed text-foreground/90 md:text-2xl">
          {solution.description}
        </p>
        
        <div className="mt-16 grid w-full gap-6 md:grid-cols-3">
          {solution.deploymentSteps.slice(0, 3).map((s, i) => (
            <div 
              key={s.title} 
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-white/10"
            >
              <div className="absolute -right-6 -top-6 text-[8rem] font-black leading-none text-white/5 transition-transform group-hover:scale-110">
                {i + 1}
              </div>
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 font-display text-sm font-bold text-brand">
                  0{i + 1}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
