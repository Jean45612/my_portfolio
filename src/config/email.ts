// Claves públicas de EmailJS (están pensadas para usarse en el navegador).
// Se pueden sobrescribir con variables VITE_EMAILJS_* en un archivo .env.local.
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_dgkc0ik",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_mini4qh",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "user_WVvRGmyTPEUABKT5igQbK",
};
