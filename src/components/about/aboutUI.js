// src.components/about/aboutUi.js

import React from "react";
// Ensure you update the import path if necessary
import { uiData } from "@/data/dataUI";
// Import icons needed for cloning/rendering (if not already handled in dataUI)
import { Music, Zap } from "lucide-react";

const AboutUI = () => (
  <div className="bg-[#181D30] p-6 md:p-12 rounded-3xl border border-gray-700 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
    {/* Section Header with Responsive Spacing */}
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
          {uiData.about.heading}
        </h2>
        {/* Adjusted subtitle for clarity */}
        <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-4">
          A Full-Stack Developer and UI/UX Designer
        </p>
      </div>
    </div>

    {/* Enhanced Description with Responsive Typography */}
    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
      {uiData.about.description}
    </p>

    {/* Skills Grid */}
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
      Technical Stack
    </h3>
    <div
      className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-10 
    gap-x-4 md:gap-x-8 justify-items-center mb-12"
    >
      {uiData.about.skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div
            className="bg-gray-800 p-3 md:p-4 rounded-full flex items-center justify-center 
          h-16 w-16 md:h-20 md:w-20 shadow-lg"
          >
            {/* The icon/image itself should be responsive */}
            {React.cloneElement(skill.icon, {
              className: "w-10 h-10 md:w-12 md:h-12",
            })}
          </div>
          <p className="text-white text-sm md:text-base mt-3 font-medium">
            {skill.name}
          </p>
        </div>
      ))}
    </div>

    {/* --- NEW HOBBIES SECTION --- */}
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
      Personal Interests
    </h3>
    <div className="flex flex-col lg:flex-row gap-8">
      {uiData.about.hobbies.map((hobby, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-4 rounded-lg bg-[#202538] flex-1"
        >
          <div className="flex-shrink-0 pt-1">
            {/* The icon itself, using cloneElement to manage size */}
            {React.cloneElement(hobby.icon, {
              className: "w-8 h-8 md:w-10 md:h-10",
            })}
          </div>
          <div>
            <p className="text-lg font-semibold text-yellow-300 mb-1">
              {hobby.name}
            </p>
            <p className="text-gray-400 text-sm">{hobby.description}</p>
          </div>
        </div>
      ))}
    </div>
    {/* --- END HOBBIES SECTION --- */}
  </div>
);

export default AboutUI;
