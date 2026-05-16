import Link from "next/link";

const SocialIcons = {
  Linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
};

const fechaActual = new Date();

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            DANTE<span className="text-primary">.</span>
          </Link>
          <p className="text-text-dim text-sm max-w-xs">
            Desarrollador Backend especializado en Laravel y PHP enfocado en crear experiencias digitales de alta calidad.
          </p>
          <div className="flex gap-4 mt-2">
            {Object.entries(SocialIcons).map(([name, Icon]) => (
              <a
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                href={name === "Linkedin" ? "https://www.linkedin.com/in/danteroldan" : "https://github.com/roldante05"}
                aria-label={name}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-dim hover:bg-primary hover:text-black transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium">
          <div className="flex flex-col gap-3">
            <span className="text-white uppercase tracking-widest text-[10px] mb-2 opacity-50">Navegación</span>
            <Link href="#home" className="text-text-dim hover:text-primary transition-colors">Inicio</Link>
            <Link href="#services" className="text-text-dim hover:text-primary transition-colors">Servicios</Link>
            <Link href="#portfolio" className="text-text-dim hover:text-primary transition-colors">Portafolio</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white uppercase tracking-widest text-[10px] mb-2 opacity-50">Compañía</span>
            <Link href="#" className="text-text-dim hover:text-primary transition-colors">Sobre mí</Link>
            <Link href="#" className="text-text-dim hover:text-primary transition-colors">Contacto</Link>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-text-dim text-xs">
            © {fechaActual.getFullYear()} Dante Developer. Todos los derechos reservados.
          </p>
          <p className="text-text-dim text-[10px] mt-2 uppercase tracking-tighter">
            Diseñado con ❤️ y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
