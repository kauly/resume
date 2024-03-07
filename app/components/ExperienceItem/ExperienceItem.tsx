import Link from "@/app/components/Link/Link";
import { PropsWithChildren } from "react";

interface IExperienceItemProps {
  company: string;
  position: string;
  date: string;
  companyUrl: string;
}

export default function ExperienceItem({
  company,
  position,
  date,
  companyUrl,
  children,
}: PropsWithChildren<IExperienceItemProps>) {
  return (
    <div className="flex flex-col p-2 divide-y-2 border-2 border-black space-y-2 shadow-box md:max-w-sm">
      <div className="flex">
        <Link href={companyUrl} color="blue">
          {company}
        </Link>
      </div>
      <div>{position}</div>
      <div>{date}</div>
      <div className="row-span-2 ">{children}</div>
    </div>
  );
}
