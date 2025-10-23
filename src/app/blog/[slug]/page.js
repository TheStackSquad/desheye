// src/app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { technicalBlogPosts } from "@/data/blogData/technical";
import { designBlogPosts } from "@/data/blogData/design";
import ShareButton from "@/components/common/buttons/shareButton";
import ReadingProgressBar from "@/components/common/buttons/readingProgressBar";

// Combine all posts into a single array for unified searching and generation
const allBlogPosts = [...technicalBlogPosts, ...designBlogPosts];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const { slug } = params;
  // Search the combined array
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      ),
    };
  }
  // Use a default social media creator handle for robustness
  const authorHandle =
    post.author.twitter ||
    `@${post.author.name.replace(" ", "").toLowerCase()}`;

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
      creator: authorHandle,
    },
    authors: [{ name: post.author.name, url: post.author.linkedin || "#" }],
    category: post.category,
    keywords: post.tags.join(", "),
  };
}


export default async function BlogPostPage({ params }) {
  const { slug } = params;
  // Search the combined array for the post
  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Calculate reading time if not provided
  const wordCount = post.content.replace(/<[^>]*>/g, "").split(" ").length;
  const estimatedReadTime = Math.ceil(wordCount / 200);
  const readTime = post.readTime || `${estimatedReadTime} min read`;

  // Get related posts
const relatedPosts = allBlogPosts
  .filter((p) => p.slug !== post.slug && p.category === post.category)
  .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-outfit text-gray-900 hover:text-blue-600 transition-colors duration-200 group font-medium text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200"
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

            <div className="flex items-center gap-3 sm:gap-4">
              <ShareButton post={post} />
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-600 font-medium">
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
          <ReadingProgressBar />
        </div>
      </div>

      <div className="group relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] min-h-[400px] max-h-[800px] bg-gray-100 overflow-hidden cursor-pointer">
        {/* Hero Image - Centered with padding on hover */}
        <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16 transition-all duration-700">
          <div className="relative w-full h-500 group-hover:w-[85%] group-hover:h-[85%] transition-all duration-700 ease-out">
            <Image
              src={post.featuredImage || "/img/UI.webp"}
              alt={post.title}
              fill
              className="object-cover rounded-none group-hover:rounded-2xl transition-all duration-700 shadow-none group-hover:shadow-2xl"
              sizes="100vw"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Gradient Overlay - Fades out on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />

        {/* Hero Content - Fades out on hover */}
        <div className="absolute inset-0 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 w-full">
            {/* Category Badge */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-outfit font-semibold uppercase tracking-wide shadow-lg">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-2"
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

            {/* Title */}
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="font-outfit text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl drop-shadow-lg">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <span className="font-medium text-white">
                  {post.author.name}
                </span>
              </div>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span>{readTime}</span>
              <span className="hidden sm:inline text-gray-400">•</span>
              <span>{Math.ceil(wordCount / 1000)}k words</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <article className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 mb-8">
              <div className="prose prose-base sm:prose-lg lg:prose-xl max-w-none prose-headings:font-playfair prose-headings:text-gray-900 prose-p:font-outfit prose-p:text-gray-800 prose-p:leading-relaxed prose-strong:text-gray-900 prose-strong:font-semibold prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-500 prose-code:text-blue-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:text-gray-800 prose-blockquote:italic prose-img:rounded-xl prose-img:shadow-lg">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: "1.8",
                    letterSpacing: "0.015em",
                  }}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-gray-900 font-outfit text-sm uppercase tracking-wider mb-4 font-semibold">
                Tagged in:
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-gray-100 hover:bg-blue-50 text-gray-800 hover:text-blue-600 px-4 py-2 rounded-full text-sm font-outfit border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer transform hover:scale-105 font-medium"
                  >
                    <span className="mr-2 text-blue-500">#</span>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 mt-6 border-t border-gray-200 gap-4">
                <span className="text-gray-700 font-outfit text-sm font-medium">
                  Share this article:
                </span>
                <div className="flex gap-3">
                  {["twitter", "linkedin", "facebook"].map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 border border-gray-200 hover:border-blue-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 transform hover:scale-110"
                      aria-label={`Share on ${platform}`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Author Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 z-10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 mb-4">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-2xl">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-gray-900 font-semibold text-lg font-outfit mb-1">
                  {post.author.name}
                </h3>
                <p className="text-gray-600 text-sm font-outfit mb-2">
                  {post.author.role || "Technical Writer"}
                </p>
                <div className="flex items-center justify-center gap-1 text-green-600 text-xs font-medium mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Author
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {technicalBlogPosts.length}
                    </p>
                    <p className="text-xs text-gray-600">Articles</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {Math.ceil(wordCount / 1000)}k
                    </p>
                    <p className="text-xs text-gray-600">Words</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts - Desktop Only */}
            {relatedPosts.length > 0 && (
              <div className="hidden lg:block bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <article className="flex gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={relatedPost.featuredImage || "/img/UI.webp"}
                            alt={relatedPost.title}
                            fill
                            // ADD z-index utility class (z-0 is a good safe minimum)
                            className="object-cover group-hover:scale-110 transition-transform duration-300 z-0"
                            sizes="96px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-blue-600 uppercase tracking-wide font-semibold mb-1">
                            {relatedPost.category}
                          </p>
                          <h4 className="font-outfit font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {new Date(relatedPost.date).toLocaleDateString()}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Related Posts - Mobile & Tablet */}
        {relatedPosts.length > 0 && (
          <section className="lg:hidden mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                More from this topic
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                    <div
                      className="relative w-full bg-gray-100"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <Image
                        src={relatedPost.featuredImage || "/img/UI.webp"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>

                    <div className="p-5 sm:p-6 flex-grow flex flex-col">
                      <span className="text-xs font-outfit text-blue-600 uppercase tracking-wider mb-2 font-semibold">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-playfair font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors flex-grow">
                        {relatedPost.title}
                      </h3>
                      <p className="font-outfit text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                        <span className="font-medium">
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all font-medium">
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
