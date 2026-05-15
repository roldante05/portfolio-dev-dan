"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center pt-40 pb-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <span className="glass px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-primary mb-6">
          Hello!
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          I&apos;m <span className="text-primary italic">Jenny</span>,<br />
          Product Designer
        </h1>

        <div className="relative mb-12">
          {/* Avatar with Orange Ring */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/20 p-4">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/avatar.png"
                alt="Jenny"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/4 glass p-4 rounded-2xl flex flex-col items-start gap-1"
          >
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-xl font-bold">10 Years</span>
            <span className="text-[10px] text-text-dim uppercase tracking-wider">Experience</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-8 bottom-1/4 glass p-4 rounded-2xl flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Star size={16} />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold italic">UI/UX Design</span>
              <span className="text-[10px] text-text-dim">Specialist</span>
            </div>
          </motion.div>
        </div>

        <p className="text-text-dim max-w-lg mb-10 leading-relaxed">
          I am a Product Designer based in Mumbai. I am very passionate about my work and I am looking for a new job.
        </p>

        <div className="flex gap-4">
          <Button size="lg" variant="primary">
            Portfolio
          </Button>
          <Button size="lg" variant="outline">
            Hire Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
