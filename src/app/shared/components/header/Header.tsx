import Link from "next/link";
import SmallNav from "../smallNav/SmallNav";

export default function Header() {
  const navLinksStyle = "text-lg hover:text-primary";
  return (
    <header className="flex justify-between z-10 bg-primary-bg items-center fixed w-full px-6   py-2 ">
      <Link
        className="bg-[--background]   text-primary text-2xl font-bold"
        href={"/"}
      >
        ZoAlfakar Salman
      </Link>
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
          href="https://drive.google.com/file/d/1lsQAqjSET3J0bnvlH24wWcpMzwncQ1JP/view?usp=sharing"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
