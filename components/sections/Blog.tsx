"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    title: "Design Unleashed: Behind the Scenes of UI/UX Magic",
    date: "May 10, 2024",
    category: "Design",
    image: "/blog-1.png",
  },
  {
    title: "The Future of Web Development in 2024",
    date: "Apr 25, 2024",
    category: "Tech",
    image: "/blog-1.png", // Reusing image
  },
  {
    title: "Creating Harmonious Color Palettes for Web",
    date: "Mar 15, 2024",
    category: "Design",
    image: "/blog-1.png", // Reusing image
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From my<br /><span className="text-primary italic">blog post</span>
            </h2>
          </div>
          <Button variant="primary">See All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-surface">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-md">
                  {post.category}
                </span>
                <span className="text-[10px] text-text-dim uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
