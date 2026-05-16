<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Reglas del Proyecto

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Normas de Código
- Usar `npm run lint` antes de commit
- Componentes con `"use client"` cuando usen hooks o state
- Usar `export function` para componentes
- Tailwind: clases utilitarias, prefijos `md:`, `lg:` para responsive
- Animaciones: solo Framer Motion, nada de CSS animations

## Estructura de Componentes
```
components/
├── layout/     # Navbar, Footer
├── sections/   # Secciones de la página
└── ui/         # Cards, Buttons, etc.
```

## Commits
- Mensajes cortos y concisos
- Prefijos: `feat:`, `fix:`, `update:`, `refactor:`