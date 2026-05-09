"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-9999 bg-[#0f0f0f]">
      {/* Center container */}
      <div className="grid place-items-center w-full h-dvh px-6">
        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          {/* Spinner */}
          <div className="relative">
            <div
              className="
              w-10 h-10 
              sm:w-12 sm:h-12 
              md:w-14 md:h-14 
              border-2 border-white/20 
              border-t-[#E8A921] 
              rounded-full 
              animate-spin
            "
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-md opacity-30 bg-[#E8A921]" />
          </div>

          {/* Text */}
          <p
            className="
            text-white/60 
            text-xs sm:text-sm md:text-base 
            tracking-[0.3em] 
            animate-pulse text-center
          "
          >
            LOADING
          </p>
        </div>
      </div>
    </div>
  );
}
