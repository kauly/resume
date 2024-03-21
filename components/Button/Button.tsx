import { ReactNode, HTMLAttributes } from "react";

type TSizes = "small" | "medium" | "large";
type TVariants = "filled" | "outlined" | "ghost";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  size?: TSizes;
  variant?: TVariants;
}

const animation =
  "hover:shadow-btn-hover hover:translate-x-[-0.4rem] hover:translate-y-[-0.4rem] active:shadow-btn-active active:translate-x-0 active:translate-y-0 transition-all";

const classes = {
  small: "text-sm px-4 py-2",
  medium: "text-base px-6 py-3",
  large: "text-lg px-8 py-4",
};

const variants = {
  filled: "bg-blue text-white".concat(" ", animation),
  outlined: "border border-blue border-2 text-blue".concat(" ", animation),
  ghost: "text-blue",
};

export default function Button({
  children,
  size = "medium",
  variant = "filled",
  iconLeft = undefined,
  iconRight = undefined,
  ...props
}: IButtonProps) {
  return (
    <button
      className={`font-bold tracking-wider uppercase inline-flex items-center w-fit ${classes[size]} ${variants[variant]}`}
      {...props}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
}
