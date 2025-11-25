import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Sparkles, CircleDot, Brain, Flame, Bed, Bandage, Waves, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const services = [
    {
      title: "Sportovní masáž",
      price: "400 - 800 Kč",
      description: "Specializovaná masáž pro sportovce zaměřená na regeneraci svalů.",
      features: ["Hluboké svalové techniky", "Individuální přístup", "30-60 minut"],
      icon: Dumbbell,
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      title: "Relaxační masáž",
      price: "1200 Kč",
      description: "Jemná celotělová masáž pro úplné uvolnění a odstranění stresu.",
      features: ["Celotělová masáž", "Aromatické oleje", "90 minut"],
      icon: Sparkles,
      gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
      title: "Baňkování",
      price: "450 - 500 Kč",
      description: "Tradiční čínská metoda pro zlepšení krevního oběhu.",
      features: ["Detoxikace organismu", "Zlepšení oběhu", "30-40 minut"],
      icon: CircleDot,
      gradient: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Antistresová masáž",
      price: "450 Kč",
      description: "Speciální masáž hlavy a krční páteře pro uvolnění.",
      features: ["Uvolnění krčních svalů", "Proti migréně", "30-40 minut"],
      icon: Brain,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Lávové kameny",
      price: "950 Kč",
      description: "Masáž s horkými vulkanickými kameny pro hlubokou relaxaci.",
      features: ["Horké lávové kameny", "Hluboká relaxace", "60 minut"],
      icon: Flame,
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "Autotrakční lehátko",
      price: "100 - 200 Kč",
      description: "Moderní zařízení pro protažení páteře a uvolnění kloubů.",
      features: ["Trakce páteře", "Terapeutické protažení", "10-20 minut"],
      icon: Bed,
      gradient: "from-teal-500/20 to-emerald-500/20"
    },
    {
      title: "Kineziotejping",
      price: "Dle rozsahu",
      description: "Aplikace speciálních pásek pro podporu svalů a kloubů.",
      features: ["Podpora svalů", "Rehabilitace", "Individuální"],
      icon: Bandage,
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Vířivé vany",
      price: "250 / 500 Kč",
      description: "Relaxace ve vířivých vanách s hydromasážními tryskami.",
      features: ["Hydromasážní trysky", "Regulace teploty", "30/60 minut"],
      icon: Waves,
      gradient: "from-sky-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-services">
      {/* Decorative Elements */}
      <GlowingOrb color="warm" size="lg" className="top-20 -right-40 opacity-30" />
      <GlowingOrb color="light" size="md" className="bottom-40 -left-20 opacity-40" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-wood-warm/10 border border-wood-warm/20">
            <Sparkles className="w-4 h-4 text-wood-warm" />
            <span className="text-sm font-medium tracking-wider uppercase text-wood-warm">Služby</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-6" style={{ color: 'hsl(var(--services-heading))' }}>
            Naše služby
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'hsl(var(--services-main-text))' }}>
            Finská sauna, vířivé vany a profesionální masážní služby
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`group glass-card hover-lift rounded-2xl overflow-hidden border-0 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 75}ms`, transitionDuration: '700ms' }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-wood-warm" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold" style={{ color: 'hsl(var(--services-heading))' }}>
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold mt-2 text-wood-warm">
                    {service.price}
                  </div>
                </CardHeader>
                
                <CardContent className="relative pt-0">
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'hsl(var(--services-main-text))' }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm gap-2" style={{ color: 'hsl(var(--services-main-text))' }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-wood-warm/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-wood-warm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-sm font-medium">Více info</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
