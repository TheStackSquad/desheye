// src/app/about/page.js

"use client";

import React from "react";
import AboutUI from "@/components/about/aboutUI";
import { Cinzel_Decorative } from "next/font/google"; // <-- Add this import

// Define the font variable (must match the definition in layout.js)
const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
}); // <-- Add this definition

const AboutPage = () => {
  return (
    <div className="bg-gray-200 text-black min-h-screen">
      <main className="container mx-auto px-4 md:px-8 py-16">
        {/* Pass the cinzel object as a prop */}
        <AboutUI cinzel={cinzel} />
      </main>
    </div>
  );
};

export default AboutPage;
