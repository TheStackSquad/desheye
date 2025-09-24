//src/components/experience/experienceUI.js

import React from "react";
import { uiData } from "@/data/dataUI";

const ExperienceUI = () => (
  <>
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-white">
        {uiData.experience.heading}
      </h2>
      <p className="text-sm text-gray-400 mt-1">
        A Frontend Developer and UI/UX Designer
      </p>
    </div>
    <div className="space-y-4">
      {uiData.experience.history.map((item, index) => (
        <div
          key={index}
          className="bg-[#181D30] p-6 rounded-2xl border border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="text-sm text-gray-400">{item.company}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p className="text-white text-sm">{item.type}</p>
              <p className="text-gray-400 text-xs">{item.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ExperienceUI;
