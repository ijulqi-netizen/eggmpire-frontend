"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── FadeIn ────────────────────────────────────────────────────────────────────

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  scale?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className = "",
  scale = false,
}: FadeInProps) {
  const offset = { up: { y: 36 }, down: { y: -36 }, left: { x: 36 }, right: { x: -36 } }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...(scale ? { scale: 0.95 } : {}), ...offset }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger container + item ──────────────────────────────────────────────────

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

const staggerContainer = (stagger = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const staggerItemRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export function StaggerContainer({ children, className = "", stagger = 0.1, delayChildren = 0 }: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
