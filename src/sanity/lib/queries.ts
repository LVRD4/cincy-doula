import { getClient, isSanityConfigured } from "./client";
import { posts as localPosts, getPostBySlug as localGetBySlug } from "@/lib/posts";
import type { Post, Category } from "@/lib/posts";

interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  category: string | null;   // resolved via ->title in GROQ
  publishedAt: string;
  excerpt: string;
  metaDescription: string;
  featuredImage?: { url: string; alt?: string };
  body?: unknown[];
}

interface SiteSettings {
  heroImageUrl: string | null;
  heroImageAlt: string | null;
  portraitUrl: string | null;
  portraitAlt: string | null;
}

function sanityToPost(s: SanityPost): Post & { _sanityBody?: unknown[] } {
  return {
    slug: s.slug.current,
    date: new Date(s.publishedAt).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
    dateISO: s.publishedAt.split("T")[0],
    category: (s.category ?? "Birth") as Category,
    title: s.title,
    metaDescription: s.metaDescription ?? s.excerpt,
    excerpt: s.excerpt,
    featuredImage: s.featuredImage?.url,
    featuredImageAlt: s.featuredImage?.alt ?? s.title,
    content: "",
    _sanityBody: s.body,
  };
}

// --- GROQ queries ---

const ALL_POSTS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**")) && publishedAt <= now()]
  | order(publishedAt desc) {
    _id, title, slug,
    "category": category->title,
    publishedAt, excerpt, metaDescription,
    "featuredImage": featuredImage { "url": asset->url, alt }
  }
`;

const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id, title, slug,
    "category": category->title,
    publishedAt, excerpt, metaDescription,
    "featuredImage": featuredImage { "url": asset->url, alt },
    body
  }
`;

const ALL_SLUGS_QUERY = `
  *[_type == "post" && !(_id in path("drafts.**"))] { "slug": slug.current }
`;

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    "heroImageUrl": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    "portraitUrl": portraitImage.asset->url,
    "portraitAlt": portraitImage.alt,
  }
`;

// --- Exported functions ---

export async function getAllPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return localPosts;
  try {
    const data = await getClient().fetch<SanityPost[]>(ALL_POSTS_QUERY, {}, { next: { revalidate: 60 } });
    return data.map(sanityToPost);
  } catch {
    return localPosts;
  }
}

export async function getPost(slug: string): Promise<(Post & { _sanityBody?: unknown[] }) | undefined> {
  if (!isSanityConfigured) return localGetBySlug(slug);
  try {
    const data = await getClient().fetch<SanityPost | null>(POST_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } });
    if (!data) return undefined;
    return sanityToPost(data);
  } catch {
    return localGetBySlug(slug);
  }
}

export async function getAllSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return localPosts.map((p) => p.slug);
  try {
    const data = await getClient().fetch<{ slug: string }[]>(ALL_SLUGS_QUERY, {}, { next: { revalidate: 60 } });
    return data.map((d) => d.slug);
  } catch {
    return localPosts.map((p) => p.slug);
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const empty: SiteSettings = { heroImageUrl: null, heroImageAlt: null, portraitUrl: null, portraitAlt: null };
  if (!isSanityConfigured) return empty;
  try {
    const data = await getClient().fetch<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 300 } });
    return data ?? empty;
  } catch {
    return empty;
  }
}
