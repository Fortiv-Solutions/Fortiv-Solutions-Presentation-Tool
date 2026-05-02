import { capabilities } from "@/lib/content";
import { Headphones, PhoneCall, CalendarClock, Mail, Target, Plug } from "lucide-react";

const icons = [Headphones, PhoneCall, CalendarClock, Mail, Target, Plug];

export function CapabilitiesSection() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Capabilities</div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Automate the work that's slowing you down.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
            Custom AI agents eliminate manual data entry, reduce overhead costs,
            and accelerate your B2B sales cycle with 24/7 intelligent automation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = icons[i] ?? Plug;
            return (
              <article
                key={cap.title}
                className="group relative flex flex-col rounded-3xl border border-hairline bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elegant"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/8 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  {cap.badge && (
                    <span className="rounded-full bg-brand/8 px-2.5 py-1 text-[11px] font-medium text-brand">
                      {cap.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
