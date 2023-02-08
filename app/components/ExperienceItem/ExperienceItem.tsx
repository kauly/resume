import Link from "@/app/components/Link/Link";

interface IExperienceItemProps {
  company: string;
  position: string;
  date: string;
  description: string;
  companyUrl: string;
}

export default function ExperienceItem({
  company,
  position,
  date,
  description,
  companyUrl,
}: IExperienceItemProps) {
  return (
    <div className="flex flex-col p-2 divide-y-2 border-2 border-black space-y-2 shadow-box md:max-w-sm">
      <div className="flex">
        <Link href={companyUrl} color="blue">
          {company}
        </Link>
      </div>
      <div>{position}</div>
      <div>{date}</div>
      <div className="row-span-2 ">
        <p>{description}</p>
      </div>
    </div>
  );
}
