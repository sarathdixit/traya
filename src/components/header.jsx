import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { labels } from "@/lib/labels"; // import the label map
import LanguageToggle from "./languageToggle";

export default function Header() {
  const { siteLanguage } = useAppContext();
  const { headerDescription } = labels[siteLanguage]; // ✅ Correctly access labels

  return (
    <header className="bg-[#414042] h-[7rem] lg:h-[6rem] px-4 mx-auto flex flex-col justify-center overflow-hidden lg:px-12">
      <div className="flex justify-between items-center">
        <Link id="logo" href="https://traya.health/">
          <img
            src="/image/webp/traya.webp"
            alt="logo"
            className="xl:w-auto lg:w-auto md:w-auto w-24 h-7"
          />
        </Link>
        <LanguageToggle />
      </div>
      <p className="text-sm font-sans font-normal mt-2 lg:mt-1 text-white ">
        {headerDescription}
      </p>
    </header>
  );
}
