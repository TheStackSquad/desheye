//src/app/Team/page.js
'use client';

import React, { useEffect, useState } from 'react';
import TeamUI from '@/components/TeamUI';

export default function TeamPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen flex items-center justify-center">
      {loading ? (
        <p className="text-xl font-semibold text-purple-600 animate-pulse">
          Loading...
        </p>
      ) : (
        <TeamUI />
      )}
    </div>
  );
  
}
