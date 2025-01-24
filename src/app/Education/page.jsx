//src/app/Education/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import EducationalUI from '@/components/EducationalUI';
import { Skeleton } from '@/components/skeleton/base-skeleton'; // Import a reusable skeleton or create a loading indicator

export default function EducationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="educationUI min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      {loading ? (
        <div className="space-y-4 text-center">
          <Skeleton className="h-8 w-1/3 bg-gray-300 mx-auto" /> {/* Simulated Title */}
          <Skeleton className="h-4 w-2/3 bg-gray-200 mx-auto" /> {/* Simulated Description */}
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 md:py-16">
          <EducationalUI />
        </div>
      )}
    </div>
  );
}
