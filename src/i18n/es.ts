export const es = {
  meta: {
    title: "Jean Pierre Acosta | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer con 6 años de experiencia. Angular 17+, TypeScript y RxJS para banca (BCP) y fintech.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema claro / oscuro",
    switchLanguage: "Switch to English",
    backToTop: "Volver arriba",
    close: "Cerrar",
    previousImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    imageOf: (current: number, total: number) => `Imagen ${current} de ${total}`,
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    status: "Actualmente en NTT DATA · cliente BCP",
    greeting: "Hola, soy",
    lead: "Diseño y construyo",
    rotating: [
      "aplicaciones bancarias",
      "plataformas fintech",
      "componentes escalables",
      "interfaces rápidas y seguras",
    ],
    tagline:
      "Senior Frontend Engineer con 6 años de experiencia, 5 de ellos especializado en Angular. Me enfoco en rendimiento, seguridad y código mantenible.",
    ctaContact: "Hablemos",
    ctaCv: "Descargar CV",
    scroll: "Scroll",
    stats: [
      { value: 6, suffix: "+", label: "años en desarrollo web" },
      { value: 5, suffix: "+", label: "años especializado en Angular" },
      { value: 3, suffix: "", label: "años liderando el frontend SUNAT" },
      { value: null, display: "B2+", label: "nivel de inglés" },
    ],
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Ingeniería frontend para productos que no pueden fallar",
    paragraphs: [
      "Hoy construyo productos digitales para el sector bancario (BCP) y antes fui responsable técnico del frontend de una plataforma de facturación electrónica que usan miles de empresas en el Perú.",
      "Me enfoco en componentes robustos y escalables, rendimiento, seguridad y código mantenible. Me gusta elevar la calidad del equipo con revisión de código y acompañando a desarrolladores junior y semi-senior.",
      "Trabajo con autonomía: desde el análisis de viabilidad técnica de una solución hasta su puesta en producción y soporte.",
    ],
    highlights: [
      {
        title: "Ownership técnico",
        text: "Responsable del frontend de un sistema crítico de cumplimiento tributario (SUNAT) durante 3 años.",
      },
      {
        title: "Experiencia en banca",
        text: "Aplicaciones de alta concurrencia para BCP, con analítica de negocio vía Google Tag Manager.",
      },
      {
        title: "Calidad de código",
        text: "Code review, clean code, programación reactiva y refactoring continuo, con análisis estático en SonarQube.",
      },
      {
        title: "Mentoría",
        text: "Acompañamiento técnico y revisión de código para hacer crecer a desarrolladores junior y semi-senior.",
      },
    ],
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia profesional",
    client: "cliente",
    items: [
      {
        id: "nttdata",
        role: "Senior Front-End Angular",
        company: "NTT DATA",
        client: "BCP",
        period: "Ago 2024 — Presente",
        current: true,
        bullets: [
          "Diseño y desarrollo componentes robustos y reutilizables en Angular 17+ (Standalone Components, TypeScript, RxJS) para proyectos de innovación digital del BCP, alineados a los lineamientos de arquitectura y seguridad del banco.",
          "Mejoro el rendimiento y la UX de aplicaciones bancarias de alta concurrencia con estrategia OnPush, lazy loading y prevención de memory leaks en suscripciones RxJS.",
          "Implemento la capa de analítica con Google Tag Manager, definiendo el tracking de eventos críticos de negocio junto a las áreas de producto y datos.",
          "Reviso código de pares vía pull requests, aplicando estándares de commits y Git Flow.",
          "Analizo con otras áreas de tecnología la viabilidad técnica de las historias antes del desarrollo, dentro de un marco Scrum.",
          "Despliego e integro las aplicaciones con los servicios cloud del banco en Microsoft Azure, con pipelines de CI/CD en Azure DevOps.",
        ],
      },
      {
        id: "efact",
        role: "Senior Front-End Developer",
        company: "EFACT",
        client: null,
        period: "Sep 2021 — Ago 2024",
        current: false,
        bullets: [
          "Responsable técnico del frontend del sistema de facturación electrónica que usan miles de empresas en el Perú para su cumplimiento tributario ante SUNAT.",
          "Lideré el mantenimiento y la evolución de la aplicación Angular, definiendo la solución técnica de nuevas funcionalidades conforme a los estándares XML de SUNAT.",
          "Optimicé el rendimiento frontend con carga diferida de módulos y reducción del tamaño de los bundles.",
          "Atendí y resolví incidentes críticos en producción asociados al frontend.",
          "Desarrollé APIs REST con Node.js y Laravel para integrar el frontend con los servicios de procesamiento de comprobantes.",
          "Brindé mentoría técnica y revisión de código a los desarrolladores del equipo.",
        ],
      },
      {
        id: "aspat",
        role: "Full-Stack Developer",
        company: "ASPAT",
        client: null,
        period: "Ago 2019 — Mar 2020",
        current: false,
        bullets: [
          "Desarrollé un ERP a medida (Vue.js + Laravel) para automatizar procesos internos.",
          "Construí sitios web responsive con optimización SEO, rendimiento y buenas prácticas de accesibilidad.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Habilidades técnicas",
    groups: [
      {
        name: "Angular",
        items: [
          "Angular 17+",
          "Standalone Components",
          "Lazy loading",
          "Formularios reactivos",
          "OnPush",
          "Dynamic Components",
          "Angular Libraries",
          "DI con InjectionTokens",
          "Schematics",
        ],
      },
      {
        name: "Lenguajes y web",
        items: ["TypeScript", "JavaScript ES6+", "RxJS", "HTML5 semántico", "SEO", "Accesibilidad web"],
      },
      {
        name: "Estilos y UI",
        items: ["CSS3", "SCSS", "Flexbox", "CSS Grid", "Animaciones", "PrimeNG", "Tailwind CSS", "Bootstrap"],
      },
      {
        name: "Arquitectura y estado",
        items: [
          "NgRx / NGXS",
          "Microfrontends",
          "Module Federation",
          "Angular Elements",
          "Strategy · Factory · Adapter · Builder",
          "MVVM",
        ],
      },
      {
        name: "Calidad y seguridad",
        items: [
          "Code review",
          "Clean code",
          "Refactoring",
          "SonarQube",
          "Jasmine / Karma · Jest",
          "OWASP Top 10",
          "Políticas CSP",
          "CORS",
        ],
      },
      {
        name: "Git y metodologías",
        items: ["Git / GitHub", "Pull requests", "Git Flow", "Rebase interactivo", "Cherry-pick", "Scrum", "Docker"],
      },
      {
        name: "Complementarios",
        items: [
          "React (Hooks)",
          "Vue.js",
          "Node.js",
          "Laravel / PHP",
          "NativeScript",
          "Microsoft Azure",
          "SQL Server",
          "MySQL",
          "MongoDB",
          "Google Tag Manager",
          "GitHub Copilot",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Formación",
    title: "Formación e idiomas",
    degree: "Ingeniería de Sistemas",
    school: "Universidad César Vallejo",
    period: "2015 — 2020",
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo", value: 100 },
      { name: "Inglés", level: "Avanzado (B2+) · ICPNA", value: 82 },
    ],
  },
  projects: {
    eyebrow: "Trabajo previo",
    title: "Proyectos destacados",
    intro:
      "Algunos sistemas que construí en mis primeros años como desarrollador full-stack. Los proyectos actuales en banca están bajo acuerdos de confidencialidad.",
    viewProject: "Ver proyecto",
    items: {
      encuestas: {
        name: "Encuestas",
        description:
          "Sistema web con Angular en el front-end y Laravel en el back-end para crear encuestas y generar sus reportes.",
      },
      historia: {
        name: "Historia clínica",
        description: "Sistema web en Laravel para gestionar el proceso de historia clínica de pacientes.",
      },
      logistico: {
        name: "Sistema logístico",
        description:
          "Sistema web con Vue.js y Laravel para gestionar el proceso logístico y controlar ingresos y salidas de mercadería.",
      },
      tarjetas: {
        name: "Tarjetas digitales",
        description:
          "Sistema web con Angular y Laravel para registrar información de personas y generar sus tarjetas digitales.",
      },
      gestion: {
        name: "Gestión de proyectos",
        description:
          "Sistema web con Vue.js y Laravel para controlar proyectos con sus fechas y tareas.",
      },
      pedidos: {
        name: "Pedidos",
        description:
          "Sistema web con Angular y Laravel para gestionar los pedidos que los clientes generan desde una aplicación móvil.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Construimos algo juntos?",
    text: "Cuéntame sobre tu proyecto, tu equipo o tu oportunidad. Te respondo lo antes posible.",
    or: "O escríbeme directamente",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      sendAnother: "Enviar otro mensaje",
    },
    errors: {
      nameRequired: "Ingresa tu nombre.",
      emailRequired: "Ingresa tu email.",
      emailInvalid: "Ingresa un email válido.",
      messageRequired: "Escribe un mensaje.",
      messageShort: "El mensaje debe tener al menos 10 caracteres.",
      sendFailed: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por email.",
    },
    success: {
      title: "¡Mensaje enviado!",
      text: "Gracias por escribirme. Pronto me pondré en contacto contigo.",
    },
  },
  footer: {
    built: "Diseñado y desarrollado por Jean Pierre Acosta Tomaylla",
    tech: "Hecho con React 19, TypeScript y Vite",
    rights: "Todos los derechos reservados.",
  },
};

export type Dictionary = typeof es;
