// src/app/components/skeleton/skills-skeleton.jsx
import React from 'react';
import { Skeleton } from './base-skeleton';

export const ProjectCardSkeleton = () => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
    <Skeleton className="w-full h-48 bg-gray-300" /> {/* Image placeholder */}
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4 bg-gray-300" /> {/* Title */}
      <Skeleton className="h-4 w-full bg-gray-200" /> {/* Description */}
      <Skeleton className="h-4 w-full bg-gray-200" />
      <div className="flex gap-2 mt-4">
        {[1, 2, 3].map((_, i) => (
          <Skeleton key={i} className="h-8 w-20 bg-gray-300 rounded-full" /> /* Tech stack badges */
        ))}
      </div>
    </div>
  </div>
);

export const SkillsPageSkeleton = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 animate-fadeIn">
    <main className="w-full max-w-6xl px-4 py-8">
      {/* Header Skeleton */}
      <div className="text-center space-y-4 mb-8">
        <Skeleton className="h-8 w-1/3 mx-auto bg-gray-300" /> {/* Header title */}
        <Skeleton className="h-4 w-2/3 mx-auto bg-gray-200" /> {/* Header description */}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12 space-y-4">
        <Skeleton className="h-6 w-1/2 mx-auto bg-gray-300" /> {/* Contact title */}
        <Skeleton className="h-10 w-40 mx-auto bg-gray-400 rounded-full" /> {/* Contact button */}
      </div>
    </main>
  </div>
);
