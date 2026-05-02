import { SlideShell, type SlideProps } from "./SlideShell";
import { Cpu, Network, Layers, Database } from "lucide-react";

export function ArchitectureSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Under The Hood" align="start">
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Enterprise-grade <span className="text-brand">architecture.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
          {solution.name} is powered by a robust, scalable infrastructure designed to handle infinite concurrency with zero downtime and sub-second latency.
        </p>

        <div className="mt-14 relative flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          {/* Connector Line */}
          <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-brand/10 via-brand/40 to-brand/10 md:block"></div>

          {[
            {
              step: "01",
              title: "Data Ingestion",
              desc: "Omnichannel capture via API & webhooks",
              icon: Database,
            },
            {
              step: "02",
              title: "Neural Processing",
              desc: "Real-time AI intent & sentiment analysis",
              icon: Cpu,
            },
            {
              step: "03",
              title: "Orchestration",
              desc: "Complex autonomous logic execution",
              icon: Network,
            },
            {
              step: "04",
              title: "System Sync",
              desc: "Bi-directional push to CRM & ERP",
              icon: Layers,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative z-10 flex w-full flex-col items-center justify-center rounded-3xl border border-hairline bg-background/80 p-8 text-center backdrop-blur-xl shadow-[0_0_40px_-15px_rgba(var(--brand),0.3)] transition-all hover:-translate-y-2 md:w-64"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-hairline bg-background px-3 py-1 text-xs font-bold text-brand">
                {item.step}
              </div>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
