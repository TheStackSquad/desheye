//src/app/motion/motionUtils.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../../css/customProgressIndicator.css';

const CustomProgressIndicator = ({ 
  percentage = 0,
  label = '',
  description = '',
  color = '#6B5DE5',
  size = 120
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 8;
  const viewBoxSize = 100;
  
  const progressVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: { 
      strokeDashoffset: circumference - (percentage / 100) * circumference,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div 
      className="progress-container"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="progress-circle-container">
        <svg 
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="progress-circle-svg"
        >
          <circle
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
            r={radius}
            fill="none"
            stroke="#E6E6FA"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            variants={progressVariants}
            initial="hidden"
            animate={controls}
            strokeLinecap="round"
          />
        </svg>
        <div className="percentage-text">
          <motion.span 
            className="percentage-text-content"
            style={{ color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {percentage}%
          </motion.span>
        </div>
      </div>

      <motion.h3 
        className="label-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {label}
      </motion.h3>
      <motion.p 
        className="description-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default CustomProgressIndicator;
