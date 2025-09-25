//src/components/experience/experienceUI.js

import React from "react";
import { uiData } from "@/data/dataUI";

const ExperienceUI = () => (
  <div className="">
    {/* Section Header */}
    <div className="mb-12 px-5">
      <h2 className="text-4xl md:text-5xl font-bold text-white py-5 mb-2">
        {uiData.experience.heading}
      </h2>
      <p className="text-base md:text-lg text-gray-400">
        A Frontend Developer and UI/UX Designer
      </p>
    </div>

    {/* Experience Cards Grid */}
    <div className="grid grid-cols-1 px-5 gap-6 md:gap-8">
      {uiData.experience.history.map((item, index) => (
        <div
          key={index}
          className="bg-[#181D30] p-6 md:p-8 rounded-2xl border border-gray-700 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:border-yellow-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Role & Company Group */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mt-1">
                {item.company}
              </p>
            </div>
            {/* Type & Duration Group */}
            <div className="md:text-right">
              <p className="text-white text-base md:text-lg font-medium">
                {item.type}
              </p>
              <p className="text-gray-400 text-xs md:text-sm mt-1">
                {item.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceUI;