// src/components/common/Header.

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
// Import the new sub-components and navigation data
import DesktopNav from "@/components/common/nav/desktopNav";
import MobileMenu from "@/components/common/nav/mobileMenu";
import { navigationLinks } from "@/data/navigationData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

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

  return (
    <header className="w-full sticky top-0 z-50 bg-[#181D30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <motion.div
              className="text-lg font-display font-bold text-white transition-all
              duration-300 group-hover:text-primary group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Stacc Sessions
            </motion.div>
          </Link>

          {/* Desktop Nav and Button */}
          <div className="hidden lg:flex flex-1 justify-center space-x-12">
            <DesktopNav navItems={navigationLinks} />
            <button className="bg-white text-[#131728] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <motion.button
              ref={menuButtonRef}
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-white hover:bg-gray-700 transition-colors duration-300"
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

      {/* Mobile Menu Panel */}
      <div ref={menuRef}>
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          navItems={navigationLinks}
        />
      </div>
    </header>
  );
}
