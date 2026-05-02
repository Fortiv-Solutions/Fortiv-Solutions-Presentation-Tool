import { SlideShell, type SlideProps } from "./SlideShell";
import { TrendingUp, Award, CheckCircle2 } from "lucide-react";

export function CaseStudySlide({ solution }: SlideProps) {
  // Use the solution's metrics to generate a dynamic, realistic case study
  const metric1 = solution.metrics[0];
  const metric2 = solution.metrics[1];

  return (
    <SlideShell eyebrow="Impact & ROI" align="start">
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Real-world <span className="text-brand">transformation.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
          See how leading enterprise teams are using {solution.name} to redefine their operational baseline and drive unprecedented growth.
        </p>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1 md:p-1 lg:flex">
          <div className="flex-1 p-8 md:p-12">
            <div className="flex items-center gap-2 text-brand">
              <Award className="h-5 w-5" />
              <span className="font-medium uppercase tracking-wider text-sm">Enterprise Success</span>
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold leading-tight">
              Achieving {metric1?.value} {metric1?.label} within 90 days.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              "Deploying {solution.name} was a turning point. We entirely eliminated manual triage, allowing our team to focus purely on high-value execution. The return on investment was visible almost immediately."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-brand/20"></div>
              <div>
                <div className="font-semibold text-foreground">VP of Operations</div>
                <div className="text-sm text-muted-foreground">Global Enterprise Client</div>
              </div>
            </div>
          </div>
          <div className="flex-1 border-t border-white/10 bg-black/20 p-8 backdrop-blur-md md:p-12 lg:border-l lg:border-t-0">
            <h4 className="font-display text-xl font-semibold text-foreground">Key Results</h4>
            <div className="mt-8 space-y-8">
              {[
                { label: metric1?.label, value: metric1?.value, icon: TrendingUp },
                { label: metric2?.label, value: metric2?.value, icon: TrendingUp },
                { label: "Implementation Time", value: "< 4 Weeks", icon: CheckCircle2 },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
