import LanguageSwitcher from "@/components/ui/languageSwitcher/LangSwitcher";
import SmallNav from "@/components/ui/smallNav/SmallNav";
import { Link } from "@/lib/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const navLinksStyle = "text-lg hover:text-primary";
  return (
    <header className="flex justify-between z-10 bg-primary-bg items-center fixed w-full px-6   py-2 ">
      <Link
        className="bg-[--background]   text-primary text-2xl font-bold"
        href={"/"}
      >
        {t("myName")}
      </Link>
      <Link href="/bla">bla</Link>

      <LanguageSwitcher />
      <SmallNav />
      <nav className="gap-6  items-center hidden sm:flex">
        <Link href={"/#about"} className={navLinksStyle}>
          About
        </Link>
        <Link className={navLinksStyle} href={"/#projects"}>
          Projects
        </Link>
        <Link className={navLinksStyle} href="/#contact">
          Contact
        </Link>
        <Link
          target="_blank"
          className={navLinksStyle}
          href="https://drive.google.com/file/d/1KZkux5BVo5JjuEKw4_0zEbQASEKtApRL/view?usp=sharing"
        >
          CV
        </Link>
      </nav>
    </header>
  );
}
