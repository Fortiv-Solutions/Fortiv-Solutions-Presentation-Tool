import { FortivLogo } from "./FortivLogo";


export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <FortivLogo className="h-7 w-auto" />
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Transforming technology into results. Production-ready AI systems engineered for enterprise.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <a
              href="mailto:info@fortivsolutions.in"
              className="text-sm font-medium text-brand hover:underline"
            >
              info@fortivsolutions.in
            </a>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Fortiv Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
