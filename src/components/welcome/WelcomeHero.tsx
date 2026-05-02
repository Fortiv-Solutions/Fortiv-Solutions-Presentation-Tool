import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function WelcomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.25),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Production-grade AI automation
          </div>

          <h1 className="mt-8 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            We don't just transform —{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">we rewire how business works.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            We deploy production-ready AI systems that eliminate manual bottlenecks
            and slash operational costs.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/solutions"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
            >
              Explore Solutions
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/industries"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-hairline bg-background/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-brand/40 hover:text-brand"
            >
              View by Industry
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-hairline bg-background/60 px-3 py-1 backdrop-blur">No Setup Fees</span>
            <span className="rounded-full border border-hairline bg-background/60 px-3 py-1 backdrop-blur">30-Day ROI Guarantee</span>
          </div>

          <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <AvatarStack />
            <div className="h-px w-12 bg-hairline sm:h-10 sm:w-px" />
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-display text-base font-semibold tabular-nums">4.7</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Trusted by 40+ companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvatarStack() {
  const colors = [
    "from-blue-400 to-blue-600",
    "from-cyan-400 to-blue-500",
    "from-indigo-400 to-blue-600",
    "from-sky-400 to-indigo-500",
    "from-blue-300 to-cyan-500",
  ];
  return (
    <div className="flex -space-x-2">
      {colors.map((c, i) => (
        <div
          key={i}
          className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${c} ring-2 ring-background`}
          aria-hidden
        />
      ))}
      <div className="ml-3 flex items-center text-sm text-muted-foreground">
        <span className="font-medium text-foreground">40+</span>
        <span className="ml-1.5">companies served</span>
      </div>
    </div>
  );
}
