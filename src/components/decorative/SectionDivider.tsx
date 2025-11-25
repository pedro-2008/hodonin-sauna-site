import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "light" | "dark" | "gradient";
  className?: string;
}

export const SectionDivider = ({ variant = "light", className }: SectionDividerProps) => {
  return (
    <div className={cn("relative w-full py-8 overflow-hidden", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-4 w-full max-w-md">
          {/* Left line */}
          <div 
            className={cn(
              "flex-1 h-[1px]",
              variant === "light" && "bg-gradient-to-r from-transparent via-wood-warm/30 to-wood-warm/50",
              variant === "dark" && "bg-gradient-to-r from-transparent via-secondary/30 to-secondary/50",
              variant === "gradient" && "bg-gradient-to-r from-transparent via-wood-light/40 to-wood-light/60"
            )}
          />
          
          {/* Center ornament */}
          <div className="relative">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              className={cn(
                "transform rotate-45",
                variant === "light" && "text-wood-warm/40",
                variant === "dark" && "text-secondary/40",
                variant === "gradient" && "text-wood-light/50"
              )}
            >
              <rect 
                x="8" 
                y="8" 
                width="24" 
                height="24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="animate-pulse-glow"
              />
              <rect 
                x="14" 
                y="14" 
                width="12" 
                height="12" 
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
          
          {/* Right line */}
          <div 
            className={cn(
              "flex-1 h-[1px]",
              variant === "light" && "bg-gradient-to-l from-transparent via-wood-warm/30 to-wood-warm/50",
              variant === "dark" && "bg-gradient-to-l from-transparent via-secondary/30 to-secondary/50",
              variant === "gradient" && "bg-gradient-to-l from-transparent via-wood-light/40 to-wood-light/60"
            )}
          />
        </div>
      </div>
    </div>
  );
};
