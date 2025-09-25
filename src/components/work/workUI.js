//src/components/work/workUI.js

import React, { useRef } from "react";
import { uiData } from "@/data/dataUI";
import Image from "next/image";

const FeaturedWork = () => {
  const carouselRef = useRef(null);
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 800; // Adjust scroll amount as needed
      if (direction === "left") {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <div className="mb-2">
        <h2 className="text-4xl font-bold text-white">
          {uiData.featuredWork.heading}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          A Frontend Developer and UI/UX Designer
        </p>
      </div>
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory space-x-8 pb-4"
        >
          {uiData.featuredWork.projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[50vw] snap-center"
            >
              <div className="bg-[#181D30] rounded-3xl shadow-lg overflow-hidden border border-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800} // Set a width
                  height={600} // Set a height
                  className="w-full h-auto object-cover rounded-t-3xl"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xl font-light text-yellow-500">
                    {project.tagline}
                  </p>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-10">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedWork;
