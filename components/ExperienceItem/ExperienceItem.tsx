import { PropsWithChildren } from "react";

import Link from "@/components/Link/Link";

interface ExperienceItemProps {
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
}: PropsWithChildren<ExperienceItemProps>) {
  return (
    <article className="flex flex-col space-y-2 items-start divide-y">
      <div className="inline-flex ">
        <h3 className="font-semibold pr-2">Company:</h3>

        <Link href={companyUrl} color="blue">
          {company}
        </Link>
      </div>
      <div className="flex">
        <h3 className="font-semibold pr-2">Job Title:</h3>
        <div>{position}</div>
      </div>
      <div className="flex">
        <h3 className="font-semibold pr-2">Date:</h3>
        <div>{date}</div>
      </div>
      <div className="row-span-2 border-b-black border-b-2 border-spacing-y-10">
        {children}
      </div>
    </article>
  );
}
