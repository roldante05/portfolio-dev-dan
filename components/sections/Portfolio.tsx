"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Landing Page", "Product Design", "App Design", "Branding"];

const projects = [
  {
    title: "Lirante - Food Delivery Solution",
    category: "App Design",
    image: "/project-1.png",
    description: "A comprehensive food delivery platform designed to connect local restaurants with hungry customers.",
  },
  {
    title: "Eco-Friendly E-commerce",
    category: "Landing Page",
    image: "/project-1.png", // Reusing image for placeholder
    description: "A modern e-commerce landing page focused on sustainable and eco-friendly products.",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lets have a look at<br />my <span className="text-primary italic">Portfolio</span>
            </h2>
          </div>
          <Button variant="primary">See All</Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                activeCategory === cat 
                ? "bg-primary border-primary text-black" 
                : "border-white/10 text-text-dim hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-surface">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center">
                      <ArrowUpRight size={32} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-text-dim text-sm max-w-sm">{project.description}</p>
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest pt-2">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";
