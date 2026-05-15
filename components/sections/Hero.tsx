"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GitBranch, Link, Mail } from "lucide-react";
import { portfolioConfig } from "@/lib/portfolioConfig";

const stats = portfolioConfig.hero.stats;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <span className="text-primary font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {portfolioConfig.hero.name}.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary"
            >
              {portfolioConfig.hero.title}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl"
            >
              {portfolioConfig.hero.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
                onClick={() => window.open(portfolioConfig.hero.ctaSecondary.href, '_blank')}
              >
                Download CV
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <a
                href={portfolioConfig.hero.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.hero.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
              >
                <Link className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.hero.socialLinks.email}
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border">
                <Image
                  src={portfolioConfig.hero.photoUrl}
                  alt={portfolioConfig.hero.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-8 md:gap-16 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                <div className="absolute inset-2 rounded-full border border-primary/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}