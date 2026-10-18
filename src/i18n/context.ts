import { createContext, use } from "react";
import type { Dictionary } from "./es";

export type Lang = "es" | "en";

export interface I18nValue {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

export const I18nContext = createContext<I18nValue | null>(null);

export function useI18n(): I18nValue {
  const ctx = use(I18nContext);
  if (!ctx) throw new Error("useI18n debe usarse dentro de <I18nProvider>");
  return ctx;
}

export function isLang(value: unknown): value is Lang {
  return value === "es" || value === "en";
}
