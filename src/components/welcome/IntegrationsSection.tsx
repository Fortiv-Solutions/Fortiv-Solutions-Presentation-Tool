import { Hourglass, LayoutGrid, TrendingDown, CircleDollarSign } from "lucide-react";

export function IntegrationsSection() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      {/* Brand Background Elements */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-6 inline-flex items-center justify-center bg-cyan-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          The Challenge
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          THE PROBLEM WE <span className="text-cyan-500">SOLVE</span>
        </h2>
        <p className="mt-6 max-w-3xl text-xl italic tracking-wide text-muted-foreground md:text-2xl">
          Talented operators buried in manual work — zero ROI visibility.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-l-4 border-l-cyan-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20">
                <Hourglass className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-display text-xl font-bold">Manual Bottlenecks</h3>
            </div>
            <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
              Teams spend hours on repetitive data entry, follow-ups, and scheduling that AI could handle instantly.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-l-4 border-l-blue-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20">
                <LayoutGrid className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-display text-xl font-bold">Fragmented Tools</h3>
            </div>
            <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
              5+ disconnected tools with no unified view — leads fall through the cracks, data goes stale.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-l-4 border-l-red-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-red-500/50 hover:shadow-red-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
                <TrendingDown className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="font-display text-xl font-bold">No ROI Visibility</h3>
            </div>
            <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
              No real-time dashboards means operators are flying blind with no insight into what's working.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-l-4 border-l-emerald-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <CircleDollarSign className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="font-display text-xl font-bold">High Overhead Costs</h3>
            </div>
            <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
              Manual processes inflate headcount costs. Scaling means hiring more people, not better systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
