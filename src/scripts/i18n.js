import i18next from "i18next";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

let savedLang = "es";

if (typeof window !== "undefined") {
  savedLang = localStorage.getItem("lang") || "es";
}

i18next.init({
  lng: savedLang,
  fallbackLng: "es",
  resources: {
    es: { translation: es },
    en: { translation: en }
  }
});

export default i18next;
