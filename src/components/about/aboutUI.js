// src/components/about/aboutUi.js
import React from "react";
import { uiData } from "@/data/dataUI";

const AboutUI = ({ cinzel }) => (
  <div
    className="bg-white p-6 md:p-12 rounded-3xl border border-amber-200/60
  shadow-2xl hover:shadow-3xl transition-all duration-500 hover:translate-y-[-4px] 
  backdrop-blur-sm relative overflow-hidden"
  >
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100/10 via-transparent to-transparent pointer-events-none" />

    {/* Section Header */}
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 relative z-10">
      <div>
        <h2
          className={`${cinzel.variable} text-3xl md:text-5xl font-bold text-indigo-700 mb-3`}
        >
          {uiData.about.heading}
        </h2>
        <p className="text-lg md:text-xl text-slate-600 lead-text">
          Full-Stack Developer & UI/UX Designer
        </p>
      </div>
    </div>

    {/* Enhanced Description */}
    <p
      className="text-slate-700 text-lg md:text-xl leading-relaxed mb-12 lead-text border-l-4 border-amber-400 pl-6 py-2 bg-amber-50/50 rounded-r-lg"
      dangerouslySetInnerHTML={{ __html: uiData.about.description }}
    />

    {/* Skills Grid */}
    <h3 className={`${cinzel.variable} text-2xl md:text-3xl font-semibold text-slate-800 mb-8 pb-3 border-b border-amber-200/60 subtle-text`}>
      Technical Stack
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center mb-16">
      {uiData.about.skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center group"
        >
          <div
            className="bg-white p-4 rounded-2xl flex items-center justify-center 
            h-20 w-20 shadow-lg border border-amber-100 group-hover:shadow-xl 
            group-hover:border-indigo-300 group-hover:scale-110 transition-all duration-300"
          >
            {React.cloneElement(skill.icon, {
              className:
                "w-10 h-10 text-indigo-600 group-hover:text-indigo-700 transition-colors",
            })}
          </div>
          <p className="text-slate-700 text-sm font-medium mt-4 group-hover:text-slate-900 transition-colors">
            {skill.name}
          </p>
        </div>
      ))}
    </div>

    {/* Hobbies Section */}
    <h3 className={`${cinzel.variable}text-2xl md:text-3xl font-semibold text-slate-800 mb-8 pb-3 border-b border-amber-200/60 subtle-text`}>
      Personal Interests
    </h3>
    <div className="flex flex-col lg:flex-row gap-6">
      {uiData.about.hobbies.map((hobby, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 
          border border-amber-100 shadow-lg hover:shadow-xl hover:border-indigo-200 
          transition-all duration-300 flex-1 group backdrop-blur-sm"
        >
          <div className="flex-shrink-0 pt-1">
            {React.cloneElement(hobby.icon, {
              className:
                "w-8 h-8 md:w-10 md:h-10 text-amber-600 group-hover:text-indigo-600 transition-colors",
            })}
          </div>
          <div>
            <p className="text-lg font-semibold text-indigo-700 mb-2 accent-text">
              {hobby.name}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {hobby.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUI;
