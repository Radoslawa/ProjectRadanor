// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  // Użyj wtyczki HttpApi do ładowania tłumaczeń z serwera/folderu public
  .use(HttpApi)
  // Wykrywaj język użytkownika
  .use(LanguageDetector)
  // Przekaż instancję i18n do react-i18next
  .use(initReactI18next)
  .init({
    // Języki, które wspieramy
    supportedLngs: ['en', 'de', 'fr', 'es'],
    // Język domyślny, jeśli wykryty język nie jest wspierany
    fallbackLng: 'en',
    // Opcje dla backendu (skąd ładować pliki .json)
    backend: {
      // Ścieżka do plików z tłumaczeniami. Będą one w folderze public/locales/
      loadPath: '/locales/{{lng}}/translation.json',
    },
    // Opcje dla detektora języka
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    // Opcje dla react-i18next
    react: {
      useSuspense: true, // Ważne dla ładowania asynchronicznego
    },
    // Wyłącz logowanie w konsoli produkcyjnej
    debug: import.meta.env.DEV, 
    interpolation: {
      escapeValue: false, // React już chroni przed XSS
    },
  });

export default i18n;

