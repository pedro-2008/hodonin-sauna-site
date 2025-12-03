import { Facebook, Heart, Flame } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'hsl(18 45% 10%)' }}>
      <div className="h-1 bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-amber/15 rounded-xl">
              <Flame className="w-8 h-8 text-amber" />
            </div>
            <span className="font-display text-3xl font-medium text-white">
              Sauna Na Teze
            </span>
          </div>
          
          <p className="text-white/60 text-center mb-10 max-w-md font-light">
            Autentická finská sauna v srdci Hodonína. Relaxace, regenerace a pohoda pro tělo i duši.
          </p>
          
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
          
          <div className="flex items-center gap-4 w-full max-w-xs mb-8">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-amber/30" />
            <div className="w-2 h-2 rotate-45 border border-amber/40" />
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-amber/30" />
          </div>
          
          <p className="text-white/50 text-sm flex items-center gap-2 justify-center">
            © {currentYear} Sauna Na Teze. Vytvořeno s 
            <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
            v Hodoníně.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber/10 blur-3xl pointer-events-none" />
    </footer>
  );
};
