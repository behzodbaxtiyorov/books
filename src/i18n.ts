import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {en} from "../public/en"
import {uz} from "../public/uz"

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: "uz",
    debug: true,
    resources: {
        en: {translation: en},
        uz: {translation: uz},
        },
        interpolation: {
            escapeValue: false,
        },
  });


  export default i18n;





