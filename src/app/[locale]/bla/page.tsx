import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <div className="py-48">
      <h1>{t("myName")}</h1>
      <h1>{t("testy")}</h1>
    </div>
  );
}
