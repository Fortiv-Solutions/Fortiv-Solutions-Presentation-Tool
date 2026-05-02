import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/TopNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WelcomeHero } from "@/components/welcome/WelcomeHero";
import { StatsSection } from "@/components/welcome/StatsSection";
import { IntegrationsSection } from "@/components/welcome/IntegrationsSection";
import { FortivCoreSection } from "@/components/welcome/FortivCoreSection";
import { CapabilitiesSection } from "@/components/welcome/CapabilitiesSection";
import { CtaBridgeSection } from "@/components/welcome/CtaBridgeSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fortiv Solutions — Transforming Technology Into Results" },
      { name: "description", content: "Production-ready AI automation systems for enterprise. 40+ companies served, 40% cost reduction, 10x faster workflows." },
      { property: "og:title", content: "Fortiv Solutions — AI Automation, Engineered" },
      { property: "og:description", content: "We deploy production-ready AI systems that eliminate manual bottlenecks and slash operational costs." },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav />
      <main className="flex-1">
        <WelcomeHero />
        <StatsSection />
        <IntegrationsSection />
        <FortivCoreSection />
        <CapabilitiesSection />
        <CtaBridgeSection />
      </main>
      <SiteFooter />
    </div>
  );
}
