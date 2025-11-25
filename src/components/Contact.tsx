import { MapPin, Phone, Mail, Clock, Sparkles, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GlowingOrb } from "@/components/decorative/GlowingOrb";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const schedule = [
    { day: "Pondělí", time: "Zavřeno", type: "" },
    { day: "Úterý", time: "16:00 - 21:00", type: "muži" },
    { day: "Středa", time: "16:00 - 21:00", type: "ženy" },
    { day: "Čtvrtek", time: "16:00 - 21:00", type: "společná" },
    { day: "Pátek", time: "16:00 - 21:00", type: "společná" },
    { day: "Sobota", time: "15:00 - 20:00", type: "společná" },
    { day: "Neděle", time: "15:00 - 20:00", type: "společná" },
  ];

  const contactInfo = [
    { icon: MapPin, label: "Adresa", value: "Lipová alej 4110/23, Hodonín" },
    { icon: Phone, label: "Telefon", value: "+420 737 443 674" },
    { icon: Mail, label: "Email", value: "janasportmasaz@seznam.cz" },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden bg-gradient-contact">
      {/* Decorative Elements */}
      <GlowingOrb color="light" size="lg" className="top-20 -right-40 opacity-20" />
      <GlowingOrb color="warm" size="md" className="bottom-20 -left-20 opacity-15" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/10 border border-secondary/20">
            <Phone className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium tracking-wider uppercase text-secondary">Kontakt</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-4" style={{ color: 'hsl(var(--contact-heading))' }}>
            Kontakt a rezervace
          </h2>
          <p className="text-xl" style={{ color: 'hsl(var(--contact-main-text))' }}>
            Těšíme se na vaši návštěvu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Opening Hours Card */}
          <Card 
            className={`glass-card hover-lift rounded-3xl overflow-hidden border-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ backgroundColor: 'hsl(var(--contact-card-bg))' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-wood-warm" />
                </div>
                <CardTitle className="font-display text-xl" style={{ color: 'hsl(var(--contact-card-heading))' }}>
                  Otevírací doba – listopad 2025
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors duration-300 ${
                      item.time === "Zavřeno" 
                        ? "bg-red-500/5" 
                        : "bg-wood-light/10 hover:bg-wood-light/20"
                    }`}
                  >
                    <span className="font-medium" style={{ color: 'hsl(var(--contact-card-secondary))' }}>{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className={`font-semibold ${item.time === "Zavřeno" ? "text-red-400/80" : ""}`} style={{ color: item.time === "Zavřeno" ? undefined : 'hsl(var(--contact-card-text))' }}>
                        {item.time}
                      </span>
                      {item.type && (
                        <span className="text-xs px-2 py-1 rounded-full bg-wood-warm/10 text-wood-warm">
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card 
            className={`glass-card hover-lift rounded-3xl overflow-hidden border-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ backgroundColor: 'hsl(var(--contact-card-bg))', transitionDelay: '150ms' }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-wood-warm" />
                </div>
                <CardTitle className="font-display text-xl" style={{ color: 'hsl(var(--contact-card-heading))' }}>
                  Kde nás najdete
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-wood-light/10 hover:bg-wood-light/20 transition-colors duration-300"
                >
                  <div className="p-2 bg-wood-warm/10 rounded-lg">
                    <item.icon className="w-5 h-5 text-wood-warm" />
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: 'hsl(var(--contact-card-secondary))' }}>{item.label}</p>
                    <p className="font-semibold text-lg" style={{ color: 'hsl(var(--contact-card-accent))' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Map Card */}
        <div 
          className={`mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <Card 
            className="glass-card rounded-3xl overflow-hidden border-0"
            style={{ backgroundColor: 'hsl(var(--contact-card-bg))' }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-wood-warm/20 to-secondary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-wood-warm" />
                </div>
                <CardTitle className="font-display text-xl" style={{ color: 'hsl(var(--contact-card-heading))' }}>
                  Mapa
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-[400px] rounded-b-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.8234567890123!2d17.1234567890123!3d48.8523456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0a123456789a%3A0x123456789abcdef0!2sLipov%C3%A1%20alej%204110%2F23%2C%20695%2001%20Hodon%C3%ADn!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Sauna Na Teze"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
