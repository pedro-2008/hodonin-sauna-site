import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { SaunaShowcase } from "@/components/SaunaShowcase";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <SaunaShowcase />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
