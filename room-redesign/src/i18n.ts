import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Idioma por defecto si no hay nada guardado
    debug: true, 
    
    // 👇 LA SOLUCIÓN: Configuramos el detector 👇
    detection: {
      // Quitamos 'navigator' (el navegador) de la lista. 
      // Solo leerá si el usuario ya cambió el idioma antes y se guardó.
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    react: {
      useSuspense: false 
    }
  });

export default i18n;