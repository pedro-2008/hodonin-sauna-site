import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";
import { SportIcon, RelaxIcon, CuppingIcon, BrainIcon, HotStonesIcon, TractionIcon, TapeIcon, WhirlpoolIcon } from "@/components/decorative/HandDrawnIcons";
export const Services = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const services = [{
    title: "Sportovní masáž",
    price: "400 - 800 Kč",
    description: "Specializovaná masáž pro sportovce zaměřená na regeneraci svalů.",
    features: ["Hluboké svalové techniky", "Individuální přístup", "30-60 minut"],
    Icon: SportIcon
  }, {
    title: "Relaxační masáž",
    price: "1200 Kč",
    description: "Jemná celotělová masáž pro úplné uvolnění a odstranění stresu.",
    features: ["Celotělová masáž", "Aromatické oleje", "90 minut"],
    Icon: RelaxIcon
  }, {
    title: "Baňkování",
    price: "450 - 500 Kč",
    description: "Tradiční čínská metoda pro zlepšení krevního oběhu.",
    features: ["Detoxikace organismu", "Zlepšení oběhu", "30-40 minut"],
    Icon: CuppingIcon
  }, {
    title: "Antistresová masáž",
    price: "450 Kč",
    description: "Speciální masáž hlavy a krční páteře pro uvolnění.",
    features: ["Uvolnění krčních svalů", "Proti migréně", "30-40 minut"],
    Icon: BrainIcon
  }, {
    title: "Lávové kameny",
    price: "950 Kč",
    description: "Masáž s horkými vulkanickými kameny pro hlubokou relaxaci.",
    features: ["Horké lávové kameny", "Hluboká relaxace", "60 minut"],
    Icon: HotStonesIcon
  }, {
    title: "Autotrakční lehátko",
    price: "100 - 200 Kč",
    description: "Moderní zařízení pro protažení páteře a uvolnění kloubů.",
    features: ["Trakce páteře", "Terapeutické protažení", "10-20 minut"],
    Icon: TractionIcon
  }, {
    title: "Kineziotejping",
    price: "Dle rozsahu",
    description: "Aplikace speciálních pásek pro podporu svalů a kloubů.",
    features: ["Podpora svalů", "Rehabilitace", "Individuální"],
    Icon: TapeIcon
  }, {
    title: "Vířivé vany",
    price: "250 / 500 Kč",
    description: "Relaxace ve vířivých vanách s hydromasážními tryskami.",
    features: ["Hydromasážní trysky", "Regulace teploty", "30/60 minut"],
    Icon: WhirlpoolIcon
  }];
  return <section id="services" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-services">
      {/* Decorative Elements */}
      <GlowingOrb color="warm" size="lg" className="top-20 -right-40 opacity-20" />
      <GlowingOrb color="light" size="md" className="bottom-40 -left-20 opacity-25" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
            <span className="w-2 h-2 rounded-full bg-luxury-gold" />
            <span className="text-sm font-medium tracking-wider uppercase text-luxury-gold-dark">Služby</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium mb-6 elegant-underline inline-block" style={{
          color: 'hsl(var(--services-heading))'
        }}>
            Naše služby
          </h2>
          <p className="text-xl max-w-2xl mx-auto mt-10 font-light" style={{
          color: 'hsl(var(--services-main-text))'
        }}>
            Finská sauna, vířivé vany a profesionální masážní služby
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
          const IconComponent = service.Icon;
          return <Card key={index} className={`service-card group cursor-pointer border-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: `${index * 80}ms`,
            transitionDuration: '700ms'
          }}>
                <CardHeader className="pb-3">
                  {/* Hand-drawn icon */}
                  <div className="icon-hand-drawn w-fit mb-4">
                    <IconComponent size={40} color="hsl(var(--luxury-gold-dark))" className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <CardTitle className="text-lg font-semibold" style={{
                color: 'hsl(var(--services-heading))'
              }}>
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold mt-2 text-luxury-gold-dark">
                    {service.price}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm mb-4 leading-relaxed font-light" style={{
                color: 'hsl(var(--services-main-text))'
              }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm gap-2" style={{
                  color: 'hsl(var(--services-accent-text))'
                }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/60" />
                        {feature}
                      </li>)}
                  </ul>
                  
                  {/* Hover Arrow */}
                  
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};