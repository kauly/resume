import Image from "next/image";

import CopyButton from "@/app/components/CopyButton/CopyButton";

interface IInfoItemProps {
  title: string;
  value: string;
  iconUrl?: string;
  linkUrl?: string;
  hasCopy?: boolean;
}

export default function InfoItem({
  title,
  value,
  hasCopy = true,
  iconUrl,
  linkUrl,
}: IInfoItemProps) {
  return (
    <div className="flex items-center space-x-2">
      {iconUrl ? (
        <span>
          <Image src={iconUrl} width={24} height={24} alt={`${title} icon`} />
        </span>
      ) : undefined}
      <span className="text-base font-bold tracking-wider text-blue">
        {title}
      </span>
      {linkUrl ? (
        <a
          className="text-base font-medium tracking-wider truncate text-black align-bottom visited:text-blue hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href={linkUrl}
          id={value}
        >
          {value}
        </a>
      ) : (
        <span
          id={value}
          className="text-base font-medium tracking-wider text-black align-bottom"
        >
          {value}
        </span>
      )}
      {hasCopy ? <CopyButton targetId={value} /> : undefined}
    </div>
  );
}
