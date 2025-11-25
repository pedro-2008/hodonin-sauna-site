import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, CheckCircle2, Flame, Droplet, Sprout, Sparkles } from "lucide-react";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const benefits = [
    { icon: CheckCircle2, text: "Zlepšuje krevní oběh a imunitní systém" },
    { icon: CheckCircle2, text: "Uvolňuje svalové napětí a bolest" },
    { icon: CheckCircle2, text: "Podporuje detoxikaci organismu" },
    { icon: CheckCircle2, text: "Snižuje stres a zlepšuje náladu" },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-about">
      {/* Decorative Elements */}
      <GlowingOrb color="light" size="lg" className="-top-32 -right-32 opacity-50" />
      <GlowingOrb color="warm" size="md" className="bottom-20 -left-20 opacity-30" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-wood-warm/10 border border-wood-warm/20">
            <Sparkles className="w-4 h-4 text-wood-warm" />
            <span className="text-sm font-medium tracking-wider uppercase text-wood-warm">O naší sauně</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-4 elegant-underline inline-block" style={{ color: 'hsl(var(--about-heading))' }}>
            Teplo, ticho a vůně dřeva
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'hsl(var(--about-main-text))' }}>
              <span className="font-display text-3xl italic text-wood-warm">"</span>
              Ticho, teplo a klid. Místo, kde si můžete odpočinout od všeho a být sami sebou.
              <span className="font-display text-3xl italic text-wood-warm">"</span>
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: Flame, title: "Teplo, které léčí", desc: "Autentická finská sauna s teplotou až 90°C" },
                { icon: Droplet, title: "Očista těla i mysli", desc: "Tradiční saunování pro dokonalou regeneraci" },
                { icon: Sprout, title: "Přírodní materiály", desc: "Kvalitní dřevo a přírodní esence" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-wood-light/30 hover-lift"
                >
                  <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/20 rounded-xl">
                    <item.icon className="w-6 h-6 text-wood-warm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{ color: 'hsl(var(--about-heading))' }}>{item.title}</h4>
                    <p className="text-sm" style={{ color: 'hsl(var(--about-accent-text))' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Temperature Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-wood-warm/10 to-secondary/10 rounded-2xl border border-wood-warm/20">
              <div className="p-3 bg-wood-warm/20 rounded-xl">
                <Thermometer className="w-8 h-8 text-wood-warm" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-wood-warm">90°C</h3>
                <p className="text-sm" style={{ color: 'hsl(var(--about-accent-text))' }}>Optimální teplota</p>
              </div>
            </div>
          </div>
          
          <Card 
            className={`glass-card hover-lift rounded-3xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
            style={{ transitionDelay: '200ms' }}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-wood-warm/10 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wood-warm" />
                </div>
                <h3 className="font-display text-2xl font-medium" style={{ color: 'hsl(var(--about-heading))' }}>
                  Proč finská sauna?
                </h3>
              </div>
              
              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-wood-light/20"
                  >
                    <div className="p-1.5 bg-eco-green/10 rounded-full mt-0.5">
                      <benefit.icon className="w-4 h-4 text-eco-green" />
                    </div>
                    <span className="text-lg" style={{ color: 'hsl(var(--about-main-text))' }}>{benefit.text}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-wood-warm/20 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-wood-warm/20 rounded-bl-2xl" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
