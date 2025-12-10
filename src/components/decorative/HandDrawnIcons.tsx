import { cn } from "@/lib/utils";

interface HandDrawnIconProps {
  className?: string;
  size?: number;
  color?: string;
}

// Sauna/Heat flame icon - hand drawn style (healing warmth)
export const SaunaIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    {/* Main flame */}
    <path 
      d="M32 8 C38 18 46 24 46 36 C46 46 40 54 32 54 C24 54 18 46 18 36 C18 24 26 18 32 8" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Inner flame */}
    <path 
      d="M32 22 C36 28 40 32 40 40 C40 46 36 50 32 50 C28 50 24 46 24 40 C24 32 28 28 32 22" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.7"
    />
    {/* Core warmth */}
    <path 
      d="M32 34 C34 38 36 40 36 44 C36 47 34 49 32 49 C30 49 28 47 28 44 C28 40 30 38 32 34" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

// Massage hands icon - hand drawn style
export const MassageIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path 
      d="M20 44 C16 40 14 34 16 28 C18 22 24 20 30 22 C34 18 40 18 44 22 C50 26 50 34 46 40 C44 44 40 48 34 48 C28 48 24 48 20 44" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="26" cy="32" r="2" fill={color} opacity="0.6" />
    <circle cx="38" cy="32" r="2" fill={color} opacity="0.6" />
    <path d="M30 38 Q32 40 34 38" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Hot stones icon - hand drawn style
export const HotStonesIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <ellipse cx="32" cy="46" rx="18" ry="8" stroke={color} strokeWidth="2.5" fill="none" />
    <ellipse cx="26" cy="36" rx="12" ry="6" stroke={color} strokeWidth="2" fill="none" />
    <ellipse cx="38" cy="32" rx="10" ry="5" stroke={color} strokeWidth="2" fill="none" />
    <path d="M26 24 Q28 18 26 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M38 20 Q40 14 38 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// Relaxation icon - hand drawn style
export const RelaxIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path 
      d="M32 16 C24 16 18 22 18 30 C18 38 24 44 32 44 C40 44 46 38 46 30 C46 22 40 16 32 16" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
      fill="none"
    />
    <path d="M26 28 L28 30 L26 32" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 28 L36 30 L38 32" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 36 Q32 40 36 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 48 Q32 54 48 48" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Cupping therapy icon - hand drawn style  
export const CuppingIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path 
      d="M22 24 C22 20 26 18 32 18 C38 18 42 20 42 24 L42 40 C42 46 38 50 32 50 C26 50 22 46 22 40 Z" 
      stroke={color} 
      strokeWidth="2.5" 
      fill="none"
    />
    <ellipse cx="32" cy="22" rx="8" ry="3" stroke={color} strokeWidth="2" fill="none" />
    <path d="M28 32 L36 32" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    <path d="M28 38 L36 38" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Brain/Antistress icon - hand drawn style
export const BrainIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path 
      d="M32 14 C24 14 18 20 18 28 C18 32 20 36 24 38 C22 42 24 48 32 50 C40 48 42 42 40 38 C44 36 46 32 46 28 C46 20 40 14 32 14" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
      fill="none"
    />
    <path d="M32 22 C28 22 26 26 28 30" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M32 22 C36 22 38 26 36 30" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M32 28 L32 38" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// Whirlpool/Spa icon - hand drawn style
export const WhirlpoolIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <ellipse cx="32" cy="38" rx="20" ry="12" stroke={color} strokeWidth="2.5" fill="none" />
    <path d="M20 34 Q24 30 28 34 Q32 38 36 34 Q40 30 44 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M26 18 Q28 12 26 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M38 18 Q40 12 38 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// Bed/Traction icon - hand drawn style
export const TractionIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path d="M12 44 L52 44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 44 L16 36 C16 32 20 30 28 30 L36 30 C44 30 48 32 48 36 L48 44" stroke={color} strokeWidth="2" fill="none" />
    <circle cx="16" cy="48" r="3" stroke={color} strokeWidth="2" fill="none" />
    <circle cx="48" cy="48" r="3" stroke={color} strokeWidth="2" fill="none" />
    <path d="M24 26 L24 22 M32 26 L32 20 M40 26 L40 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Tape/Kinesiotaping icon - hand drawn style
export const TapeIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path 
      d="M18 24 L46 24 C48 24 50 26 50 28 L50 36 C50 38 48 40 46 40 L18 40 C16 40 14 38 14 36 L14 28 C14 26 16 24 18 24" 
      stroke={color} 
      strokeWidth="2.5" 
      fill="none"
    />
    <path d="M22 24 L22 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M30 24 L30 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M38 24 L38 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M46 24 L46 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// Gift/Voucher icon - hand drawn style
export const GiftIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <rect x="14" y="26" width="36" height="26" rx="3" stroke={color} strokeWidth="2.5" fill="none" />
    <path d="M14 34 L50 34" stroke={color} strokeWidth="2" />
    <path d="M32 26 L32 52" stroke={color} strokeWidth="2" />
    <path d="M32 26 C28 26 24 22 24 18 C24 14 28 12 32 16 C36 12 40 14 40 18 C40 22 36 26 32 26" stroke={color} strokeWidth="2.5" fill="none" />
  </svg>
);

// Sport/Dumbbell icon - hand drawn style
export const SportIcon = ({ className, size = 48, color = "currentColor" }: HandDrawnIconProps) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={cn("", className)}>
    <path d="M20 32 L44 32" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <rect x="12" y="24" width="8" height="16" rx="2" stroke={color} strokeWidth="2.5" fill="none" />
    <rect x="44" y="24" width="8" height="16" rx="2" stroke={color} strokeWidth="2.5" fill="none" />
    <path d="M8 28 L12 28 M8 36 L12 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M52 28 L56 28 M52 36 L56 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
