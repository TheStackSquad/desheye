// src/components/blog/BlogCard.js
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-[#1a2236] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-2 border border-gray-800">
        {/* Featured Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.featuredImage || "/img/UI.webp"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            // --- OPTIMIZATION ADDITIONS ---
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            // Set priority for images above the fold (e.g., the first 3-6 cards)
            // You might need to pass an 'index' prop to determine if it's high priority.
            // Assuming the first few cards are "above the fold" for better LCP.
            // For a list component, you might conditionally set this based on position.
            // For this example, we'll assume it's NOT priority unless you know for sure.
            // If this component renders on the main blog list page and is one of the first few to load:
            // priority={true}
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-outfit font-medium uppercase tracking-wide">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content remains the same for brevity... */}
        <div className="p-6">
          {/* Title */}
          <h3 className="font-playfair text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-outfit text-gray-300 text-white mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-white text-gray-400">
            <div className="flex items-center space-x-2">
              {/* Author Image - Consider using next/image here too if author has an actual image */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                {post.author.name.charAt(0)}
              </div>
              <span className="font-outfit">{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-outfit">{post.readTime}</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-[#131728] text-gray-400 px-2 py-1 rounded text-xs font-outfit border border-gray-700"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="text-gray-500 text-xs font-outfit">
                +{post.tags.length - 2} more
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
