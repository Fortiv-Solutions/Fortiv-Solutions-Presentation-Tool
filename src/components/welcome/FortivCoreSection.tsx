export function FortivCoreSection() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      {/* Brand Background Elements */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -left-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-brand/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-6 inline-flex items-center justify-center bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          The Framework
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          FORTIV CORE™ — <span className="text-brand">OUR 4-STEP METHODOLOGY</span>
        </h2>
        <p className="mt-6 max-w-3xl text-xl italic tracking-wide text-muted-foreground md:text-2xl">
          Our proprietary framework transforms expensive manual operations into highly scalable automated AI pipelines.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col items-center">
              <div className="font-display text-5xl font-black text-brand opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100 md:text-6xl">01</div>
              <div className="mt-4 h-1 w-8 rounded-full bg-brand/50 transition-all group-hover:w-16 group-hover:bg-brand"></div>
              <h3 className="mt-5 font-display text-lg font-bold md:text-xl">Process Audit</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We map your business to identify high-ROI automation opportunities and hidden bottlenecks.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-purple-500 bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col items-center">
              <div className="font-display text-5xl font-black text-purple-500 opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100 md:text-6xl">02</div>
              <div className="mt-4 h-1 w-8 rounded-full bg-purple-500/50 transition-all group-hover:w-16 group-hover:bg-purple-500"></div>
              <h3 className="mt-5 font-display text-lg font-bold md:text-xl">Solution Architecture</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Custom autonomous agents tailored to your data, software stack, and compliance needs.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-cyan-500 bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col items-center">
              <div className="font-display text-5xl font-black text-cyan-500 opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100 md:text-6xl">03</div>
              <div className="mt-4 h-1 w-8 rounded-full bg-cyan-500/50 transition-all group-hover:w-16 group-hover:bg-cyan-500"></div>
              <h3 className="mt-5 font-display text-lg font-bold md:text-xl">Rapid Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                AI workflows deployed directly into your existing systems — zero downtime, zero disruption.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-emerald-500 bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col items-center">
              <div className="font-display text-5xl font-black text-emerald-500 opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100 md:text-6xl">04</div>
              <div className="mt-4 h-1 w-8 rounded-full bg-emerald-500/50 transition-all group-hover:w-16 group-hover:bg-emerald-500"></div>
              <h3 className="mt-5 font-display text-lg font-bold md:text-xl">Scale & Optimize</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We continuously monitor and refine your AI agents so they grow smarter as your business grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
