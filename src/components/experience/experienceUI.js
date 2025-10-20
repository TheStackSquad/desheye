//src/components/experience/experienceUI.js

import React from "react";
import { uiData } from "@/data/dataUI";

const ExperienceUI = () => (
  <div className="">
    {/* Section Header */}
    <div className="mb-12 px-5">
      <h2 className="text-4xl md:text-5xl font-bold text-black py-9 mb-5">
        {uiData.experience.heading}
      </h2>
      <p className="text-base md:text-lg text-gray-900">
        A Frontend Developer and UI/UX Designer
      </p>
    </div>

    {/* Experience Cards Grid */}
    <div className="grid grid-cols-1 px-5 gap-4 md:gap-6">
      {uiData.experience.history.map((item, index) => (
        <div
          key={index}
          className="bg-gray-150 p-6 md:p-8 rounded-2xl border border-gray-700 
          shadow-lg transition-all duration-300 ease-in-out
          transform hover:scale-[1.01] hover:border-yellow-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Role & Company Group */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                {item.role}
              </h3>
              <p className="text-sm md:text-base text-black mt-1">
                {item.company}
              </p>
            </div>
            {/* Type & Duration Group */}
            <div className="md:text-right">
              <p className="text-black text-base md:text-lg font-medium">
                {item.type}
              </p>
              <p className="text-black text-xs md:text-sm mt-1">
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