import { useState } from "react";
import { X } from "lucide-react";

export const HolidayNotice = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative max-w-md w-full bg-card border-2 border-primary/30 rounded-lg shadow-2xl p-8 animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setOpen(false)}
          aria-label="Zavřít"
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-muted transition-colors text-foreground"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold text-primary mb-4">Oznámení</h3>
        <div className="space-y-3 text-foreground/90 leading-relaxed">
          <p>Vážení návštěvníci,</p>
          <p>
            rádi bychom vás informovali, že sauna bude během tohoto víkendu
            (25. a 26. dubna) uzavřena.
          </p>
          <p>
            Děkujeme za pochopení a těšíme se na vás opět v následujících dnech.
          </p>
        </div>
      </div>
    </div>
  );
};
