import { InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function FloatingInput({
  label,
  id,
  type = "text",
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        className="peer w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
        {...props}
      />
      <label
        htmlFor={id}
        className="
          absolute left-0 top-3 text-gray-400 text-sm
          transition-all duration-200
          px-1

          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-sm

          peer-focus:-top-3
          peer-focus:text-xs
          peer-focus:text-blue-400

          peer-not-placeholder-shown:-top-3
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}
