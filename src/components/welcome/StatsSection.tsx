import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

export function StatsSection() {
  return (
    <section className="border-b border-hairline bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 bg-card p-8 text-center">
              <AnimatedValue value={s.value} />
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Extract numeric portion if any
  const num = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/^[\d.]+/, "");
  const isNumeric = !isNaN(num) && value !== "24/7";

  const [n, setN] = useState(isNumeric ? 0 : num);

  useEffect(() => {
    if (!ref.current || !isNumeric) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !shown) {
        setShown(true);
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(eased * num);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [num, isNumeric, shown]);

  return (
    <div ref={ref} className="font-display text-5xl font-semibold tracking-tight text-brand md:text-6xl">
      {isNumeric ? `${num % 1 === 0 ? Math.round(n) : n.toFixed(1)}${suffix}` : value}
    </div>
  );
}
