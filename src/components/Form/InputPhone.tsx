import {useState} from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface inputPhoneProps {
  id: string;
  value: any;
  onChange: (value: any) => void;
  autoComplete: string;
  placeholder: string;
  title: string;
  className?: string;
}

function InputPhone(props: inputPhoneProps) {
  return (
    <label className="py-4 m-auto md:w-5/6">
      <span className="block text-sm font-medium text-left text-white pb-2">{props.title}</span>
      <PhoneInput
        id={props.id}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(value: any) => props.onChange?.(value)}
        defaultCountry="BR"
        disabled
        rules={{required: true}}
        numberInputProps={{
          className:
            "rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm sm:leading-6",
        }}
        countrySelectProps={{
          className: "text-gray-800 bg-white hover:bg-gray-200",
        }}
      />
    </label>
  );
}

export default InputPhone;
