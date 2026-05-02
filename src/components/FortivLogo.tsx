import logoUrl from "@/assets/fortiv-logo.png";

interface FortivLogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export function FortivLogo({ className = "h-8 w-auto" }: FortivLogoProps) {
  return (
    <img
      src={logoUrl}
      alt="Fortiv Solutions"
      className={className}
      draggable={false}
    />
  );
}
