// components/LanguageToggle.js
import { useAppContext } from "@/context/AppContext";
import { language } from "@/lib/labels";
import clsx from "clsx";

export default function LanguageToggle() {
  const { siteLanguage, setSiteLanguage } = useAppContext();

  return (
    <div className="flex p-1 rounded-lg bg-gray-700 w-fit ">
      {Object.values(language).map((lang) => (
        <button
          key={lang}
          onClick={() => setSiteLanguage(lang)}
          className={clsx(
            "px-4 py-2 rounded-md text-sm font-bold transition-all cursor-pointer",
            siteLanguage === lang
              ? "bg-white text-lime-500 shadow"
              : "text-gray-300"
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
