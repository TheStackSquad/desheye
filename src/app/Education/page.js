'use client';

import React, { useState, useEffect } from 'react';
import EducationalUI from '@/components/EducationalUI';
import { EducationPageSkeleton } from '@/components/skeleton/education-skeleton';

export default function EducationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="educationUI min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {loading ? <EducationPageSkeleton /> : <EducationalUI />}
      </div>
    </div>
  );
}
