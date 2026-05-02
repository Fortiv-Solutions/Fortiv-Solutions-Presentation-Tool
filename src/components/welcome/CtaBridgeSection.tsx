import { Link } from "@tanstack/react-router";
import { differentiators } from "@/lib/content";
import { ArrowRight, Check } from "lucide-react";

export function CtaBridgeSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Built different</div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              We engineer systems. <br />
              <span className="text-brand">Not tools.</span>
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground md:text-lg">
              We don't just sell AI tools. We build custom automation systems that integrate
              deeply into your operations, eliminate manual work, and deliver measurable ROI.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/solutions"
                className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
              >
                See Our Solutions
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-5 py-2.5 text-sm font-medium hover:border-brand/40 hover:text-brand"
              >
                Explore Industries
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <ul className="space-y-3">
            {differentiators.map((d) => (
              <li
                key={d.title}
                className="flex gap-4 rounded-2xl border border-hairline bg-card p-6 transition-colors hover:border-brand/30"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
