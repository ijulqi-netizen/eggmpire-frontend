"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Planet", "People", "Profit"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-heading font-black leading-none text-gold tracking-tight text-left">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-20%", opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          // className="h-[1.2em] flex items-center justify-center md:justify-start"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </h1>
  );
}
