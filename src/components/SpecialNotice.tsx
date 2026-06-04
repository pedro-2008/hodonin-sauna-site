import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const SpecialNotice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem("special-notice-closed");
    if (closed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      requestAnimationFrame(() => setIsVisible(true));
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("special-notice-closed", "true");
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "hsl(20 40% 10% / 0.6)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}
    >
      <div
        className={`relative max-w-md w-full transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="rounded-3xl p-8 relative"
          style={{
            backgroundColor: "hsl(var(--contact-card-bg))",
            border: "1px solid hsl(30 40% 80% / 0.5)",
            boxShadow:
              "0 4px 32px hsl(25 75% 50% / 0.12), 0 1px 2px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{ color: "hsl(var(--stone-light))" }}
            aria-label="Zavřít"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Decorative amber line at top */}
          <div
            className="absolute top-0 left-8 right-8 h-1 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(25 75% 50%), hsl(30 70% 55%))",
            }}
          />

          {/* Content */}
          <div className="pt-4">
            <h3
              className="font-display text-2xl font-semibold mb-4 text-center"
              style={{ color: "hsl(var(--contact-card-heading))" }}
            >
              Otevřeno v pátek 4. 6.
            </h3>

            <div
              className="space-y-3 text-center"
              style={{ color: "hsl(var(--contact-card-text))" }}
            >
              <p className="font-medium" style={{ color: "hsl(var(--contact-card-secondary))" }}>
                Vážení návštěvníci,
              </p>
              <p className="leading-relaxed">
                na základě vašeho zájmu o saunování bude v pátek 4. června naše sauna výjimečně otevřena. Budeme se těšit na vaši návštěvu.
              </p>
              <p
                className="font-semibold pt-2"
                style={{ color: "hsl(var(--amber-dark))" }}
              >
                Otevírací doba: 16:00 – 21:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
