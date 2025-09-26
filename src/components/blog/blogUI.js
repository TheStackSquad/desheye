// src/components/blog/BlogUI.js
import BlogGrid from "@/components/blog/blogGrid";
import { technicalBlogPosts } from "@/data/blogData/technical";

const BlogUI = () => {
  return (
    <div className="min-h-screen bg-[#131728] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Insights & Stories
          </h1>
          <p className="font-outfit text-gray-300 text-lg max-w-2xl mx-auto">
            Exploring the future of web development, AI integration, and the
            evolving role of developers in the modern tech ecosystem.
          </p>
        </header>

        {/* Blog Grid */}
        <BlogGrid posts={technicalBlogPosts} />

        {/* Load More/Footer (for future pagination) */}
        <div className="text-center mt-16">
          <button className="font-outfit bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogUI;
