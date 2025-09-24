// src/components/home/ExperienceBadge.js
"use client";

import React from "react";
import { Palette } from "lucide-react";
import FloatingElement from "./floatingElement";

const ExperienceBadge = ({ delay, isVisible, experience }) => {
  return (
    <FloatingElement
      delay={delay}
      isVisible={isVisible}
      className="absolute bottom-8 right-8"
    >
      <div className="group relative">
        <div
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          style={{ willChange: "transform" }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Palette className="w-6 h-6 text-purple-400" />
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {experience}
              </p>
            </div>
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
              Years Experience
            </p>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>

        {/* Floating accent */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
      </div>
    </FloatingElement>
  );
};

export default ExperienceBadge;
