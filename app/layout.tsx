import "./styles/globals.css";
import { Montserrat } from "next/font/google";

import type { Metadata } from "next";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Kauly's Resume",
  description: "My online resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mont.className}>
      <body className="h-full">{children}</body>
    </html>
  );
}
