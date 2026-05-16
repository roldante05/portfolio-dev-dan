"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/Card";

const education = [
  {
    title: "Analista de Sistemas en Tecnología de la Información",
    institution: "Universidad Nacional de José Clemente Paz (UNPAZ)",
    date: "Marzo 2021 – Diciembre 2022",
    type: "degree",
  },
  {
    title: "Desarrollo Web Full Stack en Computer Programming",
    institution: "EducacionIT – Certificado",
    date: "Julio 2022 – Diciembre 2022",
    type: "cert",
  },
  {
    title: "Programación Web Full Stack en Programación Informática",
    institution: "DePC Technology – Certificado",
    date: "Marzo 2022 – Agosto 2022",
    type: "cert",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Formación <span className="text-primary italic">Académica</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-[#161616] border-none flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {item.type === "degree" ? <GraduationCap size={24} /> : <Award size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-2 leading-tight">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-4">{item.institution}</p>
                <p className="text-text-dim text-xs mt-auto">{item.date}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
