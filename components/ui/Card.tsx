import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function Card({ children, className, hoverGlow = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-surface p-6 transition-all duration-300",
        hoverGlow && "hover:border-primary/30 hover:glow-orange",
        className
      )}
    >
      {children}
    </div>
  );
}
