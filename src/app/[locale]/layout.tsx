import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "../../../i18n/routing";
import { ReactLenis } from "lenis/react";
import { setRequestLocale } from "next-intl/server";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;

  // Check if the locale is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Get messages for the current locale
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }
  // Set the request locale
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${archivo.variable} font-sans antialiased bg-stone-200 text-stone-900`}
      >
        <ReactLenis root>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
          </NextIntlClientProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
