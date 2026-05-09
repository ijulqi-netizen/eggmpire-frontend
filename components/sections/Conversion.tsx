"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";

export default function Conversion() {
  return (
    <section
      id="conversion"
      className="relative pt-17.5 px-4 xs:px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-6.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16 md:mb-24 lg:mb-32">
          <div className="mx-auto lg:mx-0 w-full md:w-100 shrink-0">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden w-full aspect-9/16">
                <iframe
                  src="https://www.youtube.com/embed/EdAcAzB9YLM"
                  title="Eggcologic Bio Conversion"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full origin-center"
                />
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <FadeIn direction="up" delay={0.7}>
              <div className="flex items-center gap-6">
                <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
                <h2 className="text-base md:text-lg font-heading font-semibold text-white tracking-wider">
                  Eggcologic Bio Conversion
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Converting Waste <br />
                <span className="text-[#8D6207]">Into Nutrition</span>
              </h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every day, EggMpire prevents methane gas creation by converting
                tons of unwanted organic biomass into high-quality protein.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md max-w-sm">
                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
                  The Impact Equation
                </p>
                <p className="text-base md:text-lg font-heading font-bold text-white">
                  <span className="text-[#8D6207]">
                    1000 Eggs = 2 Tons Waste Eliminated
                  </span>
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="text-white/60 text-base leading-relaxed">
                EGGM is the funding partner for EGGCOLOGIC Farm. As production
                increases, the environment becomes cleaner. It&apos;s a
                self-sustaining cycle of prosperity.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
