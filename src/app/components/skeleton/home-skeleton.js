// src/app/components/skeleton/home-skeleton.jsx
import React from 'react';
import { Skeleton } from './base-skeleton';
//import { motion } from 'framer-motion';

// Left Column Skeleton
const LeftColumnSkeleton = () => (
  <div className="left-column">
    <Skeleton className="h-40 w-40 rounded-full mx-auto mb-6" /> {/* Profile image */}
    <Skeleton className="h-8 w-3/4 mx-auto mb-4" /> {/* Name */}
    <Skeleton className="h-4 w-2/3 mx-auto mb-6" /> {/* Title */}
    <div className="space-y-2 mb-6">
      {[1, 2, 3].map((_, index) => (
        <Skeleton key={index} className="h-4 w-full" /> /* Bio lines */
      ))}
    </div>
  </div>
);

// Right Column Skeleton
const RightColumnSkeleton = () => (
  <div className="right-column">
    <div className="content-card">
      <div className="header-section">
        <Skeleton className="h-10 w-48 rounded-full mb-4" /> {/* Freelance button */}
        <div className="title-container">
          <Skeleton className="h-4 w-32 mb-2" /> {/* Subtitle */}
          <Skeleton className="h-8 w-48" /> {/* Main title */}
        </div>
      </div>

      <Skeleton className="h-6 w-48 mt-6 mb-4" /> {/* Section title */}
      <Skeleton className="h-24 w-full mb-6" /> {/* Description */}

      <div className="skills-grid">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="skill-item space-y-2">
            <Skeleton className="h-4 w-24" /> {/* Skill label */}
            <Skeleton className="h-2 w-full" /> {/* Progress bar */}
            <Skeleton className="h-4 w-32" /> {/* Skill description */}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main Home Page Skeleton
const HomePageSkeleton = () => (
  <main className="main-content">
    <div className="content-grid">
      <LeftColumnSkeleton />
      <RightColumnSkeleton />
    </div>
  </main>
);

export { LeftColumnSkeleton,
  RightColumnSkeleton,
HomePageSkeleton };