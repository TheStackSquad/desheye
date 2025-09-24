//src/components/skills/skillUI.js

import React from "react";
import { uiData } from "@/data/dataUI";

const SkillUI = () => (
  <>
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-white">
        {uiData.services.heading}
      </h2>
      <p className="text-sm text-gray-400 mt-1">
        A Frontend Developer and UI/UX Designer
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {uiData.services.items.map((service, index) => (
        <div
          key={index}
          className="relative p-6 bg-[#181D30] rounded-2xl border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default SkillUI;
