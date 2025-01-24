//src/components/skeleton/ team-skeleton.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Variants for animations
const skeletonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardSkeletonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export const TeamPageSkeleton = () => {
  return (
    <motion.div
      variants={skeletonVariants}
      initial="hidden"
      animate="visible"
      className="px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Title Skeleton */}
        <div className="text-center">
          <div className="h-8 w-2/5 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-4 w-3/5 bg-gray-200 rounded-lg mx-auto mt-2 animate-pulse"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              variants={cardSkeletonVariants}
              className="bg-white shadow-md rounded-lg p-4 animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto"></div>
              {/* Name Skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 rounded-lg mt-4 mx-auto"></div>
              {/* Title Skeleton */}
              <div className="h-4 w-1/2 bg-gray-200 rounded-lg mt-2 mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
