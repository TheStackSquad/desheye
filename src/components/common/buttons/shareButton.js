// src/components/common/shareButton.js

"use client"; // This directive marks the file as a Client Component

import { useState } from "react";

export default function ShareButton({ postTitle, postExcerpt }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    // Check if the Web Share API is available (for mobile devices)
    if (navigator.share) {
      navigator
        .share({
          title: postTitle,
          text: postExcerpt,
          url: window.location.href,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for desktop: Copy link to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 px-3 py-2 bg-black text-white rounded-lg
      hover:bg-white hover:text-black transition-all duration-200 text-sm font-medium
      backdrop-blur-sm border border-slate-700/50"
      onClick={handleShare}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
        />
      </svg>
      <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
      <span className="sm:hidden">{copied ? "Copied" : "Share"}</span>
    </button>
  );
}
