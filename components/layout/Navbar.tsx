"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Portafolio", href: "#portfolio" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300",
        scrolled && "pt-2"
      )}
    >
      <nav
        className={cn(
          "flex items-center gap-8 rounded-full px-8 py-3 transition-all duration-300 border border-transparent",
          scrolled ? "glass shadow-xl" : "bg-transparent"
        )}
      >
        <Link href="/" className="text-xl font-bold tracking-tighter">
          DANTE<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-dim hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link href="#contact">
          <Button size="sm" variant="primary">
            Hablemos
          </Button>
        </Link>
      </nav>
    </header>
  );
}
