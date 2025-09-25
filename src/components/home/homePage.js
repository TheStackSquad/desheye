//src/components/home/homePage.js

"use client";

import React from "react";
import HeroSection from "./heroSection";
import { uiData } from "@/data/dataUI";

const Homepage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection data={uiData.header} />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
