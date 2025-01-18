import React from 'react';
import { motion } from 'framer-motion';

const CustomProgressIndicator = ({ 
  percentage = 0,
  label = '',
  description = '',
  color = '#6366f1',
  delay = 0
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="flex flex-col items-center p-4"
    >
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
            className="opacity-25"
          />
          <motion.circle
            cx="64"
            cy="64"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset: circumference - (percentage / 100) * circumference 
            }}
            transition={{ 
              duration: 2,
              delay: delay * 0.2,
              ease: "easeInOut"
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay * 0.2 + 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      
      <motion.h3 
        className="mt-4 text-lg font-semibold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.2 + 0.3 }}
      >
        {label}
      </motion.h3>
      
      <motion.p 
        className="mt-2 text-sm text-gray-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.2 + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default CustomProgressIndicator;