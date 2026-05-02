import { SlideShell, type SlideProps } from "./SlideShell";
import { Check } from "lucide-react";

export function FeaturesSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Core Capabilities" align="start">
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Complete <span className="text-brand">feature set.</span>
        </h2>
        
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solution.features.map((f, i) => (
            <div 
              key={f.title} 
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-brand/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Check className="h-6 w-6" />
                </div>
                <div className="font-display text-5xl font-black text-white/5 transition-colors group-hover:text-brand/10">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              
              <div className="relative z-10 mt-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
