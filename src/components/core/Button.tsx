'use client'

import { classNames } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "contained" | "text";
};

export default function Button({ 
    variant = "contained", 
    className, 
    children,
    ...props 
}: ButtonProps) {
    return (
        <button
            className={classNames(
            "flex items-center justify-center gap-2 w-full h-[56px] rounded-full text-sm font-medium transition-all",
            variant === "contained"
                ? "bg-primary text-white hover:bg-[#105cad] disabled:text-gray disabled:bg-disabled"
                : "text-blue-600 hover:bg-blue-100 disabled:text-gray disabled:bg-disabled",
            className
            )}
            style={{
            animationTimingFunction: "ease-in-out",
            animationDuration: "200ms",
            }}
            {...props}
        >
            {children}
        </button>      
    );
}
