'use client'
import Button from "@/components/core/Button";
import { useStepStore } from "@/store/useStepStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter()
  const setStep = useStepStore((state) => state.setStep);

  const goBack = () => {
    setStep(1)
    router.push('/')
  }
  return (
    <div className="flex items-start justify-center min-h-screen w-full">
      <div className="w-[393px] min-h-[100vh] flex flex-col gap-[8px] justify-center items-center">
            <Image src="/icons/success.svg" alt="Logo" width={100} height={100} />
            <h2 className="font-heading font-bold text-heading-sm leading-heading-sm tracking-normal w-full h-[32px] text-dark text-center">
                Congratulations
            </h2>
            <p className="w-full h-[28px] text-xs text-[#021626] text-opacity-50 text-center">
                Welcome to your very own 25    
            </p>
            <Button type="button" variant="text" onClick={goBack}>
                Back to start
            </Button>
      </div>
    </div>
  );
}