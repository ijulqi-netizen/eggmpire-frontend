"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const vp = { once: true, margin: "-80px" };

const CONTRACTS = [
  {
    id: 1,
    title: "EggMpire Token / EGGM (ERC20)",
    address:
      "https://etherscan.io/address/0xfFBd1ac225268e94D352Ecb65Db881fd17B99EB4",
    explorer:
      "https://etherscan.io/address/0xfFBd1ac225268e94D352Ecb65Db881fd17B99EB4",
  },
  {
    id: 2,
    title: "Vesting EGGM Smart Contract",
    address:
      "https://etherscan.io/address/0xcc5e0c76ce187f0ba7f0e3aa44f2ef80a11fa9e6",
    explorer:
      "https://etherscan.io/address/0xcc5e0c76ce187f0ba7f0e3aa44f2ef80a11fa9e6",
  },
  {
    id: 3,
    title: "Presale EGGM Smart Contract",
    address:
      "https://etherscan.io/address/0x25fdecc04438217050475fe6273419118ac02e41",
    explorer:
      "https://etherscan.io/address/0x25fdecc04438217050475fe6273419118ac02e41",
  },
];

export default function Contracts() {
  return (
    <section
      id="contracts"
      className="relative py-16 px-4 xs:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={vp}
          className="text-4xl xs:text-5xl md:text-6xl font-heading font-bold text-white mb-11"
        >
          The Ethereum Smart
          <br />
          Contracts
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CONTRACTS.map((contract, i) => (
            <FadeIn
              key={contract.id}
              direction="up"
              delay={0.1 + i * 0.1}
              scale
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/15 overflow-hidden h-full flex flex-col gap-5"
              >
                {/* Glass top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                {/* Glass inner glow */}
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />

                {/* Title */}
                <h3 className="relative text-white font-heading font-semibold text-base md:text-lg leading-snug underline underline-offset-4 decoration-white/40">
                  {contract.title}
                </h3>

                {/* Address field */}
                <div className="relative rounded-lg bg-black/40 border border-white/10 px-3 py-2.5">
                  <p className="text-white/40 text-xs font-mono truncate">
                    {contract.address}
                  </p>
                </div>

                {/* Explorer link */}
                <a
                  href={contract.explorer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-auto text-gold/80 hover:text-gold text-sm font-medium transition-colors duration-200"
                >
                  Execute Explorer
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
