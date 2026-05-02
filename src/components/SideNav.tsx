import { Link, useRouterState } from "@tanstack/react-router";
import { FortivLogo } from "./FortivLogo";
import { solutions, industries } from "@/lib/content";
import { ArrowUpRight, ChevronRight, MonitorPlay } from "lucide-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HomeScrollSections } from "@/components/welcome/HomeScrollSections";

export function SideNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string, exact = false) =>
    exact ? path === to : path.startsWith(to);

  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-hairline/60 bg-surface/30 backdrop-blur-xl md:flex">
      {/* Logo Header — its own sealed row */}
      <div className="flex shrink-0 items-center px-6 py-5 border-b border-hairline/30">
        <Link to="/" className="flex items-center transition-transform duration-300 hover:opacity-80">
          <FortivLogo className="h-10 w-auto object-contain" />
        </Link>
      </div>

      {/* Present Button — its own row between logo and nav */}
      <div className="shrink-0 px-4 py-4 border-b border-hairline/30">
        <Dialog>
          <DialogTrigger asChild>
            <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:brightness-110 active:scale-[0.98]">
              <MonitorPlay className="h-4 w-4 transition-transform group-hover:scale-110" />
              Present
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-none w-screen h-screen p-0 m-0 border-none rounded-none sm:rounded-none overflow-hidden bg-background">
            <div className="h-screen overflow-y-auto">
              <HomeScrollSections />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-6">
        <nav className="flex flex-col gap-2">
          <NavLink to="/" label="Welcome" active={isActive("/", true)} />
          <SolutionsHoverLink active={isActive("/solutions")} />
          <IndustriesHoverLink active={isActive("/industries")} />
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <div className="rounded-2xl border border-hairline bg-card p-4">
            <h4 className="font-display text-sm font-semibold text-foreground">Get in touch</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Reach out to our team to see how we can transform your workflows.
            </p>
            <a
              href="mailto:info@fortivsolutions.in"
              className="group mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavLink({ to, label, active }: { to: "/" | "/solutions" | "/industries"; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`group relative flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
        active 
          ? "bg-brand/10 text-brand" 
          : "text-muted-foreground hover:bg-surface hover:text-foreground"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-brand" />
      )}
      {label}
    </Link>
  );
}

function SolutionsHoverLink({ active }: { active: boolean }) {
  return (
    <HoverCard.Root openDelay={50} closeDelay={150}>
      <HoverCard.Trigger asChild>
        <Link
          to="/solutions"
          className={`group relative flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
            active 
              ? "bg-brand/10 text-brand" 
              : "text-muted-foreground hover:bg-surface hover:text-foreground"
          }`}
        >
          <div className="flex items-center">
            {active && (
              <span className="absolute left-0 top-1/2 h-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-brand" />
            )}
            <span>Solutions</span>
          </div>
          <ChevronRight className="h-4 w-4 opacity-40 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content 
          side="right" 
          align="start" 
          alignOffset={-24}
          sideOffset={20}
          className="z-50 w-[600px] rounded-3xl border border-hairline/60 bg-background/95 p-4 shadow-elegant backdrop-blur-xl animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95"
        >
          <div className="flex flex-col">
            <h4 className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Autonomous Systems
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {solutions.map((s) => (
                <Link
                  key={s.id}
                  to="/solutions/$solutionId"
                  params={{ solutionId: s.id }}
                  className="group/item flex flex-col rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface"
                >
                  <span className="font-medium text-foreground transition-colors group-hover/item:text-brand">
                    {s.name}
                  </span>
                  <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    {s.fullTitle}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-3 border-t border-hairline/60 px-3 pt-3 pb-1">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline"
              >
                View all solutions
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

function IndustriesHoverLink({ active }: { active: boolean }) {
  return (
    <HoverCard.Root openDelay={50} closeDelay={150}>
      <HoverCard.Trigger asChild>
        <Link
          to="/industries"
          className={`group relative flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
            active 
              ? "bg-brand/10 text-brand" 
              : "text-muted-foreground hover:bg-surface hover:text-foreground"
          }`}
        >
          <div className="flex items-center">
            {active && (
              <span className="absolute left-0 top-1/2 h-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-brand" />
            )}
            <span>Industries</span>
          </div>
          <ChevronRight className="h-4 w-4 opacity-40 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </HoverCard.Trigger>
      
      <HoverCard.Portal>
        <HoverCard.Content 
          side="right" 
          align="start" 
          alignOffset={-24}
          sideOffset={20}
          className="z-50 w-[600px] rounded-3xl border border-hairline/60 bg-background/95 p-4 shadow-elegant backdrop-blur-xl animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95"
        >
          <div className="flex flex-col">
            <h4 className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Sectors We Serve
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {industries.map((ind) => (
                <Link
                  key={ind.id}
                  to="/industries/$industryId"
                  params={{ industryId: ind.id }}
                  className="group/item flex flex-col rounded-2xl px-3 py-2.5 transition-colors hover:bg-surface"
                >
                  <span className="font-medium text-foreground transition-colors group-hover/item:text-brand">
                    {ind.name}
                  </span>
                  <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    {ind.focus}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-3 border-t border-hairline/60 px-3 pt-3 pb-1">
              <Link
                to="/industries"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline"
              >
                Explore all industries
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
