// src/components/blog/BlogCard.js
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post, priority = false }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group h-full"
      aria-label={`Read article: ${post.title}`}
    >
      <article className="h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
        {/* Featured Image Container - Fixed aspect ratio */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={post.featuredImage || "/img/UI.webp"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            quality={85}
            loading={priority ? "eager" : "lazy"}
          />

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-outfit font-semibold uppercase tracking-wider shadow-lg">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content Section - Flexible grow */}
        <div className="flex-1 flex flex-col p-5 sm:p-6">
          {/* Title */}
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-outfit text-gray-600 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed flex-1">
            {post.excerpt}
          </p>

          {/* Tags - Now more compact */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-700 px-2.5 py-1 rounded-md text-xs font-outfit font-medium transition-colors duration-200 border border-gray-200"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-flex items-center text-gray-500 text-xs font-outfit font-medium">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          {/* Metadata Footer */}
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              {/* Author Avatar */}
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {post.author.name.charAt(0)}
              </div>
              <span className="font-outfit font-medium text-gray-700 truncate max-w-[100px]">
                {post.author.name}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="font-outfit font-medium">{post.readTime}</span>
              <span className="font-outfit">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
