//src/components/blog/blogUI.js

import React from "react";
import { BookText, Clock } from "lucide-react";

// Placeholder data to demonstrate the UI
const posts = [
  {
    title: "Understanding React Hooks: useState",
    tagline: "A quick dive into the most common React hook.",
    readTime: "2 min read",
    date: "October 26, 2023",
    slug: "understanding-react-hooks",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    title: "CSS-in-JS vs. Tailwind CSS: A Developer's Perspective",
    tagline: "Exploring the trade-offs between two popular styling approaches.",
    readTime: "3 min read",
    date: "September 15, 2023",
    slug: "css-in-js-vs-tailwind",
    tags: ["CSS", "Tailwind CSS", "Styling"],
  },
  {
    title: "The Power of a Monorepo for Frontend Development",
    tagline:
      "How a single repository can streamline your development workflow.",
    readTime: "4 min read",
    date: "August 10, 2023",
    slug: "monorepo-for-frontend",
    tags: ["Monorepo", "Development", "Tools"],
  },
];

const BlogUI = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Technical Write-Ups
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A collection of my thoughts on web development, tools, and best
            practices. Designed for quick, 2-minute reads to get you up to
            speed.
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="grid gap-8">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`}>
              <div
                className="
                relative p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-lg
                hover:shadow-2xl hover:border-purple-600 transition-all duration-300
                group cursor-pointer
              "
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-400">{post.tagline}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-row md:flex-col items-center md:items-end text-sm text-gray-500 font-medium">
                    <span className="flex items-center space-x-1 mr-4 md:mr-0 md:mb-1">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogUI;
