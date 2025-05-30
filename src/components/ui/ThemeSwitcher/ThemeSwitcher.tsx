"use client";
import themes from "@/lib/constants/themes";
import { getTheme, saveTheme } from "@/lib/theme/localeStorageTheme";
import { Theme } from "@/lib/types/themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

// try cookies

export default function ThemeSwitcher() {
  const t = useTranslations("theme");
  const [theme, setTheme] = useState<Theme>();
  const [isRenderedOnClient, setIsRenderedOnClient] = useState(false);

  useEffect(() => {
    if (!isRenderedOnClient) {
      setIsRenderedOnClient(true);
    }
  }, [isRenderedOnClient]);

  if (!isRenderedOnClient) {
    return <div className="w-[100px]"></div>;
  }
  return (
    <select
      defaultValue={getTheme()}
      onChange={(
        e: React.ChangeEvent<HTMLSelectElement & { value: Theme }>
      ) => {
        let newTheme = e.target.value;
        saveTheme(newTheme);
        setTheme(newTheme);

        if (newTheme === "automatic") {
          const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";
          newTheme = systemTheme;
        }
        document.documentElement.setAttribute("data-theme", newTheme);
      }}
      value={theme}
    >
      {themes.map((theme, i) => {
        return (
          <option
            className="capitalize"
            key={theme + "option" + i}
            value={theme}
          >
            {t(`${theme}`)}
          </option>
        );
      })}
    </select>
  );
}
