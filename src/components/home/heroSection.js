// src/components/home/HeroSection.js

"use client";
import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "./animatedBackground";
import FloatingElement from "./floatingElement";
import ExperienceBadge from "./experienceBadge";
import DecorativeElements from "./decorativeElements";

const HeroSection = ({ data }) => {
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

      {/* Main Content:
          - flex, flex-col, justify-center, items-center on ALL sizes to center content vertically/horizontally.
          - On mobile (default), all content will flow in a single, centered column.
      */}
      <header className="relative z-10 w-full min-h-screen flex flex-col
      justify-center items-center text-center px-4 py-8 md:py-0">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          {/* Hero Content Container (Text and Buttons) */}
          <div className="space-y-6 md:space-y-8 lg:space-y-12 w-full">
            {/* Greeting */}
            <FloatingElement delay={200} isVisible={isVisible}>
              <div className="flex items-center justify-center space-x-2 mb-2 md:mb-4">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
                <p className="text-sm md:text-lg font-medium text-gray-300 tracking-wider uppercase">
                  Hello, I&apos;m
                </p>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              </div>
            </FloatingElement>

            {/* Name with Enhanced Responsive Typography */}
            <FloatingElement delay={400} isVisible={isVisible}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] md:leading-none">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  {data.name}
                </span>
              </h1>
            </FloatingElement>

            {/* Title with Better Mobile Layout */}
            <FloatingElement delay={600} isVisible={isVisible}>
              <div className="relative px-4 md:px-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {data.title}
                </p>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-sm opacity-0 animate-pulse" />
              </div>
            </FloatingElement>

            {/* Enhanced Action Buttons */}
            <FloatingElement delay={800} isVisible={isVisible}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 md:mt-12">
                {/* View My Work Button */}
                <Link href="/work">
                  <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 min-w-[200px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center">
                      View My Work
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>

                {/* Let's Connect Button */}
                <Link href="/contact">
                  <button className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm min-w-[200px]">
                    <span className="relative flex items-center justify-center">
                      Let&apos;s Connect
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4v4l-4-4H5a1.994 1.994 0 01-2-2V6a2 2 0 012-2h4"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </FloatingElement>
          </div>

          {/* New Bottom Elements Container:
              - On mobile (default), it's static in the flow, centered, with margin.
              - On desktop (md:), it returns to absolute positioning at the bottom.
          */}
          <div className="mt-16 md:mt-0 md:absolute md:bottom-8 md:left-0 md:right-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 w-full">
            {/* Experience Badge */}
            <div className="order-2 md:order-1 mt-4 md:mt-0 mb-8 md:mb-0">
              <ExperienceBadge
                delay={1000}
                isVisible={isVisible}
                experience={data.experience}
              />
            </div>

            {/* Decorative Elements - Hidden on mobile for centering focus, visible on desktop */}
            <div className="order-1 md:order-2 hidden md:block">
              <DecorativeElements isVisible={isVisible} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;