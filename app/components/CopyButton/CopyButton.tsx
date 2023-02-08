"use client";

import { useState } from "react";
import Image from "next/image";

import copyIcon from "@/public/icons/copy.svg";
import checkIcon from "@/public/icons/check.svg";

interface ICopyButtonProps {
  targetId: string;
}

export default function CopyButton({ targetId }: ICopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const elem: HTMLElement | null = document.getElementById(targetId);

    if (elem?.textContent) {
      navigator.clipboard.writeText(elem.textContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <button className="text-blue p-1 pointer" onClick={copyToClipboard}>
      <Image
        src={isCopied ? checkIcon : copyIcon}
        alt="Copy"
        height={24}
        width={24}
      />
      {isCopied ? <span className="sr-only">Copied</span> : undefined}
    </button>
  );
}
