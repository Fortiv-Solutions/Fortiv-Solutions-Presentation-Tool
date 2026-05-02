import { createFileRoute, Link } from "@tanstack/react-router";

import { solutions } from "@/lib/content";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — Fortiv Solutions" },
      { name: "description", content: "Five purpose-built AI automation solutions: SalesDrive, LeadEstate, LeadIQ, ChatFlow, and EventSync." },
      { property: "og:title", content: "Solutions — Fortiv Solutions" },
      { property: "og:description", content: "Interactive demonstrations of every Fortiv AI automation solution." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
        <section className="border-b border-hairline bg-gradient-soft">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand">
              <Sparkles className="h-3.5 w-3.5" />
              Solutions
            </div>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Five autonomous AI systems. <span className="text-brand">One unified platform.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              Every Fortiv solution replaces a category of manual work with production-grade
              automation — engineered to your data, your stack, and your industry.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((s, i) => (
              <article
                key={s.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-elevated"
              >
                {s.featured && (
                  <span className="absolute right-6 top-6 rounded-full border border-brand/20 bg-brand/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                    Featured
                  </span>
                )}
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {s.category}
                </div>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
                  {s.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.fullTitle}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">{s.description}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {s.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-hairline bg-surface px-3 py-3">
                      <div className="font-display text-2xl font-semibold text-brand">{m.value}</div>
                      <div className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-hairline pt-6">
                  <Link
                    to="/present/$solutionId"
                    params={{ solutionId: s.id }}
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Present
                  </Link>
                  <Link
                    to="/solutions/$solutionId"
                    params={{ solutionId: s.id }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    View details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-soft/30 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute left-0 top-0 font-display text-[140px] font-bold leading-none text-brand/4 select-none" aria-hidden>
                  0{i + 1}
                </span>
              </article>
            ))}
          </div>
        </section>
    </>
  );
}
