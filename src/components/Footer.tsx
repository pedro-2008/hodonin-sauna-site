import { Facebook, Instagram, Heart, Flame } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#2A1A0A' }}>
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-wood-warm/20 rounded-xl">
              <Flame className="w-8 h-8 text-secondary" />
            </div>
            <span className="font-display text-3xl font-medium text-white">
              Sauna Na Teze
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-white/60 text-center mb-10 max-w-md">
            Autentická finská sauna v srdci Hodonína. Relaxace, regenerace a pohoda pro tělo i duši.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12">
            <a 
              href="https://www.facebook.com/profile.php?id=61582524922922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-[#1877F2]/10 hover:bg-[#1877F2] text-white rounded-full transition-all duration-300 hover:scale-105 border border-[#1877F2]/30 hover:border-[#1877F2]"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
          
          {/* Decorative Divider */}
          <div className="flex items-center gap-4 w-full max-w-xs mb-8">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-secondary/40 rotate-45">
              <rect x="4" y="4" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/50 text-sm flex items-center gap-2 justify-center">
              © {currentYear} Sauna Na Teze. Vytvořeno s 
              <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
              v Hodoníně.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-wood-warm/10 blur-3xl pointer-events-none" />
    </footer>
  );
};
