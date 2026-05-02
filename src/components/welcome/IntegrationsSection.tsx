import { integrationsRow1, integrationsRow2 } from "@/lib/content";

export function IntegrationsSection() {
  return (
    <section className="border-b border-hairline overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Works with everything you already use.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
            200+ pre-built integrations. Connect your entire stack in minutes.
          </p>
        </div>
      </div>
      <div className="relative space-y-4 pb-20">
        <Marquee items={integrationsRow1} />
        <Marquee items={integrationsRow2} reverse />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

function Marquee({ items, reverse }: { items: readonly string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-full overflow-hidden">
      <div className={`flex shrink-0 gap-3 pr-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex h-14 shrink-0 items-center rounded-2xl border border-hairline bg-card px-6 text-sm font-medium text-foreground/70 transition-colors hover:border-brand/30 hover:text-brand"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
