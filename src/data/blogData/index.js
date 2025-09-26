// src/data/blogData/index.js
import { technicalBlogPosts } from "./technical";

// Combine all blog posts from different categories
export const allBlogPosts = [
  ...technicalBlogPosts,
  // Add other categories here later: ...businessBlogPosts, ...personalBlogPosts
];

// Utility functions
export const getAllBlogPosts = () => allBlogPosts;

export const getBlogPostBySlug = (slug) => {
  return allBlogPosts.find((post) => post.slug === slug);
};

export const getBlogPostsByCategory = (category) => {
  return allBlogPosts.filter((post) => post.category === category);
};

export const getFeaturedBlogPosts = () => {
  return allBlogPosts.filter((post) => post.isFeatured);
};
