import { useState } from "react";
import { X } from "lucide-react";

export const HolidayNotice = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="relative bg-card text-card-foreground rounded-2xl shadow-2xl max-w-md w-full p-8 border border-border animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-2xl font-bold mb-4 pr-8">Vážení návštěvníci,</h2>
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            rádi bychom vás informovali, že naše sauna bude během tohoto víkendu uzavřena.
          </p>
          <p>
            Děkujeme za pochopení a těšíme se na vás opět v následujících dnech.
          </p>
        </div>
      </div>
    </div>
  );
};
