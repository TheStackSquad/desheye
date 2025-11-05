// src/components/blog/BlogUI.js
"use client";

import { useState, useMemo } from "react";
import BlogGrid from "@/components/blog/blogGrid";
import { technicalBlogPosts } from "@/data/blogData/technical";
import { designBlogPosts } from "@/data/blogData/design";

const BlogUI = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Combine and sort posts by date (newest first)
  const allBlogPosts = useMemo(() => {
    return [...technicalBlogPosts, ...designBlogPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allBlogPosts.map((post) => post.category));
    return ["all", ...Array.from(cats)];
  }, [allBlogPosts]);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [allBlogPosts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Header */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-blue-50 rounded-full">
            <span className="text-blue-600 text-sm font-outfit font-semibold uppercase tracking-wider">
              Blog & Insights
            </span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Tech Insights & Stories
          </h1>

          <p className="font-outfit text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Exploring the future of web development, AI integration, and the
            evolving role of developers in the modern tech ecosystem.
          </p>
        </header>

        {/* Filters & Search Section */}
        <div className="mb-10 sm:mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 font-outfit text-gray-900 placeholder-gray-400 bg-white shadow-sm"
                aria-label="Search blog posts"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-outfit font-medium text-sm sm:text-base capitalize transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white shadow-lg shadow-gray-900/20 scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="font-outfit text-gray-500 text-sm">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredPosts.length}
              </span>{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <BlogGrid posts={filteredPosts} />

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="font-outfit text-gray-600 mb-6">
              Try adjusting your search or filter to find what you&apos;re looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="inline-flex items-center font-outfit bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12 sm:mt-16">
            <button className="inline-flex items-center gap-2 font-outfit bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg">
              <span>Load More Articles</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogUI;
