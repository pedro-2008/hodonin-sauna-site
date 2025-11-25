import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Úvod", id: "hero" },
    { label: "O nás", id: "about" },
    { label: "Služby", id: "services" },
    { label: "Ceník", id: "pricing" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-xl shadow-lg" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? "bg-wood-warm/10" 
                : "bg-white/10 backdrop-blur-sm"
            }`}>
              <Flame className={`w-5 h-5 transition-colors duration-300 ${
                isScrolled ? "text-wood-warm" : "text-secondary"
              }`} />
            </div>
            <span className={`font-display text-xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-wood-dark" : "text-white"
            }`}>
              Sauna Na Teze
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled 
                    ? "text-wood-dark hover:text-wood-warm hover:bg-wood-warm/10" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className={`ml-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? "bg-wood-warm text-white hover:bg-wood-warm/90 shadow-md hover:shadow-lg" 
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              }`}
            >
              Kontakt
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden rounded-full ${
              isScrolled ? "text-wood-dark hover:bg-wood-warm/10" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-2 animate-fade-in ${
            isScrolled ? "" : "bg-black/20 backdrop-blur-xl rounded-2xl p-4 -mx-2"
          }`}>
            {[...navItems, { label: "Kontakt", id: "contact" }].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isScrolled 
                    ? "text-wood-dark hover:text-wood-warm hover:bg-wood-warm/10" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
