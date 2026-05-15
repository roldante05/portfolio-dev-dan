"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cognizant, Mumbai",
    date: "Sep 2016 - July 2020",
    role: "Experience Designer",
    description: "Led the design team in creating enterprise-level products and systems.",
  },
  {
    company: "Sugee Pvt Limited, Mumbai",
    date: "Sep 2020 - July 2023",
    role: "UI/UX Designer",
    description: "Focused on mobile-first applications and user-centric design patterns.",
  },
  {
    company: "Cinatstox, Mumbai",
    date: "Sep 2023 - Present",
    role: "Lead UX Designer",
    description: "Currently leading the UX strategy for a fintech startup.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          My <span className="text-primary italic">Work Experience</span>
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
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-[#0B0B0B] -translate-x-1/2 top-0 hidden md:block" />

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className={`p-6 rounded-3xl border border-white/5 bg-surface ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-zinc-400 text-sm mb-4">{exp.role}</p>
                    <p className="text-text-dim text-sm leading-relaxed">
                      {exp.description}
                    </p>
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
