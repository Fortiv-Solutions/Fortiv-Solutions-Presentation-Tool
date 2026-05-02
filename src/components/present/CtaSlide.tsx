import { SlideShell, type SlideProps } from "./SlideShell";
import { BOOK_CALL_URL } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export function CtaSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Next Step">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] bg-gradient-brand p-14 text-primary-foreground md:p-20">
        <h2 className="text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Let's deploy {solution.name} <br />
          <span className="text-primary-foreground/80">for your team.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/85 md:text-xl">
          A 30-minute discovery call. We'll map your workflows, identify the highest-ROI
          automation, and show you a live demo with your data shape.
        </p>
        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-base font-medium text-foreground transition-transform hover:scale-[1.02] hover:shadow-elevated"
        >
          Book your discovery call
          <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-6 text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
          cal.com / fortiv-solutions / 30min
        </div>
      </div>
    </SlideShell>
  );
}
