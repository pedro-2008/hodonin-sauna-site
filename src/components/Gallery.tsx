import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import massage1 from "@/assets/massage-1.jpg";
import massage2 from "@/assets/massage-2.jpg";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";
import { Images, Sparkles } from "lucide-react";

export const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="gallery" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-services">
      {/* Decorative Elements */}
      <GlowingOrb color="light" size="lg" className="top-10 -left-40 opacity-40" />
      <GlowingOrb color="warm" size="md" className="bottom-20 -right-20 opacity-30" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-wood-warm/10 border border-wood-warm/20">
            <Images className="w-4 h-4 text-wood-warm" />
            <span className="text-sm font-medium tracking-wider uppercase text-wood-warm">Galerie</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium" style={{ color: 'hsl(var(--services-heading))' }}>
            Nahlédněte k nám
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-warm hover-lift">
              {/* Image */}
              <img 
                src={massage1} 
                alt="Relaxační masáž v sauně" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-semibold">Relaxační masáž</h3>
                <p className="text-white/80 text-sm">Profesionální péče pro vaše tělo</p>
              </div>
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          
          <div 
            className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-warm hover-lift">
              {/* Image */}
              <img 
                src={massage2} 
                alt="Masáž obličeje a relaxace" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-semibold">Wellness péče</h3>
                <p className="text-white/80 text-sm">Kompletní relaxace a regenerace</p>
              </div>
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
