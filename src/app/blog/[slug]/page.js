// src/app/blog/[slug]/page.js

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { technicalBlogPosts } from "@/data/blogData/technical";
import { designBlogPosts } from "@/data/blogData/design";
import ShareButton from "@/components/common/buttons/shareButton";
import ReadingProgressBar from "@/components/common/buttons/readingProgressBar";
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from "lucide-react";

const allBlogPosts = [...technicalBlogPosts, ...designBlogPosts];

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Desheye Blog`,
    description: post.excerpt,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || "/img/UI.webp"],
    },
    keywords: post.tags.join(", "),
  };
}

function RelatedCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* ✅ FIX 2: bg-white (white background), text-black (black text) */}
      <article
        className="flex gap-4 items-start p-4 rounded-2xl border border-gray-200
        bg-white hover:bg-gray-50 hover:border-[#7B5CF0]/30 transition-all duration-300"
      >
        <div className="relative w-20 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={post.featuredImage || "/img/UI.webp"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-400"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[9px] font-cinzel tracking-widest uppercase text-[#7B5CF0] mb-1">
            {post.category}
          </p>
          <h4
            className="text-sm font-semibold text-black line-clamp-2 font-outfit
            group-hover:text-[#7B5CF0] transition-colors duration-200 leading-snug"
          >
            {post.title}
          </h4>
        </div>
      </article>
    </Link>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const wordCount = post.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const readTime = post.readTime || `${Math.ceil(wordCount / 200)} min read`;
  const relatedPosts = allBlogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F0EB]">
      {/* Sticky nav bar */}
      <div className="sticky top-16 z-40 bg-[#F5F0EB]/95 backdrop-blur-md border-b-2 border-black/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-13 sm:h-14 py-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900
            transition-colors duration-200 group text-sm font-outfit"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="hidden sm:inline">Back to Blog</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-1.5 text-xs text-gray-500 font-outfit">
                <Clock className="w-3.5 h-3.5" />
                <span>{readTime}</span>
              </div>
              <ShareButton post={post} />
            </div>
          </div>
          <ReadingProgressBar />
        </div>
      </div>

      {/* Hero — kept dark intentionally, image overlay needs dark gradient */}
      <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] min-h-[320px] max-h-[700px] overflow-hidden">
        <Image
          src={post.featuredImage || "/img/UI.webp"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/55 to-[#1a1a1a]/10" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-5 sm:px-8 pb-10 sm:pb-14">
          <span
            className="inline-flex items-center text-[10px] font-cinzel font-bold
        tracking-widest uppercase px-3 py-1.5 rounded-full mb-5
        bg-[#7B5CF0]/20 text-[#a78bfa] border border-[#7B5CF0]/30"
          >
            {post.category}
          </span>
          <h1
            className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
        text-white leading-tight mb-4 max-w-4xl"
          >
            {post.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed font-outfit mb-6">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-outfit">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#7B5CF0]
            flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              >
                {post.author.name.charAt(0)}
              </div>
              <span className="text-gray-200 font-medium">
                {post.author.name}
              </span>
            </div>
            <span className="text-gray-600">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <span className="text-gray-600">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <article className="lg:col-span-8">
            {/* Prose card */}
            <div className="bg-white border border-black/8 rounded-3xl p-7 sm:p-10 lg:p-14 mb-8 shadow-sm">
              <div
                className="
              prose max-w-none
              prose-headings:font-playfair prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-outfit prose-p:text-gray-700 prose-p:leading-[1.85] prose-p:text-base
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-[#7B5CF0] prose-a:no-underline hover:prose-a:text-[#6d4fe0]
              prose-code:text-[#d97706] prose-code:bg-amber-50 prose-code:px-2
              prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-950 prose-pre:border prose-pre:border-black/10 prose-pre:rounded-2xl
              prose-blockquote:border-l-[#7B5CF0] prose-blockquote:bg-violet-50
              prose-blockquote:text-gray-600 prose-blockquote:italic prose-blockquote:rounded-r-xl
              prose-img:rounded-2xl prose-img:border prose-img:border-black/8
              prose-li:text-gray-700 prose-li:font-outfit
              prose-hr:border-black/10
            "
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{ lineHeight: "1.85", letterSpacing: "0.01em" }}
              />
            </div>

            {/* Tags + share */}
            <div className="bg-white border border-black/8 rounded-3xl p-7 sm:p-8 shadow-sm">
              <p className="text-xs font-cinzel tracking-widest uppercase text-gray-400 mb-4">
                Tagged in
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-gray-100 hover:bg-violet-50
                  text-gray-600 hover:text-[#7B5CF0] border border-black/8
                  hover:border-[#7B5CF0]/30 px-3.5 py-2 rounded-full text-xs
                  font-outfit font-medium transition-all duration-200 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center
            justify-between pt-6 border-t border-black/8 gap-4"
              >
                <p className="text-gray-500 font-outfit text-sm">
                  Share this article
                </p>
                <div className="flex gap-3">
                  {["twitter", "linkedin", "facebook"].map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      aria-label={`Share on ${platform}`}
                      className="w-9 h-9 rounded-full bg-gray-100 border border-black/10
                    flex items-center justify-center text-gray-500
                    hover:bg-[#7B5CF0] hover:border-[#7B5CF0] hover:text-white
                    transition-all duration-200"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-black/8 rounded-3xl p-6 sticky top-32 shadow-sm">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br
              from-[#FF4D00] to-[#7B5CF0] p-0.5 mb-4"
                >
                  <div
                    className="w-full h-full rounded-full bg-white
                flex items-center justify-center"
                  >
                    <span className="text-gray-900 font-bold text-xl">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-gray-900 font-semibold text-base font-outfit mb-0.5">
                  {post.author.name}
                </h3>
                <p className="text-gray-500 text-xs font-outfit mb-4">
                  {post.author.role || "Senior Full Stack Engineer"}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-green-600 text-xs font-outfit">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Verified Author
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-black/8">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 font-cinzel">
                    {technicalBlogPosts.length}
                  </p>
                  <p className="text-xs text-gray-400 font-outfit mt-0.5">
                    Articles
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 font-cinzel">
                    {Math.ceil(wordCount / 1000)}k
                  </p>
                  <p className="text-xs text-gray-400 font-outfit mt-0.5">
                    Words written
                  </p>
                </div>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="hidden lg:block bg-white border border-black/8 rounded-3xl p-6 shadow-sm">
                <p
                  className="text-xs font-cinzel tracking-widest uppercase text-gray-400 mb-5
              flex items-center gap-2"
                >
                  <span className="w-4 h-px bg-[#FF4D00]" />
                  Related Articles
                </p>
                <div className="space-y-3">
                  {relatedPosts.map((p) => (
                    <RelatedCard key={p.slug} post={p} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Related — mobile */}
        {relatedPosts.length > 0 && (
          <section className="lg:hidden mt-14">
            <p
              className="text-xs font-cinzel tracking-widest uppercase text-gray-400 mb-6
          flex items-center gap-2"
            >
              <span className="w-4 h-px bg-[#FF4D00]" />
              More from this topic
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedPosts.map((p) => (
                <RelatedCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}