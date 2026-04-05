// src/components/blog/BlogUI.js
"use client";

import { useState, useMemo } from "react";
import BlogGrid from "@/components/blog/blogGrid";
import { technicalBlogPosts } from "@/data/blogData/technical";
import { designBlogPosts } from "@/data/blogData/design";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

const allBlogPosts = [...technicalBlogPosts, ...designBlogPosts].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function BlogUI() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = new Set(allBlogPosts.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const matchCat =
        selectedCategory === "all" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    // ✅ Deep off-white background
    <div className="min-h-screen bg-[#F5F0EB] text-black">
      {/* ── HERO HEADER ─────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-black/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-[#F5F0EB] blur-[100px]" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF4D00]/10 blur-[80px]" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.8) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ✅ Small label — black */}
            <p
              className="text-xs font-cinzel tracking-widest uppercase
              text-black mb-4 flex items-center gap-2"
            >
              <span className="inline-block w-6 h-px bg-black" />
              Blog &amp; Insights
            </p>

            {/* ✅ XXL heading — bright red */}
            <h1
              className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold
              text-[#E8000D] leading-[1.05] tracking-tight mb-5"
            >
              Tech Insights
              <br />
              <span className="text-[#7B5CF0] italic">&#38; Stories</span>
            </h1>

            {/* ✅ Body text — black */}
            <p className="text-black text-base sm:text-lg max-w-xl leading-relaxed font-outfit">
              Exploring web development, AI integration, and the evolving role
              of engineers in the modern tech ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-8 mt-10 pt-8 border-t border-black/10"
          >
            {/* ✅ Stat numbers and labels — black */}
            <div>
              <p className="text-2xl font-bold text-black font-cinzel">
                {allBlogPosts.length}
              </p>
              <p className="text-xs text-black/60 mt-0.5 uppercase tracking-wider font-outfit">
                Articles
              </p>
            </div>
            <div className="w-px h-8 bg-black/15" />
            <div>
              <p className="text-2xl font-bold text-black font-cinzel">
                {categories.length - 1}
              </p>
              <p className="text-xs text-black/60 mt-0.5 uppercase tracking-wider font-outfit">
                Categories
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── FILTERS BAR ─────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#F5F0EB] backdrop-blur-md border-b-2 border-black/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" />
              <input
                type="search"
                placeholder="Search articles or tags…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border-2
            border-black/20 text-black text-sm placeholder-black/35 font-outfit
            focus:outline-none focus:border-[#7B5CF0] focus:bg-white
            transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-0.5 flex-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-cinzel
              font-semibold tracking-wider uppercase transition-all duration-200 border-2
              ${
                selectedCategory === cat
                  ? "bg-[#7B5CF0] text-white border-[#7B5CF0] shadow-lg shadow-violet-500/30"
                  : "bg-white text-black/60 border-black/20 hover:border-black/50 hover:text-black"
              }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="text-xs text-black/50 font-outfit whitespace-nowrap flex-shrink-0">
              <span className="text-black font-semibold">
                {filteredPosts.length}
              </span>{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </p>
          </div>
        </div>
      </div>

      {/* ── GRID ────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <BlogGrid posts={filteredPosts} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <div
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10
              flex items-center justify-center mx-auto mb-6"
            >
              <Search className="w-7 h-7 text-gray-600" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-black mb-2">
              No articles found
            </h3>
            <p className="text-black/60 font-outfit text-sm mb-8">
              Try adjusting your search or filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 rounded-full bg-[#7B5CF0] text-white text-sm
                font-cinzel font-semibold tracking-wide hover:bg-[#6d4fe0]
                transition-colors duration-200"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
