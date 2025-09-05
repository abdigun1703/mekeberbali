import type { APIRoute } from 'astro';

const robots = (siteUrl: URL) => `User-agent: *
Allow: /

# Disallow specific pages
Disallow: /signin/
Disallow: /signup/
Disallow: /bandar/judol/siap/
Disallow: /privacy-policy/

Sitemap: ${siteUrl.href}sitemap-index.xml
`;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL('https://www.mekeber.com/');
  return new Response(robots(baseUrl), {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
};