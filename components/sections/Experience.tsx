"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "VALIDA",
    date: "Enero 2024 – Marzo 2026",
    role: "Backend Developer",
    description: "• Desarrollé y mantuve aplicaciones web en Laravel que mejoraron la eficiencia de procesos internos mediante integración de APIs y validación dinámica de datos.\n• Implementación de lógica de negocio y funcionalidades backend.\n• Integración con APIs internas y externas.\n• Validación de datos de entrada y construcción dinámica de payloads.\n• Desarrollo de interfaces utilizando Livewire y Tailwind CSS.\n• Implementación inicial de testing automatizado con PHPUnit y PEST.\n• Trabajo colaborativo siguiendo buenas prácticas y código mantenible.",
  },
  {
    company: "CyberArg Sistemas",
    date: "Abril 2023 – Febrero 2024",
    role: "PHP Developer",
    description: "• Desarrollo de aplicaciones web utilizando PHP y Laravel.\n• Implementación de funcionalidades frontend con JavaScript, Bootstrap y jQuery.\n• Uso de AJAX para comunicación asincrónica con el backend.\n• Control de versiones con Git y trabajo en entornos Linux (Ubuntu).\n• Participación en equipos bajo metodología Scrum utilizando Jira.",
  },
  {
    company: "Autonomo",
    date: "Marzo 2021 – Mayo 2022",
    role: "Servicio Técnico y Soporte TI",
    description: "Servicio integral de preventa, configuración y mantenimiento de infraestructura de software y optimización de sistemas operativos.",
  },
];

function ExperienceCard({ exp, className = "" }: { exp: typeof experiences[0]; className?: string }) {
  return (
    <div className={`p-6 rounded-3xl border border-white/5 bg-surface h-[320px] flex flex-col ${className}`}>

      <h3 className="text-xl font-bold mb-1 shrink-0">{exp.company}</h3>
      <p className="text-zinc-400 text-sm mb-4 shrink-0">{exp.role}</p>
      <div className="overflow-y-auto flex-1 pr-2 scrollbar-primary">
        <ul className="text-text-dim text-sm space-y-2 list-none">
          {exp.description.split('\n').map((item, i) => (
            <li key={i} className="leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
              {item.replace(/^•\s*/, '')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const sortedExperiences = [...experiences].reverse();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Mi <span className="text-primary italic">Experiencia Laboral</span>
        </h2>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden md:block relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-zinc-800" />

          <div className="flex gap-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4">
            {sortedExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[380px] snap-start flex flex-col items-center"
              >
                <div className="text-center mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {exp.date}
                  </span>
                </div>
                <div className="w-px h-3 bg-zinc-800" />
                <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                <div className="w-px h-3 bg-primary" />
                <div className="w-px h-6 bg-primary" />
                <ExperienceCard exp={exp} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline - Mobile */}
        <div className="md:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-16">
            {sortedExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-[#0B0B0B] -translate-x-1/2 top-0 z-10" />
                <div className="w-px h-full bg-primary absolute left-6 top-4 -translate-x-1/2" />
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4 block">
                  {exp.date}
                </div>
                <ExperienceCard exp={exp} className="h-[280px]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
