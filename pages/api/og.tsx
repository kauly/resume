import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export default async function () {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div tw="bg-gray-50 flex flex-col space-y-4 items-center">
          <span tw="border-2 border-black relative">
            <img
              src="https://res.cloudinary.com/dqapaie8f/image/upload/v1675890967/resume/me_ai.jpg"
              alt="Kauly's profile image"
              width={224}
              height={260}
            />
          </span>

          <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 items-center">
            <span>Kauly R. Bohm</span>
            <span tw="text-indigo-600">Software Developer</span>
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
