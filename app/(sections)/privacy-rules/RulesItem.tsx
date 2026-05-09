"use client";

import { motion } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export default function TermsItem({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={itemVariant} className="flex gap-2">
      {label && <span className="font-medium text-white/80 mr-1">{label}</span>}
      <div className="text-white/70">{children}</div>
    </motion.div>
  );
}
