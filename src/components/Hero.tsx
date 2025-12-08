import { Button } from "@/components/ui/button";
import heroImage from "@/assets/sauna-hero.jpg";
import { SteamParticles } from "@/components/decorative/SteamParticles";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>
      
      {/* Steam Particles Effect */}
      <SteamParticles />
      
      {/* Decorative Glowing Orbs */}
      <GlowingOrb color="warm" size="lg" className="top-20 -left-32 opacity-40" />
      <GlowingOrb color="light" size="md" className="bottom-40 -right-20 opacity-30" />
      
      {/* Decorative Frame Lines */}
      <div className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none" />
      <div className="absolute inset-12 md:inset-20 border border-white/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-sm font-medium tracking-wider uppercase" style={{
          color: 'hsl(var(--hero-accent-text))'
        }}>
            Finská sauna v Hodoníně
          </span>
        </div>
        
        {/* Main Heading with Display Font */}
        <h1 className="font-display text-6xl md:text-8xl font-medium mb-6 tracking-wide animate-fade-in" style={{
        color: 'hsl(var(--hero-heading))'
      }}>
          <span className="block">Sauna</span>
          <span className="block italic text-secondary/90">Na Teze</span>
        </h1>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{
        animationDelay: '0.2s'
      }}>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-secondary/60 rotate-45">
            <rect x="4" y="4" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
        </div>
        
        <p className="text-xl md:text-2xl mb-4 font-light animate-fade-in-up tracking-wide" style={{
        color: 'hsl(var(--hero-main-text))',
        animationDelay: '0.3s',
        animationFillMode: 'backwards'
      }}>
          Teplo • Klid • Regenerace
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{
        color: 'hsl(var(--hero-main-text))',
        opacity: 0.9,
        animationDelay: '0.4s',
        animationFillMode: 'backwards'
      }}>
          Přijďte si odpočinout do finské sauny. Dopřejte si relax, regeneraci a pohodu pro tělo i duši.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
        animationDelay: '0.6s',
        animationFillMode: 'backwards'
      }}>
          
          <Button variant="outline" size="lg" className="text-lg px-10 py-6 bg-transparent border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105" style={{
          color: 'hsl(var(--hero-accent-text))'
        }} onClick={() => {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }}>
            Přijďte se ohřát
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
      
      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>;
};