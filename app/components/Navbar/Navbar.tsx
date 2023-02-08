import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import printIcon from "@/public/icons/print.svg";
import { ReactNode } from "react";

interface INavItemProps {
  children: ReactNode;
}

export function NavItem({ children }: INavItemProps) {
  return (
    <span className="cursor-pointer border-b-2 border-b-beige hover:border-b-2 hover:border-b-blue transition-all">
      {children}
    </span>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center w-full h-16 shadow-md bg-beige space-x-2 px-8">
      <NavItem>
        <Icon src={printIcon} alt="Print Icon" />
      </NavItem>
      <span className="flex-1" />
      <NavItem>
        <Link href="https://www.linkedin.com/in/kauly-bohm-219b9715a">
          <Icon src={linkedinIcon} alt="Linkedin Icon" />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="https://github.com/kauly">
          <Icon src={githubIcon} alt="Github Icon" />
        </Link>
      </NavItem>
    </nav>
  );
}
