"use client";
import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { routing } from "@/lib/i18n/routing";
import { Locale, useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const defaultLocale = useLocale();
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations("languages");
  return (
    <select
      onChange={(
        e: React.ChangeEvent<HTMLSelectElement & { value: Locale }>
      ) => {
        replace({ pathname }, { locale: e.target.value });
      }}
      defaultValue={defaultLocale}
    >
      {routing.locales.map((locale, i) => {
        return (
          <option key={locale + "option" + i} value={locale}>
            {t(`${locale}`)}
          </option>
        );
      })}
    </select>
  );
}
