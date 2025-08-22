import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";

import Providers from "@/components/Providers";

import type { Metadata } from "next";

import "@/app/styles/globals.css";

type LayoutProps = {
  params: Promise<{ locale: string }>;
};

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Kauly's Resume",
  description: "My online resume",
};

export const runtime = "edge";

export default async function RootLayout(
  props: PropsWithChildren<LayoutProps>
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  return (
    <html lang={locale} className={mont.className}>
      <body className="h-full">
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
