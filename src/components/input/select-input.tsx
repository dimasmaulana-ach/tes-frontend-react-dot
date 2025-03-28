import clsx from "clsx";
import { useField } from "formik";
import React from "react";

interface SelectInputProps {
  name?: string;
  label?: string;
  options: { value: string | number; label: string }[];
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  placeholder,
  prefix,
  suffix,
  className,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-support-100/50 mb-1">
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {prefix && <div className="absolute left-3 text-gray-500">{prefix}</div>}
        <select
          {...field}
          id={name}
          className={clsx(
            "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-primary-100 transition-all duration-300 appearance-none",
            meta?.touched && meta?.error
              ? "border-red-500 focus:ring-red-500"
              : "border-support-100/30 focus:ring-blue-500",
            prefix ? "pl-10" : "",
            suffix ? "pr-10" : "",
            className
          )}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {suffix && <div className="absolute right-3 text-gray-500">{suffix}</div>}
      </div>
      {meta?.touched && meta?.error && (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default SelectInput;
