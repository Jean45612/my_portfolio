# Portafolio · Jean Pierre Acosta

Portafolio personal bilingüe (ES / EN) de **Jean Pierre Acosta Tomaylla**, Senior Frontend Engineer.

🔗 https://jean45612.github.io/my_portfolio/ · versión en inglés: `?lang=en`

## Stack

- **React 19** + **TypeScript** (modo estricto) + **Vite 8**
- CSS propio con design tokens, tema claro/oscuro y animaciones sin librerías
- **EmailJS** para el formulario de contacto
- ESLint (incluye las reglas del React Compiler)

## Scripts

| Comando             | Descripción                                                 |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                                      |
| `npm run build`     | Typecheck + build de producción en `dist/`                  |
| `npm run preview`   | Sirve el build localmente                                   |
| `npm run lint`      | ESLint                                                      |
| `npm run deploy`    | Build y publicación en GitHub Pages (rama `gh-pages`)       |

## Estructura

```
src/
├── i18n/          # Diccionarios es/en tipados + provider (idioma en URL y localStorage)
├── data/          # Datos no traducibles: enlaces, stacks, proyectos e imágenes
├── hooks/         # useInView, useCountUp, useTilt, useMagnetic, useSpotlight, useTheme…
├── components/
│   ├── layout/    # Intro, Nav, Footer, BackToTop
│   ├── sections/  # Hero, About, Experience, Skills, Education, Projects, Contact
│   └── ui/        # Reveal, SplitText, MagneticLink, Icon, SectionHeading
└── styles/        # tokens, base, components, layout, sections, motion
```

## Editar contenido

- **Textos**: `src/i18n/es.ts` y `src/i18n/en.ts`. El tipo `Dictionary` obliga a que ambos idiomas tengan las mismas claves.
- **Enlaces / CV**: `src/data/profile.ts`.
- **Proyectos**: imágenes en `src/assets/projects/` y registro en `src/data/projects.ts`.
- **EmailJS**: valores por defecto en `src/config/email.ts`; se pueden sobrescribir con `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` y `VITE_EMAILJS_PUBLIC_KEY` en `.env.local`.

## Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion` (desactiva animaciones) y `prefers-color-scheme`.
- Enlace "saltar al contenido", foco visible, modal sobre `<dialog>` nativo con navegación por teclado.
- Imágenes en WebP con carga diferida.
