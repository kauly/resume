import clsx from "clsx";
import { LinkHTMLAttributes, ReactNode } from "react";

type TColors = "blue" | "black";

interface ILinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  color?: TColors;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const colorsStyle: { [key in TColors]: string } = {
  black: "text-black visited:text-blue",
  blue: "text-blue visited:text-black",
};

export default function Link({
  color = "black",
  leftIcon = undefined,
  rightIcon = undefined,
  children,
  ...props
}: ILinkProps) {
  return (
    <span className="inline-flex items-center space-x-2">
      {leftIcon}
      <a
        className={clsx(
          "text-base font-bold tracking-wider truncate align-bottom hover:underline",
          colorsStyle[color]
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
      {rightIcon}
    </span>
  );
}
