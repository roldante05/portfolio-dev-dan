"use client";

import { motion } from "framer-motion";

const skills = [
  "Product Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "Landing Page",
  "Branding",
];

export function Marquee() {
  return (
    <div className="py-12 bg-primary overflow-hidden border-y border-black/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {skills.map((skill) => (
              <span key={skill} className="text-2xl md:text-4xl font-black uppercase text-black italic">
                {skill} <span className="ml-12 not-italic">+</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
