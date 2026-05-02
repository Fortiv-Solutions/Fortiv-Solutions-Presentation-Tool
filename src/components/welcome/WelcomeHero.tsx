import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export function WelcomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.25),transparent_60%)]" aria-hidden />
      
      {/* Premium abstract glowing orbs */}
      <div className="absolute right-0 top-1/2 h-[80%] w-[45%] -translate-y-1/2 pointer-events-none overflow-visible hidden lg:block">
        <div className="absolute right-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-brand/20 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[30%] h-[400px] w-[400px] rounded-full bg-blue-600/20 mix-blend-multiply blur-[100px] animate-pulse dark:mix-blend-screen" style={{ animationDelay: '2s' }} />
        
        {/* Glassmorphism Floating Dashboard Graphic */}
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[420px] rounded-2xl border border-brand/20 bg-background/60 p-2 shadow-2xl backdrop-blur-2xl">
          <div className="flex h-full w-full flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 dark:from-white/5 dark:to-transparent">
            {/* Window Controls */}
            <div className="mb-6 flex gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            
            {/* Mock Code / Activity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/20 text-brand">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="h-4 w-32 rounded bg-brand/20" />
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="h-2 w-full rounded bg-foreground/10" />
                <div className="h-2 w-5/6 rounded bg-foreground/10" />
                <div className="h-2 w-4/6 rounded bg-foreground/10" />
              </div>

              {/* Animated processing block */}
              <div className="mt-6 flex h-32 items-center justify-center rounded-lg border border-brand/20 bg-brand/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full border-2 border-brand border-t-transparent animate-spin" />
                  <span className="text-xs font-medium tracking-widest text-brand uppercase">Processing Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center justify-center bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
            AGENTIC AI • AUTOMATION
          </div>

          <h1 className="mt-10 font-display text-7xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-9xl">
            FORTIV <br />
            <span className="text-brand">SOLUTIONS</span>
          </h1>

          <p className="mt-8 text-xl italic tracking-wide text-muted-foreground md:text-3xl">
            Transforming Technology into Results
          </p>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row">
            <div className="flex h-12 min-w-[200px] items-center justify-center border border-brand bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-brand/10">
              Start Your AI Journey
            </div>
            <div className="flex h-12 min-w-[200px] items-center justify-center border border-brand bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-brand/10">
              Unlock Immediate Value
            </div>
            <div className="flex h-12 min-w-[200px] items-center justify-center border border-brand bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-brand/10">
              40+ Companies Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
