"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "VALIDA – Bs. As. Argentina",
    date: "Enero 2024 – Marzo 2026",
    role: "Backend Developer",
    description: "• Desarrollé y mantuve aplicaciones web en Laravel que mejoraron la eficiencia de procesos internos mediante integración de APIs y validación dinámica de datos.\n• Implementación de lógica de negocio y funcionalidades backend.\n• Integración con APIs internas y externas.\n• Validación de datos de entrada y construcción dinámica de payloads.\n• Desarrollo de interfaces utilizando Livewire y Tailwind CSS.\n• Implementación inicial de testing automatizado con PHPUnit y PEST.\n• Trabajo colaborativo siguiendo buenas prácticas y código mantenible.",
  },
  {
    company: "CyberArg Sistemas – Bs. As. Argentina",
    date: "Abril 2023 – Febrero 2024",
    role: "PHP Developer",
    description: "• Desarrollo de aplicaciones web utilizando PHP y Laravel.\n• Implementación de funcionalidades frontend con JavaScript, Bootstrap y jQuery.\n• Uso de AJAX para comunicación asincrónica con el backend.\n• Control de versiones con Git y trabajo en entornos Linux (Ubuntu).\n• Participación en equipos bajo metodología Scrum utilizando Jira.",
  },
  {
    company: "Autonomo – Bs. As. Argentina",
    date: "Marzo 2021 – Mayo 2022",
    role: "Servicio Técnico y Soporte TI",
    description: "Servicio integral de preventa, configuración y mantenimiento de infraestructura de software y optimización de sistemas operativos.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Mi <span className="text-primary italic">Experiencia Laboral</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-[#0B0B0B] -translate-x-1/2 top-0 hidden md:block" />

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="p-6 rounded-3xl border border-white/5 bg-surface">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{exp.role}</p>
                    <ul className="text-text-dim text-sm space-y-2 list-none">
                      {exp.description.split('\n').map((item, i) => (
                        <li key={i} className="leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                          {item.replace(/^•\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
