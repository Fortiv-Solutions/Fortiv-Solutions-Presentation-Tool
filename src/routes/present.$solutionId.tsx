import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { solutions, BOOK_CALL_URL } from "@/lib/content";
import { FortivLogo } from "@/components/FortivLogo";
import { ArrowLeft, ArrowRight, X, Play } from "lucide-react";
import { TitleSlide } from "@/components/present/TitleSlide";
import { OverviewSlide } from "@/components/present/OverviewSlide";
import { FeaturesSlide } from "@/components/present/FeaturesSlide";
import { WorkflowSlide } from "@/components/present/WorkflowSlide";
import { ComparisonSlide } from "@/components/present/ComparisonSlide";
import { MetricsSlide } from "@/components/present/MetricsSlide";
import { ProblemSlide } from "@/components/present/ProblemSlide";
import { ArchitectureSlide } from "@/components/present/ArchitectureSlide";
import { SecuritySlide } from "@/components/present/SecuritySlide";
import { DeploymentSlide } from "@/components/present/DeploymentSlide";
import { CaseStudySlide } from "@/components/present/CaseStudySlide";
import { CtaSlide } from "@/components/present/CtaSlide";

export const Route = createFileRoute("/present/$solutionId")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.id === params.solutionId);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Present: ${loaderData?.solution.name ?? "Solution"} — Fortiv` },
    ],
  }),
  component: PresentView,
});

function PresentView() {
  const { solution } = Route.useLoaderData();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const slideComponents = [
    () => <TitleSlide solution={solution} />,
    () => <ProblemSlide solution={solution} />,
    () => <OverviewSlide solution={solution} />,
    () => <ArchitectureSlide solution={solution} />,
    () => <MetricsSlide solution={solution} />,
    () => <FeaturesSlide solution={solution} />,
    () => <WorkflowSlide solution={solution} />,
    () => <SecuritySlide solution={solution} />,
    () => <ComparisonSlide solution={solution} />,
    () => <DeploymentSlide solution={solution} />,
    () => <CaseStudySlide solution={solution} />,
    () => <CtaSlide solution={solution} />,
  ];
  const total = slideComponents.length;

  const next = useCallback(() => setStep((s) => Math.min(s + 1, total - 1)), [total]);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const exit = useCallback(() => navigate({ to: "/solutions/$solutionId", params: { solutionId: solution.id } }), [navigate, solution.id]);

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
            <span className="font-medium">{solution.name}</span>
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
            to="/solutions/$solutionId"
            params={{ solutionId: solution.id }}
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
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-glow"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Book a call
          </a>
        )}
      </div>
    </div>
  );
}
