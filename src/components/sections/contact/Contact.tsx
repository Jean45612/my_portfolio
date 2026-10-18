import { useI18n } from "../../../i18n/context";
import { profile } from "../../../data/profile";
import { Icon } from "../../ui/Icon";
import { Reveal } from "../../ui/Reveal";
import { SectionHeading } from "../../ui/SectionHeading";
import { useContactForm, type Field } from "./useContactForm";

export function Contact() {
  const { t, lang } = useI18n();
  const form = useContactForm();

  const field = (name: Field, label: string, multiline = false) => {
    const error = form.errors[name];
    const props = {
      id: `contact-${name}`,
      name,
      value: form.values[name],
      onChange: form.onChange,
      onBlur: form.onBlur,
      placeholder: " ",
      "aria-invalid": Boolean(error),
      "aria-describedby": error ? `contact-${name}-error` : undefined,
      className: "field__control",
    };

    return (
      <div className={`field ${error ? "field--error" : ""}`}>
        {multiline ? (
          <textarea rows={5} {...props} />
        ) : (
          <input type={name === "email" ? "email" : "text"} autoComplete={name === "email" ? "email" : "name"} {...props} />
        )}
        <label htmlFor={props.id} className="field__label">
          {label}
        </label>
        <span className="field__line" aria-hidden="true" />
        {error && (
          <p className="field__error" id={`contact-${name}-error`} role="alert">
            {t.contact.errors[error]}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading index="06" eyebrow={t.contact.eyebrow} title={t.contact.title} id="contact-title">
          {t.contact.text}
        </SectionHeading>

        <div className="contact__grid">
          <Reveal className="contact__card card">
            {form.status === "success" ? (
              <div className="success" role="status">
                <svg className="success__check" viewBox="0 0 52 52" aria-hidden="true">
                  <circle cx="26" cy="26" r="24" />
                  <path d="m15 27 7.5 7.5L38 19" />
                </svg>
                <h3>{t.contact.success.title}</h3>
                <p>{t.contact.success.text}</p>
                <button type="button" className="btn btn--ghost" onClick={form.reset}>
                  <span className="btn__label">{t.contact.form.sendAnother}</span>
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={form.onSubmit} noValidate>
                <div className="form__row">
                  {field("nombre", t.contact.form.name)}
                  {field("email", t.contact.form.email)}
                </div>
                {field("mensaje", t.contact.form.message, true)}

                {form.status === "error" && (
                  <p className="form__alert" role="alert">
                    {t.contact.errors.sendFailed}
                  </p>
                )}

                <button type="submit" className={`btn btn--primary btn--block ${form.isPending ? "is-loading" : ""}`} disabled={form.isPending}>
                  <span className="btn__label">
                    {form.isPending ? (
                      <>
                        <span className="spinner" aria-hidden="true" />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <Icon name="arrowRight" size={18} />
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </Reveal>

          <Reveal className="contact__direct" delay={120}>
            <p className="contact__or">{t.contact.or}</p>
            <a className="contact__link spotlight" href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              <span>{profile.email}</span>
              <Icon name="arrowUpRight" size={18} className="contact__arrow" />
            </a>
            <a className="contact__link spotlight" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              <span>linkedin.com/in/jp-acosta</span>
              <Icon name="arrowUpRight" size={18} className="contact__arrow" />
            </a>
            <a className="contact__link spotlight" href={profile.links.github} target="_blank" rel="noreferrer">
              <Icon name="github" />
              <span>github.com/Jean45612</span>
              <Icon name="arrowUpRight" size={18} className="contact__arrow" />
            </a>
            <a className="contact__link spotlight" href={profile.links.cv[lang]} target="_blank" rel="noreferrer">
              <Icon name="download" />
              <span>{t.hero.ctaCv}</span>
              <Icon name="arrowUpRight" size={18} className="contact__arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
