"use client";

import Icon from "@/app/components/Icon/Icon";
import Button from "@/app/components/Button/Button";

import printIcon from "@/public/icons/print.svg";

export default function PrintButton() {
  return (
    <Button variant="ghost" onClick={() => window.print()}>
      <Icon src={printIcon} alt="Print Icon" />
    </Button>
  );
}
