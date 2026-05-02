import { Outlet, createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav />
      <main className="flex flex-1 items-center justify-center px-6">
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
      </main>
      <SiteFooter />
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
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
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
