"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-80px" };

const phases = [
  {
    number: "01 (2026)",
    title: "Launch & Foundation",
    items: [
      "Launch of Pre-ITO Program",
      "Activation of the third farm and offline partner stores",
      "Exploring CEX / DEX listing",
    ],
  },
  {
    number: "02 (2027-2028)",
    title: "Scaling & Innovation",
    items: [
      "Fourth and Fifth farm launches",
      "IoT-based farm monitoring and Tiered Membership Card launch",
      "Exploring CEX / DEX listing",
    ],
  },
  {
    number: "03 (2029-2030)",
    title: "Automation & Global Leadership",
    items: [
      'Sixth and "Super Automatic" Seventh farm launches',
      "Carbon Credit Certification & Calculation Apps.",
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative pt-17.5 pb-16 px-4 xs:px-6 overflow-hidden font-sans"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-4.webp')" }}
      >
        <div className="absolute inset-0 bg-black/62" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header Section */}
        <div className="mb-17.5">
          <FadeIn direction="up" delay={0.7} className="pb-5">
            <div className="flex items-center gap-10">
              <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
              <h2 className="text-2xl text-white tracking-wider font-semibold">
                The Journey
              </h2>
            </div>
          </FadeIn>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={vp}
            className="text-5xl xs:text-6xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tight"
          >
            Protocol Roadmap
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            viewport={vp}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            Our strategic path towards global sustainability through blockchain
            innovation.
          </motion.p>
        </div>

        {/* Phase cards - centered with side gaps and reduced width */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
            {phases.map((phase, i) => (
              <FadeIn
                key={phase.number}
                direction="up"
                delay={0.1 + i * 0.1}
                scale
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease }}
                  className="group relative flex flex-col h-full bg-white/5 backdrop-blur-2xl border border-white/15 rounded-2xl p-8 overflow-hidden"
                >
                  {/* Glass top highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  {/* Glass inner glow */}
                  <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />

                  {/* Phase label */}
                  <p className="relative text-gold/60 text-sm font-semibold tracking-widest uppercase mb-4">
                    Phase {phase.number}
                  </p>

                  {/* Title */}
                  <h3 className="relative font-heading text-2xl font-bold text-white mb-8 leading-tight group-hover:text-[#8D6207] transition-colors duration-300">
                    {phase.title}
                  </h3>

                  {/* Items */}
                  <ul className="relative flex flex-col gap-5">
                    {phase.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-white/70 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300"
                      >
                        <span className="mt-2.5 w-1.5 h-1.5 bg-gold/70 shrink-0 transform rotate-45" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
