// src/components/blog/BlogGrid.js
import BlogCard from "@/components/blog/blogCard";

const BlogGrid = ({ posts = [] }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-outfit text-gray-400 text-lg">
          No blog posts found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
