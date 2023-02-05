import clsx from "clsx";
import { FC, ReactNode } from "react";

type TSizes = "small" | "medium" | "large";

interface IHeadingProps {
  children: ReactNode;
  size?: TSizes;
  lined?: boolean;
}

export default function Heading({
  children,
  size = "medium",
  lined = false,
}: IHeadingProps) {
  const classes = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl",
  };

  return (
    <h1
      className={clsx(
        "font-mont font-medium tracking-wider pb-2.5",
        classes[size],
        lined &&
          "after:border-b-blue after:border-b-4 after:w-24 after:pb-2.5 after:block"
      )}
    >
      {children}
    </h1>
  );
}
