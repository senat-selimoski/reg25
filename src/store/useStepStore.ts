import { create } from "zustand";

interface StepState {
  step: number;
  setStep: (step: number) => void;
}

export const useStepStore = create<StepState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
}));
