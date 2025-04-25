import React from "react";
import { Formik, Form } from "formik";
import { useAppContext } from "@/context/AppContext";
import { Label } from "./ui/label";
import OptionCard from "./OptionCard";

const hairStages = [
  {
    value: "stage-1",
    label: "Stage-1",
    images: ["/image/webp/image_m_1.webp", "/image/webp/image_m_2.webp"],
  },
  {
    value: "stage-2",
    label: "Stage-2",
    images: ["/image/webp/image_m_3.webp", "/image/webp/image_m_4.webp"],
  },
];

const dandruffOptions = [
  { value: "no", label: "No" },
  { value: "mild", label: "Yes, mild that comes and goes." },
  { value: "heavy", label: "Yes, heavy dandruff that sticks to the scalp" },
  {
    value: "psoriasis",
    label: "I have Psoriasis",
    description: "A skin condition that causes red, dry patches on your scalp.",
  },
  {
    value: "seborrheic",
    label: "I have Seborrheic Dermatitis",
    description:
      "A condition making your scalp itchy, red with a burning feeling.",
  },
];

export default function HairGrowthMaleForm() {
  const { FormStep, setFormStep, setFormType } = useAppContext();

  const handleNext = () => setFormStep((prev) => prev + 1);

  return (
    <Formik
      initialValues={{ hairlossDescription: "", dandruff: "" }}
      validateOnChange
      onSubmit={(values) => {
        console.log(values);
        setFormType("internalHealthMale");
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {FormStep === 5 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Which image best describes your hair loss?
              </Label>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
                {hairStages.map(({ value, label, images }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    images={images}
                    selected={values.hairlossDescription === value}
                    onClick={() => {
                      setFieldValue("hairlossDescription", value);
                      setTimeout(handleNext, 500);
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {FormStep === 6 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Do you have dandruff?
              </Label>
              <div className="grid grid-cols-1 gap-2 mt-10">
                {dandruffOptions.map(({ value, label, description }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    description={description}
                    selected={values.dandruff === value}
                    onClick={() => {
                      setFieldValue("dandruff", value);
                      setTimeout(handleNext, 100);
                    }}
                    type={"submit"}
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
