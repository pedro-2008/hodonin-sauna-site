import { X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "sauna-notice-2026-10-28-dismissed";

export const SpecialNotice = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable – ignore */
    }
  };

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* storage unavailable – show the notice */
    }
    if (dismissed) return;

    const timer = window.setTimeout(() => setIsOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="special-notice-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 animate-in fade-in-0 duration-300"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Zavřít oznámení"
        onClick={close}
        className="absolute inset-0 h-full w-full cursor-default bg-wood-dark/70 backdrop-blur-sm"
      />

      {/* Card */}
      <div className="relative w-full max-w-lg rounded-lg border border-accent/30 bg-card p-8 sm:p-10 shadow-warm animate-in fade-in-0 zoom-in-95 duration-300">
        <button
          type="button"
          onClick={close}
          aria-label="Zavřít oznámení"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <X className="h-4 w-4" />
        </button>

        <p
          id="special-notice-title"
          className="mb-6 text-xs uppercase tracking-[0.25em] text-accent"
        >
          Oznámení
        </p>


        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">Vážení návštěvníci,</p>
          <p>
            rádi bychom vás informovali, že sauna bude ve středu 28. října z
            důvodu státního svátku uzavřena.
          </p>
          <p>
            Přejeme vám krásný a pohodový den plný odpočinku a těšíme se na vás
            opět v následujících dnech!
          </p>
        </div>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>
    </div>
  );
};
