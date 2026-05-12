"use client";

import { navClickHandler } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type NavItem = { label: string; href: string };
type NavLink = { label: string; href: string; items: NavItem[] };

// ─── Data (mirrors footer columns) ───────────────────────────────────────────

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    items: [
      { label: "Home", href: "/" },
      { label: "Privacy Rule", href: "/privacy-rules" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    label: "Protocol Matrix",
    href: "#protocol",
    items: [
      { label: "Gallery", href: "#" },
      {
  label: "Whitepaper",
  href: "https://eggmpire.gitbook.io/whitepaper/"
},
      { label: "Personal Carbon Calculator", href: "#" },
      // { label: "Bug Bounty", href: "#" },
    ],
  },
  {
    label: "Ecosystem Core",
    href: "#ecosystem",
    items: [
      { label: "Dashboard", href: "https://dashboard.eggmpire.com" },
      { label: "Swap Engine", href: "https://swap.eggmpire.com" },
      { label: "Claim Portal", href: "https://claim.eggmpire.com" },
      { label: "Lab Results", href: "#" },
    ],
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: {
      duration: 0.13,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.2 },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

const mobileAccordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.15,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="text-white/50 shrink-0"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between">
      <motion.span
        className="block h-px w-full bg-white origin-center"
        animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22 }}
      />
      <motion.span
        className="block h-px w-full bg-white"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-px w-full bg-white origin-center"
        animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22 }}
      />
    </div>
  );
}

// ─── Dropdown Item ────────────────────────────────────────────────────────────

function DropdownItem({ item, index }: { item: NavItem; index: number }) {
  return (
    <motion.li
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <Link
        href={item.href}
        onClick={navClickHandler(item.href)}
        className="group relative inline-block text-sm text-gray-400 hover:text-white transition-colors duration-200 whitespace-nowrap"
      >
        {item.label}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#E8A921] transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.li>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="fixed top-3 xs:top-5 inset-x-0 z-50 flex justify-center px-3 xs:px-4">
      <div className="w-full max-w-3xl flex flex-col">
        {/* ── Main bar ───────────────────────────────────────────────────── */}
        <nav className="flex items-center justify-between gap-3 xs:gap-6 py-8 px-3 xs:px-5 h-11 xs:h-12 w-full bg-3A3A3A/60 backdrop-blur-md border border-white/40 rounded-full">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/icons/logo-eggm-br-2a.png"
              alt="Eggmpire"
              width={148}
              height={38}
              className="h-6 xs:h-7 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors whitespace-nowrap">
                  {link.label}
                  <ChevronDown open={activeDropdown === link.label} />
                </button>

                {/* Desktop dropdown */}
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-42.5 bg-[#2a2a2a]/90 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 shadow-xl"
                    >
                      <ul className="space-y-2.5">
                        {link.items.map((item, i) => (
                          <DropdownItem
                            key={item.label}
                            item={item}
                            index={i}
                          />
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-2 xs:gap-3 shrink-0">
            <Link
              href="https://swap.eggmpire.com"
              className="px-3 xs:px-4 py-1 xs:py-1.5 bg-[#8D6207] hover:bg-[#8D6207]/80 text-white font-heading font-bold text-xs tracking-widest uppercase rounded-full transition-colors whitespace-nowrap text-center"
            >
              <span>Own</span>
              <br />
              Eggmpire
            </Link>
          </div>
        </nav>

        {/* ── Mobile menu ────────────────────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="bg-[#2a2a2a]/90 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="border-b border-white/10 last:border-0"
                  >
                    <button
                      className="flex items-center justify-between w-full py-3 text-white/80 hover:text-white text-sm transition-colors"
                      onClick={() =>
                        setMobileExpanded((v) =>
                          v === link.label ? null : link.label,
                        )
                      }
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="text-[#8D6207] text-lg leading-none">
                          •
                        </span>
                        {link.label}
                      </span>
                      <ChevronDown open={mobileExpanded === link.label} />
                    </button>

                    <AnimatePresence>
                      {mobileExpanded === link.label && (
                        <motion.ul
                          variants={mobileAccordionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden pl-5 pb-3 space-y-2.5"
                        >
                          {link.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="group relative inline-block text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                onClick={navClickHandler(item.href, () =>
                                  setMobileOpen(false),
                                )}
                              >
                                {item.label}
                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#E8A921] transition-all duration-300 group-hover:w-full" />
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
