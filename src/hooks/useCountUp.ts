import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

/** Anima un número de 0 a `target` cuando `active` pasa a true. */
export function useCountUp(target: number, active: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!active || reduced) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * easeOutExpo(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, reduced]);

  if (reduced) return active ? target : 0;
  return value;
}
