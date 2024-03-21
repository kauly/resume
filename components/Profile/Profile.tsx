import Image from "next/image";

import Heading from "@/components/Heading/Heading";
import profilePic from "@/public/imgs/me_ai.png";
import { getI18n } from "@/locales/server";

export default async function Profile() {
  const t = await getI18n();

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="border-2 border-black relative shadow-box">
        <Image
          src={profilePic}
          alt="Kauly's profile image"
          width={224}
          height={260}
        />
      </span>
      <span className="pt-4 text-center">
        <Heading size="large" color="blue">
          {t("name")}
        </Heading>
        <Heading size="small">{t("position")}</Heading>
      </span>
    </div>
  );
}
