import { useEffect, useRef, useState, useCallback } from "react";
import { WelcomeHero } from "./WelcomeHero";
import { StatsSection } from "./StatsSection";
import { IntegrationsSection } from "./IntegrationsSection";
import { FortivCoreSection } from "./FortivCoreSection";
import { ProductSuiteSection } from "./ProductSuiteSection";
import { IndustriesSection } from "./IndustriesSection";
import { WhyFortivSection } from "./WhyFortivSection";
import { ImpactMetricsSection } from "./ImpactMetricsSection";
import { IntegrationsGridSection } from "./IntegrationsGridSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CtaFooterSection } from "./CtaFooterSection";

const SECTIONS = [
  { id: "hero", label: "Home", Component: WelcomeHero, fullHeight: true },
  { id: "stats", label: "Overview", Component: StatsSection, fullHeight: false },
  { id: "problem", label: "Problem", Component: IntegrationsSection, fullHeight: false },
  { id: "core", label: "Methodology", Component: FortivCoreSection, fullHeight: false },
  { id: "products", label: "Product Suite", Component: ProductSuiteSection, fullHeight: false },
  { id: "industries", label: "Industries", Component: IndustriesSection, fullHeight: false },
  { id: "differentiators", label: "Why Fortiv", Component: WhyFortivSection, fullHeight: false },
  { id: "impact", label: "Impact Metrics", Component: ImpactMetricsSection, fullHeight: false },
  { id: "stack", label: "Integrations", Component: IntegrationsGridSection, fullHeight: false },
  { id: "testimonials", label: "Testimonials", Component: TestimonialsSection, fullHeight: false },
  { id: "cta", label: "Book Audit", Component: CtaFooterSection, fullHeight: false },
];

export function HomeScrollSections() {
  const [active, setActive] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollTime = useRef(0);

  // Smooth programmatic scroll to a section
  const scrollTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll<HTMLElement>("[data-section]");
    if (!sections[index]) return;
    setIsScrolling(true);
    sections[index].scrollIntoView({ behavior: "smooth" });
    setActive(index);
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 800);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const sections = container.querySelectorAll<HTMLElement>("[data-section]");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = Number(entry.target.getAttribute("data-section-index"));
            setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Keyboard navigation — arrow down/up, Page Down/Up
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't hijack keys in inputs or other interactive fields
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      // Don't fight with the presentation arrow keys
      if (document.querySelector("[data-present]")) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        setActive((a) => {
          const next = Math.min(a + 1, SECTIONS.length - 1);
          scrollTo(next);
          return next;
        });
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        setActive((a) => {
          const prev = Math.max(a - 1, 0);
          scrollTo(prev);
          return prev;
        });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [scrollTo]);

  // Wheel hijack for section-snap feel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < 900) return; // debounce
      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        setActive((a) => {
          const next = Math.min(a + 1, SECTIONS.length - 1);
          scrollTo(next);
          return next;
        });
      } else {
        setActive((a) => {
          const prev = Math.max(a - 1, 0);
          scrollTo(prev);
          return prev;
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [scrollTo]);

  return (
    <div className="relative h-full">
      {/* Scroll container — hides scrollbar, enables snap */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {SECTIONS.map(({ id, Component }, i) => (
          <div
            key={id}
            data-section
            data-section-index={i}
            className="snap-start snap-always min-h-screen w-full flex flex-col justify-center"
          >
            <Component />
          </div>
        ))}
      </div>

      {/* Dot Navigation — right side */}
      <nav
        aria-label="Page sections"
        className="fixed right-5 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center gap-3"
      >
        {SECTIONS.map(({ label }, i) => {
          const isActive = active === i;
          return (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to ${label}`}
              title={label}
              className="group relative flex items-center justify-center"
            >
              {/* Dot */}
              <span
                className={`block rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? "h-5 w-1.5 bg-brand shadow-[0_0_8px_2px_oklch(0.78_0.10_240/0.5)]"
                    : "h-1.5 w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />

              {/* Tooltip label on hover */}
              <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-hairline bg-background/95 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Scroll progress hint at bottom of first section */}
      {active === 0 && (
        <button
          onClick={() => scrollTo(1)}
          className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-muted-foreground opacity-60 transition-opacity hover:opacity-100 animate-bounce"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0v14M1 9l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
