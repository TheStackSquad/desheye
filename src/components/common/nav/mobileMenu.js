// src/components/common/nav/mobileMenu.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder for next/link to resolve the compilation error.
// In a real Next.js app, this would be imported from "next/link".
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// Placeholder for the animation variants to resolve the compilation error.
const mobileMenuVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function MobileMenu({ menuOpen, setMenuOpen, navItems }) {
  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          className="lg:hidden fixed top-12 left-0 w-full bg-[#181D30] px-4 py-4 space-y-2
          font-cinzel text-sm text-white z-40"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={handleMobileLinkClick}
              className="block relative group px-4 py-3 rounded-lg transition-all
              duration-300 text-white hover:text-black hover:bg-gray-100"
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                {item.label}
              </span>
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobileHover"
              />
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
