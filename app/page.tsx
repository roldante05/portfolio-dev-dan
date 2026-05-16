import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/sections/Marquee";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WhyHireMe />
        <Education />
        <Portfolio />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
