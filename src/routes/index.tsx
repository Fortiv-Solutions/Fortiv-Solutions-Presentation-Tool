import { createFileRoute } from "@tanstack/react-router";
import { HomeScrollSections } from "@/components/welcome/HomeScrollSections";

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
  return <HomeScrollSections />;
}
