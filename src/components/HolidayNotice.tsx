import { useState } from "react";
import { X } from "lucide-react";

export const HolidayNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative max-w-md w-full bg-card border border-luxury-gold/30 rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5 text-luxury-gold-dark" />
        </button>

        <div className="space-y-4 pt-2">
          <h3 className="font-display text-2xl text-luxury-gold-dark">
            Vážení návštěvníci,
          </h3>
          <p className="text-foreground leading-relaxed">
            rádi bychom vás informovali, že sauna bude během státních svátků{" "}
            <span className="font-semibold text-luxury-gold-dark">
              1. a 8. května
            </span>{" "}
            uzavřena.
          </p>
          <p className="text-foreground leading-relaxed">
            Děkujeme za pochopení a těšíme se na vás opět v následujících dnech.
          </p>
        </div>
      </div>
    </div>
  );
};
