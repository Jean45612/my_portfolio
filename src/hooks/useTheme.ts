import { useCallback, useState } from "react";
import { flushSync } from "react-dom";
import { withViewTransition } from "../lib/viewTransition";

export type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/**
 * Cambia de tema con una transición circular que nace desde el punto donde
 * se hizo clic (View Transitions API), con fallback instantáneo.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggle = useCallback((origin?: { x: number; y: number }) => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;

    if (origin) {
      root.style.setProperty("--vt-x", `${origin.x}px`);
      root.style.setProperty("--vt-y", `${origin.y}px`);
    }
    root.dataset.transition = "theme";

    const transition = withViewTransition(() =>
      flushSync(() => {
        root.dataset.theme = next;
        setTheme(next);
      }),
    );

    const cleanup = () => delete root.dataset.transition;
    if (transition) transition.finished.finally(cleanup);
    else cleanup();

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sin almacenamiento disponible: el tema solo dura esta sesión.
    }
  }, []);

  return { theme, toggle };
}
