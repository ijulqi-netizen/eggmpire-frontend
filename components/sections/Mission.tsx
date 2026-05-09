"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";
import { motion, Variants } from "framer-motion";
import { Activity, Globe, Users } from "lucide-react";

const missionCards = [
  {
    title: "PLANET",
    description:
      "Environmental sustainability through bio-conversion. Egg Production using Bio Conversion is our way to prevent methane gas to enter the atmosphere.",
    icon: Globe,
    metricLabel: "Impact Metric",
    metricValue: "420K Tons CO2",
    delay: 0.1,
  },
  {
    title: "PEOPLE",
    description:
      "Social economy empowerment. Tokenizing sustainable eggs production through blockchain to ensure food security and community prosperity.",
    icon: Users,
    metricLabel: "Social Impact",
    metricValue: "1.2M Eggs Donated",
    delay: 0.2,
  },
  {
    title: "PROFIT",
    description:
      "Prosperity is key to sustainability. Our protocol ensures that environmental stewardship is the most profitable path for all stakeholders.",
    icon: Activity,
    metricLabel: "Yield Target",
    metricValue: "12.4% APY",
    delay: 0.3,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative bg-[#1F1F1F] pt-17.5 px-4 xs:px-6 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto pb-8">
        <div className="">
          <FadeIn direction="up" delay={0.7} className="pb-10">
            <div className="flex items-center gap-10">
              <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
              <h2 className="text-2xl text-white tracking-wider font-semibold">
                EGGMPIRE Mission
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="pb-9.25">
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight text-wrap">
              PLANET.PEOPLE.<span>PROFIT.</span>
            </h3>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-4xl">
              EGGMPIRE Token (EGGM) is a 3P Token: Planet = Sustainability of
              Environment, People = Social Economy, Profit = Prosperity is key
              to Sustainability.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch pt-25">
          {missionCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: card.delay }}
              className="h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-white/10">
                {/* Glass top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                {/* Glass inner glow */}
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />
                <div>
                  <div className="mb-10">
                    <card.icon className="w-12 h-12 text-[#8D6207] stroke-[1.5px]" />
                  </div>
                  <h4 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 tracking-wide">
                    {card.title}
                  </h4>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
                    {card.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-[#8D6207] text-sm font-semibold tracking-widest mb-2">
                    {card.metricLabel}
                  </p>
                  <p className="text-white text-xl md:text-[18px] font-heading font-bold">
                    {card.metricValue}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
