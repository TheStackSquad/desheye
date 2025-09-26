// src/components/home/actionButtons.js
'use client';

import React from "react";
import { FileText, Code } from "lucide-react";

const ActionButtons = ({ scrollToWork, scrollToContact }) => {
  const handleWorkClick = () => {
    if (scrollToWork) scrollToWork();
  };

  const handleContactClick = () => {
    if (scrollToContact) scrollToContact();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
      <button 
        onClick={handleWorkClick}
        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
        style={{ willChange: 'transform' }}
      >
        <span className="relative z-10 flex items-center space-x-2">
          <FileText className="w-5 h-5" />
          <span>View My Work</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      <button 
        onClick={handleContactClick}
        className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full transition-all duration-300 hover:border-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
        style={{ willChange: 'transform' }}
      >
        <span className="flex items-center space-x-2">
          <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Let&apos;s Connect</span>
        </span>
      </button>
    </div>
  );
};

export default ActionButtons;





