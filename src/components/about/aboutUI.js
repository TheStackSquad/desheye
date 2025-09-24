//src.components/about/aboutUi.js

import React from "react";
import { Figma } from "lucide-react";
import { uiData } from "@/data/dataUI";

const AboutUI = () => (
  <div className="bg-[#181D30] p-8 md:p-16 rounded-3xl border border-gray-700">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-yellow-500">
          {uiData.about.heading}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          A Frontend Developer and UI/UX Designer
        </p>
      </div>
    </div>
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      {uiData.about.description}
    </p>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center">
      {uiData.about.skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gray-800 p-4 rounded-full flex items-center justify-center h-20 w-20 shadow-lg">
            {skill.icon}
          </div>
          <p className="text-white text-sm mt-2">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUI;
