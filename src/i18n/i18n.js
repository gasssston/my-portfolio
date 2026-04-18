import i18next from "i18next";
import es from "./es.json";
import en from "./en.json";

let initialized = false;

export async function initI18n() {
  if (initialized) return i18next; // evitar doble init

  let saved = "es";

  if (typeof window !== "undefined") {
    saved = localStorage.getItem("lang") || "es";
  }

  await i18next.init({
    lng: saved,
    fallbackLng: "es",
    resources: {
      es: { translation: es },
      en: { translation: en }
    }
  });

  initialized = true;
  return i18next;
}

export function changeLang(lang) {
  if (!initialized) return; // evitar error si no está listo

  i18next.changeLanguage(lang);

  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lang);
  }
}
