// src/components/common/nav/mobileMenu.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

// Placeholder for next/link to resolve the compilation error.
// In a real Next.js app, this would be imported from "next/link".
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// Animation variants
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

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  navItems,
  onDownload,
}) {
  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  const handleDownloadClick = () => {
    if (onDownload) {
      onDownload();
    }
    handleMobileLinkClick();
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          className="lg:hidden fixed top-16 left-0 w-full bg-[#181D30] px-4 py-4 space-y-2
          font-cinzel text-sm text-white z-40 border-t border-white/10"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
        >
          {/* Navigation Links */}
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
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
                  layoutId={`mobileHover-${item.id}`}
                />
              </Link>
            </motion.div>
          ))}

          {/* Divider */}
          <motion.div
            className="border-t border-white/20 my-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          />

          {/* Download Resume Button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="pt-2"
          >
            <motion.button
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group bg-gradient-to-r from-blue-500 to-purple-600 
  text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl 
  transition-all duration-300 flex items-center justify-center space-x-3"
            >
              {/* Wrap icon and text in a div to apply z-index, ensuring they are above the overlay */}
              <div className="flex items-center space-x-3 relative z-10">
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </div>

              {/* This is the overlay, which should have a lower z-index (or none, as z-10 on text/icon is enough) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 
    rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="downloadButtonHover"
              />
            </motion.button>

            {/* Subtle description */}
            <motion.p
              className="text-center text-white/60 text-xs mt-2 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Latest resume in PDF format
            </motion.p>
          </motion.div>

          {/* Optional: Add some spacing at the bottom */}
          <div className="h-4"></div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
