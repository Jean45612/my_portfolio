import { useRef } from "react";
import { useI18n } from "../../i18n/context";
import { useInView } from "../../hooks/useInView";
import { cssVars } from "../../lib/style";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  const { t } = useI18n();
  const barsRef = useRef<HTMLUListElement>(null);
  const barsVisible = useInView(barsRef, { threshold: 0.5 });

  return (
    <section className="section section--tight" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading index="04" eyebrow={t.education.eyebrow} title={t.education.title} id="education-title" />

        <div className="edu">
          <Reveal className="edu__card card spotlight">
            <span className="highlight__icon">
              <Icon name="cap" size={22} />
            </span>
            <h3 className="edu__degree">{t.education.degree}</h3>
            <p className="edu__school">{t.education.school}</p>
            <p className="edu__period">{t.education.period}</p>
          </Reveal>

          <Reveal className="edu__card card spotlight" delay={120}>
            <span className="highlight__icon">
              <Icon name="globe" size={22} />
            </span>
            <h3 className="edu__degree">{t.education.languagesTitle}</h3>
            <ul className={`langs ${barsVisible ? "is-visible" : ""}`} ref={barsRef}>
              {t.education.languages.map((l) => (
                <li key={l.name} className="lang">
                  <div className="lang__row">
                    <span className="lang__name">{l.name}</span>
                    <span className="lang__level">{l.level}</span>
                  </div>
                  <span className="lang__bar" aria-hidden="true">
                    <span style={cssVars({ "--value": l.value / 100 })} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
