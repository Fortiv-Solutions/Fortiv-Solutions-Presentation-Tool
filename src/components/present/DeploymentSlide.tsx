import { SlideShell, type SlideProps } from "./SlideShell";
import { Rocket, Zap, Settings, PlayCircle } from "lucide-react";

export function DeploymentSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Deployment & Onboarding" align="center">
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          From concept to <span className="text-brand">production.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          We deploy {solution.name} seamlessly into your existing ecosystem in weeks, not months. Zero disruption to your current operations.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            {
              title: "Discovery & Audit",
              desc: "We analyze your current workflow and map integration points.",
              icon: Settings,
              weeks: "Week 1",
            },
            {
              title: "Customization",
              desc: "Tailoring the AI models and connecting API endpoints.",
              icon: Zap,
              weeks: "Week 2",
            },
            {
              title: "Testing & QA",
              desc: "Rigorous sandbox testing with your historical data.",
              icon: PlayCircle,
              weeks: "Week 3",
            },
            {
              title: "Go Live",
              desc: "Deployment, team training, and continuous optimization.",
              icon: Rocket,
              weeks: "Week 4",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center rounded-3xl border border-hairline bg-card/50 p-8 text-center backdrop-blur-xl transition-transform hover:-translate-y-2"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                {item.weeks}
              </div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
