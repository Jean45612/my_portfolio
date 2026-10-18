import type { CSSProperties } from "react";

/** Permite pasar custom properties (--x) al atributo style con tipado. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars as CSSProperties;
}
