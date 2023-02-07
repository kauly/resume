import clsx from "clsx";
import { ReactNode } from "react";

type TSizes = "small" | "medium" | "large";
type TColors = "blue" | "black" | "white" | "orange";

interface IHeadingProps {
  children: ReactNode;
  size?: TSizes;
  lined?: boolean;
  color?: TColors;
}

const sizes: { [key in TSizes]: string } = {
  small: "text-xl",
  medium: "text-2xl",
  large: "text-3xl",
};

const colors: { [key in TColors]: string } = {
  blue: "text-blue",
  black: "text-black",
  white: "text-white",
  orange: "text-orange",
};

export default function Heading({
  children,
  size = "medium",
  color = "black",
  lined = false,
}: IHeadingProps) {
  return (
    <h1
      className={clsx(
        "font-mont font-bold tracking-wider",
        sizes[size],
        colors[color],
        lined &&
          "after:border-b-blue after:border-b-4 after:w-24 after:pb-2.5 after:block pb-8"
      )}
    >
      {children}
    </h1>
  );
}
