import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
  glow?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  glow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 font-primary";

  const variants = {
    primary:
      "bg-[#8D6207] text-[#323232] hover:bg-[#8D6207]/80 hover:text-white",

    secondary: "bg-teal-500 text-white hover:bg-teal-600",

    outline:
      "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900",

    icon: "bg-[#8D6207] text-black hover:scale-110",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",

    icon: "w-12 h-12",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],

        // 🔥 GLOW EFFECT
        glow &&
          "before:absolute before:inset-0 before:rounded-full before:bg-[#E8A921] before:blur-md before:opacity-0 hover:before:opacity-60 before:transition",

        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
