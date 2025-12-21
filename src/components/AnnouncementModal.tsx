import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative mx-4 max-w-md rounded-2xl bg-card border border-border p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Zavřít"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            📢 Oznámení
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Sauna bude od <strong>22.12.2025</strong> do <strong>1.1.2026</strong> zavřena.
          </p>
          <p className="text-lg text-foreground mt-2">
            Těšíme se na Vás v Novém roce! 🎄
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
