// src/components/common/nav/DesktopNav.jsx

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DesktopNav({ navItems }) {
  const renderDesktopNavItem = (item) => {
    return (
      <div key={item.id}>
        <Link
          href={item.href}
          className="relative group px-4 py-2 rounded-lg
          transition-all duration-300 hover:bg-gray-100 hover:text-black"
        >
          <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
            {item.label}
          </span>
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-lg opacity-0
            group-hover:opacity-100 transition-opacity duration-300"
            layoutId="desktopHover"
          />
        </Link>
      </div>
    );
  };

  return (
    <nav className="hidden lg:flex items-center space-x-2 font-cinzel text-white text-sm">
      {navItems.map(renderDesktopNavItem)}
      <div className="ml-4">
        {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
      </div>
    </nav>
  );
}
