import { FadeIn } from "@/components/ui/AnimatedComponents";
import Link from "next/link";

export default function ClaimPage() {
  return (
    <>
      {/* Text */}
      <div className="space-y-4 sm:space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight uppercase">
            CLAIM EGGM
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed font-sans">
            Access your monthly unlocked tokens. 10% of your total allocation is
            unlocked every 30 days.
          </p>
        </FadeIn>
      </div>

      {/* Claim Card */}
      <FadeIn direction="up" delay={0.3} className="w-full">
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl sm:rounded-4xl p-5 sm:p-8 shadow-2xl w-full border border-white/15 overflow-hidden flex flex-col gap-5 sm:gap-6 text-center">
          {/* Glass top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          {/* Glass inner glow */}
          <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-3xl sm:rounded-4xl" />

          {/* Available To Claim */}
          <div className="flex items-center gap-2.5 relative">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#E8A921] shadow-[0_0_8px_2px_rgba(251,191,36,0.5)]" />
            <span className="text-white/70 text-sm font-sans tracking-wide">
              Available To Claim
            </span>
          </div>

          <div className="flex flex-col sm:px-15 gap-5 sm:gap-6">
            {/* Big Amount */}
            <div className="text-center flex flex-col items-center gap-10 relative">
              <span className="text-white font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none">
                1,245.00
              </span>
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#8D6207]/70 border border-amber-600/40 text-amber-300 text-xs font-bold tracking-widest uppercase">
                EGGM Tokens Ready
              </span>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-5 sm:gap-4 relative">
              {[
                { label: "Total Locked Allocation", value: "11,205.00" },
                { label: "Total Vested Allocation", value: "11,205.00" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="text-white/50 text-xs font-sans leading-tight">
                    {label}
                  </span>
                  <span className="text-white font-heading font-extrabold text-xl sm:text-2xl tracking-tight">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Execute Button */}
            <Link
              href="/swap"
              className="relative block w-full text-center py-3 sm:py-4 bg-[#8D6207] hover:bg-[#8D6207]/80 text-white font-heading font-extrabold text-base sm:text-lg tracking-[0.15em] uppercase rounded-2xl transition-all active:scale-[0.98]"
            >
              Execute Claim Protocol
            </Link>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
