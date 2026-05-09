import { TextareaHTMLAttributes } from "react";

interface FloatingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export default function FloatingTextarea({
  label,
  id,
  ...props
}: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder=" "
        rows={4}
        className="peer w-full border-b border-gray-600 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
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

