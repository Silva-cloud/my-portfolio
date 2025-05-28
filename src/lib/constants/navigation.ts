import { Messages } from "next-intl";
import { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface NavLink extends LinkProps {
  label: `nav.${keyof Messages["nav"]}`;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const NavigationLinks: NavLink[] = [
  { label: "nav.about", href: "/#about" },
  { label: "nav.projects", href: "/#projects" },
  { label: "nav.contact", href: "/#contact" },
  {
    label: "nav.cv",
    href: "https://drive.google.com/file/d/1KZkux5BVo5JjuEKw4_0zEbQASEKtApRL/view?usp=sharing",

    target: "_blank",
  },
];

export default NavigationLinks;
