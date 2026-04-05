// src/app/blog/page.js

import BlogUI from "@/components/blog/blogUI";

export const metadata = {
  title: "Blog | Tech Insights & Stories — Desheye",
  description:
    "Technical writing on AI, web development, Go, and the future of engineering from Desheye.",
};

export default function BlogPage() {
  return <BlogUI />;
}
