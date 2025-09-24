// src/components/home/DecorativeElements.js
"use client";

import React from "react";
import FloatingElement from "./floatingElement";

const DecorativeElements = ({ isVisible }) => {
  return (
    <>
      {/* Decorative Circle */}
      <FloatingElement
        delay={1400}
        isVisible={isVisible}
        className="absolute top-20 left-20 hidden lg:block"
      >
        <div
          className="w-20 h-20 border-2 border-purple-500/30 rounded-full animate-spin-slow"
          style={{ willChange: "transform" }}
        >
          <div className="w-full h-full border-2 border-pink-500/30 rounded-full animate-pulse" />
        </div>
      </FloatingElement>

      {/* Decorative Line */}
      <FloatingElement
        delay={1600}
        isVisible={isVisible}
        className="absolute top-40 right-32 hidden lg:block"
      >
        <div className="w-2 h-16 bg-gradient-to-b from-purple-500/50 to-transparent rotate-12 animate-pulse" />
      </FloatingElement>
    </>
  );
};

export default DecorativeElements;
