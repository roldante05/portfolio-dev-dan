"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass rounded-4xl p-12 md:p-20 relative overflow-hidden text-center">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/20 blur-[100px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Have an Awesome Project<br />Idea? <span className="text-primary italic">Let&apos;s Discuss</span>
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-full">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <span className="text-lg md:text-xl font-medium">jenny.designer@gmail.com</span>
            </div>

            <Button size="lg" variant="primary" className="gap-2 px-10">
              Start a Conversation <ArrowRight size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
