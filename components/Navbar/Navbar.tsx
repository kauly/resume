import { ReactNode } from "react";

import Link from "@/components/Link/Link";
import Icon from "@/components/Icon/Icon";

import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import { FlagDropdown } from "../FlagDropdown/FlagDropdown";
import PrintButton from "../PrintButton/PrintButton";

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
    <nav className="w-full bg-beige">
      <div className=" flex items-center px-4 container mx-auto space-x-4  no-print pt-4 h-20">
        <FlagDropdown />
        <span className="flex-1" />
        <NavItem>
          <PrintButton />
        </NavItem>
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
      </div>
    </nav>
  );
}
