// src/components/blog/BlogCard.js

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";

// Category accent colours
const CAT_COLORS = {
  technical: {
    bg: "bg-[#7B5CF0]/15",
    text: "text-[#a78bfa]",
    border: "border-[#7B5CF0]/30",
  },
  design: {
    bg: "bg-[#FF4D00]/15",
    text: "text-[#fb923c]",
    border: "border-[#FF4D00]/30",
  },
  default: {
    bg: "bg-white/8",
    text: "text-gray-300",
    border: "border-white/15",
  },
};

function getCatStyle(category = "") {
  const key = category.toLowerCase();
  return CAT_COLORS[key] || CAT_COLORS.default;
}

// ── Featured (wide) card ──────────────────────────────────────────────────────
function FeaturedCard({ post }) {
  const cat = getCatStyle(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      aria-label={`Read article: ${post.title}`}
      className="block group"
    >
      <article
        className="relative w-full overflow-hidden rounded-3xl border border-white/10
          bg-[#13162A] hover:border-[#7B5CF0]/40 transition-all duration-500
          hover:shadow-2xl hover:shadow-violet-900/20"
        style={{ minHeight: "420px" }}
      >
        {/* Image — right 50% on md+ */}
        <div
          className="md:absolute md:inset-y-0 md:right-0 md:w-1/2 relative
          w-full h-56 md:h-auto overflow-hidden"
        >
          <Image
            src={post.featuredImage || "/img/UI.webp"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={90}
          />
          {/* Dark gradient to blend into card on desktop */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#13162A] via-[#13162A]/40
            to-transparent hidden md:block"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#13162A] to-transparent
            md:hidden"
          />
        </div>

        {/* Text content */}
        <div
          className="relative z-10 p-7 sm:p-10 md:w-1/2 flex flex-col
          justify-between h-full"
          style={{ minHeight: "inherit" }}
        >
          <div>
            {/* Badge */}
            <span
              className={`inline-flex items-center text-[10px] font-cinzel font-bold
              tracking-widest uppercase px-3 py-1.5 rounded-full border mb-5
              ${cat.bg} ${cat.text} ${cat.border}`}
            >
              Featured · {post.category}
            </span>

            <h2
              className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold
              text-white leading-tight mb-4 group-hover:text-[#c4b5fd]
              transition-colors duration-300"
            >
              {post.title}
            </h2>

            <p
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6
              font-outfit line-clamp-3"
            >
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-outfit font-medium text-gray-500
                    bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4D00]
                to-[#7B5CF0] flex items-center justify-center text-white
                text-xs font-bold flex-shrink-0"
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white font-outfit">
                  {post.author.name}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-outfit">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                  <span>·</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="w-10 h-10 rounded-full bg-[#7B5CF0]/20 border
              border-[#7B5CF0]/30 flex items-center justify-center
              group-hover:bg-[#7B5CF0] group-hover:border-[#7B5CF0]
              transition-all duration-300 flex-shrink-0"
            >
              <ArrowUpRight
                className="w-4 h-4 text-[#7B5CF0] group-hover:text-white
                transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Standard card ─────────────────────────────────────────────────────────────
function StandardCard({ post, priority }) {
  const cat = getCatStyle(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      aria-label={`Read article: ${post.title}`}
      className="block group h-full"
    >
      <article
        className="h-full flex flex-col rounded-2xl overflow-hidden border border-white/10
          bg-[#13162A] hover:border-[#7B5CF0]/35 transition-all duration-400
          hover:shadow-xl hover:shadow-violet-900/15 hover:-translate-y-1"
      >
        {/* Image */}
        <div
          className="relative w-full aspect-[16/10] overflow-hidden bg-[#0D0F1A]
          flex-shrink-0"
        >
          <Image
            src={post.featuredImage || "/img/UI.webp"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-106"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            quality={85}
            loading={priority ? "eager" : "lazy"}
          />
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#13162A]/70
            via-transparent to-transparent opacity-0 group-hover:opacity-100
            transition-opacity duration-400"
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center text-[9px] font-cinzel font-bold
              tracking-widest uppercase px-2.5 py-1.5 rounded-full border backdrop-blur-sm
              ${cat.bg} ${cat.text} ${cat.border}`}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 bg-white/80">
          <h3
            className="font-playfair text-lg sm:text-xl font-bold text-gray-900
            leading-snug mb-2.5 line-clamp-2 group-hover:text-[#c4b5fd]
            transition-colors duration-300"
          >
            {post.title}
          </h3>

          <p
            className="text-gray-900 text-sm leading-relaxed mb-4 line-clamp-3
            font-outfit flex-1"
          >
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-outfit font-medium text-gray-900
                  bg-white/4 border border-white/8 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-[9px] font-outfit text-gray-700">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between pt-4
            border-t border-white/6 mt-auto"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF4D00]
                to-[#7B5CF0] flex items-center justify-center text-white
                text-xs font-bold flex-shrink-0"
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-300 font-outfit">
                  {post.author.name}
                </p>
                <p className="text-[10px] text-gray-600 font-outfit">
                  {post.readTime}
                </p>
              </div>
            </div>
            <time
              dateTime={post.date}
              className="text-[10px] text-gray-600 font-outfit"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function BlogCard({
  post,
  index = 0,
  featured = false,
  priority = false,
}) {
  if (featured) return <FeaturedCard post={post} />;
  return <StandardCard post={post} priority={priority} />;
}