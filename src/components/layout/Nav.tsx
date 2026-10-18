import { useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { useI18n } from "../../i18n/context";
import { useTheme } from "../../hooks/useTheme";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Icon } from "../ui/Icon";

const SECTIONS = ["about", "experience", "skills", "projects", "contact"] as const;

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const active = useActiveSection(SECTIONS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Se oculta al bajar y reaparece al subir; la barra de progreso usa --scroll.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty("--scroll", String(max > 0 ? y / max : 0));
        setScrolled(y > 24);
        setHidden(y > 320 && y > lastY);
        lastY = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  const onThemeClick = (e: MouseEvent<HTMLButtonElement>) => toggle({ x: e.clientX, y: e.clientY });

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${hidden && !open ? "nav--hidden" : ""}`}>
      <div className="nav__progress" aria-hidden="true" />
      <div className="nav__inner container">
        <a href="#top" className="nav__logo" aria-label="Jean Pierre Acosta — inicio">
          <span className="nav__logo-mark">JP</span>
          <span className="nav__logo-text">
            acosta<span className="text-accent">.dev</span>
          </span>
        </a>

        <nav id="primary-nav" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Principal">
          <ul>
            {SECTIONS.map((id, i) => (
              <li key={id} style={{ "--i": i } as CSSProperties}>
                <a
                  href={`#${id}`}
                  className={active === id ? "is-active" : ""}
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn lang-btn"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label={t.a11y.switchLanguage}
            title={t.a11y.switchLanguage}
          >
            <Icon name="globe" size={18} />
            <span className="lang-btn__label">{lang === "es" ? "EN" : "ES"}</span>
          </button>
          <button
            type="button"
            className="icon-btn theme-btn"
            onClick={onThemeClick}
            aria-label={t.a11y.toggleTheme}
            title={t.a11y.toggleTheme}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <button
            type="button"
            className={`icon-btn menu-btn ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          >
            <span className="menu-btn__bars" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
