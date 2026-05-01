import { Navigation } from "@/components/Navigation";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { HolidayNotice } from "@/components/HolidayNotice";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HolidayNotice />
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
