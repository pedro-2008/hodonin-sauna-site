import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const SpecialNotice = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-w-md w-full rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-300"
        style={{
          background: "hsl(var(--contact-card-bg))",
          color: "hsl(var(--contact-card-text))",
          border: "1px solid hsl(var(--contact-card-border))",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Zavřít"
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-black/10 transition-colors"
          style={{ color: "hsl(var(--contact-card-heading))" }}
        >
          <X className="h-5 w-5" />
        </button>

        <h3
          className="font-display text-2xl mb-4 pr-8"
          style={{ color: "hsl(var(--contact-card-heading))" }}
        >
          Letní uzavření sauny
        </h3>

        <div className="space-y-3 leading-relaxed">
          <p>Vážení návštěvníci,</p>
          <p>
            rádi bychom Vás informovali, že sauna bude ve dnech{" "}
            <strong style={{ color: "hsl(var(--contact-card-accent))" }}>
              od 29. června do 4. srpna
            </strong>{" "}
            uzavřena.
          </p>
          <p>
            Přejeme Vám krásné a pohodové letní dny a těšíme se na Vaši další
            návštěvu.
          </p>
        </div>
      </div>
    </div>
  );
};
