import { Star } from "lucide-react";

export function ImpactMetricsSection() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-emerald-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          ROI & IMPACT <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">METRICS</span>
        </h2>
        <p className="mt-4 text-base italic text-muted-foreground">
          Based on data from 40+ enterprise deployments:
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-emerald-500 bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-5xl font-bold text-emerald-500 md:text-6xl">40%</div>
            <div className="mt-4 text-sm font-bold text-foreground">Operational Cost Reduction</div>
            <div className="mt-2 text-xs text-muted-foreground">Avg. in first quarter</div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-5xl font-bold text-brand md:text-6xl">10x</div>
            <div className="mt-4 text-sm font-bold text-foreground">Faster Workflow Execution</div>
            <div className="mt-2 text-xs text-muted-foreground">Days → minutes</div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-cyan-500 bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-5xl font-bold text-cyan-500 md:text-6xl">350%</div>
            <div className="mt-4 text-sm font-bold text-foreground">Average ROI Score</div>
            <div className="mt-2 text-xs text-muted-foreground">Per ₹1 invested</div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-purple-400 bg-background/60 p-6 text-center shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-400/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-5xl font-bold text-purple-400 md:text-6xl">24/7</div>
            <div className="mt-4 text-sm font-bold text-foreground">Uninterrupted Operations</div>
            <div className="mt-2 text-xs text-muted-foreground">AI never sleeps</div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl border border-hairline border-l-4 border-l-emerald-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl md:flex-row">
          <div className="max-w-3xl">
            <p className="text-lg italic leading-relaxed text-foreground md:text-xl">
              "The ROI was immediate. Within two months, we had fully recovered our investment and started seeing 3x gains."
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              — David Kim, CEO, TechFlow
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
            <div className="flex items-center text-xl font-bold text-emerald-500">
              <Star className="mr-2 h-5 w-5 fill-emerald-500" /> 4.7 / 5.0
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-500/80">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
