import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { solutions } from "@/lib/content";
import { ArrowRight, Play, ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/solutions/$solutionId")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.id === params.solutionId);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.solution.name ?? "Solution"} — Fortiv Solutions` },
      { name: "description", content: loaderData?.solution.description ?? "" },
      { property: "og:title", content: `${loaderData?.solution.name} — Fortiv Solutions` },
      { property: "og:description", content: loaderData?.solution.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <>
      <div className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold">Solution not found</h1>
          <Link to="/solutions" className="mt-4 inline-block text-brand hover:underline">
            ← All solutions
          </Link>
        </div>
      </div>
    </>
  ),
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData();

  return (
    <>
        {/* Header */}
        <section className="border-b border-hairline bg-gradient-soft">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All solutions
            </Link>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
                  {solution.category}
                </div>
                <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  {solution.name}
                </h1>
                <p className="mt-3 text-lg text-muted-foreground">{solution.fullTitle}</p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Link
                  to="/present/$solutionId"
                  params={{ solutionId: solution.id }}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Present
                </Link>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 md:max-w-2xl">
              {solution.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-hairline bg-card p-5">
                  <div className="font-display text-3xl font-semibold text-brand md:text-4xl">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
          <p className="text-pretty text-xl leading-relaxed text-foreground/85">{solution.description}</p>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Features</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-hairline bg-card p-6 transition-colors hover:border-brand/30">
                <h3 className="font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="border-y border-hairline bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Workflow</h2>
            <p className="mt-2 text-muted-foreground">How {solution.name} processes a single event end-to-end.</p>
            <ol className="mt-10 space-y-3">
              {solution.workflow.map((w, i) => (
                <li key={w.title} className="flex gap-5 rounded-2xl border border-hairline bg-card p-5">
                  <div className="font-display text-xs font-semibold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-base font-semibold">{w.title}</h3>
                      {w.timing && (
                        <span className="rounded-full bg-brand/8 px-2 py-0.5 text-[11px] font-medium text-brand">
                          {w.timing}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{w.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Without vs. With Fortiv</h2>
          <div className="mt-8 overflow-hidden rounded-3xl border border-hairline">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="p-5 font-medium text-muted-foreground">Dimension</th>
                  <th className="p-5 font-medium text-muted-foreground">Without Fortiv</th>
                  <th className="p-5 font-medium text-brand">With Fortiv</th>
                </tr>
              </thead>
              <tbody>
                {solution.comparison.map((c, i) => (
                  <tr key={c.dimension} className={i % 2 ? "bg-surface/40" : ""}>
                    <td className="p-5 font-medium">{c.dimension}</td>
                    <td className="p-5 text-muted-foreground">{c.without}</td>
                    <td className="p-5">
                      <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                        <Check className="h-3.5 w-3.5 text-brand" />
                        {c.with}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-primary-foreground md:p-14">
            <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-4xl">
              Ready to see {solution.name} in action?
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Open the live presentation, or get in touch with our team directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/present/$solutionId"
                params={{ solutionId: solution.id }}
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Launch presentation
              </Link>
              <a
                href="mailto:info@fortivsolutions.in"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10"
              >
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>
    </>
  );
}
