import { setStaticParamsLocale } from "next-international/server";

import Heading from "@/components/Heading/Heading";
import InfoItem from "@/components/InfoItem/InfoItem";
import Profile from "@/components/Profile/Profile";
import ExperienceItem from "@/components/ExperienceItem/ExperienceItem";
import Navbar from "@/components/Navbar/Navbar";
import Skill from "@/components/Skills/Skills";

import emailIcon from "@/public/icons/email.svg";
import phoneIcon from "@/public/icons/phone.svg";
import locationIcon from "@/public/icons/location.svg";
import githubIcon from "@/public/icons/github.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import ageIcon from "@/public/icons/age.svg";
import { getI18n } from "@/locales/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();
  return (
    <main className="flex flex-col h-full bg-white pb-8">
      <Navbar />
      <div className="h-[400px] bg-beige flex justify-center items-center">
        <Profile />
      </div>
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <section id="about" className="pt-8">
          <Heading size="large" lined>
            {t("aboutMe")}
          </Heading>
          <p className="text-lg">{t("aboutMeTextFirst")}</p>
          <p className="text-lg pt-2">{t("aboutMeTextSecond")}</p>
        </section>
        <section id="info" className="pt-8">
          <Heading size="large" lined>
            {t("info")}
          </Heading>
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="flex flex-col space-y-4">
              <InfoItem
                title="Email:"
                value="kauly@hotmail.com"
                iconUrl={emailIcon}
              />
              <InfoItem
                title={t("phone")}
                value="5548984538771"
                iconUrl={phoneIcon}
              />
              <InfoItem
                title={t("location")}
                value="Brazil - São José, SC"
                iconUrl={locationIcon}
              />
            </div>
            <div className="flex flex-col pt-4 md:pt-0 space-y-4">
              <InfoItem
                title={t("age")}
                value="36"
                iconUrl={ageIcon}
                hasCopy={false}
              />
              <InfoItem
                title="Linkedin:"
                value="https://www.linkedin.com/in/kauly-bohm-219b9715a"
                linkUrl="https://www.linkedin.com/in/kauly-bohm-219b9715a"
                iconUrl={linkedinIcon}
              />
              <InfoItem
                title="Github:"
                value="https://github.com/kauly"
                linkUrl="https://github.com/kauly"
                iconUrl={githubIcon}
              />
            </div>
          </div>
        </section>
        <section id="skills" className="pt-8">
          <Heading size="large" lined>
            {t("skills")}
          </Heading>
          <div className="inline-grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            <Skill name="Javascript" />
            <Skill name="Typescript" />
            <Skill name="React" />
            <Skill name="MUI" />
            <Skill name="Redux" />
            <Skill name="GraphQL" />
            <Skill name="Web Mapping" />
            <Skill name="NextJS" />
            <Skill name="NodeJS" />
            <Skill name="D3" />
            <Skill name="Rust" />
            <Skill name="SQL" />
            <Skill name="Docker" />
          </div>
        </section>
        <section id="experience" className="pt-8">
          <Heading size="large" lined>
            {t("experience")}
          </Heading>
          <div className="flex-col space-y-6">
            <ExperienceItem
              company="Freenlancer"
              companyUrl=""
              date="Feb 2023 - Current Job"
              position="Full Stack Developer"
            >
              <p>{t("experienceFreelancerFirst")}</p>
            </ExperienceItem>
            <ExperienceItem
              company="Sortium"
              companyUrl="https://www.linkedin.com/company/sortium/"
              date="Apr 2021 - Feb 2023"
              position="Full Stack Developer"
            >
              <p>{t("experienceSortium")}</p>
            </ExperienceItem>
            <ExperienceItem
              company="Freelancer"
              companyUrl="https://starwars.fandom.com/wiki/Galactic_Empire"
              date="Mar 2020 - Apr 2021"
              position="Full Stack Developer"
            >
              <p>{t("experienceFreelancerSecond")}</p>
            </ExperienceItem>
            <ExperienceItem
              company="iTER"
              companyUrl="https://www.linkedin.com/company/iter-software-de-rastreamento-e-telemetria/"
              date="Aug 2019 - Mar 2020"
              position="Frontend Developer"
            >
              <p>{t("experienceIter")}</p>
            </ExperienceItem>
            <ExperienceItem
              company="tdsoft"
              companyUrl="https://www.linkedin.com/company/tdsmediatechnology/"
              date="Mar 2019 - Aug 2019"
              position="Frontend Developer"
            >
              <p>{t("experienceTdsoft")}</p>
            </ExperienceItem>
            <ExperienceItem
              company="Gesec"
              companyUrl="https://www.linkedin.com/company/gesec-sistemas/"
              date="Sep 2018 - Feb 2019"
              position="Fullstack Developer"
            >
              <p>{t("experienceGesec")}</p>
            </ExperienceItem>
            <ExperienceItem
              company="GETMORE"
              companyUrl="https://www.linkedin.com/company/getmore/"
              date="May 2018 - Sep 2018"
              position="Intern - Backend Developer"
            >
              <p>{t("experienceGetmore")}</p>
            </ExperienceItem>
          </div>
        </section>
      </div>
    </main>
  );
}
