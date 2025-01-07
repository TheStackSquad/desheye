// src/app/components/Header.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { navVariants, menuVariants } from '../motionUtils/dropdown';
import '../../css/Header.css';

const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            Desheye.CV
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
          >
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          className="mobile-dropdown"
        >
          <motion.div variants={navVariants} className="mobile-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`mobile-nav-link ${pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
