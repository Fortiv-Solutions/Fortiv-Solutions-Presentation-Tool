export function IntegrationsGridSection() {
  const integrations = [
    { name: "Salesforce", type: "CRM" },
    { name: "HubSpot", type: "CRM" },
    { name: "WhatsApp", type: "Messaging" },
    { name: "OpenAI", type: "AI Models" },
    { name: "Slack", type: "Comms" },
    { name: "Notion", type: "Docs" },
    { name: "Zapier", type: "Automation" },
    { name: "Stripe", type: "Payments" },
    { name: "Shopify", type: "E-Commerce" },
    { name: "Snowflake", type: "Data" },
    { name: "PostgreSQL", type: "Database" },
    { name: "AWS", type: "Cloud" },
    { name: "GitHub", type: "Dev" },
    { name: "Pipedrive", type: "Sales" },
    { name: "ERP Systems", type: "Ops" },
  ];

  return (
    <section className="relative flex h-full w-full flex-col justify-center overflow-hidden border-b border-hairline">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.10_240/0.15),transparent_60%)]" aria-hidden />
      <div className="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 mix-blend-multiply blur-[120px] animate-pulse dark:mix-blend-screen" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-10">
        <div className="mb-6 inline-flex items-center justify-center bg-cyan-500 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          Ecosystem
        </div>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
          200+ INTEGRATIONS — <span className="text-cyan-500">WORKS WITH YOUR STACK</span>
        </h2>
        <p className="mt-6 max-w-3xl text-xl italic tracking-wide text-muted-foreground md:text-2xl">
          Connect your entire tech stack in minutes. No rip-and-replace. No disruption.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {integrations.map((item, i) => (
            <div key={i} className="group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-hairline bg-background/60 p-4 text-center shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="font-display text-base font-bold text-foreground">{item.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-cyan-500">{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
