// src/app/layout.js
// src/app/layout.js
'use client';
import React, { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link
          rel="preload"
          href="../app/asset/fontz/JosefinSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <Header navItems={[
          { name: 'About', path: '/' },
          { name: 'Skills', path: '/Skills' },
          { name: 'Services', path: '/Services' },
          { name: 'Team', path: '/Team' },
          { name: 'Education', path: '/Education' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: 'Contact', path: '/contact' },
        ]} />
         <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode="sync" initial={false}>
          {children}
        </AnimatePresence>
        </Suspense>
      </body>
    </html>
  );
}