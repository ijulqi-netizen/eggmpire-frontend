"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { BLUR_DATA_URL } from "@/lib/blurDataUrl";
import Image from "next/image";
import { useRef } from "react";

const sponsors = Array.from(
  { length: 10 },
  (_, i) => `/images/collabs/c${i + 1}.png`,
);

const SPEED = 48; // px/s

export default function CarouselCollaborate() {
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
    <div className="">
      <p className="text-xs md:text-sm font-medium mb-8 text-white/60 text-center md:text-left">
        Collaborate With
      </p>
      <div className="w-full overflow-hidden">
        <motion.div ref={trackRef} className="flex" style={{ x }}>
          {[...sponsors, ...sponsors].map((src, index) => (
            <div
              key={index}
              className="shrink-0 w-30 h-20 flex items-center justify-center p-2 pr-6 rounded-lg"
            >
              <Image
                src={src}
                alt={`Sponsor ${(index % sponsors.length) + 1}`}
                width={96}
                height={48}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-contain w-full h-full opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

