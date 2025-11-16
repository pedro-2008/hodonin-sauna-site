import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ClosureNotice } from "@/components/ClosureNotice";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ClosureNotice />
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
