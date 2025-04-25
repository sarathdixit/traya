import React from "react";
import { Formik, Form } from "formik";
import { useAppContext } from "@/context/AppContext";
import { Label } from "./ui/label";
import OptionCard from "./OptionCard";

const hairStages = [
  {
    value: "hairThinning",
    label: "Hair thinning",
    images: ["/image/webp/hairThinningBefore.webp"],
  },
  {
    value: "lessVolumeOnTheSides",
    label: "Less volume on the sides",
    images: ["/image/webp/side_widening.webp"],
  },
];

const hairLookOptions = [
  { value: "straight", label: "Straight" },
  { value: "wavy", label: "Wavy" },
  { value: "curly", label: "Curly" },
  { value: "Coily", label: "coily" },
];

export default function HairGrowthFemaleForm() {
  const { FormStep, setFormStep, setFormType } = useAppContext();

  const handleNext = () => setFormStep((prev) => prev + 1);

  return (
    <Formik
      initialValues={{ hairScale: "", hairLook: "" }}
      validateOnChange
      onSubmit={(values) => {
        console.log(values);
        setFormType("internalHealthFemale");
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {FormStep === 5 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                What does your hair look like naturally?
              </Label>
              <div className="grid grid-cols-1 gap-2 mt-10">
                {hairLookOptions.map(({ value, label, description }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    description={description}
                    selected={values.dandruff === value}
                    onClick={() => {
                      setFieldValue("dandruff", value);
                      setTimeout(handleNext, 100);
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {FormStep === 6 && (
            <>
              <Label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Where do you stand on the feamle hair scale?
              </Label>
              <div className="grid grid-cols-2 gap-2 mt-10">
                {hairStages.map(({ value, label, images }) => (
                  <OptionCard
                    key={value}
                    label={label}
                    images={images}
                    type={"submit"}
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
        </Form>
      )}
    </Formik>
  );
}
