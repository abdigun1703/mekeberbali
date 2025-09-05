import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_BRct4VzT.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_Cb24s3FI.mjs';
import { $ as $$BlogCard } from '../../../chunks/BlogCard_ViRZMRfR.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.mekeber.com");
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category: categorySlug } = Astro2.params;
  const categoryName = categorySlug.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const allPosts = await getCollection("blog", ({ data }) => {
    return !data.draft;
  });
  const postsInCategory = allPosts.filter((post) => {
    return post.data.categories?.some((cat) => {
      const categorySlugForm = cat.toLowerCase().replace(/\s+/g, "-");
      return cat.toLowerCase() === categoryName.toLowerCase() || categorySlugForm === categorySlug.toLowerCase();
    });
  }).sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );
  if (postsInCategory.length === 0) {
    return Astro2.redirect("/404");
  }
  const displayName = categoryName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Category ${displayName} | Play Astro`, "description": `Semua artikel tentang kategory ${displayName}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-12 mt-20"> <div class="container mx-auto px-4"> <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
Posts in <span class="text-primary capitalize">${displayName}</span> </h1> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${postsInCategory.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post })}`)} </div> </div> </section> ` })}`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/pages/blog/categories/[category].astro", void 0);

const $$file = "C:/Users/User/Documents/program/astronot/myboy/src/pages/blog/categories/[category].astro";
const $$url = "/blog/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
