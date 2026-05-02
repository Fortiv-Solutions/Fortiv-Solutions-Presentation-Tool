import { Home, Scale, GlassWater, Stethoscope, Factory, Car } from "lucide-react";

export function IndustriesSection() {
  const industries = [
    {
      icon: Home,
      title: "Real Estate",
      desc: "AI agents for lead nurturing, viewing bookings, and seller acquisition — 24/7 without agent effort.",
    },
    {
      icon: Scale,
      title: "Law Firms",
      desc: "Automated client intake, document triage, appointment scheduling, and case inquiry responses.",
    },
    {
      icon: GlassWater,
      title: "Events & Hospitality",
      desc: "RSVP automation, guest communication, vendor coordination, and post-event analytics pipelines.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      desc: "Patient scheduling, appointment reminders, intake form automation, and follow-up workflows.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      desc: "ERP integration, supply chain alerts, vendor communication automation, and ops reporting.",
    },
    {
      icon: Car,
      title: "Auto Dealerships",
      desc: "Multi-channel lead capture, test drive booking automation, and AI-powered CRM follow-up.",
    },
  ];

  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -left-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-6 inline-flex items-center justify-center bg-cyan-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          Sectors
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          INDUSTRIES WE <span className="text-cyan-500">SERVE</span>
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-hairline border-l-4 border-l-cyan-500 bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <ind.icon className="h-6 w-6 text-foreground" />
                  <h3 className="font-display text-xl font-bold">{ind.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
