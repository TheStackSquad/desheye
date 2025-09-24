// src/components/home/ScrollIndicator.js
"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import FloatingElement from "./floatingElement";

const ScrollIndicator = ({ delay, isVisible, scrollToWork }) => {
  const handleScrollClick = () => {
    if (scrollToWork) scrollToWork();
  };

  return (
    <FloatingElement
      delay={delay}
      isVisible={isVisible}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    >
      <div
        className="flex flex-col items-center space-y-2 animate-bounce hover:scale-110 transition-transform duration-300"
        onClick={handleScrollClick}
        style={{ willChange: "transform" }}
      >
        <p className="text-sm text-gray-400 font-medium">Scroll to explore</p>
        <ArrowDown className="w-5 h-5 text-gray-400" />
      </div>
    </FloatingElement>
  );
};

export default ScrollIndicator;
