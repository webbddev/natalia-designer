// /src/app/not-found.jsx
"use client";

import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg mb-8">{t("description")}</p>
      <a href="/" className="text-red-orange-500 underline">
        {t("goHome")}
      </a>
    </main>
  );
}
