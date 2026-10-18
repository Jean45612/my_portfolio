import { useState, useTransition, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../../config/email";
import type { Dictionary } from "../../../i18n/es";

// Los nombres coinciden con las variables de la plantilla de EmailJS existente.
export interface ContactValues {
  nombre: string;
  email: string;
  mensaje: string;
}
export type Field = keyof ContactValues;
type Errors = Dictionary["contact"]["errors"];
type ErrorKey = Exclude<keyof Errors, "sendFailed">;

const EMPTY: ContactValues = { nombre: "", email: "", mensaje: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: ContactValues): Partial<Record<Field, ErrorKey>> {
  const errors: Partial<Record<Field, ErrorKey>> = {};
  if (!values.nombre.trim()) errors.nombre = "nameRequired";
  if (!values.email.trim()) errors.email = "emailRequired";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "emailInvalid";
  if (!values.mensaje.trim()) errors.mensaje = "messageRequired";
  else if (values.mensaje.trim().length < 10) errors.mensaje = "messageShort";
  return errors;
}

export type Status = "idle" | "success" | "error";

export function useContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [isPending, startTransition] = useTransition();

  // Los errores se derivan de los valores: solo se muestran en campos ya tocados.
  const allErrors = validate(values);
  const errors = Object.fromEntries(
    Object.entries(allErrors).filter(([field]) => touched[field as Field]),
  ) as Partial<Record<Field, ErrorKey>>;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as Field;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ nombre: true, email: true, mensaje: true });

    const firstInvalid = (Object.keys(allErrors) as Field[])[0];
    if (firstInvalid) {
      const input = e.currentTarget.elements.namedItem(firstInvalid);
      if (input instanceof HTMLElement) input.focus();
      return;
    }

    startTransition(async () => {
      try {
        await emailjs.send(emailConfig.serviceId, emailConfig.templateId, { ...values }, {
          publicKey: emailConfig.publicKey,
        });
        setStatus("success");
        setValues(EMPTY);
        setTouched({});
      } catch (error) {
        console.error("EmailJS:", error);
        setStatus("error");
      }
    });
  };

  const reset = () => setStatus("idle");

  return { values, errors, status, isPending, onChange, onBlur, onSubmit, reset };
}
