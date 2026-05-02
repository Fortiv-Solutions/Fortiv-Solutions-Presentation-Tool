import { SlideShell, type SlideProps } from "./SlideShell";
import { BOOK_CALL_URL } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function CtaSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Next Step">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-brand p-16 text-primary-foreground shadow-[0_0_80px_-20px_rgba(var(--brand),0.5)] md:p-24">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_50%)]"></div>
        
        <div className="relative z-10">
          <h2 className="text-balance font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Let's deploy {solution.name} <br />
            <span className="text-primary-foreground/70">for your enterprise.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-2xl">
            Schedule a 30-minute technical discovery. We'll map your existing workflows, identify immediate high-ROI automation targets, and demonstrate live capabilities.
          </p>
          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-lg font-bold text-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]"
            >
              Book your technical discovery
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
            <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
              Slots Available This Week
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
