"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

const categories = ["Todos", "Personales", "Empresariales"];

const projects = [
  // EMPRESARIALES - VALIDA
  {
    title: "Onboarding Digital - Bancor & Galicia Move",
    category: "Empresariales",
    image: "/company/valida/project-bancor.png",
    description: "Desarrollo de nuevas funcionalidades y mantenimiento de flujos de onboarding bancario. Implementación de reportes PDF automatizados y sistemas de notificación vía email.",
    url: "https://valida.ai/nosotros/"
  },
  {
    title: "Valida - Plataforma SaaS",
    category: "Empresariales",
    image: "/company/valida/project-valida.png",
    description: "Refactorización arquitectónica del producto core para mejorar escalabilidad y robustez. Optimización de procesos backend y reciclaje de código para un sistema más mantenible.",
    url: "https://valida.ai/nosotros/"
  },
  // EMPRESARIALES - CYBERARG
  {
    title: "CG-GLOBAL: Solución ERP Integral",
    category: "Empresariales",
    image: "/company/cyberarg/project-cg-global.png",
    description: "Desarrollo de una solución integral de gestión empresarial para la carga, logística y comercialización de artículos.",
    url: "https://cyberargsistemas.com.ar"
  },
  {
    title: "Lamperti S.A. - Portal Corporativo",
    category: "Empresariales",
    image: "/company/cyberarg/project-lamperti.png",
    description: "Mantenimiento evolutivo y actualizaciones Full Stack para el portal institucional de una empresa líder en logística.",
    url: "https://www.lamperti.com.ar/"
  },
  {
    title: "NetPatagonia - Optimización Web",
    category: "Empresariales",
    image: "/company/cyberarg/project-netpatagonia.png",
    description: "Actualización de funcionalidades core y optimización de performance en frontend y backend para sitio de servicios.",
    url: "https://netpatagonia.com.ar/"
  },
  // PERSONALES
  {
    title: "Scaffolding Factory",
    category: "Personales",
    image: "/projects-personal/scaffolding.png",
    description: "Generador de arquitecturas base para proyectos Laravel, enfocado en estandarización de código y productividad.",
    url: "https://github.com/roldante05/scaffolding-factory"
  },
  {
    title: "TV-FlexDan",
    category: "Personales",
    image: "/projects-personal/tv-flexdan.png",
    description: "Plataforma de catálogo multimedia con interfaz dinámica construida para alto rendimiento y fluidez.",
    url: "https://github.com/roldante05/tv-flexdan"
  },
  {
    title: "Sistema de Gestión de Ventas",
    category: "Personales",
    image: "/projects-personal/abmventas.png",
    description: "Sistema robusto de gestión comercial con control de stock, facturación y reportes analíticos detallados.",
    url: "https://github.com/roldante05/php/tree/main/sistema_ventas"
  },
  {
    title: "Roldy Burger E-commerce",
    category: "Personales",
    image: "/projects-personal/roldy-burger.png",
    description: "Plataforma de e-commerce gastronómico con flujo completo de pedidos y panel administrativo dinámico.",
    url: "https://github.com/roldante05/laravel/tree/main/burger2022"
  },
  {
    title: "ABM Clientes Pro",
    category: "Personales",
    image: "/projects-personal/abmclientes.png",
    description: "Gestor de relaciones con clientes (CRM) optimizado para velocidad, facilidad de uso y persistencia eficiente.",
    url: "https://github.com/roldante05/php/tree/main/abmclientes"
  },
];

const ITEMS_PER_PAGE = 3;

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(0);
  };

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Echemos un vistazo a<br />mi <span className="text-primary italic">Portafolio</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${activeCategory === cat
                ? "bg-primary border-primary text-black"
                : "border-white/10 text-text-dim hover:border-primary/50 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {visibleProjects.map((project) => (
              <motion.div
                key={`${currentPage}-${project.title}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col flex-1 bg-surface border border-white/5 rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="relative aspect-video shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-text-dim text-sm mb-4 flex-1">{project.description}</p>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </a>
                {project.category === "Personales" && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-2.5 bg-primary text-black font-medium text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shrink-0"
                  >
                    <GitBranch size={16} />
                    Ver repo
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-24 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all z-10"
              >
                ←
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-24 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all z-10"
              >
                →
              </button>

              <div className="flex justify-center gap-2 mt-12">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === currentPage ? "bg-primary" : "bg-zinc-700"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}