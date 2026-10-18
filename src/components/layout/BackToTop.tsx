import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/context";
import { Icon } from "../ui/Icon";

/** Botón flotante con un anillo que refleja el progreso de scroll (--scroll). */
export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#top" className={`to-top ${visible ? "is-visible" : ""}`} aria-label={t.a11y.backToTop}>
      <svg className="to-top__ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" pathLength="1" />
      </svg>
      <Icon name="arrowUp" size={18} />
    </a>
  );
}
