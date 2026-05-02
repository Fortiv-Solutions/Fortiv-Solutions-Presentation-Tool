import { Car, Home, BrainCircuit, MessageSquare, CalendarCheck, TrendingUp } from "lucide-react";

export function ProductSuiteSection() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-brand/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          OUR PRODUCT <span className="bg-gradient-brand bg-clip-text text-transparent">SUITE</span>
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <Car className="h-6 w-6 text-brand" />
                <h3 className="font-display text-xl font-bold">SalesDrive</h3>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-500">Auto Dealerships</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Multi-channel lead automation. AI qualifies leads, books test drives, and routes hot prospects to sales — 24/7.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <TrendingUp className="h-4 w-4" /> 3x test drive bookings
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <Home className="h-6 w-6 text-brand" />
                <h3 className="font-display text-xl font-bold">LeadEstate</h3>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-500">Real Estate</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                AI assistant for property agents. Nurtures buyer/seller leads instantly, books viewings, qualifies budgets.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <TrendingUp className="h-4 w-4" /> 2x showroom walk-ins
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-6 w-6 text-brand" />
                <h3 className="font-display text-xl font-bold">LeadIQ</h3>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-500">Lead Intelligence</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Intelligent B2B lead scoring system. Grades prospects by intent signals and automatically routes to closers.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <TrendingUp className="h-4 w-4" /> 60% less wasted calls
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-brand" />
                <h3 className="font-display text-xl font-bold">ChatFlow</h3>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-500">Omnichannel Support</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                AI chatbot across WhatsApp, web, and email. Reduces support ticket volume while capturing qualified leads.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <TrendingUp className="h-4 w-4" /> 60% ticket reduction
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-5 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <CalendarCheck className="h-6 w-6 text-brand" />
                <h3 className="font-display text-xl font-bold">EventSync</h3>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cyan-500">Events & Hospitality</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                End-to-end event automation. AI handles RSVPs, follow-ups, vendor coordination, and post-event analytics.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <TrendingUp className="h-4 w-4" /> 10x faster execution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
