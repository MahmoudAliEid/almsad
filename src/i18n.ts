import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import arTranslations from "./locales/ar.json";
import enTranslations from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: arTranslations },
      en: { translation: enTranslations },
    },
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Handle RTL/LTR direction
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

// Set initial direction
const initialLng = i18n.language || "ar";
document.documentElement.dir = initialLng.startsWith("ar") ? "rtl" : "ltr";
document.documentElement.lang = initialLng;

export default i18n;
