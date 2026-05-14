"use client";

import Button from "@/components/ui/Button";
import { navClickHandler } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { src: "/icons/x-icon.svg", alt: "X", href: "#" },
  {
    src: "/icons/ig-icon.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/eggmpire/",
  },
  { src: "/icons/tt-icon.svg", alt: "TikTok", href: "#" },
];

const NAV_COLUMNS: {
  label: string;
  links: { label: string; href: string }[];
}[] = [
  {
    label: "Home",
    links: [
      { label: "Home", href: "/" },
      { label: "Privacy Rule", href: "/privacy-rules" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    label: "Protocol Matrix",
    links: [
      { label: "Gallery", href: "https://back2.eggmpire.com/gallery" },
      { label: "Whitepaper", href: "https://eggmpire.gitbook.io/whitepaper" },
      { label: "Personal Carbon Calculator", href: "https://eggmpire.com/carbon-calculator/" },
    ],
  },
  {
    label: "Ecosystem Core",
    links: [
      { label: "Dashboard v1.0", href: "https://dashboard.eggmpire.com" },
      { label: "Swap Engine", href: "https://swap.eggmpire.com" },
      { label: "Claim Portal", href: "https://claim.eggmpire.com" },
      { label: "Lab Results", href: "https://back2.eggmpire.com/lab-result" },
    ],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#323232]/75 backdrop-blur-xl rounded-t-[25px] border-t border-white/40" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-10 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12 lg:gap-16"
        >
          {/* ── Brand ─────────────────────────────────────────────────────── */}
          <motion.div
            variants={columnVariants}
            className="flex flex-col items-center gap-5 shrink-0 md:items-start md:w-48 lg:w-56"
          >
            {/* Logo */}
            <div className="relative w-28 h-28">
              <Image
                src="/icons/logo-eggm-br-1a.png"
                alt="Eggmpire Logo"
                fill
                sizes="112px"
                unoptimized
                className="object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-xs text-white/40 text-center md:text-left leading-relaxed max-w-45">
              Sustainable token ecosystem built for real-world impact.
            </p>

            {/* Socials */}
            <div>
              <p className="text-xs text-gray-500 mb-3 tracking-widest font-bold flex items-center gap-1 justify-center md:justify-start">
                <span className="text-2xl leading-none">•</span> Socials
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.alt}
                    href={social.href}
                    aria-label={social.alt}
                    target="_blank"
                  >
                    <Button
                      variant="icon"
                      size="icon"
                      glow
                      className="transition-transform"
                    >
                      <Image
                        src={social.src}
                        alt={social.alt}
                        width={20}
                        height={20}
                      />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider: horizontal on mobile, vertical on md+ */}
          <div className="w-full h-px bg-white/10 md:hidden" />
          <div className="hidden md:block self-stretch w-px bg-white/10 shrink-0" />

          {/* ── Nav Columns ───────────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-x-6 gap-y-10 flex-1 w-full"
          >
            {NAV_COLUMNS.map((col) => (
              <motion.div
                key={col.label}
                variants={columnVariants}
                className="flex flex-col items-center md:items-start"
              >
                <p className="text-xs text-[#8D6207] mb-4 tracking-widest font-bold flex items-center gap-1 justify-center md:justify-start">
                  <span className="text-2xl leading-none">•</span> {col.label}
                </p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3 text-center md:text-left"
                >
                  {col.links.map((link) => (
                    <motion.li key={link.label} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={navClickHandler(link.href)}
                        className="group relative inline-block text-sm text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#E8A921] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
