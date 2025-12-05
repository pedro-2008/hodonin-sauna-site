import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";
import naseSaunaImage from "@/assets/nase-sauna.jpg";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const benefits = [
    "Zlepšuje krevní oběh a imunitní systém",
    "Uvolňuje svalové napětí a bolest",
    "Podporuje detoxikaci organismu",
    "Snižuje stres a zlepšuje náladu",
  ];

  const features = [
    { title: "Teplo, které léčí", desc: "Finská sauna s teplotou až 90°C" },
    { title: "Očista těla i mysli", desc: "Tradiční saunování pro dokonalou regeneraci" },
    { title: "Přírodní materiály", desc: "Kvalitní dřevo a přírodní esence" },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-about">
      {/* Decorative Elements */}
      <GlowingOrb color="light" size="lg" className="-top-32 -right-32 opacity-40" />
      <GlowingOrb color="warm" size="md" className="bottom-20 -left-20 opacity-25" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
            <span className="w-2 h-2 rounded-full bg-luxury-gold" />
            <span className="text-sm font-medium tracking-wider uppercase text-luxury-gold-dark">O naší sauně</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-4 elegant-underline inline-block" style={{ color: 'hsl(var(--about-heading))' }}>
            Teplo, ticho a vůně dřeva
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Quote */}
            <div className="mb-10 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-luxury-gold/10">
              <p className="text-xl leading-relaxed font-light italic" style={{ color: 'hsl(var(--about-main-text))' }}>
                <span className="font-display text-4xl text-luxury-gold not-italic">"</span>
                Ticho, teplo a klid. Místo, kde si můžete odpočinout od všeho a být sami sebou.
                <span className="font-display text-4xl text-luxury-gold not-italic">"</span>
              </p>
            </div>
            
            {/* Feature cards */}
            <div className="space-y-4 mb-10">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-border/30 hover-lift transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <h4 className="font-semibold text-lg mb-1" style={{ color: 'hsl(var(--about-heading))' }}>{item.title}</h4>
                  <p className="text-sm font-light" style={{ color: 'hsl(var(--about-accent-text))' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Temperature Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 rounded-2xl border border-luxury-gold/20">
              <h3 className="text-4xl font-bold text-luxury-gold-dark">90°C</h3>
              <p className="text-sm font-light" style={{ color: 'hsl(var(--about-accent-text))' }}>Optimální teplota</p>
            </div>
          </div>
          
          {/* Sauna Image & Benefits */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
              <img 
                src={naseSaunaImage} 
                alt="Naše finská sauna - interiér s dřevěnými lavicemi" 
                className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-wood-dark">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Naše sauna
                </span>
              </div>
            </div>

            {/* Benefits Card */}
            <Card className="luxury-card overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-medium mb-6" style={{ color: 'hsl(var(--about-heading))' }}>
                  Proč finská sauna?
                </h3>
                
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-500 hover:bg-muted/30 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 flex-shrink-0" />
                      <span className="text-base font-light" style={{ color: 'hsl(var(--about-main-text))' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
