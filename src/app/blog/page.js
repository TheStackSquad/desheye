// src/app/blog/page.js
import BlogUI from "@/components/blog/blogUI";

export const metadata = {
  title: "Blog | Tech Insights & Stories",
  description:
    "Explore technical writings on AI, web development, and the future of coding from Desheye.",
};

export default function BlogPage() {
  return <BlogUI />;
}
