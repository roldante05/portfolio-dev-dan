"use client";
import Link from "next/link";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function WhyHireMe() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 aspect-square max-w-lg"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/avatar-2.png"
              alt="Why Hire Me"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sobre <span className="text-primary italic"> mi</span>
          </h2>
          <p className="text-text-dim mb-10 leading-relaxed max-w-xl">
            Desarrollador Backend especializado en Laravel y PHP con más de 2.5 años de experiencia en la creación y mantenimiento de aplicaciones web escalables.
            Especializado en desarrollo de lógica de negocio, APIs REST, Livewire y Tailwind CSS. Proactivo, autodidacta y orientado a resultados con fuerte enfoque en código limpio.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <span className="text-4xl font-bold block mb-1">2.5+</span>
              <span className="text-sm text-text-dim">Años de Experiencia</span>
            </div>
            <div>
              <span className="text-4xl font-bold block mb-1">5+</span>
              <span className="text-sm text-text-dim">Proyectos Exitosos</span>
            </div>
          </div>

          <Link href="#contact">
            <Button size="lg" variant="primary">
              Contactame
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
