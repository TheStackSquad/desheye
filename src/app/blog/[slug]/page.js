// src/app/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { technicalBlogPosts } from "@/data/blogData/technical";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return technicalBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = technicalBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Desheye Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = technicalBlogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#131728]">
      {/* Back Button Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center font-outfit text-gray-400 hover:text-white transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-outfit font-medium uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="font-outfit text-xl text-gray-300 italic max-w-3xl mx-auto mb-8">
            {post.excerpt}
          </p>

          {/* Author & Date Info */}
          <div className="flex items-center justify-center space-x-6 text-gray-400 font-outfit">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-sm">{post.author.role}</p>
              </div>
            </div>
            <div className="text-sm">
              <p>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>{post.readTime}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.featuredImage || "/img/UI.webp"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none prose-invert prose-headings:font-playfair text-white
          prose-p:font-outfit prose-p:text-gray-300 prose-strong:text-white prose-headings:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#1a2236] text-gray-400 px-4 py-2 rounded-full text-sm font-outfit border border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
