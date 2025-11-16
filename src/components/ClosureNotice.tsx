import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

export const ClosureNotice = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Zavřít</span>
        </button>
        <DialogTitle className="sr-only">Oznámení o zavření</DialogTitle>
        <div className="flex items-center justify-center py-8">
          <p className="text-2xl font-bold text-center text-foreground">
            17. 11. 2025 - ZAVŘENO
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
