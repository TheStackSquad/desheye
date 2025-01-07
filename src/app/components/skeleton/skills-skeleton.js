// src/app/components/skeleton/skills-skeleton.jsx
import React from 'react';
import { Skeleton } from './base-skeleton';

export const ProjectCardSkeleton = () => (
  <div className="project-card-container">
    <Skeleton className="w-full h-48 rounded-t-lg" /> {/* Image placeholder */}
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" /> {/* Title */}
      <Skeleton className="h-4 w-full" /> {/* Description */}
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-2 mt-4">
        {[1, 2, 3].map((_, i) => (
          <Skeleton key={i} className="h-8 w-20" /> /* Tech stack badges */
        ))}
      </div>
    </div>
  </div>
);

export const SkillsPageSkeleton = () => (
  <div className="project-layout">
    <main className="project-container">
      <div className="project-header space-y-4">
        <Skeleton className="h-8 w-1/3" /> {/* Header title */}
        <Skeleton className="h-4 w-2/3" /> {/* Header description */}
      </div>

      <div className="projects-grid mt-8">
        {[1, 2, 3, 4].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>

      <div className="project-contact mt-8 space-y-4">
        <Skeleton className="h-6 w-1/2 mx-auto" /> {/* Contact title */}
        <Skeleton className="h-10 w-40 mx-auto rounded-full" /> {/* Contact button */}
      </div>
    </main>
  </div>
);