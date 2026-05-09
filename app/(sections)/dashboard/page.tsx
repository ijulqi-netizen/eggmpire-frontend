import { FadeIn } from "@/components/ui/AnimatedComponents";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <FadeIn direction="up" delay={0.3} className="w-full">
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl sm:rounded-4xl p-8 sm:p-12 shadow-2xl w-full xl:w-4xl border border-white/15 overflow-hidden flex flex-col gap-5 sm:gap-6 text-center mx-auto">
          {/* Glass top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
          {/* Glass inner glow */}
          <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-3xl sm:rounded-4xl" />

          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Big Amount */}
            <div className="text-center flex flex-col items-center gap-10 relative pb-18">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight uppercase">
                Connection Required
              </h1>
              <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg font-sans">
                Initialize your secure connection to the EGGMPIRE protocol to
                access your personalized data stream.
              </p>
            </div>

            {/* Execute Button */}
            <Link
              href="/#"
              className="relative w-fit text-center px-4 sm:px-8 py-3 sm:py-4 mx-auto bg-[#8D6207] hover:bg-[#8D6207]/80 text-white font-heading font-extrabold text-base sm:text-lg tracking-[0.15em] rounded-2xl transition-all active:scale-[0.98]"
            >
              Connect Your Wallet
            </Link>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
