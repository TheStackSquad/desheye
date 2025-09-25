// src/app/page.js
// src/app/page.js
"use client";

import React from "react";
import {
  Twitter,
  Linkedin,
  Github,
  Dribbble,
  Mail,
  Gem,
  Globe,
  Users,
  PenTool,
  Code,
  BarChart,
  Braces,
  Layers,
  Palette,
  FileText,
} from "lucide-react";
import Homepage from "@/components/home/homePage";

const Footer = () => (
  <footer className="py-8 text-center text-gray-400">
    {/* FIX: Add 'flex-wrap' to allow items to wrap to the next line on smaller screens. */}
    {/* Also, change 'space-x-6' to a combination of 'gap-4' and 'justify-center' for better wrapping control. */}
    <div className="flex flex-wrap justify-center gap-4 px-4">
      <a href="#" className="hover:text-white transition-colors">
        <Twitter size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Linkedin size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Github size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Dribbble size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Mail size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Gem size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Globe size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Users size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <PenTool size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Code size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <BarChart size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Braces size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Layers size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <Palette size={24} />
      </a>
      <a href="#" className="hover:text-white transition-colors">
        <FileText size={24} />
      </a>
    </div>
  </footer>
);

const Page = () => {
  return (
    <div className="bg-[#131728] text-white font-sans min-h-screen overflow-x-hidden">
      <Homepage />
      <Footer />
    </div>
  );
};

export default Page;
