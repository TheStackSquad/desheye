// src/components/home/HeroSection.js
"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import AnimatedBackground from "./animatedBackground";
import FloatingElement from "./floatingElement";
import ActionButtons from "./actionButtons";
import ExperienceBadge from "./experienceBadge";
import ScrollIndicator from "./scrollIndicator";
import DecorativeElements from "./decorativeElements";

const HeroSection = ({ data, scrollToWork, scrollToContact }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <AnimatedBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <header className="relative z-10 w-full h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl text-center space-y-8">
          {/* Greeting */}
          <FloatingElement delay={200} isVisible={isVisible}>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <p className="text-lg font-medium text-gray-300 tracking-wider uppercase">
                Hello, I&apos;m
              </p>
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
          </FloatingElement>

          {/* Name with Gradient */}
          <FloatingElement delay={400} isVisible={isVisible}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {data.name}
              </span>
            </h1>
          </FloatingElement>

          {/* Title with Animation */}
          <FloatingElement delay={600} isVisible={isVisible}>
            <div className="relative">
              <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {data.title}
              </p>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-sm opacity-0 animate-pulse" />
            </div>
          </FloatingElement>

          {/* Action Buttons */}
          <FloatingElement delay={800} isVisible={isVisible}>
            <ActionButtons
              scrollToWork={scrollToWork}
              scrollToContact={scrollToContact}
            />
          </FloatingElement>
        </div>

        <ScrollIndicator
          delay={1000}
          isVisible={isVisible}
          scrollToWork={scrollToWork}
        />

        <ExperienceBadge
          delay={1200}
          isVisible={isVisible}
          experience={data.experience}
        />

        <DecorativeElements isVisible={isVisible} />
      </header>
    </>
  );
};

export default HeroSection;
