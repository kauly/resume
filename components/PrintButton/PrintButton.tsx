"use client";

import Icon from "@/components/Icon/Icon";
import printIcon from "@/public/icons/print.svg";
import { useCurrentLocale } from "@/locales/client";

type Locale = "pt" | "en";

const isMobile = () =>
  window.matchMedia && window.matchMedia("(max-width: 480px)").matches;

const downloadFile = (filename: string) => {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = filename;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }, 0);
};

const handlePrint = (locale: Locale) => {
  if (isMobile()) {
    const filename =
      locale === "en" ? "kauly_resume_en.pdf" : "kauly_resume_pt.pdf";
    downloadFile(filename);
  } else {
    window.print();
  }
};

export default function PrintButton() {
  const locale = useCurrentLocale();
  return (
    <button
      className="inline-flex items-center"
      onClick={() => handlePrint(locale as Locale)}
    >
      <Icon src={printIcon} alt="Print Icon" />
    </button>
  );
}
