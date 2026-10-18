import { prefersReducedMotion } from "./motion";

/**
 * Ejecuta una actualización del DOM dentro de la View Transitions API cuando
 * el navegador la soporta; si no, la aplica directamente.
 */
export function withViewTransition(update: () => void): ViewTransition | null {
  if (!document.startViewTransition || prefersReducedMotion()) {
    update();
    return null;
  }
  return document.startViewTransition(update);
}
