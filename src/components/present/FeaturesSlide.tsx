import { SlideShell, type SlideProps } from "./SlideShell";
import { Check } from "lucide-react";

export function FeaturesSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Features" align="start">
      <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
        Six capabilities. <span className="text-brand">One system.</span>
      </h2>
      <div className="mt-12 grid w-full grid-cols-2 gap-4 lg:grid-cols-3">
        {solution.features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-hairline bg-card p-6">
            <div className="flex items-center gap-2 text-brand">
              <Check className="h-4 w-4" />
              <h3 className="font-display text-base font-semibold text-foreground">{f.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
