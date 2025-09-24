//src/app/skills/page.js

"use client";

import React from "react";
import SkillUI from "@/components/skills/skillUI";

const AboutPage = () => {
  return (
    <div className="bg-[#131728] text-white font-sans min-h-screen pt-24">
      <main className="container mx-auto px-4 md:px-8 py-16">
        <SkillUI />
      </main>
    </div>
  );
};

export default AboutPage;

