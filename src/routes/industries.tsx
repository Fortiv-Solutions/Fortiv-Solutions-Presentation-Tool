import { createFileRoute } from "@tanstack/react-router";

import { industries } from "@/lib/content";
import { Building2, Scale, PartyPopper, HeartPulse, Factory, ArrowRight } from "lucide-react";

const iconFor: Record<string, typeof Building2> = {
  "real-estate": Building2,
  "law-firms": Scale,
  "events-hospitality": PartyPopper,
  "healthcare": HeartPulse,
  "manufacturing": Factory,
};

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Fortiv Solutions" },
      { name: "description", content: "Fortiv AI automation mapped to your industry: Real Estate, Law, Events, Healthcare, Manufacturing." },
      { property: "og:title", content: "Industries — Fortiv Solutions" },
      { property: "og:description", content: "Five industries, five proprietary AI agent suites — engineered for your sector." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
        <section className="border-b border-hairline bg-gradient-soft">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Industries</div>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Engineered for your sector. <span className="text-brand">Not a generic tool.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              Each industry suite ships with five proprietary AI agents purpose-built around the workflows,
              compliance posture, and data shapes of that vertical.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = iconFor[ind.id] ?? Building2;
              return (
                <article
                  key={ind.id}
                  className="group flex flex-col rounded-3xl border border-hairline bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elegant"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/8 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold">{ind.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{ind.focus}</p>
                  <div className="mt-5 rounded-xl border border-hairline bg-surface p-4">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      Representative outcome
                    </div>
                    <div className="mt-1 text-sm font-medium text-brand">{ind.outcome}</div>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">5 AI agents</span>
                    <span className="inline-flex items-center gap-1 text-brand opacity-0 transition-opacity group-hover:opacity-100">
                      Coming soon <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl border border-dashed border-hairline bg-surface/50 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">In development</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Full industry deep-dives, AI agent breakdowns, pricing tiers, and case studies arriving next.</h3>
          </div>
        </section>
    </>
  );
}
