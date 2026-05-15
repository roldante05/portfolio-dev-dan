"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Zap, Shield, Clock, MessageSquare, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioConfig } from "@/lib/portfolioConfig";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  TrendingUp,
};

const whyHireMe = portfolioConfig.whyHireMe;

export function WhyHireMe() {
  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Hire Me?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's why I'm the right choice for your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
              <div className="absolute inset-4 rounded-2xl border border-border" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src={whyHireMe.photoUrl}
                  alt={portfolioConfig.hero.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {whyHireMe.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Code;
              return (
                <Card
                  key={index}
                  className="bg-card/50 hover:bg-card transition-colors border-0"
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}