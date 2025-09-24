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
import SectionWrapper from "@/animation/homeAnimate";

const Contact = () => (
  <SectionWrapper sectionId="contact">
    <div className="bg-[#181D30] p-12 md:p-24 rounded-3xl text-center border border-gray-700">
      <h2 className="text-4xl font-bold text-white mb-4">
        Got An Idea? Let’s Bring It To Life!
      </h2>
      <p className="text-gray-400 text-lg mb-8">
        A Frontend Developer and UI/UX Designer, I have been designing and
        building user interfaces.
      </p>
    </div>
  </SectionWrapper>
);

const Footer = () => (
  <footer className="py-8 text-center text-gray-400">
    <div className="flex justify-center space-x-6">
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
    <div className="bg-[#131728] text-white font-sans">
      <Homepage />
      <Footer />
    </div>
  );
};

export default Page;
