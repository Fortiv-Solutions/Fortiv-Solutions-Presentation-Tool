import { Link, useRouterState } from "@tanstack/react-router";
import { FortivLogo } from "./FortivLogo";
import { BOOK_CALL_URL } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export function SideNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string, exact = false) =>
    exact ? path === to : path.startsWith(to);

  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-hairline/60 bg-surface/30 backdrop-blur-xl md:flex">
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <FortivLogo className="h-8 w-auto" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-6">
        <nav className="flex flex-col gap-2">
          <NavLink to="/" label="Welcome" active={isActive("/", true)} />
          <NavLink to="/solutions" label="Solutions" active={isActive("/solutions")} />
          <NavLink to="/industries" label="Industries" active={isActive("/industries")} />
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <div className="rounded-2xl border border-hairline bg-card p-4">
            <h4 className="font-display text-sm font-semibold text-foreground">Ready to automate?</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Book a discovery call to see how we can transform your workflows.
            </p>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
            >
              Book a Call
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
