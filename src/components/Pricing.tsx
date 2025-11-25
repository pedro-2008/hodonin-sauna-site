import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Baby, Clock, Ticket, Heart, Sparkles, CreditCard } from "lucide-react";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";

export const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="pricing" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-pricing">
      {/* Decorative Elements */}
      <GlowingOrb color="light" size="lg" className="-top-20 -right-20 opacity-40" />
      <GlowingOrb color="warm" size="md" className="bottom-40 -left-32 opacity-30" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-wood-warm/10 border border-wood-warm/20">
            <CreditCard className="w-4 h-4 text-wood-warm" />
            <span className="text-sm font-medium tracking-wider uppercase text-wood-warm">Ceník</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium" style={{ color: 'hsl(var(--pricing-heading))' }}>
            Ceník – Finská sauna
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jednorázový vstup */}
          <Card className={`glass-card hover-lift rounded-3xl overflow-hidden border-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/10 rounded-xl">
                  <User className="w-6 h-6 text-wood-warm" />
                </div>
                <CardTitle className="font-display text-2xl" style={{ color: 'hsl(var(--pricing-heading))' }}>
                  Jednorázový vstup
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { icon: User, label: "1 osoba / 2 hodiny", price: "250 Kč" },
                { icon: Baby, label: "Děti do 15 let", price: "150 Kč" },
                { icon: Clock, label: "Časově neomezený vstup", price: "350 Kč" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-wood-light/10 hover:bg-wood-light/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-wood-warm" />
                    <span className="font-medium" style={{ color: 'hsl(var(--pricing-main-text))' }}>{item.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-wood-warm">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Permanentky */}
          <Card className={`glass-card hover-lift rounded-3xl overflow-hidden border-0 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-wood-warm to-secondary text-white text-xs font-semibold rounded-full">
              Oblíbené
            </div>
            
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/10 rounded-xl">
                  <Ticket className="w-6 h-6 text-wood-warm" />
                </div>
                <CardTitle className="font-display text-2xl" style={{ color: 'hsl(var(--pricing-heading))' }}>
                  Permanentky
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: "10 vstupů", price: "2300 Kč", savings: "Ušetříte 200 Kč" },
                { label: "20 vstupů", price: "4200 Kč", savings: "Ušetříte 800 Kč" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-wood-light/10 hover:bg-wood-light/20 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-wood-warm" />
                    <div>
                      <span className="font-medium block" style={{ color: 'hsl(var(--pricing-main-text))' }}>{item.label}</span>
                      <span className="text-xs text-eco-green">{item.savings}</span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-wood-warm">{item.price}</span>
                </div>
              ))}
              
              <div className="flex items-start gap-3 pt-4 border-t border-wood-light/20">
                <div className="p-2 bg-eco-green/10 rounded-lg">
                  <Heart className="w-4 h-4 text-eco-green" />
                </div>
                <p className="text-sm" style={{ color: 'hsl(var(--pricing-main-text))' }}>
                  <span className="font-semibold">Tip:</span> Permanentky jsou přenosné – můžete je sdílet s rodinou nebo přáteli.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
