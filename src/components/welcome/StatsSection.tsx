import { Star } from "lucide-react";

export function StatsSection() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      {/* Brand Background Elements */}
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-brand/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-6 inline-flex items-center justify-center bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          Corporate Insight
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          COMPANY <span className="text-brand">OVERVIEW</span>
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-hairline border-t-2 border-t-brand bg-background/60 p-5 text-center shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-3xl font-bold text-brand md:text-4xl">2025</div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Founded</div>
          </div>
          <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-hairline border-t-2 border-t-cyan-500 bg-background/60 p-5 text-center shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-3xl font-bold text-cyan-500 md:text-4xl">40+</div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Companies Served</div>
          </div>
          <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-hairline border-t-2 border-t-emerald-500 bg-background/60 p-5 text-center shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-center font-display text-3xl font-bold text-emerald-500 md:text-4xl">
              4.7<Star className="ml-1 h-6 w-6 fill-emerald-500" />
            </div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Client Rating</div>
          </div>
          <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-hairline border-t-2 border-t-purple-400 bg-background/60 p-5 text-center shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-purple-400/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="font-display text-3xl font-bold text-purple-400 md:text-4xl">30d</div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">ROI Guarantee</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 relative">
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-brand md:text-3xl">Who We Are</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
              Fortiv Solutions is an Agentic AI & Automation company headquartered in Dadra Nagar Haveli & Daman-Diu, India. Founded in October 2025, we design, build, and deploy custom AI systems that eliminate manual bottlenecks, slash operational costs, and deliver measurable ROI for enterprises across India and globally.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-background/40 p-1 shadow-2xl backdrop-blur-2xl">
            <div className="flex h-full flex-col justify-between space-y-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent p-5 dark:from-white/5 dark:to-transparent">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-brand">Founder & CEO</span>
                <span className="font-display text-base font-semibold text-foreground">Dhanesh Mahto</span>
              </div>
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-brand">HQ</span>
                <span className="text-right font-display text-base font-semibold text-foreground">Dadra Nagar Haveli,<br className="hidden sm:block" /> India</span>
              </div>
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="text-[11px] font-medium uppercase tracking-wider text-brand">Global Reach</span>
                <span className="font-display text-base font-semibold text-foreground">India + International</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-medium uppercase tracking-wider text-brand">Core Tech</span>
                <span className="text-right font-display text-base font-semibold text-foreground">Agentic AI • LLMs •<br className="hidden sm:block" /> Automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
