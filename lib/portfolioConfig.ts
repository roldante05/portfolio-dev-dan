export const portfolioConfig = {
  site: {
    title: 'Dann Roldan | Backend Developer Laravel',
    description: 'Desarrollador Backend especializado en Laravel y PHP con más de 3 años de experiencia en la creación y mantenimiento de aplicaciones web escalables.',
    url: 'https://danrotoldan.dev',
    locale: 'es-AR',
    author: 'Dann Roldan',
    keywords: ['backend developer', 'laravel', 'php', 'livewire', 'api development', 'portfolio', 'software development'],
    themeColor: '#0A0A0A',
  },

  theme: {
    default: 'dark' as const,
    colors: {
      primary: '#FF6B00',
      background: '#0A0A0A',
      surface: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#A0A0A0',
      border: '#2A2A2A',
    },
  },

  navigation: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Experience', href: '#experience' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    name: 'Dann Roldan',
    title: 'Backend Developer Laravel',
    description: 'Desarrollador Backend especializado en Laravel y PHP con más de 3 años de experiencia en la creación y mantenimiento de aplicaciones web escalables. Experto en implementación de lógica de negocio compleja, desarrollo y consumo de APIs REST, integración con servicios externos y construcción de interfaces dinámicas con Livewire + Tailwind CSS. Proactivo, autodidacta y orientado a resultados, con fuerte enfoque en código limpio, mantenible y buenas prácticas. Gran experiencia trabajando en equipos ágiles bajo metodología Scrum.',
    photoUrl: '/images/profile_linkedin.png',
    ctaPrimary: { label: 'Hire Me', href: '#contact' },
    ctaSecondary: { label: 'Download CV', href: '/cv.pdf' },
    stats: [
      { value: '3+', label: 'Years of Experience' },
      { value: '15+', label: 'Projects Completed' },
      { value: '10+', label: 'Happy Clients' },
    ],
    socialLinks: {
      github: 'https://github.com/dannroldan',
      linkedin: 'https://linkedin.com/in/dannroldan',
      email: 'mailto:contact@danrotoldan.dev',
    },
  },

  services: [
    {
      icon: 'Monitor',
      title: 'Backend Development',
      description: 'Desarrollo de aplicaciones backend robustas con Laravel, PHP y arquitecturas modernas escalables. Implementación de lógica de negocio compleja.',
    },
    {
      icon: 'Globe',
      title: 'API REST Development',
      description: 'Desarrollo y consumo de APIs RESTful, integración con servicios externos, documentación automática con OpenAPI/Swagger.',
    },
    {
      icon: 'Zap',
      title: 'Livewire + Tailwind',
      description: 'Construcción de interfaces dinámicas y reactivas con Laravel Livewire y Tailwind CSS. Experiencia en componentes reutilizables.',
    },
    {
      icon: 'Database',
      title: 'Database Design',
      description: 'Diseño y optimización de bases de datos MySQL, consultas eficientes, migraciones y manejo de datos complejos.',
    },
  ],

  experience: [
    {
      company: 'VALIDA',
      role: 'Backend Developer',
      period: 'Enero 2024 – Marzo 2026',
      description: 'Desarrollo y mantenimiento de dos CRMs para bancos (Galicia y Supervielle): corrección de bugs, implementación de fixes y actualizaciones. Mantenimiento y evolución del Onboarding Bancor y Galicia Move: agregué nuevas features solicitadas por el cliente y actualicé dependencias. Participación en el producto MVP de VALIDA: fixes a nivel backend, refactorización grande de código y mejoras de robustez y escalabilidad. Desarrollo de interfaces dinámicas con Livewire + Tailwind CSS e implementación inicial de testing automatizado (PHPUnit / PEST).',
      tech: ['Laravel', 'PHP', 'Livewire', 'Tailwind CSS', 'MySQL', 'PHPUnit', 'PEST', 'Git', 'Scrum'],
      current: false,
    },
    {
      company: 'CyberArg Sistemas',
      role: 'PHP Developer',
      period: 'Abril 2023 – Febrero 2024',
      description: 'Mantenimiento y actualización (frontend + backend) de sitios web de clientes: Lamperti y NetPatagonia. Desarrollo completo de un ABM interno: CG-GLOBAL – Solución Integral de Gestión Empresarial para Carga y Venta de Artículos. Implementación de funcionalidades con PHP/Laravel, JavaScript, Bootstrap, jQuery y AJAX. Trabajo en equipo bajo metodología Scrum con Jira.',
      tech: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'MySQL', 'Scrum', 'Jira'],
      current: false,
    },
  ],

  skills: {
    title: 'Technical Skills',
    categories: [
      {
        name: 'Backend',
        skills: ['Laravel', 'PHP', 'MySQL', 'API REST', 'OAuth', 'JWT'],
      },
      {
        name: 'Frontend',
        skills: ['Livewire', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX'],
      },
      {
        name: 'Testing',
        skills: ['PHPUnit', 'PEST', 'TDD'],
      },
      {
        name: 'Tools & DevOps',
        skills: ['Git', 'GitLab', 'Postman', 'Linux (Ubuntu)', 'Docker'],
      },
      {
        name: 'Metodologías',
        skills: ['Scrum', 'Jira', 'Agile'],
      },
    ],
  },

  whyHireMe: {
    photoUrl: '/images/profile_linkedin.png',
    benefits: [
      { icon: 'Code', title: 'Código Limpio y Mantenible', description: 'Enfoque en código bien estructurado, documentado y siguiendo las mejores prácticas de Laravel.' },
      { icon: 'Zap', title: 'Experiencia con APIs', description: 'Desarrollo y consumo de APIs REST, integración con servicios externos y servicios de terceros.' },
      { icon: 'Monitor', title: 'Livewire + Tailwind', description: 'Construcción de interfaces dinámicas y reactivas con las tecnologías más modernas de Laravel.' },
      { icon: 'Shield', title: 'Testing Automatizado', description: 'Implementación de pruebas unitarias y de integración con PHPUnit y PEST.' },
      { icon: 'Clock', title: 'Metodología Scrum', description: 'Experiencia trabajando en equipos ágiles, sprints, daily standups y entrega incremental.' },
      { icon: 'TrendingUp', title: 'Orientación a Resultados', description: 'Compromiso con entregas a tiempo y soluciones que generan valor real al negocio.' },
    ],
  },

  portfolio: {
    title: "Let's have a look at my Portfolio",
    projects: [
      {
        title: 'Scaffolding Factory',
        description: 'Herramienta de scaffolding para Laravel que agiliza la creación de estructuras base de proyectos. Automatiza la generación de archivos, modelos, controladores y migraciones.',
        imageUrl: '/images/project-1.jpg',
        techStack: ['Laravel', 'PHP', 'Composer'],
        links: { github: 'https://github.com/roldante05/scaffolding-factory', demo: '' },
      },
      {
        title: 'TV FlexDan',
        description: 'Aplicación web desarrollada en Laravel (PHP + Blade). Sistema de gestión de contenido para streaming de contenido audiovisual.',
        imageUrl: '/images/project-2.jpg',
        techStack: ['Laravel', 'PHP', 'Blade', 'MySQL'],
        links: { github: 'https://github.com/roldante05/tv-flexdan', demo: '' },
      },
      {
        title: 'Products App',
        description: 'Aplicación de gestión de productos (CRUD completo) desarrollada en Laravel. Control de inventario, categorías, precios y stock.',
        imageUrl: '/images/project-3.jpg',
        techStack: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
        links: { github: 'https://github.com/roldante05/products-app', demo: '' },
      },
      {
        title: 'Rick & Morty App',
        description: 'Aplicación demo que consume la API externa de Rick and Morty. Muestra personajes, episodios y ubicaciones con diseño responsivo.',
        imageUrl: '/images/project-4.jpg',
        techStack: ['Laravel', 'PHP', 'API Integration', 'Blade'],
        links: { github: 'https://github.com/roldante05/rick-morty', demo: '' },
      },
    ],
  },

  portfolioEmpresas: {
    title: 'Proyectos en Empresas',
    projects: [
      {
        title: 'CG-GLOBAL - CyberArg',
        description: 'Solución Integral de Gestión Empresarial para Carga y Venta de Artículos. Desarrollo completo de un ABM interno.',
        techStack: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'MySQL'],
      },
      {
        title: 'Lamperti & NetPatagonia - CyberArg',
        description: 'Mantenimiento y actualizaciones (frontend + backend) de sitios web de clientes.',
        techStack: ['PHP', 'Laravel', 'jQuery', 'AJAX', 'MySQL'],
      },
      {
        title: 'Onboarding Bancor + Galicia Move - VALIDA',
        description: 'Plataformas de onboarding bancario. Mantenimiento, nuevas funcionalidades y actualizaciones de dependencias.',
        techStack: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
      },
      {
        title: 'CRMs Galicia & Supervielle - VALIDA',
        description: 'Sistemas CRM para dos bancos. Corrección de bugs, implementación de fixes y actualizaciones continuas.',
        techStack: ['Laravel', 'PHP', 'MySQL', 'API Integration'],
      },
      {
        title: 'Producto MVP VALIDA (valida.ai)',
        description: 'Refactorización mayor de código backend + implementación de mejoras de escalabilidad y robustez.',
        techStack: ['Laravel', 'PHP', 'Livewire', 'PHPUnit', 'PEST'],
      },
    ],
  },

  testimonials: [
    {
      name: 'Juan Pérez',
      role: 'CTO',
      company: 'TechCorp',
      quote: 'Dann delivered a robust API architecture that scaled perfectly. His attention to detail and code quality exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'María González',
      role: 'Product Owner',
      company: 'StartupXYZ',
      quote: 'Excellent developer! Delivered on time, communicated clearly, and the code was clean and well-documented. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Carlos López',
      role: 'Founder',
      company: 'DigitalAgency',
      quote: 'Working with Dann was a pleasure. He understood our requirements perfectly and delivered a solution that helped grow our business.',
      rating: 5,
    },
  ],

  contact: {
    email: 'contact@danrotoldan.dev',
    headline: 'Have an Awesome Project Idea? Let\'s Discuss',
    subheadline: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Specializing in Laravel, PHP, and modern web technologies.',
    socialLinks: {
      github: 'https://github.com/dannroldan',
      linkedin: 'https://linkedin.com/in/dannroldan',
      twitter: 'https://twitter.com/dannroldan',
    },
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Dann Roldan. All rights reserved.`,
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Experience', href: '#experience' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },
} as const;

export type PortfolioConfig = typeof portfolioConfig;