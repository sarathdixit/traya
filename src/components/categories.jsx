import { useAppContext } from "@/context/AppContext";
import React from "react";

const categories = {
  aboutYou: (
    <>
      About <br /> You
    </>
  ),
  hairHelth: (
    <>
      Hair <br /> Health
    </>
  ),
  internalHealth: (
    <>
      Internal <br /> Health
    </>
  ),
  scalpAssessment: (
    <>
      Scalp <br /> Assessment
    </>
  ),
};

const formTypeMap = {
  aboutYou: ["aboutYou"],
  hairHelth: ["hairGrowthMale", "hairGrowthFemale"],
  internalHealth: ["internalHealthMale", "internalHealthFemale"],
  scalpAssessment: [
    "scalpAssessment",
    "malescalpAssessment",
    "femalescalpAssessment",
  ],
};

const categoryOrder = [
  "aboutYou",
  "hairHelth",
  "internalHealth",
  "scalpAssessment",
];

export default function Categories() {
  const { formType } = useAppContext();

  const getCategoryKeyByFormType = () => {
    return Object.keys(formTypeMap).find((key) =>
      formTypeMap[key].includes(formType)
    );
  };

  const getClass = (key) => {
    const currentKey = getCategoryKeyByFormType();
    const currentIndex = categoryOrder.indexOf(currentKey);
    const keyIndex = categoryOrder.indexOf(key);

    if (keyIndex === currentIndex) {
      return "bg-[#9BB96F] text-white"; // Active
    } else if (keyIndex < currentIndex) {
      return "bg-[#D0D8BA] text-black"; // Completed
    }
    return "bg-gray-200 text-gray-900"; // Inactive
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {Object.entries(categories).map(([key, category]) => (
        <div
          key={key}
          className={`w-full sm:py-3 sm:px-5 xs:px-2 xs:py-3 sm:mx-1 xs:mx-1 rounded-md ${getClass(
            key
          )}`}
        >
          <p className=" leading-4 md:leading-6 md:text-lg xs:leading-4 text-[12px] p-2 lg:text-base font-[400] font-sans">
            {category}
          </p>
        </div>
      ))}
    </div>
  );
}
