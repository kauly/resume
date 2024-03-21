import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";

import Providers from "@/components/Providers";

import type { Metadata } from "next";

import "@/app/styles/globals.css";

type LayoutProps = {
  params: { locale: string };
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

export default function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<LayoutProps>) {
  return (
    <html lang="en" className={mont.className}>
      <body className="h-full">
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
