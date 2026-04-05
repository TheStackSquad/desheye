// src/components/blog/BlogGrid.js
import BlogCard from "@/components/blog/blogCard";

const BlogGrid = ({ posts = [] }) => {
  if (!posts || posts.length === 0) return null;

  // Featured post (first) gets a wide card, rest are normal
  const [featured, ...rest] = posts;

  return (
    <div role="list" aria-label="Blog posts">
      {/* Featured post — full width */}
      {featured && (
        <div role="listitem" className="mb-8">
          <BlogCard post={featured} index={0} featured />
        </div>
      )}

      {/* Rest — 2-col md, 3-col lg */}
      {rest.length > 0 && (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          role="list"
        >
          {rest.map((post, i) => (
            <div key={post.id} role="listitem">
              <BlogCard post={post} index={i + 1} priority={i < 2} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
