import { useEffect, useState } from "react";
import { fortivCore } from "@/lib/content";

export function FortivCoreSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Only when not in present view
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      if (e.key === "ArrowRight") setActive((a) => Math.min(a + 1, fortivCore.length - 1));
      if (e.key === "ArrowLeft") setActive((a) => Math.max(a - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">The Fortiv Core™</div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            How we automate your business.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
            Our proprietary 4-step framework transforms expensive, manual operations into highly scalable, automated AI pipelines.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fortivCore.map((step, i) => {
            const isActive = active === i;
            return (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className={`group flex flex-col rounded-3xl border p-7 text-left transition-all duration-300 ${
                  isActive
                    ? "border-brand/40 bg-card shadow-elegant ring-1 ring-brand/10"
                    : "border-hairline bg-card hover:border-brand/30 hover:shadow-sm"
                }`}
              >
                <div className={`font-display text-sm font-semibold tabular-nums ${isActive ? "text-brand" : "text-muted-foreground"}`}>
                  {step.num}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-medium text-brand">
          <span className="font-display tabular-nums">99.9% ↑ Efficiency</span>
          <span className="text-brand/60">·</span>
          <span className="text-brand/80">AI Working 24/7</span>
        </div>
      </div>
    </section>
  );
}
