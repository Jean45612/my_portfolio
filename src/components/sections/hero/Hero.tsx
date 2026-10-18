import { useI18n } from "../../../i18n/context";
import { cssVars } from "../../../lib/style";
import { profile } from "../../../data/profile";
import { Icon } from "../../ui/Icon";
import { MagneticLink } from "../../ui/MagneticLink";
import { SplitText } from "../../ui/SplitText";
import { CodeCard } from "./CodeCard";
import { RotatingWords } from "./RotatingWords";
import { Stats } from "./Stats";

export function Hero({ ready }: { ready: boolean }) {
  const { t, lang } = useI18n();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="aurora aurora--1" />
        <div className="aurora aurora--2" />
        <div className="aurora aurora--3" />
        <div className="hero__grid" />
        <div className="hero__noise" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="pill hero__anim" style={cssVars({ "--d": "0ms" })}>
            <span className="pulse" aria-hidden="true" />
            {t.hero.status}
          </p>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__greeting hero__anim" style={cssVars({ "--d": "120ms" })}>
              {t.hero.greeting}
            </span>
            <SplitText text={profile.name} className="hero__name" delay={250} stagger={40} />
          </h1>

          <p className="hero__lead hero__anim" style={cssVars({ "--d": "900ms" })}>
            {t.hero.lead} <RotatingWords words={t.hero.rotating} />
          </p>

          <p className="hero__tagline hero__anim" style={cssVars({ "--d": "1050ms" })}>
            {t.hero.tagline}
          </p>

          <div className="hero__ctas hero__anim" style={cssVars({ "--d": "1200ms" })}>
            <MagneticLink href="#contact">
              {t.hero.ctaContact}
              <Icon name="arrowRight" size={18} />
            </MagneticLink>
            <MagneticLink href={profile.links.cv[lang]} variant="ghost" target="_blank" rel="noreferrer">
              <Icon name="download" size={18} />
              {t.hero.ctaCv}
            </MagneticLink>
            <div className="hero__social">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual hero__anim" style={cssVars({ "--d": "600ms" })}>
          <CodeCard start={ready} />
          <div className="float-badge float-badge--a" aria-hidden="true">
            <Icon name="shield" size={16} /> OWASP · CSP
          </div>
          <div className="float-badge float-badge--b" aria-hidden="true">
            <Icon name="bank" size={16} /> BCP
          </div>
        </div>
      </div>

      <div className="container hero__anim" style={cssVars({ "--d": "1400ms" })}>
        <Stats stats={t.hero.stats} />
      </div>

      <a href="#about" className="scroll-cue" aria-hidden="true" tabIndex={-1}>
        <span className="scroll-cue__mouse" />
        <span>{t.hero.scroll}</span>
      </a>
    </section>
  );
}
