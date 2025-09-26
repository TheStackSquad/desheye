// src/components/home/animatedBackground.js
"use client";

import React from "react";

const AnimatedBackground = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0">
      {/* Gradient Orbs */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${
            mousePosition.y * 0.1
          }px)`,
          left: "10%",
          top: "20%",
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -0.05}px, ${
            mousePosition.y * -0.05
          }px)`,
          right: "10%",
          bottom: "20%",
        }}
      />

      {/* Floating Particles - Reduced from 20 to 12 for better performance */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
