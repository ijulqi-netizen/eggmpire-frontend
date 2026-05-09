"use client";

import { FadeIn } from "@/components/ui/AnimatedComponents";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { BLUR_DATA_URL } from "@/lib/blurDataUrl";
import Image from "next/image";
import { useRef } from "react";

const trustedItems = [
  { src: "/images/trusted-1.jpg", caption: "Supported by blackstone" },
  {
    src: "/images/trusted-2.jpg",
    caption: "With Deputy Governor of Jakarta\nAchmad Riza Patria",
  },
  {
    src: "/images/trusted-3.jpg",
    caption: "With Gery Bencheghib at Watch River",
  },
  {
    src: "/images/trusted-4.jpg",
    caption: "With Leader of Wilmar Group Mr. Ganda Sitorus",
  },
];

const SPEED = 80; // px/s

export default function TrustedBy() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const next = x.get() - (delta / 1000) * SPEED;
    x.set(next <= -half ? next + half : next);
  });

  return (
    <section
      id="trusted"
      className="relative bg-[#1F1F1F] py-16 px-4 xs:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Trusted by industry leader */}
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-14">
            {/* Label */}
            <FadeIn direction="up" delay={0.7} className="pb-10">
              <div className="flex items-center gap-10">
                <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
                <h2 className="text-2xl text-white tracking-wider font-semibold">
                  Trusted by industry leader
                </h2>
              </div>
            </FadeIn>

            {/* Carousel */}
            <div className="relative w-full overflow-hidden">
              <motion.div ref={trackRef} className="flex" style={{ x }}>
                {[...trustedItems, ...trustedItems].map((item, index) => (
                  <div
                    key={index}
                    className="shrink-0 w-[80vw] sm:w-[48vw] md:w-[36vw] lg:w-[28vw] pr-4 md:pr-6"
                  >
                    <div className="aspect-video relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-cover"
                        sizes="(max-width: 640px) 80vw, (max-width: 768px) 48vw, (max-width: 1024px) 36vw, 28vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="px-1 py-3 text-center">
                      <p className="text-white/80 text-xs font-sans whitespace-pre-line leading-5">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
