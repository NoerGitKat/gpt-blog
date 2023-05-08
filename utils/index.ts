import { Post } from "@/types";

export function filterPostsByCategory(
  category: string,
  posts: Post[] | undefined
): Post[] {
  if (posts) {
    switch (category) {
      case "Tech":
        return posts.filter((post) => post.category === category);
      case "Travel":
        return posts.filter((post) => post.category === category);
      case "Interior Design":
        return posts.filter((post) => post.category === category);
      default:
        console.error("Category doesn't exist. Returning all posts...");
        return posts;
    }
  }
  return [];
}
