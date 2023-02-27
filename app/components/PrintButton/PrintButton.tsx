"use client";

import Icon from "@/app/components/Icon/Icon";
import Button from "@/app/components/Button/Button";
import printIcon from "@/public/icons/print.svg";

const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 480px)").matches

const downloadFile = () => {
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = 'Kauly_Resume.pdf'
  link.download = 'Kauly_Resume.pdf';

  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    if(link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }, 0);
}

const handlePrint = () => {
  if (isMobile()) {
    downloadFile()
  } else {
    window.print()
  }
}

export default function PrintButton() {
  return (
    <Button size="small" variant="ghost" onClick={handlePrint}>
      <Icon src={printIcon} alt="Print Icon" />
    </Button>
  );
}
