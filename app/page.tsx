import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Experience } from "@/components/sections/Experience";
import { WhyHireMe } from "@/components/sections/WhyHireMe";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <WhyHireMe />
        <Portfolio />
        <Skills />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}