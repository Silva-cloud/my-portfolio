import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "../../components/shared/header/Header";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import Footer from "@/components/shared/footer/Footer";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
  title: "CV",
  description: "Zoalfakar Salman cv",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body className={` font-system  antialiased  `}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
