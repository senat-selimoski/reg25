'use client'
import { useStepStore } from "@/store/useStepStore";
import Image from "next/image";

export default function Header() {
  const step = useStepStore((state) => state.step);
  const setStep = useStepStore((state) => state.setStep);

  const goBack = () => {
    setStep(1);
  };

  return (
    <header className="w-full h-[72px] flex justify-center items-center relative px-4 py-[8px]">
      {/* Back Button (Visible only on step 2) */}
      {step === 2 && (
        <button
          onClick={goBack}
          className="absolute left-4 flex items-center justify-center w-[48px] h-[48px] bg-transparent border-none cursor-pointer"
        >
          <Image src="/icons/back.svg" alt="Back" width={14} height={14} />
        </button>
      )}
      
      {/* Logo */}
      <Image src="/icons/Logo.svg" alt="Logo" width={56} height={56} />
    </header>
  );
}
