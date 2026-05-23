// WordPress REST API client
// Configure your WordPress site URL here
const WP_API_URL = process.env.WP_API_URL || "https://healthy-peak.local/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

async function fetchWP<T>(path: string, revalidate = 3600): Promise<T | null> {
  try {
    const res = await fetch(`${WP_API_URL}${path}`, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    // WordPress not reachable — return null, fallback content will be used
    return null;
  }
}

export async function getPosts(perPage = 10, page = 1): Promise<WPPost[]> {
  return fetchWP<WPPost[]>(`/posts?_embed&per_page=${perPage}&page=${page}`) ?? [];
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>(`/posts?_embed&slug=${slug}`);
  return posts?.[0] ?? null;
}

export async function getFeaturedImage(post: WPPost): Promise<string> {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
}

export async function getCategories(): Promise<WPCategory[]> {
  return fetchWP<WPCategory[]>("/categories?per_page=20") ?? [];
}

export async function getPostsByCategory(categoryId: number, perPage = 10): Promise<WPPost[]> {
  return fetchWP<WPPost[]>(`/posts?_embed&categories=${categoryId}&per_page=${perPage}`) ?? [];
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}