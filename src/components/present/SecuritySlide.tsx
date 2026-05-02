import { SlideShell, type SlideProps } from "./SlideShell";
import { ShieldCheck, Lock, Server, FileCheck } from "lucide-react";

export function SecuritySlide({ solution }: SlideProps) {
  return (
    <SlideShell eyebrow="Security & Compliance" align="start">
      <div className="relative z-10 flex h-full w-full max-w-6xl flex-col justify-center">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Bank-grade <span className="text-brand">security.</span>
            </h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
              Your data is your most valuable asset. {solution.name} is built from the ground up to exceed the most stringent enterprise compliance and security requirements.
            </p>

            <ul className="mt-10 space-y-6">
              {[
                "End-to-end AES-256 encryption at rest and in transit.",
                "SOC 2 Type II, GDPR, and HIPAA compliant infrastructure.",
                "Granular role-based access control (RBAC) and SSO integration.",
                "Continuous automated threat monitoring and vulnerability scanning.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className="text-foreground/90">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Encryption", value: "AES-256", icon: Lock },
              { title: "Compliance", value: "SOC 2 Type II", icon: FileCheck },
              { title: "Uptime SLA", value: "99.99%", icon: Server },
              { title: "Data Privacy", value: "GDPR Ready", icon: ShieldCheck },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/5 p-8 text-center backdrop-blur-md"
              >
                <stat.icon className="mb-4 h-8 w-8 text-brand" />
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
