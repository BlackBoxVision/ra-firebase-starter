import polyglotI18nProvider from "ra-i18n-polyglot";

import { esMessages } from "./locales/es";

export let i18nProvider = polyglotI18nProvider(
  (locale) => esMessages,
  "es" // Default locale
);
