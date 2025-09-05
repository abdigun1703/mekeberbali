export { renderers } from '../renderers.mjs';

const robots = (siteUrl) => `User-agent: *
Allow: /

# Disallow specific pages
Disallow: /signin/
Disallow: /signup/
Disallow: /bandar/judol/siap/
Disallow: /privacy-policy/

Sitemap: ${siteUrl.href}sitemap-index.xml
`;
const GET = ({ site }) => {
  const baseUrl = site ?? new URL("https://www.mekeber.com/");
  return new Response(robots(baseUrl), {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
