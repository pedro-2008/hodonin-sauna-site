import { cn } from "@/lib/utils";

interface GlowingOrbProps {
  className?: string;
  color?: "warm" | "light" | "accent";
  size?: "sm" | "md" | "lg";
  blur?: boolean;
}

export const GlowingOrb = ({ 
  className, 
  color = "warm", 
  size = "md",
  blur = true 
}: GlowingOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  const colorClasses = {
    warm: "from-wood-warm/20 via-wood-warm/10 to-transparent",
    light: "from-secondary/30 via-secondary/15 to-transparent",
    accent: "from-eco-green/20 via-eco-green/10 to-transparent",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full bg-gradient-radial pointer-events-none animate-float",
        sizeClasses[size],
        colorClasses[color],
        blur && "blur-3xl",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${
          color === "warm" ? "hsl(27 47% 37% / 0.15)" :
          color === "light" ? "hsl(39 52% 77% / 0.25)" :
          "hsl(105 9% 50% / 0.15)"
        } 0%, transparent 70%)`,
      }}
    />
  );
};
