// src/components/blog/BlogGrid.js
import BlogCard from "@/components/blog/blogCard";

const BlogGrid = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return null; // Empty state handled by parent component
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr"
      role="list"
      aria-label="Blog posts"
    >
      {posts.map((post, index) => (
        <div key={post.id} role="listitem">
          <BlogCard
            post={post}
            priority={index < 3} // First 3 cards get priority loading
          />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
