import { ReactNode } from "react";

import Link from "@/app/components/Link/Link";
import Icon from "@/app/components/Icon/Icon";

import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";

interface INavItemProps {
  children: ReactNode;
}

interface INavProps {
  left?: ReactNode;
}

export function NavItem({ children }: INavItemProps) {
  return (
    <span className="cursor-pointer border-b-2 border-b-beige hover:border-b-2 hover:border-b-blue transition-all">
      {children}
    </span>
  );
}

export default function Navbar({ left }: INavProps) {
  return (
    <nav className="flex items-center w-full h-16 shadow-md bg-beige space-x-2 px-4 md:px-8 no-print">
      {left ? left : undefined}
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
