// src/app/components/skeleton/education-skeleton.jsx
import React from 'react';
import { Skeleton } from '@/components/skeleton/base-skeleton';

export const EducationPageSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      {/* Header Section Skeleton */}
      <div className="text-center mb-8 space-y-4">
        <Skeleton className="h-8 w-2/3 mx-auto" /> {/* Simulated Title */}
        <Skeleton className="h-6 w-1/3 mx-auto rounded-full" /> {/* Simulated Period */}
      </div>

      {/* Main Card Skeleton */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
        {/* School Info Skeleton */}
        <div className="flex items-start space-x-4">
          <Skeleton className="h-12 w-12 bg-purple-100 rounded-xl" /> {/* Icon */}
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-1/2" /> {/* Simulated School Name */}
            <Skeleton className="h-4 w-full" /> {/* Simulated Description Line 1 */}
            <Skeleton className="h-4 w-5/6" /> {/* Simulated Description Line 2 */}
          </div>
        </div>

        {/* Highlights Skeleton */}
        <ul className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Skeleton className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" /> {/* Bullet Point */}
              <Skeleton className="h-4 w-3/4" /> {/* Highlight */}
            </li>
          ))}
        </ul>

        {/* Certificate Toggle Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-full rounded-xl" /> {/* Simulated Button */}
          <Skeleton className="h-48 w-full bg-gray-100 rounded-lg" /> {/* Certificate Viewer */}
        </div>
      </div>
    </div>
  </div>
);
