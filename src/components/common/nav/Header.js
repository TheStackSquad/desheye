// src/components/common/Header.

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Download, ArrowDown } from "lucide-react";
// Import the new sub-components and navigation data
import DesktopNav from "@/components/common/nav/desktopNav";
import MobileMenu from "@/components/common/nav/mobileMenu";
import { navigationLinks } from "@/data/navigationData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Add scroll effect for enhanced visual appeal
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Note: The handleDownload function has been removed as the 'download' attribute handles this directly on the link.

  return (
    <>
      <motion.header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#181D30]/95 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-[#181D30]"
        } text-white`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Enhanced Logo */}
            <Link href="/" className="group flex-shrink-0 z-10">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative text-xl md:text-2xl font-display font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text">
                  Stacc Sessions
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav and Button */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <DesktopNav navItems={navigationLinks} />

              {/* Enhanced Desktop Download Button */}
              {/* Using a link tag with a download attribute for direct file download */}
              <Link
                href="/img/Resume.pdf"
                download="Resume-Adesheye-Adeshina.pdf"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center space-x-2">
                    <Download size={18} />
                    <span>Download Resume</span>
                  </div>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Right Side - Download + Menu */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Mobile Download Button - Compact Icon Version */}
              {/* Using a link tag with a download attribute for direct file download */}
              <Link
                href="/img/Resume.pdf"
                download="Resume-Adesheye-Adeshina.pdf"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  title="Download Resume"
                >
                  <Download size={18} className="text-white" />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                ref={menuButtonRef}
                onClick={handleMenuToggle}
                aria-label="Toggle Menu"
                whileTap={{ scale: 0.9 }}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  menuOpen
                    ? "bg-red-500/20 text-red-400"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <div ref={menuRef}>
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navItems={navigationLinks}
          // The download handler is no longer needed here since the link is a direct download.
        />
      </div>
    </>
  );
}
