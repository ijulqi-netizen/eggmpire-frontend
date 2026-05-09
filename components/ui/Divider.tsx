import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DividerProps {
  children?: ReactNode;
  className?: string;
  lineColor?: string;
  textColor?: string;
  spacing?: "sm" | "md" | "lg";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  mobileSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

export default function Divider({
  children,
  className,
  lineColor = "border-white",
  textColor = "text-white",
  spacing = "md",
  size = "lg",
  mobileSize,
}: DividerProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const responsiveSizeMap = {
    xs: "text-xs md:text-xs",
    sm: "text-xs md:text-sm",
    md: "text-sm md:text-base",
    lg: "text-base md:text-lg",
    xl: "text-lg md:text-xl",
    "2xl": "text-xl md:text-2xl",
    "3xl": "text-2xl md:text-3xl",
    "4xl": "text-3xl md:text-4xl",
    "5xl": "text-4xl md:text-5xl",
  };

  const spacingClasses = {
    sm: "px-4 py-1.5 sm:px-6 sm:py-2",
    md: "px-6 py-2 sm:px-12 sm:py-3",
    lg: "px-8 py-2.5 sm:px-20 sm:py-4",
  };

  const textSizeClass = mobileSize
    ? sizeClasses[mobileSize]
    : responsiveSizeMap[size];

  const desktopSizeClass = mobileSize ? `md:${sizeClasses[size]}` : "";

  return (
    <div className="flex justify-center w-full pb-6 sm:pb-9">
      <div
        className={cn(
          "flex items-center w-full max-w-2xl md:max-w-7xl mx-auto px-3 sm:px-6",
          className,
        )}
      >
        {/* ❌ Hidden on mobile */}
        <div className={cn("hidden sm:block flex-1 border-t-2", lineColor)} />

        {/* ✅ Text */}
        {children && (
          <div
            className={cn(
              "font-semibold text-center",
              textColor,
              textSizeClass,
              desktopSizeClass,
              spacingClasses[spacing],

              // ✅ Mobile behavior
              "max-w-full sm:max-w-fit",
              "wrap-break-words sm:whitespace-nowrap",
              "mx-auto",
            )}
          >
            {children}
          </div>
        )}

        {/* ✅ Always visible right line */}
        <div className={cn("flex-1 border-t-2 ml-3 sm:ml-4", lineColor)} />
      </div>
    </div>
  );
}
