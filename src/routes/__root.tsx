import { Outlet, createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SideNav } from "@/components/SideNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FortivLogo } from "@/components/FortivLogo";
import { BOOK_CALL_URL } from "@/lib/content";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <SideNav />
      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-hairline/60 bg-background/80 px-6 backdrop-blur-xl md:hidden">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <FortivLogo className="h-7 w-auto" />
          </Link>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background"
          >
            Book Call
          </a>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl font-semibold text-brand">404</p>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-brand"
        >
          Back to Welcome
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fortiv Solutions — Transforming Technology Into Results" },
      { name: "description", content: "Production-ready AI automation systems engineered for enterprise. Eliminate manual bottlenecks and slash operational costs." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  notFoundComponent: () => (
    <Layout>
      <NotFoundComponent />
    </Layout>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
