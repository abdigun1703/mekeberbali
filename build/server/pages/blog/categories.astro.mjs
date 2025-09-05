import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BRct4VzT.mjs';
import { g as getCollection } from '../../chunks/_astro_content_Cb24s3FI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.mekeber.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("blog");
  const categoryCounts = {};
  allPosts.forEach((post) => {
    if (post.data.categories) {
      post.data.categories.forEach((category) => {
        const normalizedCategory = category.toLowerCase();
        categoryCounts[normalizedCategory] = (categoryCounts[normalizedCategory] || 0) + 1;
      });
    }
  });
  const categories = Object.entries(categoryCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Play Astro", "description": "Play Astro blog page with query-based pagination" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12"> <div class="container mx-auto px-4"> <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">Blog Categories</h1> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ${categories.map(({ name, count }) => renderTemplate`<a${addAttribute(`/blog/categories/${name}`, "href")} class="block p-6 rounded-lg bg-white dark:bg-dark-2 shadow hover:shadow-md transition-shadow"> <h2 class="text-xl font-bold capitalize text-gray-800 dark:text-white"> ${name.replace("-", " ")} </h2> <p class="mt-2 text-gray-600 dark:text-gray-400"> ${count} ${count === 1 ? "post" : "posts"} </p> </a>`)} </div> </div> </section> ` })}`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/pages/blog/categories/index.astro", void 0);

const $$file = "C:/Users/User/Documents/program/astronot/myboy/src/pages/blog/categories/index.astro";
const $$url = "/blog/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
