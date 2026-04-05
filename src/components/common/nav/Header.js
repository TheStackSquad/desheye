// src/components/common/Header.js

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { navigationLinks } from "@/data/navigationData";

// ── Desktop Nav ───────────────────────────────────────────────────────────────
function DesktopNav({ navItems }) {
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="relative px-4 py-2 text-sm font-medium tracking-wide
            text-white/60 hover:text-white transition-colors duration-200
            font-cinzel uppercase text-xs"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

// ── Mobile Menu ───────────────────────────────────────────────────────────────
function MobileMenu({ open, setOpen, navItems }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="lg:hidden fixed top-16 left-0 w-full z-40
            bg-[#0D0F1A]/98 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-cinzel
                    uppercase tracking-widest text-white/60 hover:text-white
                    hover:bg-white/5 transition-all duration-200"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <div className="h-px bg-white/10 my-3" />

            <Link
              href="/img/Resume.pdf"
              download="Resume-Adesheye-Adeshina.pdf"
            >
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-3
                  bg-gradient-to-r from-[#FF4D00] to-[#7B5CF0]
                  text-white font-semibold py-4 rounded-2xl
                  font-cinzel text-sm tracking-wide"
              >
                <Download size={16} />
                Download Resume
              </motion.button>
            </Link>
            <p className="text-center text-white/30 text-xs mt-2 mb-2">
              Latest resume · PDF format
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      )
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0F1A]/95 backdrop-blur-md shadow-xl border-b border-white/8"
            : "bg-[#0D0F1A]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-xl font-bold text-white font-cinzel tracking-tight
                  group-hover:text-transparent group-hover:bg-gradient-to-r
                  group-hover:from-[#FF4D00] group-hover:to-[#7B5CF0]
                  group-hover:bg-clip-text transition-all duration-300"
              >
                Stacc<span className="text-[#FF4D00]">.</span>Sessions
              </motion.span>
            </Link>

            {/* Desktop: Nav centred + CTA right */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              <DesktopNav navItems={navigationLinks} />
            </div>

            <div className="hidden lg:block">
              <Link
                href="/img/Resume.pdf"
                download="Resume-Adesheye-Adeshina.pdf"
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full
                    bg-gradient-to-r from-[#FF4D00] to-[#7B5CF0]
                    text-white text-sm font-semibold font-cinzel tracking-wide
                    shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40
                    transition-shadow duration-300"
                >
                  <Download size={15} />
                  Download Resume
                </motion.button>
              </Link>
            </div>

            {/* Mobile: icon download + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/img/ResumeDesheye.pdf"
                download="Resume-Adesheye-Adeshina.pdf"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-full bg-gradient-to-r from-[#FF4D00] to-[#7B5CF0]
                    text-white shadow-md"
                >
                  <Download size={17} />
                </motion.button>
              </Link>

              <motion.button
                ref={btnRef}
                onClick={() => setMenuOpen(!menuOpen)}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-full transition-all duration-200 ${
                  menuOpen
                    ? "bg-red-500/20 text-red-400"
                    : "bg-white/8 text-white hover:bg-white/15"
                }`}
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {menuOpen ? <X size={19} /> : <Menu size={19} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <div ref={menuRef}>
        <MobileMenu
          open={menuOpen}
          setOpen={setMenuOpen}
          navItems={navigationLinks}
        />
      </div>
    </>
  );
}