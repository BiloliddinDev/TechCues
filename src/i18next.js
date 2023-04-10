import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangEn from "./Lang/En/lang.json";
import LangRU from "./Lang/Ru/lang.json";
import LangUz from "./Lang/Uz/lang.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: LangEn,
    },
    ru: {
      translation: LangRU,
    },
    uz: {
      translation: LangUz,
    },
  },
  lng: "uz",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
