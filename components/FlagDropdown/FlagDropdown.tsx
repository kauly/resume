"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import brFlag from "@/public/imgs/br-flag.png";
import usFlag from "@/public/imgs/us-flag.png";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

const LOCALES = {
  english: "en",
  portuguese: "pt",
};
const flagSize = 42;

function FlagDropdown() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((p) => !p);
  const handleSelected = () => {
    const targetLocale =
      locale === LOCALES.portuguese ? LOCALES.english : LOCALES.portuguese;
    // @ts-expect-error bad library type
    changeLocale(targetLocale);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-white shadow-sm  border-1 border-beige space-x-2 px-2 hover:bg-white/35"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={toggle}
      >
        {locale === LOCALES.english ? (
          <Image
            src={usFlag}
            alt="US Flag"
            width={flagSize}
            height={flagSize}
          />
        ) : (
          <Image
            src={brFlag}
            alt="Bandeira do Brasil"
            width={flagSize}
            height={flagSize}
          />
        )}

        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={handleSelected}
        className={clsx(
          "absolute top-11 right-0 rounded-md bg-white shadow-sm  border-1 border-beige px-2 w-full",
          open ? "flex" : "hidden"
        )}
      >
        {locale === LOCALES.english ? (
          <Image
            src={brFlag}
            alt="Bandeira do Brasil"
            width={flagSize}
            height={flagSize}
          />
        ) : (
          <Image
            src={usFlag}
            alt="US Flag"
            width={flagSize}
            height={flagSize}
          />
        )}
      </button>
    </div>
  );
}

export { FlagDropdown };
