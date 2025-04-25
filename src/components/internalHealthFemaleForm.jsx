import React from "react";
import { Formik, Form } from "formik";
import { useAppContext } from "@/context/AppContext";
import { Label } from "./ui/label";
import OptionCard from "./OptionCard";

const sleepOptions = [
  { value: "peaceful", label: "I sleep peacefully for 6 to 8 hours" },
  {
    value: "interrupted",
    label: "My sleep is disturbed—I wake up at least once during the night",
  },
  {
    value: "insomnia",
    label: "I have difficulty falling asleep or staying asleep",
  },
];

const stressOption = [
  { value: "none", label: "None" },
  { value: "low", label: "Low" },
  { value: "moderate", label: "Moderate" },
  { value: "high", label: "High" },
];

const constipated = [
  { value: "no", label: "No Rarely" },
  { value: "yes", label: "Yes" },
];

export default function InternalHealthFemaleForm() {
  const { FormStep, setFormStep, setFormType } = useAppContext();

  const handleNext = () => setFormStep((prev) => prev + 1);

  return (
    <Formik
      initialValues={{ sleep: "", stress: "", constipated: "" }}
      validateOnChange
      onSubmit={(values) => {
        console.log(values);
        setFormType("scalpAssessment");
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {FormStep === 7 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                How well do you sleep?
              </Label>
              <div className="grid grid-cols-1 gap-2 mt-10">
                {sleepOptions.map(({ value, label }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    selected={values.sleep === value}
                    onClick={() => {
                      setFieldValue("sleep", value);
                      setTimeout(handleNext, 500);
                    }}
                  />
                ))}
              </div>
            </>
          )}
          {FormStep === 8 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                How stressed are you?
              </Label>
              <div className="grid grid-cols-1 gap-2 mt-10">
                {stressOption.map(({ value, label }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    selected={values.stress === value}
                    onClick={() => {
                      setFieldValue("stress", value);
                      setTimeout(handleNext, 500);
                    }}
                  />
                ))}
              </div>
            </>
          )}
          {FormStep === 9 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Do you feel constipated? (कब्ज़)
              </Label>
              <div className="grid grid-cols-1 gap-2 mt-10">
                {constipated.map(({ value, label }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    type="submit"
                    selected={values.constipated === value}
                    onClick={() => {
                      setFieldValue("constipated", value);
                      setTimeout(handleNext, 500);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}
