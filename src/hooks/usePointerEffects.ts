import { useEffect, type RefObject } from "react";
import { hasFinePointer, prefersReducedMotion } from "../lib/motion";

function canAnimate() {
  return hasFinePointer() && !prefersReducedMotion();
}

/**
 * Inclinación 3D siguiendo el cursor. Escribe --rx/--ry (grados) y
 * --px/--py (posición del cursor en %) para que el CSS haga el resto.
 */
export function useTilt(ref: RefObject<HTMLElement | null>, maxDeg = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate()) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        el.style.setProperty("--ry", `${(x - 0.5) * maxDeg * 2}deg`);
        el.style.setProperty("--rx", `${(0.5 - y) * maxDeg * 2}deg`);
        el.style.setProperty("--px", `${x * 100}%`);
        el.style.setProperty("--py", `${y * 100}%`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, maxDeg]);
}

/** Desplaza el elemento ligeramente hacia el cursor (efecto "magnético"). */
export function useMagnetic(ref: RefObject<HTMLElement | null>, strength = 0.3) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate()) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.translate = `${x * strength}px ${y * strength}px`;
    };
    const onLeave = () => {
      el.style.translate = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, strength]);
}

/**
 * Halo de luz que sigue al cursor sobre cualquier elemento con la clase
 * `.spotlight`. Un único listener delegado para toda la página.
 */
export function useSpotlight() {
  useEffect(() => {
    if (!canAnimate()) return;

    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
