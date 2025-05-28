import LanguageSwitcher from "@/components/ui/languageSwitcher/LangSwitcher";
import SmallNav from "@/components/ui/smallNav/SmallNav";
import NavigationLinks from "@/lib/constants/navigation";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="flex justify-between z-10 bg-primary-bg items-center fixed w-full px-6   py-2 ">
      <Link
        target=""
        className="bg-[--background]   text-primary text-2xl font-bold"
        href={"/"}
      >
        {t("myName")}
      </Link>

      <LanguageSwitcher />
      <SmallNav />
      <nav className="gap-6  items-center hidden sm:flex">
        {NavigationLinks.map(({ href, target, label }) => (
          <Link
            key={label}
            className={"text-lg hover:text-primary theme-light:bg-amber-800"}
            href={href}
            target={target}
          >
            {t(label)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
