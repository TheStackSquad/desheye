// src/app/layout.js
'use client';

import React, { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import { SafeHydration } from '@/components/SafeHydration';
import ErrorBoundary from '@/app/errorBoundary';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/asset/fontz/JosefinSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <ErrorBoundary>
          <Header
            navItems={[
              { name: 'About', path: '/' },
              { name: 'Portfolio', path: '/Portfolio' },
              { name: 'Services', path: '/Services' },
              { name: 'Team', path: '/Team' },
              { name: 'Education', path: '/Education' },
              { name: 'Contact', path: '/' },
            ]}
          />
          <Suspense fallback={<div className="loading-container">Loading...</div>}>
            <SafeHydration>
              <AnimatePresence mode="sync" initial={false}>
                {children}
              </AnimatePresence>
            </SafeHydration>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
