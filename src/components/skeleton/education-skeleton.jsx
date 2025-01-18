// src/app/components/skeleton/education-skeleton.jsx
import React from 'react';
import { Skeleton } from '@/components/skeleton/base-skeleton';

export const EducationPageSkeleton = () => (
  <div className="education-page">
    <div className="education-container">
      <div className="education-header">
        <div className="main-wrap">
          <Skeleton className="skeleton-title" /> {/* Title */}
          <div className="iconContain">
            <Skeleton className="skeleton-icon" /> {/* Icon */}
            <Skeleton className="skeleton-period" /> {/* Period */}
          </div>
        </div>

        <div className="education-card">
          <div className="card-header">
            <Skeleton className="skeleton-award-icon" /> {/* Award icon */}
            <div className="description">
              <Skeleton className="skeleton-school-name" /> {/* School name */}
              <Skeleton className="skeleton-description" /> {/* Description */}
            </div>
          </div>

          <div className="highlights">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="skeleton-bullet" /> {/* Bullet */}
                <Skeleton className="skeleton-highlight-text" /> {/* Highlight text */}
              </div>
            ))}
          </div>

          <Skeleton className="skeleton-certificate-button" /> {/* Certificate button */}
        </div>
      </div>
    </div>
  </div>
);
