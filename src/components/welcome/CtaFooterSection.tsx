import { Mail, Phone, Globe, Briefcase } from "lucide-react";

export function CtaFooterSection() {
  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      {/* Background Elements */}
      <div className="absolute inset-x-0 bottom-0 h-[600px] bg-[radial-gradient(circle_at_50%_100%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute left-0 top-[20%] h-[300px] w-[300px] rounded-full bg-brand/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />
      <div className="absolute right-0 bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 text-center">
        
        {/* Main CTA */}
        <div className="mb-6 inline-flex items-center justify-center bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          Take Action
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-7xl">
          READY TO REWIRE HOW <br className="hidden md:block" />
          <span className="text-brand">YOUR BUSINESS WORKS?</span>
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg italic text-muted-foreground md:text-xl">
          Reach out to our team — We'll map your workflows and deploy AI that delivers results.
        </p>

        <a
          href="mailto:info@fortivsolutions.in"
          className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand px-8 py-4 font-display text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-brand/90 hover:shadow-brand/40"
        >
          <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          <Mail className="mr-3 h-5 w-5" />
          Contact Us
        </a>

        {/* Contact Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-brand bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand/20">
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-center gap-2 font-display text-base font-bold text-brand">
              <Mail className="h-4 w-4" /> Support
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">info@fortivsolutions.in</p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-purple-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-center gap-2 font-display text-base font-bold text-purple-500">
              <Briefcase className="h-4 w-4" /> Sales
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">sales@fortivsolutions.in</p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-emerald-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-center gap-2 font-display text-base font-bold text-emerald-500">
              <Phone className="h-4 w-4" /> Phone
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">+91 92749-93154</p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-hairline border-t-2 border-t-cyan-500 bg-background/60 p-6 shadow-xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-center justify-center gap-2 font-display text-base font-bold text-cyan-500">
              <Globe className="h-4 w-4" /> Website
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">www.fortivsolutions.in</p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 border-t border-hairline pt-6 text-xs text-muted-foreground md:text-sm">
          India HQ: Dadra Nagar Haveli & Daman-Diu <span className="mx-2">|</span> Serving clients across India & Globally
        </div>
      </div>
    </section>
  );
}
