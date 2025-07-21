import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ru", "ro"] as const,

  // Used when no locale matches
  defaultLocale: "ro",
});

export type Locale = (typeof routing.locales)[number];
