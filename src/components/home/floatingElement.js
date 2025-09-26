// src/components/home/floatingElement.js
"use client";

import React from "react";

const FloatingElement = ({
  children,
  delay = 0,
  className = "",
  isVisible,
}) => (
  <div
    className={`transform transition-all duration-1000 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    } ${className}`}
    style={{
      transitionDelay: `${delay}ms`,
      willChange: "transform, opacity",
    }}
  >
    {children}
  </div>
);

export default FloatingElement;
