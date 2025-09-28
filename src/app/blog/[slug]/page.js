// src/app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { technicalBlogPosts } from "@/data/blogData/technical";
// The client component imports are kept to show their intended usage,
// but the in-line client logic they replace is removed.
// We'll remove the unused ones if they are not added to the JSX, but for now,
// we assume they are replacing the logic below.
import ShareButton from "@/components/common/buttons/shareButton";
import ReadingProgressBar from "@/components/common/buttons/readingProgressBar";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return technicalBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  // FIX: params is an object, no need to await it
  const { slug } = params;
  const post = technicalBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      ),
    };
  }

  return {
    title: `${post.title} | Desheye Blog`,
    description: post.excerpt,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    ),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage || "/img/UI.webp",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      siteName: "Desheye Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || "/img/UI.webp"],
      creator: `@${post.author.name.replace(" ", "").toLowerCase()}`,
    },
    authors: [{ name: post.author.name, url: "#" }],
    category: post.category,
    keywords: post.tags.join(", "),
  };
}

export default async function BlogPostPage({ params }) {
  // FIX: params is an object, no need to await it
  const { slug } = params;
  const post = technicalBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Calculate reading time if not provided
  const wordCount = post.content.replace(/<[^>]*>/g, "").split(" ").length;
  const estimatedReadTime = Math.ceil(wordCount / 200);
  const readTime = post.readTime || `${estimatedReadTime} min read`;

  // Get related posts
  const relatedPosts = technicalBlogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1419] via-[#131728] to-[#1a1f35]">
      {/* Enhanced Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-[#131728]/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button - Enhanced */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-outfit text-slate-400 hover:text-white transition-all duration-200 group font-medium"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">Back to Blog</span>
              <span className="sm:hidden">Back</span>
            </Link>

            {/* Navigation Actions */}
            <div className="flex items-center gap-4">
              {/* Share Button: Replaced with the imported <ShareButton /> component,
                  The original button with onClick logic is removed. */}
              <ShareButton post={post} />

              {/* Reading Progress */}
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{readTime}</span>
              </div>
            </div>
          </div>

          {/* Reading Progress Bar: Replaced with the imported <ReadingProgressBar /> component.
              The original static div and the script block are removed. */}
          <ReadingProgressBar />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Post Header - Enhanced Mobile/Desktop */}
        <header className="mb-12 lg:mb-16">
          {/* Category Badge with Animation */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-outfit font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {post.category}
            </span>
          </div>

          {/* Enhanced Title - Responsive Typography */}
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight text-center px-2 sm:px-0 bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
            {post.title}
          </h1>

          {/* Enhanced Excerpt */}
          <p className="font-outfit text-lg sm:text-xl lg:text-2xl text-slate-300 italic max-w-4xl mx-auto mb-12 text-center leading-relaxed px-4 sm:px-0">
            {post.excerpt}
          </p>

          {/* Enhanced Author & Meta Info Card */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-slate-700/50 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              {/* Author Info with Enhanced Design */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-full bg-[#131728] flex items-center justify-center">
                      <span className="text-white font-bold text-xl lg:text-2xl">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#131728] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-white font-semibold text-lg lg:text-xl font-outfit">
                    {post.author.name}
                  </p>
                  <p className="text-slate-400 text-sm lg:text-base font-outfit">
                    {post.author.role || "Technical Writer"}
                  </p>
                  <p className="text-blue-400 text-xs lg:text-sm font-outfit">
                    Verified Author
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
              <div className="sm:hidden w-full h-px bg-slate-700"></div>

              {/* Date & Reading Time with Icons */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-slate-300 font-outfit">
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-400 font-outfit">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{readTime}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-400 font-outfit text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>{Math.ceil(wordCount / 1000)}k words</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Featured Image with Responsive Design */}
        <div className="relative mb-12 lg:mb-16 group">
          <div className="relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/9] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/50">
            <Image
              src={post.featuredImage || "/img/UI.webp"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />

            {/* Image Overlay for Better Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Image Caption (if available) */}
            {post.imageCaption && (
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-outfit bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  {post.imageCaption}
                </p>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
        </div>

        {/* Enhanced Post Content with Better Typography */}
        <article className="prose prose-lg lg:prose-xl max-w-none prose-invert prose-headings:font-playfair prose-p:font-outfit">
          <div
            className="text-slate-300 prose-headings:text-white prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-slate-700 prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-800/30 prose-blockquote:text-slate-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
              letterSpacing: "0.01em",
            }}
          />
        </article>

        {/* Enhanced Tags Section */}
        <footer className="mt-16 lg:mt-20 pt-8 border-t border-slate-800">
          <div className="mb-6">
            <h3 className="text-slate-400 font-outfit text-sm uppercase tracking-wider mb-4">
              Tagged in:
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-outfit border border-slate-700/50 hover:border-slate-600/50 transition-all duration-200 cursor-pointer transform hover:scale-105"
                >
                  <span className="mr-2">#</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Sharing */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
            <span className="text-slate-400 font-outfit text-sm">
              Share this article:
            </span>
            <div className="flex gap-3">
              {["twitter", "linkedin", "facebook"].map((platform) => (
                <button
                  key={platform}
                  type="button"
                  className="w-10 h-10 rounded-full bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-600/50 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label={`Share on ${platform}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Placeholder for platform-specific SVG paths */}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </footer>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-800">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4">
                More from this topic
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[16/10] bg-slate-900/50">
                      <Image
                        src={relatedPost.featuredImage || "/img/UI.webp"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <span className="text-xs font-outfit text-blue-400 uppercase tracking-wider mb-2">
                        {relatedPost.category}
                      </span>

                      <h3 className="font-playfair font-bold text-white text-lg mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors flex-grow">
                        {relatedPost.title}
                      </h3>

                      <p className="font-outfit text-slate-400 text-sm line-clamp-3 mb-4">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-slate-500 mt-auto">
                        <span>
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1 text-blue-400 group-hover:gap-2 transition-all">
                          Read more
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
