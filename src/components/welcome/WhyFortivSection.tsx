import { Wrench, Target, ChartBar, Lock, Infinity, Zap } from "lucide-react";

export function WhyFortivSection() {
  const points = [
    {
      icon: Wrench,
      title: "Turnkey AI Automation",
      desc: "We architect, build, deploy, and maintain your entire AI system — fully managed so your team focuses on growth.",
      color: "brand"
    },
    {
      icon: Target,
      title: "Industry-Specific Logic",
      desc: "Custom AI models engineered for your sector's exact workflows — not generic plug-and-play tools.",
      color: "brand"
    },
    {
      icon: ChartBar,
      title: "Measurable ROI",
      desc: "Our autonomous workflows typically reduce operational overhead by 40% within the first quarter.",
      color: "cyan-500"
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      desc: "Battle-tested solutions with enterprise-level data privacy, compliance, and audit trails.",
      color: "emerald-500"
    },
    {
      icon: Infinity,
      title: "Infinite Scalability",
      desc: "Built to handle 10x your current volume without added headcount or manual effort.",
      color: "brand"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      desc: "Most clients are live within 5-7 business days. We handle all setup, integration, and team training.",
      color: "cyan-500"
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan-500':
        return 'border-l-cyan-500 group-hover:border-cyan-500/50 hover:shadow-cyan-500/20 from-cyan-500/5 text-cyan-500';
      case 'emerald-500':
        return 'border-l-emerald-500 group-hover:border-emerald-500/50 hover:shadow-emerald-500/20 from-emerald-500/5 text-emerald-500';
      case 'brand':
      default:
        return 'border-l-brand group-hover:border-brand/50 hover:shadow-brand/20 from-brand/5 text-brand';
    }
  };

  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-6 inline-flex items-center justify-center bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          Differentiators
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          WHY FORTIV — <span className="text-brand">BUILT DIFFERENT</span>
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => {
            const colorClasses = getColorClasses(point.color);
            return (
              <div key={i} className={`group relative overflow-hidden rounded-2xl border border-hairline border-l-4 bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 ${colorClasses.split(' ').slice(0, 3).join(' ')}`}>
                <div className={`absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity group-hover:opacity-100 ${colorClasses.split(' ')[3]}`} />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <point.icon className={`h-6 w-6 ${colorClasses.split(' ')[4]}`} />
                    <h3 className="font-display text-xl font-bold">{point.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
