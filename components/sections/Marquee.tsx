"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const backendSkills = [
  "Laravel",
  "PHP",
  "MySQL",
  "PHPUnit",
  "PEST",
  "API Integration"
];

const frontendSkills = [
  "Livewire",
  "Tailwind CSS",
  "JavaScript",
  "Alpine.js",
  "Bootstrap"
];

const toolSkills = [
  "Git",
  "Postman",
  "Linux",
  "Scrum",
  "Docker",
  "OpenCode",
  "Claude Code"
];

export function Marquee() {
  return (
    <section className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mi <span className="text-primary italic">Stack Tecnológico</span>
            </h2>
            <p className="text-gray-300">
              Tecnologías organizadas por especialización: Backend, Frontend y Herramientas
            </p>
          </div>
        </div>

        {/* Three columns: Backend, Frontend, Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="group relative h-full flex flex-col p-8 bg-[#1A1A1A] border-none hover:bg-[#222222]">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center text-white">
                  BACKEND
                </h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <div key={`backend-${index}`} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="group relative h-full flex flex-col p-8 bg-[#1A1A1A] border-none hover:bg-[#222222]">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center text-white">
                  FRONTEND
                </h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <div key={`frontend-${index}`} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="group relative h-full flex flex-col p-8 bg-[#1A1A1A] border-none hover:bg-[#222222]">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center text-white">
                  HERRAMIENTAS
                </h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {toolSkills.map((skill, index) => (
                  <div key={`tool-${index}`} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}