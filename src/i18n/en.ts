import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Jean Pierre Acosta | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 6 years of experience. Angular 17+, TypeScript and RxJS for banking (BCP) and fintech.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle light / dark theme",
    switchLanguage: "Cambiar a español",
    backToTop: "Back to top",
    close: "Close",
    previousImage: "Previous image",
    nextImage: "Next image",
    imageOf: (current: number, total: number) => `Image ${current} of ${total}`,
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    status: "Currently at NTT DATA · client BCP",
    greeting: "Hi, I'm",
    lead: "I design and build",
    rotating: ["banking applications", "fintech platforms", "scalable components", "fast, secure interfaces"],
    tagline:
      "Senior Frontend Engineer with 6 years of experience, 5 of them specialized in Angular. I focus on performance, security and maintainable code.",
    ctaContact: "Let's talk",
    ctaCv: "Download CV",
    scroll: "Scroll",
    stats: [
      { value: 6, suffix: "+", label: "years in web development" },
      { value: 5, suffix: "+", label: "years specialized in Angular" },
      { value: 3, suffix: "", label: "years leading the SUNAT frontend" },
      { value: null, display: "B2+", label: "English level" },
    ],
  },
  about: {
    eyebrow: "About me",
    title: "Frontend engineering for products that can't fail",
    paragraphs: [
      "Today I build digital products for the banking sector (BCP). Before that, I was the technical owner of the frontend of an e-invoicing platform used by thousands of companies in Peru.",
      "I focus on robust, scalable components, performance, security and maintainable code. I like raising the team's bar through code review and by mentoring junior and mid-level developers.",
      "I work autonomously: from assessing the technical feasibility of a solution all the way to production and support.",
    ],
    highlights: [
      {
        title: "Technical ownership",
        text: "Owned the frontend of a mission-critical tax compliance system (SUNAT) for 3 years.",
      },
      {
        title: "Banking experience",
        text: "High-concurrency applications for BCP, with business analytics through Google Tag Manager.",
      },
      {
        title: "Code quality",
        text: "Code review, clean code, reactive programming and continuous refactoring, with static analysis in SonarQube.",
      },
      {
        title: "Mentoring",
        text: "Technical guidance and code review to help junior and mid-level developers grow.",
      },
    ],
  },
  experience: {
    eyebrow: "Career",
    title: "Professional experience",
    client: "client",
    items: [
      {
        id: "nttdata",
        role: "Senior Front-End Angular",
        company: "NTT DATA",
        client: "BCP",
        period: "Aug 2024 — Present",
        current: true,
        bullets: [
          "Design and build robust, reusable Angular 17+ components (Standalone Components, TypeScript, RxJS) for BCP's digital innovation projects, aligned with the bank's architecture and security guidelines.",
          "Improve performance and UX of high-concurrency banking applications through OnPush change detection, lazy loading and preventing memory leaks in RxJS subscriptions.",
          "Implement the analytics layer with Google Tag Manager, defining tracking for critical business events together with the product and data teams.",
          "Review peers' code through pull requests, enforcing commit conventions and Git Flow.",
          "Assess the technical feasibility of user stories with other technology teams before development, within a Scrum framework.",
          "Deploy and integrate the applications with the bank's cloud services on Microsoft Azure, with CI/CD pipelines in Azure DevOps.",
        ],
      },
      {
        id: "efact",
        role: "Senior Front-End Developer",
        company: "EFACT",
        client: null,
        period: "Sep 2021 — Aug 2024",
        current: false,
        bullets: [
          "Technical owner of the frontend of the e-invoicing system used by thousands of companies in Peru for tax compliance with SUNAT.",
          "Led the maintenance and evolution of the Angular application, defining the technical solution for new features according to SUNAT's XML standards.",
          "Optimized frontend performance with lazy-loaded modules and smaller bundles.",
          "Handled and resolved critical frontend incidents in production.",
          "Built REST APIs with Node.js and Laravel to connect the frontend with the invoice processing services.",
          "Mentored and reviewed code for the team's developers.",
        ],
      },
      {
        id: "aspat",
        role: "Full-Stack Developer",
        company: "ASPAT",
        client: null,
        period: "Aug 2019 — Mar 2020",
        current: false,
        bullets: [
          "Built a custom ERP (Vue.js + Laravel) to automate internal processes.",
          "Built responsive websites with SEO optimization, performance and web accessibility best practices.",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Technical skills",
    groups: [
      {
        name: "Angular",
        items: [
          "Angular 17+",
          "Standalone Components",
          "Lazy loading",
          "Reactive forms",
          "OnPush",
          "Dynamic Components",
          "Angular Libraries",
          "DI with InjectionTokens",
          "Schematics",
        ],
      },
      {
        name: "Languages & web",
        items: ["TypeScript", "JavaScript ES6+", "RxJS", "Semantic HTML5", "SEO", "Web accessibility"],
      },
      {
        name: "Styling & UI",
        items: ["CSS3", "SCSS", "Flexbox", "CSS Grid", "Animations", "PrimeNG", "Tailwind CSS", "Bootstrap"],
      },
      {
        name: "Architecture & state",
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
        name: "Quality & security",
        items: [
          "Code review",
          "Clean code",
          "Refactoring",
          "SonarQube",
          "Jasmine / Karma · Jest",
          "OWASP Top 10",
          "CSP policies",
          "CORS",
        ],
      },
      {
        name: "Git & methodologies",
        items: ["Git / GitHub", "Pull requests", "Git Flow", "Interactive rebase", "Cherry-pick", "Scrum", "Docker"],
      },
      {
        name: "Also",
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
    eyebrow: "Education",
    title: "Education & languages",
    degree: "Systems Engineering",
    school: "Universidad César Vallejo",
    period: "2015 — 2020",
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native", value: 100 },
      { name: "English", level: "Advanced (B2+) · ICPNA", value: 82 },
    ],
  },
  projects: {
    eyebrow: "Earlier work",
    title: "Featured projects",
    intro:
      "Some systems I built during my early years as a full-stack developer. My current banking work is covered by confidentiality agreements.",
    viewProject: "View project",
    items: {
      encuestas: {
        name: "Surveys",
        description: "Web system with an Angular front-end and a Laravel back-end to create surveys and generate their reports.",
      },
      historia: {
        name: "Medical records",
        description: "Laravel web system to manage patients' medical records.",
      },
      logistico: {
        name: "Logistics system",
        description: "Vue.js and Laravel web system to manage logistics and track incoming and outgoing goods.",
      },
      tarjetas: {
        name: "Digital business cards",
        description: "Angular and Laravel web system to register people's information and generate their digital cards.",
      },
      gestion: {
        name: "Project management",
        description: "Vue.js and Laravel web system to track projects with their dates and tasks.",
      },
      pedidos: {
        name: "Orders",
        description: "Angular and Laravel web system to manage orders placed by customers from a mobile app.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Shall we build something together?",
    text: "Tell me about your project, your team or your opportunity. I'll get back to you as soon as I can.",
    or: "Or reach me directly",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      sending: "Sending…",
      sendAnother: "Send another message",
    },
    errors: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email.",
      messageRequired: "Please write a message.",
      messageShort: "Your message should be at least 10 characters long.",
      sendFailed: "The message couldn't be sent. Please try again or email me directly.",
    },
    success: {
      title: "Message sent!",
      text: "Thanks for reaching out. I'll get back to you soon.",
    },
  },
  footer: {
    built: "Designed and built by Jean Pierre Acosta Tomaylla",
    tech: "Made with React 19, TypeScript and Vite",
    rights: "All rights reserved.",
  },
};
