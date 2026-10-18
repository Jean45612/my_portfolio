export const profile = {
  name: "Jean Pierre Acosta",
  fullName: "Jean Pierre Acosta Tomaylla",
  role: "Senior Frontend Engineer",
  location: "Lima, Perú",
  email: "jpacostatomaylla@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jp-acosta",
    github: "https://github.com/Jean45612",
    // CV según el idioma activo
    cv: {
      es: "https://drive.google.com/file/d/1sT-bOdcKdhWbIAJcD44JXKQtipFv8Drf/view",
      en: "https://drive.google.com/file/d/1GM8g6ZRcDFZhATylLAB8UlLEH6SMjh_k/view",
    },
  },
} as const;

/** Stack por experiencia; el resto del contenido de cada puesto vive en los diccionarios. */
export const experienceStack: Record<string, string[]> = {
  nttdata: [
    "Angular 17+",
    "TypeScript",
    "RxJS",
    "PrimeNG",
    "SCSS",
    "Microsoft Azure",
    "SQL Server",
    "Google Tag Manager",
    "GitHub Copilot",
  ],
  efact: ["Angular", "TypeScript", "RxJS", "Node.js", "Laravel", "MongoDB", "REST APIs", "XML"],
  aspat: ["Vue.js", "Laravel", "Bootstrap", "MySQL"],
};

export const marqueeTech = [
  "Angular",
  "TypeScript",
  "RxJS",
  "NgRx",
  "PrimeNG",
  "SCSS",
  "Tailwind CSS",
  "React",
  "Vue.js",
  "Node.js",
  "Laravel",
  "Azure DevOps",
  "SonarQube",
  "Jest",
  "Module Federation",
  "Google Tag Manager",
];
