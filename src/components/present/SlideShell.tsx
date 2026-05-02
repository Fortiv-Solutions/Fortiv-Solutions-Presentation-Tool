import type { Solution } from "@/lib/content";
import { ReactNode } from "react";

export function SlideShell({
  eyebrow,
  children,
  align = "center",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "center" | "start";
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Soft branded glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.10_240/0.18),transparent_70%)]" />
      <div
        className={`relative mx-auto flex h-full max-w-7xl flex-col px-10 py-14 lg:px-16 lg:py-20 ${
          align === "center" ? "items-center justify-center text-center" : "justify-center"
        }`}
      >
        {eyebrow && (
          <div className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-brand">{eyebrow}</div>
        )}
        {children}
      </div>
    </div>
  );
}

export type SlideProps = { solution: Solution };
