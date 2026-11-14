import type { MetadataRoute } from "next";
import { company } from "@content/company";
import { machineCategories, machines } from "@content/machines";
import { coils } from "@content/coils";
import { blogPosts } from "@content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${company.website}${p}`;
  return [
    ...["", "/machines", "/coil-types", "/industries", "/about", "/news-events", "/blog", "/contact"].map((p) => ({ url: u(p) })),
    ...machineCategories.map((c) => ({ url: u(`/machines/${c.slug}`) })),
    ...machines.map((m) => ({ url: u(`/machines/${m.category}/${m.slug}`) })),
    ...coils.map((c) => ({ url: u(`/coil-types/${c.slug}`) })),
    ...blogPosts.map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.modified })),
  ];
}
