import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import sk from "./locales/sk";
// import cs from "./locales/cs";
// import nl from "./locales/nl";
// import de from "./locales/de";

const SUPPORTED_LANGS = ["en", "sk"] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

function normalizeLang(value?: string): SupportedLang | undefined {
  if (!value) return undefined;
  const lower = value.toLowerCase();

  if (lower.startsWith("sk")) return "sk";
  // if (lower.startsWith("cs") || lower.startsWith("cz")) return "cs";
  // if (lower.startsWith("nl")) return "nl";
  // if (lower.startsWith("de")) return "de";
  if (lower.startsWith("en")) return "en";

  return undefined;
}

function detectFromTimeZone(): SupportedLang | undefined {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const map: Record<string, SupportedLang> = {
    "Europe/Bratislava": "sk",
    // "Europe/Prague": "cs",
    // "Europe/Amsterdam": "nl",
    // "Europe/Berlin": "de",
    // "Europe/Vienna": "de",
    // "Europe/Zurich": "de",
  };

  return map[tz];
}

const regionalDetector = {
  name: "regional",
  lookup() {
    const fromTimezone = detectFromTimeZone();
    if (fromTimezone) return fromTimezone;

    const nav = navigator.languages?.[0] || navigator.language;
    return normalizeLang(nav);
  },
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(regionalDetector);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sk: { translation: sk },
      // cs: { translation: cs },
      // nl: { translation: nl },
      // de: { translation: de },
    },
    fallbackLng: "en",
    supportedLngs: [...SUPPORTED_LANGS],
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "regional", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
export { SUPPORTED_LANGS };
