"use client";

import Link from "next/link";
import { GitBranch, Link as LinkedInIcon, X, Mail } from "lucide-react";
import { portfolioConfig } from "@/lib/portfolioConfig";

const footer = portfolioConfig.footer;
const contact = portfolioConfig.contact;

const socialLinks = [
  {
    name: "GitHub",
    href: contact.socialLinks.github,
    icon: GitBranch,
  },
  {
    name: "LinkedIn",
    href: contact.socialLinks.linkedin,
    icon: LinkedInIcon,
  },
  {
    name: "Twitter",
    href: contact.socialLinks.twitter,
    icon: X,
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{portfolioConfig.hero.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {portfolioConfig.site.description}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <Mail className="w-4 h-4" />
              {contact.email}
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}