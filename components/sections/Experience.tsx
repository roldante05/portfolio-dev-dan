"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/lib/portfolioConfig";

const experiences = portfolioConfig.experience;

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and the technologies I've worked with.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:flex gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block absolute left-1/2 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 z-10" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      {exp.current && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Current
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-8 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-6 w-2 h-2 rounded-full bg-primary" />
              <div className="absolute left-0 top-6 bottom-0 w-px bg-border" />
              <div className="bg-card border border-border rounded-xl p-6">
                {exp.current && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary mb-2">
                    Current
                  </Badge>
                )}
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}