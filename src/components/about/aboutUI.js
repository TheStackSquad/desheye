//src.components/about/aboutUi.js

import React from "react";
import { uiData } from "@/data/dataUI";

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

    {/* Skills Grid with Dynamic Sizing and Spacing */}
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-10 
    gap-x-4 md:gap-x-8 justify-items-center">
      {uiData.about.skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="bg-gray-800 p-3 md:p-4 rounded-full flex items-center justify-center 
          h-16 w-16 md:h-20 md:w-20 shadow-lg">
            {/* The icon itself should be responsive */}
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
  </div>
);

export default AboutUI;
