// src/components/common/buttons/readingProgressBar.js

"use client"; // This directive marks the file as a Client Component

import { useEffect, useRef } from "react";

export default function ReadingProgressBar() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateReadingProgress = () => {
      const scrollTop = window.pageYOffset;
      // Use document.body.offsetHeight or scrollHeight to ensure maximum height is used
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = Math.min(scrollPercent, 100) + "%";
      }
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateReadingProgress);
        ticking = true;
      }
    };

    // Initial call and event listener
    requestTick();
    window.addEventListener("scroll", requestTick);
    window.addEventListener("resize", requestTick); // Recalculate on resize

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []); // Empty dependency array ensures this runs once after mount

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/30">
      <div
        ref={progressBarRef}
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
}
