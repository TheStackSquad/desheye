// src/app/about/page.js
"use client";

import React from "react";
import AboutUI from "@/components/about/aboutUI";

const AboutPage = () => {
  return (
    <div className="bg-[#131728] text-white font-sans min-h-screen">
      <main className="container mx-auto px-4 md:px-8 py-16">
        <AboutUI />
      </main>
    </div>
  );
};

export default AboutPage;
