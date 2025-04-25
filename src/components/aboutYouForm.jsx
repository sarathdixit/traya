import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import clsx from "clsx";
import { useAppContext } from "@/context/AppContext";

export default function AboutYouForm() {
  const { setFormType, FormStep, setFormStep, setAssmentData } =
    useAppContext();

  const handleNext = () => setFormStep((prev) => prev + 1);

  return (
    <Formik
      initialValues={{ name: "", phone: "", age: "", gender: "" }}
      onSubmit={(values, actions) => {
        if (values.gender == "male") {
          setFormType("hairGrowthMale");
        } else {
          setFormType("hairGrowthFemale");
        }
        setAssmentData(values);
        handleNext();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {FormStep === 1 && (
            <>
              <label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Before we start, can we get your name?
              </label>
              <Field name="name">
                {({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="Fullname"
                    className="mt-10"
                  />
                )}
              </Field>
              <Button
                className="cursor-pointer w-full mt-5"
                disabled={!values.name.trim()}
                onClick={handleNext}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </>
          )}
          {FormStep === 2 && (
            <>
              <label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Phone Number
              </label>
              <Field name="phone">
                {({ field }) => (
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Ex: 9876543210"
                    className="mt-10"
                  />
                )}
              </Field>
              <Button
                className="cursor-pointer w-full mt-5"
                disabled={!values.phone}
                onClick={handleNext}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </>
          )}
          {FormStep === 3 && (
            <>
              <label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                How old are you?
              </label>
              <Field name="age">
                {({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter your age"
                    className="mt-10"
                  />
                )}
              </Field>
              <Button
                className="cursor-pointer w-full mt-5"
                disabled={!values.age}
                onClick={handleNext}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </>
          )}
          {FormStep === 4 && (
            <>
              <label className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700">
                Gender
              </label>
              <div className="flex gap-4 mt-10">
                {["male", "female"].map((gender) => (
                  <button
                    key={gender}
                    type="submit"
                    onClick={() => setFieldValue("gender", gender)}
                    className={clsx(
                      "cursor-pointer w-full p-10 md:py-[16px] hover:bg-[#9BB96F] hover:text-white rounded-2xl font-bold text-lg transition-all",
                      values.gender === gender
                        ? "bg-[#9BB96F] text-white"
                        : "bg-gray-100 text-black"
                    )}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
}
