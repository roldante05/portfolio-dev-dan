"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function WhyHireMe() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 aspect-square max-w-lg"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/why-hire-me.png"
              alt="Why Hire Me"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why <span className="text-primary italic">Hire me?</span>
          </h2>
          <p className="text-text-dim mb-10 leading-relaxed max-w-xl">
            I bring a unique combination of design expertise and business strategy to every project. 
            With over 10 years of experience, I know how to create designs that not only look great but also drive user engagement and achieve business goals.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <span className="text-4xl font-bold block mb-1">450+</span>
              <span className="text-sm text-text-dim">Project Completed</span>
            </div>
            <div>
              <span className="text-4xl font-bold block mb-1">10+</span>
              <span className="text-sm text-text-dim">Years Experience</span>
            </div>
          </div>

          <Button size="lg" variant="primary">
            Hire me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
