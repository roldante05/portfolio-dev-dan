"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Gouse",
    role: "CEO of TechFlow",
    image: "/user-1.png",
    rating: 5,
    text: "Jenny is an exceptional designer. Her ability to transform complex ideas into simple, beautiful interfaces is truly remarkable.",
  },
  {
    name: "Tanya Sinclair",
    role: "Founder of GreenLife",
    image: "/user-2.png",
    rating: 5,
    text: "Working with Jenny was a game-changer for our brand. The new design has significantly improved our conversion rates.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0E0E0E] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Testimonials That<br />Speak to <span className="text-primary italic">My Results</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            I am very proud of the work I have done and the impact I have had on my clients&apos; businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative glass p-10 border-none">
                <Quote className="absolute top-8 right-8 text-white/5" size={80} />
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-10 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-text-dim uppercase tracking-widest">{testimonial.role}</p>
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
