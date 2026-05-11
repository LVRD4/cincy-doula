export type Category = "Birth" | "Postpartum" | "Preparation" | "Newborn" | "Wellness";

export interface Post {
  slug: string;
  date: string;
  dateISO: string;
  category: Category;
  title: string;
  metaDescription: string;
  excerpt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  content: string;
}

export const categories: Category[] = ["Birth", "Postpartum", "Preparation", "Newborn", "Wellness"];

export const posts: Post[] = [];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category): Post[] {
  return posts.filter((p) => p.category === category);
}
