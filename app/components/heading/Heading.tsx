import clsx from "clsx";
import { ReactNode } from "react";

type TSizes = "small" | "medium" | "large";

interface IHeadingProps {
  children: ReactNode;
  size?: TSizes;
  lined?: boolean;
}

const classes = {
  small: "text-xl",
  medium: "text-2xl",
  large: "text-3xl",
};

export default function Heading({
  children,
  size = "medium",
  lined = false,
}: IHeadingProps) {
  return (
    <h1
      className={clsx(
        "font-mont font-bold tracking-wider pb-2.5",
        classes[size],
        lined &&
          "after:border-b-blue after:border-b-4 after:w-24 after:pb-2.5 after:block"
      )}
    >
      {children}
    </h1>
  );
}
