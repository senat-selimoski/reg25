import Image from "next/image";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type PhoneNumberInputProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  error?: string;
};

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs font-light">Phone Number</label>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={onChange}
        className="phone-input-container flex gap-2"
      />
      {error && (
        <div className="flex items-center gap-2">
          <Image src="/icons/exclamation-circle-error.svg" alt="error-exclamation" height={16} width={16} />
          <div className="text-xs text-error mt-1">{error}</div>
        </div>
      )}
    </div>
  );
};
