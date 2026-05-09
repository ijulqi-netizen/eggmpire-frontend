"use client";

import MarketAnalysisCard from "@/components/sections/MarketAnalysisCard";
import { FadeIn } from "@/components/ui/AnimatedComponents";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SwapPage() {
  const [step, setStep] = useState<"swap" | "confirm">("swap");
  const [isSwapped, setIsSwapped] = useState(false);
  const [inputAmount, setInputAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const RATE = 0.08; // 1 EGGM = 0.08 USDC

  const handleToggleSwap = () => {
    setIsSwapped(!isSwapped);
    setInputAmount(""); // Clear input on swap for better UX
  };

  // Calculate output based on current direction
  // if isSwapped is false: USDC -> EGGM (1 USDC = 1/0.98 EGGM)
  // if isSwapped is true: EGGM -> USDC (1 EGGM = 0.98 USDC)
  const calculateOutput = (amount: string) => {
    const val = parseFloat(amount);
    if (isNaN(val)) return "0.00";

    if (!isSwapped) {
      // USDC to EGGM
      return (val / RATE).toFixed(2);
    } else {
      // EGGM to USDC
      return (val * RATE).toFixed(2);
    }
  };

  const outputAmount = calculateOutput(inputAmount);

  const sourceToken = isSwapped
    ? { label: "EGGM", icon: "/icons/logo-eggm-br.png", color: "bg-gold" }
    : { label: "USDC", icon: "/icons/usdc.svg", color: "bg-blue-500" };
  const targetToken = isSwapped
    ? { label: "USDC", icon: "/icons/usdc.svg", color: "bg-blue-500" }
    : { label: "EGGM", icon: "/icons/logo-eggm-br.png", color: "bg-gold" };

  return (
    <>
      {/* Text */}
      <div className="space-y-4 sm:space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight uppercase">
            SWAPP EGGM
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed font-sans text-wrap mx-auto">
            Convert your tokens or swap them for real-world impact. Every 100
            EGGM swapped provides 5 eggs to those in need.
          </p>
        </FadeIn>
      </div>

      <FadeIn direction="up" delay={0.3} className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Swap Card */}
          <div className="w-full lg:w-110 shrink-0">
            <div className="relative w-full">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gold/20 rounded-3xl sm:rounded-[2.5rem] blur-xl opacity-50 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-[#E8A921]/13 backdrop-blur-2xl border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 shadow-2xl flex flex-col gap-5 sm:gap-6 overflow-hidden h-160 sm:h-170">
                {/* Card Header */}
                <div className="text-center">
                  <h2 className="text-[#8D6207] text-xl sm:text-2xl font-heading font-bold">
                    EGGM Sustainable Swap
                  </h2>
                  <p className="text-white text-[10px] uppercase tracking-widest mt-1">
                    Swap {sourceToken.label} ↔ {targetToken.label} with best
                    rate
                  </p>
                </div>

                <div className="flex-1 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {step === "swap" ? (
                      <motion.div
                        key="swap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col gap-3 sm:gap-4"
                      >
                        {/* Rate Display */}
                        <div
                          className="rounded-2xl p-px"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(232,169,33,0.15) 40%, rgba(255,255,255,0.05) 60%, rgba(232,169,33,0.1) 100%)",
                          }}
                        >
                          <div
                            className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl border border-white/10"
                            style={{
                              background: [
                                "linear-gradient(to bottom, rgba(232,169,33,0.2), transparent 40%)",
                                "linear-gradient(to top, rgba(232,169,33,0.2), transparent 40%)",
                                "linear-gradient(to right, rgba(232,169,33,0.2), transparent 40%)",
                                "linear-gradient(to left, rgba(232,169,33,0.2), transparent 40%)",
                                "rgba(0,0,0,0.5)",
                              ].join(", "),
                            }}
                          >
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="text-white font-bold text-base sm:text-xl font-heading leading-none text-wrap">
                                1 {isSwapped ? "EGGM" : "USDC"} ={" "}
                                {isSwapped ? RATE : (1 / RATE).toFixed(4)}{" "}
                                {isSwapped ? "USDC" : "EGGM"}
                              </span>
                              <p className="text-[10px] text-white tracking-tight">
                                Fee: 0.3% | Slippage: 0.5%
                              </p>
                            </div>
                            <div className="shrink-0 flex items-center gap-1.5 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/30">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-[11px] text-green-400 font-bold tracking-wide">
                                Best Rate
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Input/Output Container */}
                        <div className="relative flex flex-col gap-2">
                          {/* Input Source */}
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 transition-colors hover:bg-white/10">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                                Input Source
                              </span>
                            </div>
                            <div className="flex justify-between items-center gap-3">
                              <input
                                type="number"
                                value={inputAmount}
                                onChange={(e) => setInputAmount(e.target.value)}
                                className="bg-transparent text-white text-xl sm:text-2xl font-heading font-bold outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="0.00"
                              />
                              <button className="shrink-0 flex items-center gap-1.5 sm:gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-2 pr-3 sm:pr-4 py-1.5 transition-all">
                                <div
                                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${sourceToken.color} flex items-center justify-center p-1 shadow-lg`}
                                >
                                  <Image
                                    src={sourceToken.icon}
                                    alt={sourceToken.label}
                                    width={14}
                                    height={14}
                                  />
                                </div>
                                <span className="text-white font-bold text-xs sm:text-sm tracking-widest">
                                  {sourceToken.label}
                                </span>
                                <ChevronDown size={12} className="text-white" />
                              </button>
                            </div>
                          </div>

                          {/* Swap Button (Absolute Positioned) */}
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <button
                              onClick={handleToggleSwap}
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8D6207] border-[3px] border-[#1a1a1a] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg group/swap"
                            >
                              <ArrowDownUp
                                size={16}
                                className="group-hover:rotate-180 transition-transform duration-500"
                              />
                            </button>
                          </div>

                          {/* Output Target */}
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 transition-colors hover:bg-white/10">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                                Output Target
                              </span>
                            </div>
                            <div className="flex justify-between items-center gap-3">
                              <input
                                type="number"
                                value={outputAmount}
                                readOnly
                                className="bg-transparent text-white text-xl sm:text-2xl font-heading font-bold outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                placeholder="0.00"
                              />
                              <button className="shrink-0 flex items-center gap-1.5 sm:gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-2 pr-3 sm:pr-4 py-1.5 transition-all">
                                <div
                                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full ${targetToken.color} flex items-center justify-center p-1 shadow-lg`}
                                >
                                  <Image
                                    src={targetToken.icon}
                                    alt={targetToken.label}
                                    width={14}
                                    height={14}
                                  />
                                </div>
                                <span className="text-white font-bold text-xs sm:text-sm tracking-widest">
                                  {targetToken.label}
                                </span>
                                <ChevronDown size={12} className="text-white" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Swap Details */}
                        <div
                          className="flex flex-col gap-3 p-3 sm:p-4 rounded-2xl border border-white/10"
                          style={{
                            background: [
                              "linear-gradient(to bottom, rgba(232,169,33,0.2), transparent 40%)",
                              "linear-gradient(to top, rgba(232,169,33,0.2), transparent 40%)",
                              "linear-gradient(to right, rgba(232,169,33,0.2), transparent 40%)",
                              "linear-gradient(to left, rgba(232,169,33,0.2), transparent 40%)",
                              "rgba(0,0,0,0.5)",
                            ].join(", "),
                          }}
                        >
                          {[
                            { label: "Rate", value: `1 EGGM = ${RATE} USDC` },
                            {
                              label: "You Will Receive",
                              value: `${outputAmount} ${targetToken.label}`,
                            },
                            {
                              label: "Minimum Received",
                              value: `${(parseFloat(outputAmount) * 0.985).toFixed(2)} ${targetToken.label}`,
                            },
                            { label: "Network Fee", value: "$1.20" },
                          ].map(({ label, value }) => (
                            <div
                              key={label}
                              className="flex justify-between items-center text-xs gap-2"
                            >
                              <span className="text-white/70 font-medium">
                                {label}
                              </span>
                              <span className="text-white font-bold text-right">
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Continue Button */}
                        <button
                          onClick={() => setStep("confirm")}
                          className="block w-full text-center py-3 sm:py-4 bg-[#8D6207] hover:bg-[#8D6207]/80 text-white font-heading font-extrabold text-base sm:text-xl tracking-[0.2em] rounded-2xl transition-all active:scale-[0.98]"
                        >
                          Continue
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="confirm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="h-full flex flex-col justify-between"
                      >
                        {/* Confirmation Form */}
                        <div className="flex flex-col gap-3 sm:gap-4 py-20">
                          {[
                            {
                              type: "text",
                              placeholder: "Name",
                              key: "name" as const,
                            },
                            {
                              type: "email",
                              placeholder: "Email",
                              key: "email" as const,
                            },
                            {
                              type: "text",
                              placeholder: "Whatsapp",
                              key: "whatsapp" as const,
                            },
                          ].map(({ type, placeholder, key }) => (
                            <div
                              key={key}
                              className="bg-white/5 border border-white/10 rounded-2xl p-4"
                            >
                              <input
                                type={type}
                                placeholder={placeholder}
                                value={formData[key]}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [key]: e.target.value,
                                  })
                                }
                                className="bg-transparent text-white/70 text-base sm:text-lg font-heading outline-none w-full"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Confirm Button */}
                        <div className="flex flex-col justify-center gap-5">
                          <button className="w-full py-3 sm:py-4 bg-[#8D6207] hover:bg-[#8D6207]/80 text-white font-heading font-bold text-base sm:text-xl uppercase tracking-widest rounded-2xl transition-all active:scale-[0.98]">
                            Confirm Swap
                          </button>

                          {/* Back to Swap */}
                          <button
                            onClick={() => setStep("swap")}
                            className="text-white/50 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
                          >
                            ← Back to Swap
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer */}
                <div className="text-center">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-medium">
                    Secure and audited by EGGM Sustainable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="flex-1">
            <MarketAnalysisCard />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
