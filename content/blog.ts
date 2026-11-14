import posts from "./blog-posts.json";

/**
 * Blog posts migrated from the old WordPress site (/blog/<slug>/).
 * HTML was cleaned at migration time (plugin markup, inline styles removed;
 * images localised to /public/images/blog; internal links rewritten).
 * `published: false` = held back pending client review.
 */
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  minutes: number;
  html: string;
  published: boolean;
}

export const blogPosts = (posts as BlogPost[]).filter((p) => p.published);
export const postBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
