"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/blurDataUrl";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const TEAM = [
  {
    id: 1,
    name: "Mr. Joko Seomitro",
    photo: "/images/teams/joko.webp",
    title: "CEO PT. Solusi Semesta Berjaya",
  },
  {
    id: 2,
    name: "Mrs. Retno Dewi Hendrastuti",
    photo: "/images/teams/retno.webp",
    title: "Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 3,
    name: "Ms. Meutia Amanda Riza",
    photo: "/images/teams/meutia.webp",
    title: "Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 4,
    name: "Mr. Julius Robinson",
    photo: "/images/teams/julius.webp",
    title: "Chairman of Equator Bumi Lestari Foundation",
  },
  {
    id: 5,
    name: "Mr. Randy Rinaldy",
    photo: "/images/teams/randy.webp",
    title: "Chief Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 6,
    name: "Major General Ary Karyono",
    photo: "/images/teams/mayor.webp",
    title: "Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 7,
    name: "Mr. Riko Kurniawan",
    photo: "/images/teams/riko.webp",
    title: "Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 8,
    name: "Mr. Prayoto",
    photo: "/images/teams/prayoto.webp",
    title: "Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 9,
    name: "Mr. Aris",
    photo: "/images/teams/aris.webp",
    title: "Supervisor of Equator Bumi Lestari Foundation",
  },
  {
    id: 10,
    name: "Mr. Raymond Mickey Hernawan",
    photo: "/images/teams/raymond.webp",
    title: "Finance of Equator Bumi Lestari Foundation",
  },
  {
    id: 11,
    name: "Mr. Maxi Franky",
    photo: "/images/teams/maxi.webp",
    title: "Secretary of Equator Bumi Lestari Foundation",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const CARD_W = 240; // portrait card width  (px)
const CARD_H = 300; // portrait card height (px)
const TRACK_H = 310; // fixed track height (px) — NEVER changes → no vertical jump
const SPRING = { type: "spring" as const, stiffness: 280, damping: 30 };

// Arc fan positioning per offset slot
type ArcSlot = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
  zIndex: number;
};
const ARC: { [key: string]: ArcSlot } = {
  "0": { x: 0, y: 0, rotate: 0, scale: 1.0, opacity: 1, zIndex: 10 },
  "1": { x: 92, y: -18, rotate: 14, scale: 0.82, opacity: 1, zIndex: 6 },
  "-1": { x: -92, y: -18, rotate: -14, scale: 0.82, opacity: 1, zIndex: 6 },
  "2": { x: 168, y: -48, rotate: 26, scale: 0.66, opacity: 0.65, zIndex: 3 },
  "-2": { x: -168, y: -48, rotate: -26, scale: 0.66, opacity: 0.65, zIndex: 3 },
};

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = TEAM.length;

  const wrap = (i: number) => ((i % total) + total) % total;

  // Keep total accessible inside the interval callback without stale closure
  const totalRef = useRef(total);
  useEffect(() => {
    totalRef.current = total;
  }, [total]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => {
        const t = totalRef.current;
        return (((i + 1) % t) + t) % t;
      });
    }, 3000);
  }, []);

  // Start auto-play on mount
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // Manual nav resets the countdown so the slide doesn't jump immediately after
  const goTo = (i: number) => {
    setActiveIndex(wrap(i));
    resetTimer();
  };

  const getOffset = (index: number) => {
    let off = index - activeIndex;
    if (off > total / 2) off -= total;
    if (off < -total / 2) off += total;
    return off;
  };

  const activeMember = TEAM[activeIndex];

  return (
    <section
      id="team"
      className="relative bg-[#1F1F1F] py-16 px-4 xs:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto pt-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-4xl xs:text-5xl md:text-6xl font-heading font-bold text-white mb-11"
        >
          The EGGM TEAM
        </motion.h2>

        <FadeIn direction="up" delay={0.05} scale>
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-4xl p-6 md:p-12 border border-white/15 overflow-hidden">
            {/* Glass inner top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            {/* Glass subtle inner glow */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none rounded-4xl" />
            {/* ── Carousel ── */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Row: prev arrow · track · next arrow */}
                <div className="flex items-center justify-center gap-3 md:gap-5">
                  {/* Prev */}
                  <motion.button
                    onClick={() => goTo(activeIndex - 1)}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.88 }}
                    className="shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white/12 bg-white/5 hover:bg-gold/14 hover:border-gold/35 text-white/40 hover:text-gold transition-colors duration-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={17} />
                  </motion.button>

                  <div
                    className="relative flex-1 max-w-xl"
                    style={{ height: TRACK_H }}
                  >
                    {TEAM.map((member, index) => {
                      const offset = getOffset(index);
                      const abs = Math.abs(offset);
                      const arcKey = String(
                        Math.sign(offset) * Math.min(abs, 2),
                      );
                      const arc = ARC[arcKey] ?? ARC["0"];
                      const isCenter = offset === 0;

                      return (
                        <motion.div
                          key={member.id}
                          className="absolute inset-0 flex items-end justify-center pb-2"
                          animate={{
                            x: arc.x,
                            y: arc.y,
                            scale: arc.scale,
                            rotate: arc.rotate,
                            opacity: abs > 2 ? 0 : arc.opacity,
                            zIndex: arc.zIndex,
                          }}
                          initial={false}
                          transition={SPRING}
                          onClick={
                            abs >= 1 && abs <= 2 ? () => goTo(index) : undefined
                          }
                          style={{
                            cursor:
                              abs >= 1 && abs <= 2 ? "pointer" : "default",
                            pointerEvents: abs > 2 ? "none" : "auto",
                            transformOrigin: "bottom center",
                          }}
                        >
                          <motion.div
                            className="relative overflow-hidden rounded-2xl shadow-2xl"
                            style={{ width: CARD_W, height: CARD_H }}
                            animate={{
                              filter: isCenter
                                ? "grayscale(0%) brightness(100%)"
                                : "grayscale(100%) brightness(35%)",
                            }}
                            transition={SPRING}
                          >
                            <Image
                              src={member.photo}
                              alt={member.name}
                              fill
                              sizes="160px"
                              loading="eager"
                              placeholder="blur"
                              blurDataURL={BLUR_DATA_URL}
                              className="object-cover object-top"
                            />
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Next */}
                  <motion.button
                    onClick={() => goTo(activeIndex + 1)}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.88 }}
                    className="shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white/12 bg-white/5 hover:bg-gold/14 hover:border-gold/35 text-white/40 hover:text-gold transition-colors duration-200"
                    aria-label="Next"
                  >
                    <ChevronRight size={17} />
                  </motion.button>
                </div>

                {/* ── Name below carousel ── */}
                <div className="mt-7 text-center min-h-20!">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`label-${activeMember?.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Name with decorative lines */}
                      <div className="flex items-center justify-center gap-3 mb-1.5">
                        <span className="block h-px w-8 bg-gold/55" />
                        <h3 className="font-heading font-bold text-white text-lg md:text-xl tracking-wide">
                          {activeMember?.name}
                        </h3>
                        <span className="block h-px w-8 bg-gold/55" />
                      </div>
                      {/* title */}
                      <p className="text-[11px] uppercase tracking-[0.22em] text-gold/60 font-medium">
                        {activeMember?.title}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* ── Dot indicators ── */}
                <div className="flex justify-center items-center gap-1.5 mt-5">
                  {TEAM.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Member ${i + 1}`}
                      className="h-1 rounded-full transition-[width,background-color] duration-300 ease-out"
                      style={{
                        width: i === activeIndex ? 24 : 5,
                        backgroundColor:
                          i === activeIndex
                            ? "var(--color-gold, #E8A921)"
                            : "rgba(255,255,255,0.15)",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
