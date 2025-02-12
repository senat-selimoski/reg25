import { classNames } from "@lib/utils";
import Image from "next/image";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | null
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, error = null, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="h-4 text-[var(--font-geist-sans)] font-light text-xs leading-[1rem] tracking-[0%]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={classNames(
            "w-full h-[56px] px-6 py-4 border-2 rounded-full focus:outline-none",
            error ? "border-error" : "border-gray",
            error ? "" : "focus:ring-2 focus:ring-primary",
            className
          )}
          {...props}
        />
        {error && (
            <div className="flex items-center gap-2">
                <Image src="/icons/exclamation-circle-error.svg" alt="error-exclamation" height={16} width={16} />
                <div className="text-xs text-error mt-1">{error}</div>
            </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // Required for forwardRef components

export default Input;
