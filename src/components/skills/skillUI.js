//src/components/skills/skillUI.js

import React from "react";
import { uiData } from "@/data/dataUI";

const SkillUI = () => (
  <div className="relative">
    {/* Section Header */}
    <div className="mb-12 text-center">
      <div className="relative inline-block">
        {/* Background glow effect */}
        <div
          className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        <h2 className="relative text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {uiData.services.heading}
          </span>
        </h2>
      </div>

      <div className="relative mt-3">
        <p className="text-gray-400 text-lg font-light tracking-wide">
          A Frontend Developer and UI/UX Designer
        </p>
        {/* Subtle underline */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </div>
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
      {uiData.services.items.map((service, index) => (
        <div
          key={index}
          className="group relative overflow-hidden"
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
          }}
        >
          {/* Animated background glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />

          {/* Main card */}
          <div className="relative h-full p-8 bg-gradient-to-br from-[#1a1f35] to-[#181D30] rounded-2xl border border-gray-700/50 shadow-lg backdrop-blur-sm transform transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:border-gray-600/70 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Service number indicator */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-gray-600/30 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <span className="text-xs font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-xs font-medium text-purple-400/70 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span>Learn more</span>
                <svg
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
          </div>
        </div>
      ))}
    </div>

    {/* Floating background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/8 to-pink-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>

    {/* CSS animations for performance optimization */}
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Optimize animations with will-change and contain */
      .group {
        will-change: transform;
        contain: layout style paint;
      }

      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        .group {
          transform: none !important;
          transition: none !important;
        }

        .animate-pulse {
          animation: none !important;
        }

        div[style*="animation"] {
          animation: none !important;
        }
      }
    `}</style>
  </div>
);

export default SkillUI;
