"use client";

import {
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/AnimatedComponents";
import CountUp from "@/components/ui/CountUp";
import RotatingText from "@/components/ui/RotatingText";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import CarouselCollaborate from "@/components/ui/CarouselCollaborate";
import { BLUR_DATA_URL } from "@/lib/blurDataUrl";
import Link from "next/link";

const stats = [
  { value: "+1M", label: "Eggs Distributed" },
  { value: "+1K", label: "Tree Planted" },
  { value: "+10K", label: "generation saved from stunting" },
];

const impactCards = [
  {
    image: "/images/impact-2.jpg",
    alt: "Impact Action 2",
    title: "EggMpire Token (EGGM) Climate & Social Action",
    description:
      "Coastal Area Rehabilitation Assistance: 1,000 Mangrove Trees\nSocial Assistance: 160 kg of eggs for 160 families in Muara Gembong",
  },
  {
    image: "/images/impact-1.jpg",
    alt: "Impact Action 1",
    title: "EggMpire Token (EGGM) Climate & Social Action",
    description:
      "Waste collection and critical land reforestation efforts\nTree donation: 365 trees\nSocial assistance: 160 kg of eggs",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0); // 0: Hero, 1: Impact

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 0 : direction > 0 ? 1000 : -1000,
      opacity: direction === 0 ? 1 : 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-amber-900/20 blur-[120px]" />
      </div>

      {/* Navigation Arrows - locked to viewport height */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-20">
        <div className="sticky top-0 h-screen flex items-center justify-between px-4 xs:px-6 md:px-12">
          <button
            onClick={() => paginate(-1)}
            className="pointer-events-auto"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="pointer-events-auto"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="relative flex-1 flex items-center pt-20 xs:pt-24 pb-12 overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          {currentSlide === 0 ? (
            <motion.div
              key="hero"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full h-full flex items-center"
            >
              {/* Card — fades up with slight scale */}
              <FadeIn direction="up" delay={0.1} scale className="w-full">
                <div className="shadow-[0_8px_60px_rgba(0,0,0,0.7)]">
                  <div className="relative w-full overflow-hidden px-4 xs:px-6 md:px-12 lg:px-28 py-6 md:py-10">
                    {/* Card background */}
                    <div
                      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('/images/hero.webp')" }}
                    />
                    <div className="absolute inset-0 bg-[#313131]/70 -z-10" />

                    <div className="flex flex-col max-w-6xl mx-auto p-6 md:p-12 lg:grid lg:grid-cols-[1fr_auto_auto] items-center gap-6 lg:gap-8">
                      {/* ── Left content ── */}
                      <div className="order-2 lg:order-1 flex flex-col gap-5 lg:gap-8 w-full">
                        <RotatingText />

                        <FadeIn direction="up" delay={0.25}>
                          <div className="font-sans">
                            <p className="text-white text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                              Real Impact. Real Assets.
                            </p>
                            <p className="text-white/70 text-xs xs:text-sm leading-5 xs:leading-6">
                              We remove 16 tons of daily waste.
                            </p>
                            <p className="text-white/70 text-xs xs:text-sm leading-5 xs:leading-6">
                              We supply hundreds of kilograms of fresh eggs.
                            </p>
                          </div>
                        </FadeIn>

                        {/* Stats — stagger each counter */}
                        <div className="flex flex-col gap-3">
                          <StaggerContainer
                            className="flex gap-6 xs:gap-8 lg:gap-10"
                            stagger={0.12}
                            delayChildren={0.35}
                          >
                            {stats.map((s) => (
                              <motion.div
                                key={s.label}
                                variants={staggerItem}
                                className="text-center"
                              >
                                <p className="font-heading font-bold text-lg xs:text-xl lg:text-2xl text-white">
                                  <CountUp value={s.value} />
                                </p>
                                <p className="text-xs text-white mt-0.5 max-w-25">
                                  {s.label}
                                </p>
                              </motion.div>
                            ))}
                          </StaggerContainer>
                        </div>
                      </div>

                      {/* ── CTAs — stagger from below ── */}
                      <StaggerContainer
                        className="order-3 flex flex-row lg:flex-col items-stretch gap-3 w-full lg:w-auto lg:min-w-50"
                        stagger={0.12}
                        delayChildren={0.4}
                      >
                        <motion.div
                          variants={staggerItem}
                          className="flex-1 lg:flex-none"
                        >
                          <Link
  href="https://eggmpire.gitbook.io/whitepaper/"
  target="_blank"
  className="flex items-center justify-center h-full w-full"
>
                            EGGM Whitepaper
                          </Link>
                        </motion.div>
                        <motion.div
                          variants={staggerItem}
                          className="flex-1 lg:flex-none"
                        >
                          <Link
                            href="https://www.canva.com/design/DAHE9Zf2Qe0/FXzvsA4SuCDVZLwlRwD1PQ/edit?utm_content=DAHE9Zf2Qe0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank"
                            className="flex items-center justify-center h-full w-full text-center px-4 xs:px-6 py-2.5 xs:py-3 bg-[#8D6207] hover:bg-[#8D6207]/80 text-white font-heading font-bold text-xs xs:text-sm tracking-wide transition-colors rounded-[10px]"
                          >
                            EGGM Deck
                          </Link>
                        </motion.div>
                      </StaggerContainer>
                    </div>

                    {/* Trusted By — below center */}
                    <FadeIn
                      direction="up"
                      delay={0.45}
                      className="max-w-6xl mx-auto px-6 md:px-12"
                    >
                      <CarouselCollaborate />
                    </FadeIn>
                  </div>
                </div>
              </FadeIn>
            </motion.div>
          ) : (
            <motion.div
              key="impact"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full h-full"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center px-4 xs:px-6 md:px-12 py-6 md:py-10 overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.7)]">
                {/* Slide background */}
                <div
                  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/images/bg-7.webp')" }}
                />
                <div className="absolute inset-0 bg-[#313131]/70 -z-10" />

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-10 tracking-tight uppercase text-center">
                  Impact In Action
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl w-full items-start p-6 md:p-12">
                  {impactCards.map((card, i) => (
                    <div key={i} className="flex flex-col gap-4 h-full">
                      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          placeholder="blur"
                          blurDataURL={BLUR_DATA_URL}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 bg-[#8D6207] rounded-2xl p-6 text-white shadow-xl">
                        <h3 className="text-center font-heading font-bold text-lg mb-2">
                          {card.title}
                        </h3>
                        <p className="text-center text-xs md:text-sm opacity-90 leading-relaxed whitespace-pre-line">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
