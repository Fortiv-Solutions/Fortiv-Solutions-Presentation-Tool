import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { industries, BOOK_CALL_URL } from "@/lib/content";
import { ArrowLeft, ArrowRight, CheckCircle2, Play } from "lucide-react";

export const Route = createFileRoute("/industries/$industryId")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.id === params.industryId);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.industry.name ?? "Industry"} — Fortiv Solutions` },
      { name: "description", content: loaderData?.industry.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold">Industry not found</h1>
        <Link to="/industries" className="mt-4 inline-block text-brand hover:underline">
          ← All industries
        </Link>
      </div>
    </div>
  ),
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();

  return (
    <>
      {/* Header and Details Section */}
      <section className="border-b border-hairline bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <Link
            to="/industries"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All industries
          </Link>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
                Industry Solutions
              </div>
              <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                {industry.name}
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{industry.description}</p>
            </div>
            <div className="flex shrink-0 gap-3">
               <Link
                  to="/present-industry/$industryId"
                  params={{ industryId: industry.id }}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Present
                </Link>
               <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-5 py-2.5 text-sm font-medium hover:border-brand/40 hover:text-brand"
                >
                  Book a call
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </div>
          </div>
          
          <div className="mt-12 rounded-3xl border border-hairline bg-card p-8 shadow-sm md:p-10">
             <div className="grid gap-10 md:grid-cols-2">
                <div>
                   <h3 className="font-display text-xl font-semibold tracking-tight">Primary Automation Focus</h3>
                   <div className="mt-6 flex flex-col gap-4">
                     {industry.focus.split(",").map((f) => (
                       <div key={f.trim()} className="flex items-start gap-3">
                         <div className="mt-0.5 rounded-full bg-brand/10 p-1">
                           <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                         </div>
                         <span className="text-base text-foreground/80">{f.trim()}</span>
                       </div>
                     ))}
                   </div>
                </div>
                <div className="flex flex-col justify-center rounded-2xl bg-surface p-8 text-center md:text-left">
                   <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Representative Outcome
                   </div>
                   <div className="mt-4 font-display text-3xl font-semibold leading-tight text-brand md:text-4xl">
                      {industry.outcome}
                   </div>
                   <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                     These results represent typical outcomes when deploying the complete Fortiv AI suite within the {industry.name} vertical.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10 max-w-2xl">
           <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Enterprise-grade solutions engineered to solve specific {industry.name} challenges at scale.
           </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industry.features?.map((f) => (
            <div key={f.title} className="group flex flex-col rounded-3xl border border-hairline bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elegant">
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-brand transition-colors">{f.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs font-medium text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-brand"></span>
                Impact: {f.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep-dive CTA placeholder */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-primary-foreground md:p-14">
          <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-4xl">
            Transform your {industry.name} workflows today.
          </h2>
          <p className="mt-3 max-w-xl text-primary-foreground/80">
            Let's map out exactly how our autonomous systems can integrate into your existing setup to deliver these outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/present-industry/$industryId"
              params={{ industryId: industry.id }}
              className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Launch presentation
            </Link>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium hover:bg-primary-foreground/10"
            >
              Book a call
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
