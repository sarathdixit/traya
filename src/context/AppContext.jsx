import { labels, language } from "@/lib/labels";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const totalSteps = 11;

export const AppProvider = ({ children }) => {
  const [siteLanguage, setSiteLanguage] = useState(language.hinglish);
  const [formType, setFormType] = useState("aboutYou");
  const [FormStep, setFormStep] = useState(1);
  const [assessmentData, setAssmentData] = useState({});

  const progress = Math.round(((FormStep - 1) / (totalSteps - 1)) * 100);

  return (
    <AppContext.Provider
      value={{
        siteLanguage,
        setSiteLanguage,
        content: labels[siteLanguage],
        formType,
        setFormType,
        FormStep,
        setFormStep,
        progress,
        assessmentData,
        setAssmentData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
