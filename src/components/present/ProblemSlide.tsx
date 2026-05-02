import { SlideShell, type SlideProps } from "./SlideShell";
import { AlertTriangle, AlertCircle, XOctagon } from "lucide-react";

export function ProblemSlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="The Challenge" align="start">
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          The <span className="bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">friction</span> holding back your operations today.
        </h2>
        <p className="mt-6 max-w-3xl text-pretty text-lg text-muted-foreground md:text-xl">
          Before {solution.name}, enterprise teams suffer from profound operational bottlenecks, data silos, and manual inefficiencies that directly impact the bottom line.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Manual Bottlenecks",
              desc: "Teams spend up to 60% of their time on repetitive tasks, data entry, and manual follow-ups instead of high-value work.",
              icon: AlertTriangle,
              color: "text-amber-500",
              bg: "bg-amber-500/10",
            },
            {
              title: "Delayed Responses",
              desc: "Latency in engagement leads to lost opportunities, poor customer experiences, and decreased conversion rates.",
              icon: AlertCircle,
              color: "text-rose-500",
              bg: "bg-rose-500/10",
            },
            {
              title: "Fragmented Systems",
              desc: "Data lives in silos. Disconnected platforms result in poor visibility, inconsistent tracking, and costly errors.",
              icon: XOctagon,
              color: "text-red-500",
              bg: "bg-red-500/10",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-white/10 hover:bg-white/10"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} ${item.color} mb-6 transition-transform group-hover:scale-110`}
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
