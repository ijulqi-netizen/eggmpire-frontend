"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function TermsBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-3 md:space-y-4"
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90">
        {title}
      </h3>
      <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
