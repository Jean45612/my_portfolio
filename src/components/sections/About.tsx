import { useI18n } from "../../i18n/context";
import { profile } from "../../data/profile";
import { Icon, type IconName } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import photo from "../../assets/profile.jpg";

const HIGHLIGHT_ICONS: IconName[] = ["shield", "bank", "code", "users"];

export function About() {
  const { t } = useI18n();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" eyebrow={t.about.eyebrow} title={t.about.title} id="about-title" />

        <div className="about">
          <Reveal variant="scale" className="about__photo-wrap">
            <figure className="about__photo">
              <img src={photo} alt={profile.fullName} width={640} height={684} loading="lazy" decoding="async" />
              <figcaption className="about__location">
                <Icon name="pin" size={16} />
                {profile.location}
              </figcaption>
            </figure>
          </Reveal>

          <div className="about__text">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="highlights">
          {t.about.highlights.map((h, i) => (
            <Reveal as="li" key={h.title} delay={i * 110} className="highlight card spotlight">
              <span className="highlight__icon">
                <Icon name={HIGHLIGHT_ICONS[i] ?? "code"} size={22} />
              </span>
              <h3 className="highlight__title">{h.title}</h3>
              <p className="highlight__text">{h.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
