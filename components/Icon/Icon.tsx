import Image from "next/image";

type TSizes = "medium" | "large";

interface IIconProps {
  size?: TSizes;
  src: string;
  alt: string;
}

const sizes: { [key in TSizes]: number } = {
  medium: 24,
  large: 32,
};

export default function Icon({ size = "medium", src, alt }: IIconProps) {
  return <Image src={src} width={sizes[size]} height={sizes[size]} alt={alt} />;
}
