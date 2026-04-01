import { useState } from "react";
import { X } from "lucide-react";

export const HolidayNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 max-w-lg w-full rounded-2xl border border-luxury-gold/30 p-8 shadow-2xl" style={{ backgroundColor: 'hsl(var(--contact-card-bg))' }}>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5 text-luxury-gold-dark" />
        </button>
        <div className="text-center space-y-4">
          <h3 className="font-display text-2xl font-medium text-luxury-gold-dark">
            Vážení návštěvníci,
          </h3>
          <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--contact-card-secondary))' }}>
            rádi bychom vás informovali, že naše sauna bude během velikonočních svátků uzavřena ve dnech <strong className="text-luxury-gold-dark">3.–6. dubna</strong>.
          </p>
          <p className="text-base" style={{ color: 'hsl(var(--contact-card-secondary))' }}>
            Děkujeme za pochopení a těšíme se na vás opět po svátcích.
          </p>
          <p className="text-lg font-display text-luxury-gold-dark pt-2">
            Přejeme vám krásné Velikonoce 🐣
          </p>
        </div>
      </div>
    </div>
  );
};
