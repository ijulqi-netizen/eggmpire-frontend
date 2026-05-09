"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { BLUR_DATA_URL } from "@/lib/blurDataUrl";
import Image from "next/image";
import { useRef } from "react";

const featured = Array.from(
  { length: 13 },
  (_, i) => `/images/featured/f${i + 1}.png`,
);

const SPEED = 48; // px/s

export default function CarouselFeatured() {
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
    <div>
      <p className="text-xs md:text-sm font-medium mb-8 text-center">
        Featured By
      </p>
      <div className="w-full overflow-hidden">
        <motion.div ref={trackRef} className="flex" style={{ x }}>
          {[...featured, ...featured].map((src, index) => (
            <div
              key={index}
              className="shrink-0 w-48 h-28 flex items-center justify-center p-2 pr-8 rounded-lg"
            >
              <Image
                src={src}
                alt={`Featured ${(index % featured.length) + 1}`}
                width={160}
                height={80}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-contain w-full h-full transition-opacity duration-200"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

