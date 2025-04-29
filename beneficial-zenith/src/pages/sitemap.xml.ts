import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = [
    {
      url: 'https://bigbussy.com/',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: 'https://bigbussy.com/videos',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      url: 'https://bigbussy.com/about',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: 'https://bigbussy.com/contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}; 