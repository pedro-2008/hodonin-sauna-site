import { useEffect, useRef, useState } from 'react';
import saunaImage from '@/assets/nase-sauna.jpg';

export const SaunaShowcase = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;
        
        // Only calculate parallax when section is in view
        if (sectionTop < windowHeight && rect.bottom > 0) {
          setScrollY(-sectionTop * 0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
    >
      {/* Parallax background image */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform',
        }}
      >
        <img
          src={saunaImage}
          alt="Interiér finské sauny s dřevěnými lavicemi"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-wood-900/80 via-wood-900/40 to-wood-900/60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 mb-6">
            Naše sauna
          </h2>
          <p className="text-lg md:text-xl text-cream-200/90 leading-relaxed">
            Autentický finský saunový zážitek v srdci Hodonína. 
            Kvalitní dřevo, tradiční atmosféra a absolutní klid.
          </p>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
