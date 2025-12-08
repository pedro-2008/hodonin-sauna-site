import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Baby, Clock, Ticket, Heart, Sparkles, ArrowRight } from "lucide-react";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";
import { GiftIcon, SaunaIcon } from "@/components/decorative/HandDrawnIcons";
import { Button } from "@/components/ui/button";
export const Pricing = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="pricing" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-pricing">
      {/* Decorative Elements */}
      <GlowingOrb color="light" size="lg" className="-top-20 -right-20 opacity-30" />
      <GlowingOrb color="warm" size="md" className="bottom-40 -left-32 opacity-20" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
            <span className="w-2 h-2 rounded-full bg-luxury-gold" />
            <span className="text-sm font-medium tracking-wider uppercase text-luxury-gold-dark">Ceník</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium elegant-underline inline-block" style={{
          color: 'hsl(var(--pricing-heading))'
        }}>
            Ceník – Finská sauna
          </h2>
        </div>
        
        {/* Gift Voucher - Luxusní blok */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
        transitionDelay: '100ms'
      }}>
          <div className="gift-voucher rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left side - Icon and content */}
              <div className="flex-1">
                <div className="flex items-start gap-5">
                  <div className="icon-hand-drawn flex-shrink-0">
                    <GiftIcon size={56} color="hsl(var(--luxury-gold-dark))" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-medium mb-3" style={{
                    color: 'hsl(var(--pricing-heading))'
                  }}>
                      Dárkové poukazy
                    </h3>
                    <p className="text-lg mb-4 font-light" style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>Darujte svým blízkým zážitek plný relaxace a pohody. Dárkové poukazy nabízíme v libovolné hodnotě.</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 rounded-full bg-luxury-gold/15 text-luxury-gold-dark text-sm font-medium">
                        Na saunu
                      </span>
                      <span className="px-4 py-2 rounded-full bg-luxury-gold/15 text-luxury-gold-dark text-sm font-medium">
                        Na masáže
                      </span>
                      <span className="px-4 py-2 rounded-full bg-luxury-gold/15 text-luxury-gold-dark text-sm font-medium">
                        Kombinované
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - CTA */}
              <div className="flex-shrink-0">
                <Button className="btn-cta gap-2 group" onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}>
                  <span>Objednat poukaz</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-24 h-24 border border-luxury-gold/10 rounded-full" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border border-luxury-gold/10 rounded-full" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Jednorázový vstup */}
          <Card className={`luxury-card overflow-hidden border-0 transition-all duration-1000 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '200ms'
        }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                
                <CardTitle className="font-display text-2xl" style={{
                color: 'hsl(var(--pricing-heading))'
              }}>
                  Jednorázový vstup
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[{
              icon: User,
              label: "1 osoba / 2 hodiny",
              price: "250 Kč"
            }, {
              icon: Baby,
              label: "Děti do 15 let",
              price: "150 Kč"
            }, {
              icon: Clock,
              label: "Časově neomezený vstup",
              price: "350 Kč"
            }].map((item, index) => <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-luxury-gold-dark group-hover:scale-110 transition-transform" />
                    <span className="font-medium" style={{
                  color: 'hsl(var(--pricing-main-text))'
                }}>{item.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-luxury-gold-dark">{item.price}</span>
                </div>)}
            </CardContent>
          </Card>

          {/* Permanentky */}
          <Card className={`luxury-card overflow-hidden border-0 relative transition-all duration-1000 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '300ms'
        }}>
            {/* Popular Badge */}
            
            
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                
                <CardTitle className="font-display text-2xl" style={{
                color: 'hsl(var(--pricing-heading))'
              }}>
                  Permanentky
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[{
              label: "10 vstupů",
              price: "2300 Kč",
              savings: "Ušetříte 200 Kč"
            }, {
              label: "20 vstupů",
              price: "4200 Kč",
              savings: "Ušetříte 800 Kč"
            }].map((item, index) => <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-luxury-gold/5 hover:bg-luxury-gold/10 transition-all duration-300 border border-luxury-gold/10 group">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-luxury-gold-dark group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-medium block" style={{
                    color: 'hsl(var(--pricing-main-text))'
                  }}>{item.label}</span>
                      <span className="text-xs font-medium text-eco-green">{item.savings}</span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-luxury-gold-dark">{item.price}</span>
                </div>)}
              
              <div className="flex items-start gap-3 pt-4 mt-4 border-t border-border/50">
                <div className="p-2 bg-eco-green/10 rounded-xl">
                  <Heart className="w-4 h-4 text-eco-green" />
                </div>
                <p className="text-sm font-light" style={{
                color: 'hsl(var(--pricing-main-text))'
              }}>
                  <span className="font-semibold">Tip:</span> Permanentky jsou přenosné – můžete je sdílet s rodinou nebo přáteli.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};