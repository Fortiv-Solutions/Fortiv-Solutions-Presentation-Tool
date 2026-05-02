import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Fortiv's automation completely transformed our workflow. We've seen a 40% reduction in processing time.",
      name: "Sarah Jenkins",
      role: "CTO",
      company: "Apex Systems"
    },
    {
      quote: "The AI implementation was seamless. Their team understood our unique challenges and delivered beyond expectations.",
      name: "Michael Chen",
      role: "Director of Ops",
      company: "Novus Dynamics"
    },
    {
      quote: "Scalable, efficient, and forward-thinking. Fortiv is the partner you need for enterprise-grade automation.",
      name: "Elena Rodriguez",
      role: "VP Engineering",
      company: "Horizon Corp"
    },
    {
      quote: "The scalability allowed us to expand into new markets without adding headcount. A game-changer.",
      name: "Amanda Lee",
      role: "VP Product",
      company: "Synapse"
    }
  ];

  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -left-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          WHAT OUR <span className="bg-gradient-to-r from-purple-400 to-brand bg-clip-text text-transparent">CLIENTS SAY</span>
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((item, i) => (
            <div key={i} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-hairline border-l-4 border-l-purple-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <Quote className="h-8 w-8 text-purple-500/60" />
                <p className="mt-4 text-base italic leading-relaxed text-foreground md:text-lg">
                  "{item.quote}"
                </p>
              </div>
              <div className="relative mt-8 border-t border-hairline pt-4">
                <p className="font-display text-base font-bold text-foreground md:text-lg">
                  — {item.name}
                </p>
                <p className="mt-1 text-sm font-medium text-cyan-500">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
