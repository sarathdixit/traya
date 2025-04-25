import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import Categories from "./categories";
import { Progress } from "./ui/progress";
import AboutYouForm from "./aboutYouForm";
import HairGrowthMaleForm from "./hairGrowthMaleForm";
import { useAppContext } from "@/context/AppContext";
import InternalHealthMaleForm from "./internalHealthMaleForm";
import MalescalpAssessment from "./maleScalpForm";
import HairGrowthFemaleForm from "./hairGrowthFemaleForm";
import AnalyzeLoader from "./analyzeLoader";

export default function Assessment() {
  const { formType, FormStep, setFormStep, setFormType, progress } =
    useAppContext();

  const renderForm = () => {
    switch (formType) {
      case "aboutYou":
        return <AboutYouForm />;
      case "hairGrowthMale":
        return <HairGrowthMaleForm />;
      case "hairGrowthFemale":
        return <HairGrowthFemaleForm />;
      case "internalHealthMale":
        return <InternalHealthMaleForm />;
      case "internalHealthFemale":
        return <InternalHealthMaleForm />;
      case "scalpAssessment":
        return <MalescalpAssessment />;
      case "AnalyzeLoader":
        return <AnalyzeLoader />;
    }
  };

  const handlePrevious = () => {
    if (
      (formType == "hairGrowthMale" || formType == "hairGrowthFemale") &&
      FormStep == 5
    ) {
      setFormType("aboutYou");
    } else if (
      (formType == "internalHealthMale" ||
        formType == "internalHealthFemale") &&
      FormStep == 7
    ) {
      setFormType("hairGrowthMale");
    } else if (formType == "scalpAssessment" && FormStep == 10) {
      setFormType("internalHealthMale");
    }
    setFormStep((prev) => prev - 1);
  };

  return (
    <div className=" sm:px-[10%] lg:px-[10%] xl:px-[20%] font-sans">
      <div
        className={`flex ${FormStep > 1 ? "justify-between" : "justify-end"}`}
      >
        {FormStep > 1 && (
          <Button
            variant={"secondary"}
            className={"cursor-pointer"}
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
        )}
        <Button variant={"secondary"} className={"cursor-pointer"}>
          Exit
        </Button>
      </div>
      <div className="py-4">
        <Categories />
      </div>
      <div className="md:w-[80%] mx-auto mt-5">
        <div className="flex justify-end text-sm mb-1">
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 [&>*]:bg-[#9BB96F]" />
        <div className="flex flex-col mt-8 md:mt-8 w-full md:w-[90%] mx-auto">
          {renderForm()}
        </div>
      </div>
    </div>
  );
}
