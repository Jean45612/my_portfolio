import { useI18n } from "../../i18n/context";
import { profile } from "../../data/profile";
import { Icon } from "../ui/Icon";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__marquee" aria-hidden="true">
        <span>Jean Pierre Acosta — Senior Frontend Engineer — </span>
        <span>Jean Pierre Acosta — Senior Frontend Engineer — </span>
      </div>
      <div className="container footer__inner">
        <div>
          <p>{t.footer.built}</p>
          <p className="footer__muted">
            {t.footer.tech} · © {year}. {t.footer.rights}
          </p>
        </div>
        <ul className="footer__social">
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" />
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
