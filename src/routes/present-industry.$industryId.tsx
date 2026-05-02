import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { industries } from "@/lib/content";
import { FortivLogo } from "@/components/FortivLogo";
import { ArrowLeft, ArrowRight, X, Play, CheckCircle2 } from "lucide-react";
import { SlideShell } from "@/components/present/SlideShell";

export const Route = createFileRoute("/present-industry/$industryId")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.id === params.industryId);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Present: ${loaderData?.industry.name ?? "Industry"} — Fortiv` },
    ],
  }),
  component: PresentIndustryView,
});

function PresentIndustryView() {
  const { industry } = Route.useLoaderData();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const slideComponents = [
    () => <TitleSlide industry={industry} />,
    () => <OverviewSlide industry={industry} />,
    () => <FeaturesSlide industry={industry} />,
    () => <OutcomeSlide industry={industry} />,
    () => <CtaSlide industry={industry} />,
  ];
  const total = slideComponents.length;

  const next = useCallback(() => setStep((s) => Math.min(s + 1, total - 1)), [total]);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const exit = useCallback(() => navigate({ to: "/industries/$industryId", params: { industryId: industry.id } }), [navigate, industry.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Escape") exit();
      else if (e.key === "Home") setStep(0);
      else if (e.key === "End") setStep(total - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, exit, total]);

  const Slide = slideComponents[step];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-hairline bg-background/80 px-6 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <FortivLogo className="h-7 w-auto" />
          <div className="hidden h-5 w-px bg-hairline md:block" />
          <div className="hidden text-sm md:block">
            <span className="font-medium">{industry.name}</span>
            <span className="ml-2 text-muted-foreground">presentation</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs tabular-nums text-muted-foreground">
          <span className="font-medium text-foreground">{step + 1}</span>
          <span>/</span>
          <span>{total}</span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/industries/$industryId"
            params={{ industryId: industry.id }}
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-xs font-medium hover:border-brand/40 hover:text-brand"
          >
            <X className="h-3.5 w-3.5" />
            Exit
          </Link>
        </div>
      </div>

      {/* Slide canvas */}
      <div className="relative flex-1 overflow-hidden bg-background">
        <div key={step} className="absolute inset-0 animate-fade-up">
          <Slide />
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between border-t border-hairline bg-background/80 px-6 py-3 backdrop-blur-xl">
        <button
          onClick={prev}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-40 disabled:hover:border-hairline disabled:hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous
        </button>

        <div className="flex items-center gap-1.5">
          {slideComponents.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-8 bg-brand" : "w-1.5 bg-hairline hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        {step < total - 1 ? (
          <button
            onClick={next}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
          >
            Next
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        ) : (
          <a
            href="mailto:info@fortivsolutions.in"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-glow"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Contact Us
          </a>
        )}
      </div>
    </div>
  );
}

// SLIDES

function TitleSlide({ industry }: { industry: any }) {
  return (
    <SlideShell align="center">
       <div className="flex flex-col items-center gap-6">
          <div className="rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-medium text-brand uppercase tracking-widest">
            Industry Automation
          </div>
          <h1 className="max-w-4xl font-display text-6xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-8xl">
             {industry.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-muted-foreground md:text-2xl">
             Transform your operations with Fortiv's autonomous systems.
          </p>
       </div>
    </SlideShell>
  );
}

function OverviewSlide({ industry }: { industry: any }) {
  return (
    <SlideShell eyebrow="The Challenge & Solution" align="start">
       <h2 className="max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Eradicate manual bottlenecks in <br/><span className="text-brand">{industry.name}.</span>
       </h2>
       <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
          {industry.description}
       </p>
       
       <div className="mt-12 flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Primary Focus</span>
            <div className="mt-3 flex flex-wrap gap-2">
               {industry.focus.split(",").slice(0, 4).map((f: string) => (
                 <span key={f} className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium border border-hairline">{f.trim()}</span>
               ))}
            </div>
          </div>
       </div>
    </SlideShell>
  );
}

function FeaturesSlide({ industry }: { industry: any }) {
  return (
    <SlideShell eyebrow="AI Capabilities" align="start">
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Automated workflows.<br/><span className="text-brand">Measurable impact.</span>
      </h2>
      <div className="mt-10 grid w-full grid-cols-2 gap-4 lg:grid-cols-3">
        {industry.features?.map((f: any) => (
          <div key={f.title} className="rounded-2xl border border-hairline bg-card p-6 flex flex-col">
            <div className="flex items-center gap-2 text-brand">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{f.description}</p>
            <div className="mt-5 border-t border-hairline pt-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Impact</div>
              <div className="mt-1 font-medium text-brand">{f.impact}</div>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function OutcomeSlide({ industry }: { industry: any }) {
  const parts = industry.outcome.split(",");
  return (
    <SlideShell eyebrow="The Result" align="center">
      <h2 className="max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
        {parts[0]}
      </h2>
      {parts.length > 1 && (
        <h3 className="mt-4 font-display text-4xl font-semibold text-brand md:text-6xl">
          {parts.slice(1).join(",")}
        </h3>
      )}
      <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
        Achieve compounding efficiency gains by connecting these AI agents directly into your existing {industry.name} infrastructure.
      </p>
    </SlideShell>
  );
}

function CtaSlide({ industry }: { industry: any }) {
  return (
    <SlideShell align="center">
      <div className="flex flex-col items-center">
        <h2 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
          Ready to scale?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Get in touch to explore how our AI systems can transform your {industry.name} workflows.
        </p>
        <a
          href="mailto:info@fortivsolutions.in"
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-glow"
        >
          Contact Us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </SlideShell>
  );
}
