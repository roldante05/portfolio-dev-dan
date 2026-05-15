"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Layout, Smartphone, Search, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user interfaces that provide seamless user experiences.",
    icon: Layout,
  },
  {
    title: "Web Design",
    description: "Creating visually stunning and responsive websites tailored to your brand's unique identity.",
    icon: Search,
  },
  {
    title: "Landing Page",
    description: "Developing high-converting landing pages that drive results and capture audience attention.",
    icon: Smartphone,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-primary italic">Services</span>
            </h2>
            <p className="text-text-dim">
              I provide a wide range of services including UI/UX design, web design, and landing page development. 
              My goal is to create products that are both beautiful and functional.
            </p>
          </div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === 0 ? "bg-primary" : "bg-zinc-800"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="mt-auto flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
