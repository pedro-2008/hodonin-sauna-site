import { Navigation } from "@/components/Navigation";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SpecialNotice } from "@/components/SpecialNotice";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />


      
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
      <SpecialNotice />
    </div>
  );
};

export default Index;
