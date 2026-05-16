"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Database, Server, Zap, ArrowUpRight, Bot } from "lucide-react";

const services = [
  {
    title: "Desarrollo Backend",
    description: "Construcción de APIs REST robustas y lógica de negocio compleja utilizando Laravel y PHP 8+.",
    icon: Server,
  },
  {
    title: "Arquitectura Escalable",
    description: "Diseño de sistemas mantenibles siguiendo patrones como SOLID, Clean Architecture y metodologías ágiles.",
    icon: Database,
  },
  {
    title: "Interfaces Dinámicas",
    description: "Desarrollo de experiencias de usuario interactivas y reactivas con el stack TALL (Tailwind, Alpine, Laravel, Livewire).",
    icon: Zap,
  },
  {
    title: "Desarrollo Asistido por IA",
    description: "Utilización de agentes de IA como OpenCode, ClaudeCode y ecosistema Gentle AI con Engram para optimización de sesiones, trabajo en CLI y máxima eficiencia en el uso de tokens.",
    icon: Bot,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mis <span className="text-primary italic">Servicios</span>
            </h2>
            <p className="text-text-dim">
              Ofrezco soluciones integrales de desarrollo backend, enfocadas en la escalabilidad, el rendimiento y la mantenibilidad del código para impulsar tu negocio.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative h-full flex flex-col p-8 bg-[#1A1A1A] border-none hover:bg-[#222222]">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
