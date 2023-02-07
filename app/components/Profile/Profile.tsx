import Image from "next/image";

import profilePic from "@/public/imgs/me_ai.png";
import Heading from "@/app/components/Heading/Heading";

export default function Profile() {
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
          Kauly R. Bohm
        </Heading>
        <Heading size="small">Software Developer</Heading>
      </span>
    </div>
  );
}
