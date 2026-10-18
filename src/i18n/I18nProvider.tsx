import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { I18nContext, isLang, type Lang } from "./context";
import { withViewTransition } from "../lib/viewTransition";
import { es } from "./es";
import { en } from "./en";

const dictionaries = { es, en };

/** El script inline de index.html ya resolvió el idioma (URL → storage → navegador). */
function initialLang(): Lang {
  const lang = document.documentElement.lang;
  return isLang(lang) ? lang : "es";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = dictionaries[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);

    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Almacenamiento no disponible (modo privado): el idioma vive solo en la URL.
    }

    // Mantiene un enlace compartible: /?lang=en para inglés, URL limpia para español.
    const url = new URL(window.location.href);
    if (lang === "es") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
  }, [lang, t]);

  const setLang = useCallback((next: Lang) => {
    withViewTransition(() => flushSync(() => setLangState(next)));
  }, []);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return <I18nContext value={value}>{children}</I18nContext>;
}
