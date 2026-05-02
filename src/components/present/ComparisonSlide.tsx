import { SlideShell, type SlideProps } from "./SlideShell";
import { Check, X } from "lucide-react";

export function ComparisonSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Without vs. With" align="start">
      <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
        The <span className="text-brand">before-and-after.</span>
      </h2>
      <div className="mt-10 w-full overflow-hidden rounded-3xl border border-hairline">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-surface text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <div className="p-4">Dimension</div>
          <div className="flex items-center gap-1.5 p-4"><X className="h-3.5 w-3.5" />Without Fortiv</div>
          <div className="flex items-center gap-1.5 p-4 text-brand"><Check className="h-3.5 w-3.5" />With Fortiv</div>
        </div>
        {solution.comparison.map((c, i) => (
          <div
            key={c.dimension}
            className={`grid grid-cols-[1.2fr_1fr_1fr] items-center border-t border-hairline text-sm ${
              i % 2 ? "bg-surface/40" : "bg-card"
            }`}
          >
            <div className="p-4 font-medium">{c.dimension}</div>
            <div className="p-4 text-muted-foreground">{c.without}</div>
            <div className="p-4 font-medium text-foreground">{c.with}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
