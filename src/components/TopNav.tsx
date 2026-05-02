import { Link, useRouterState } from "@tanstack/react-router";
import { FortivLogo } from "./FortivLogo";
import { BOOK_CALL_URL } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export function TopNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string, exact = false) =>
    exact ? path === to : path.startsWith(to);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-hairline/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <FortivLogo className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" label="Welcome" active={isActive("/", true)} />
          <NavLink to="/solutions" label="Solutions" active={isActive("/solutions")} />
          <NavLink to="/industries" label="Industries" active={isActive("/industries")} />
        </nav>

        <a
          href={BOOK_CALL_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:bg-brand hover:shadow-glow"
        >
          Book a Call
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
        </a>
      </div>
    </header>
  );
}

function NavLink({ to, label, active }: { to: "/" | "/solutions" | "/industries"; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "text-brand" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
      {active && <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-brand" />}
    </Link>
  );
}
