'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { step1Schema, step2Schema, signInSchema } from "./schema";
import {z} from "zod"
import Input from "../core/Input";
import Button from "../core/Button";
import { PhoneNumberInput as PhoneInput } from "../core/PhoneInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStepStore } from "@/store/useStepStore"

type SignInFields = z.infer<typeof signInSchema>;

const SignInForm = () => {
    const step = useStepStore((state) => state.step);
    const setStep = useStepStore((state) => state.setStep);
    const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<SignInFields>({
    resolver: zodResolver(step === 1 ? step1Schema : step2Schema),
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<SignInFields> = (data) => {
    if (step === 1) {
      setStep(2);
    } else {
      console.log("Submited Data: ", data)
      router.push("/success")
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const phoneNumber = watch('phoneNumber')

  return (
    <div className="w-full h-full justify-center">
      {/* Tabs */}
      <div className="flex w-full justify-center items-center h-[48px] gap-[8px] p-[8px]">
        <Button
          onClick={() => setStep(1)}
          className={`!w-[32px] !h-[32px] rounded-full ${
            step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          disabled={step === 2}
        >
          1
        </Button>
        <Button
          onClick={() => setStep(2)}
          className={`!w-[32px] !h-[32px] rounded-full ${
            step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          disabled={step === 1}
        >
          2
        </Button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center w-ful gap-[24px] p-[24px]">
        {step === 1 && (
            <>
                <div className="flex w-full flex-col gap-[16px]">
                    <h2 className="font-heading font-bold text-heading-sm leading-heading-sm tracking-normal w-full h-[28px] text-dark">
                        Some introductions
                    </h2>
                    <Input
                        label="First Name"
                        type="firstName"
                        placeholder="First Name"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                    />
                    <Input
                        label="Last Name"
                        type="lastName"
                        placeholder="Last Name"
                        {...register("lastName")}
                        error={errors.lastName?.message}
                    />
                </div>
                <div className="flex flex-col w-full h-[120px] gap-[8px]">
                    <Button type="submit" variant="contained">
                        Continue
                    </Button>
                    <Button type="button" variant="text" onClick={handleBack}>
                        Already have an account?
                    </Button>
                </div>
            </>
        )}

        {step === 2 && (
            <>
                <div className="flex w-full flex-col gap-[16px]">
                    <h2 className="font-heading font-bold text-heading-sm leading-heading-sm tracking-normal w-full h-[28px] text-dark">
                        Let’s validate your number
                    </h2>
                    <PhoneInput
                        value={phoneNumber}
                        onChange={(value) => setValue("phoneNumber", value ?? "")}
                        error={errors.phoneNumber?.message}
                    />
                </div>
                <p className="w-full text-xs text-[#021626] text-opacity-50">
                    By clicking Continue you confirm that you agree to our{" "}
                    <Link href="/terms-and-conditions" className="text-primary no-underline">
                        terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-primary no-underline">
                        privacy policy
                    </Link>.
                </p>
                <div className="flex flex-col w-full h-[120px] gap-[8px]">
                    <Button type="submit" variant="contained">
                        Continue
                    </Button>
                </div>
            </>
        )}
        <p className="w-full h-[16px] text-xs text-[#021626] text-center text-opacity-50">
            Version 0.1
        </p>
      </form>
    </div>
  );
};

export default SignInForm;