"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="relative pb-16 xs:pb-20 md:pb-24 px-4 xs:px-6 overflow-hidden font-sans"
    >
      <div className="relative max-w-6xl mx-auto pb-8">
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <FadeIn direction="up" delay={0.7} className="mb-10">
            <div className="flex items-center gap-10">
              <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
              <h2 className="text-2xl text-white tracking-wider font-semibold">
                WHAT Is EGGMPIRE Token (EGGM)
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="up" delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                The EggMpire Token (EGGM) is a blockchain-based project that using
                the power of Web3 to revolutionize the Climate Action and Social 
                Economy by gathering Contibutors that are passionate about 
                Environmental and Social Impact, and one of the ability of EGGM is 
                transforming the egg production industry by integrating
                sustainable bio converstion, eco-friendly farming practices with
                a decentralized digital economy.
                <br />
                With EGGM ESG Impact Certificate issued in seconds, Climate &
                Social Action Executed in just days, For Natural World
                Rehabilitation, Restoration & Conservation Speed is everything.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 md:gap-8">
          {/* Card 1: The Problem */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
            className="h-full"
          >
            <div
              className="relative sm:w-85 h-120 md:h-140 bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col items-center md:items-start transition-all duration-300 hover:bg-white/10 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
              }}
            >
              {/* Glass top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              {/* Glass inner glow */}
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />
              <h3 className="relative text-2xl md:text-3xl font-heading font-bold text-white mb-6 text-center md:text-left my-16">
                The Problem
              </h3>
              <div className="relative space-y-4 text-white/60 text-base md:text-lg leading-relaxed text-center md:text-left">
                <p className="text-sm md:text-base">
                  Traditional egg farming faces high costs and environmental
                  impact from resource-intensive feed, making sustainable eggs
                  expensive and inaccessible. The supply chain often lacks
                  transparency.

                  Many Environmental projects wait years to get ESG Certificates
                  While the Contributors are eager to see the impact of their contribution
                  to the world, and the need of contributors too have the certificate as fast
                  so their gear of economy and society also can move well.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Research and Innovation */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
            className="h-full"
          >
            <div
              className="relative sm:w-85 h-120 md:h-140 bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col items-center md:items-start transition-all duration-300 hover:bg-white/10 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)",
              }}
            >
              {/* Glass top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              {/* Glass inner glow */}
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />
              <h3 className="relative text-2xl md:text-3xl font-heading font-bold text-white mb-6 text-center md:text-left my-16">
                Research and <br className="hidden md:block" /> Innovation
              </h3>
              <div className="relative space-y-4 text-white/60 text-base md:text-lg leading-relaxed text-center md:text-left">
                <p className="text-white/80">
                  OUR EGGCOLOGIC Bio Conversion Eggs Farm is THE SOLUTION:
                </p>
                <p className="text-sm md:text-base">
                  A scalable and sustainable eggs production model with a
                  self-sufficient ecosystem that provides over 70% of the
                  chicken&apos;s diet internally. This reduces costs and our
                  carbon footprint. The $EGGM token provides an instant ESG Impact 
                  Certificates and transparent Environment and Social Action execution
                  and decentralized way to fund and scale EGGM operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
