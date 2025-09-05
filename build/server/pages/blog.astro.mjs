import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_FLgYSAKe.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_ViRZMRfR.mjs';
import { $ as $$Layout } from '../chunks/Layout_BRct4VzT.mjs';
import { g as getCollection } from '../chunks/_astro_content_Cb24s3FI.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.mekeber.com");
const $$PaginationBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PaginationBlog;
  const { currentPage, totalPages, baseUrl = "/blog" } = Astro2.props;
  return renderTemplate`<!-- Pagination Component -->${totalPages > 1 && renderTemplate`${maybeRenderHead()}<div class="text-center mt-8 wow fadeInUp" data-wow-delay=".2s"><div class="inline-flex p-3 bg-white dark:bg-dark-2 border rounded-[10px] border-stroke dark:border-dark-3"><ul class="flex items-center"><!-- Previous Button --><li class="px-1">${currentPage > 1 ? renderTemplate`<a${addAttribute(`${baseUrl}?p=${currentPage - 1}`, "href")} class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-gray-800 hover:text-white dark:hover:border-primary dark:hover:text-white">
‹
</a>` : renderTemplate`<span class="flex items-center justify-center h-[34px] w-[34px] opacity-30">
‹
</span>`}</li><!-- First Page --><li class="px-1"><a${addAttribute(`${baseUrl}?p=1`, "href")}${addAttribute(`flex items-center justify-center text-base border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 ${1 === currentPage ? "bg-primary text-white" : "text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"}`, "class")}>
1
</a></li><!-- Left Ellipsis -->${currentPage > 3 && renderTemplate`<li class="px-1"><span class="flex items-center justify-center h-[34px] w-[34px]">
...
</span></li>`}<!-- Middle Pages - SOLUSI FIXED DISINI -->${Array.from({ length: totalPages }, (_, i) => i + 1).filter((i) => i > 1 && i < totalPages && i >= currentPage - 1 && i <= currentPage + 1).map((i) => renderTemplate`<li class="px-1"><a${addAttribute(`${baseUrl}?p=${i}`, "href")}${addAttribute(`flex items-center justify-center text-base border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 ${i === currentPage ? "bg-primary text-white" : "text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"}`, "class")}>${i}</a></li>`)}<!-- Right Ellipsis -->${currentPage < totalPages - 2 && renderTemplate`<li class="px-1"><span class="flex items-center justify-center h-[34px] w-[34px]">
...
</span></li>`}<!-- Last Page (if more than one page) -->${totalPages > 1 && renderTemplate`<li class="px-1"><a${addAttribute(`${baseUrl}?p=${totalPages}`, "href")}${addAttribute(`flex items-center justify-center text-base border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 ${totalPages === currentPage ? "bg-primary text-white" : "text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white"}`, "class")}>${totalPages}</a></li>`}<!-- Next Button --><li class="px-1">${currentPage < totalPages ? renderTemplate`<a${addAttribute(`${baseUrl}?p=${currentPage + 1}`, "href")} class="flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white">
›
</a>` : renderTemplate`<span class="flex items-center justify-center h-[34px] w-[34px] opacity-30">
›
</span>`}</li></ul></div></div>`}`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/components/PaginationBlog.astro", void 0);

const $$Astro = createAstro("https://www.mekeber.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("p") || "1", 10);
  const perPage = 6;
  let allPosts = await getCollection(
    "blog",
    ({ data }) => !data.draft && new Date(data.publishDate) < /* @__PURE__ */ new Date()
  );
  allPosts.sort((a, b) => {
    const aTime = a.data.publishDate.getTime();
    const bTime = b.data.publishDate.getTime();
    return bTime - aTime;
  });
  const featuredPosts = allPosts.filter((post) => post.data.featured);
  const regularPosts = allPosts.filter((post) => !post.data.featured);
  featuredPosts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
  regularPosts.sort((a, b) => {
    const aTime = a.data.publishDate.getTime();
    const bTime = b.data.publishDate.getTime();
    return bTime - aTime;
  });
  const totalRegularPosts = regularPosts.length;
  const totalPages = Math.ceil(totalRegularPosts / perPage);
  const start = (currentPage - 1) * perPage;
  const paginatedRegularPosts = regularPosts.slice(start, start + perPage);
  const displayPosts = currentPage === 1 ? [...featuredPosts, ...paginatedRegularPosts].slice(0, perPage) : paginatedRegularPosts;
  displayPosts.sort((a, b) => {
    const aTime = a.data.publishDate.getTime();
    const bTime = b.data.publishDate.getTime();
    return bTime - aTime;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Play Astro", "description": "Play Astro blog page with query-based pagination" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {}, { "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`Blog` })}` })} ${maybeRenderHead()}<section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark"> <div class="max-w-[1240px] container mx-auto"> <!-- Featured Posts Section (only on page 1) --> ${currentPage === 1 && featuredPosts.length > 0 && renderTemplate`<section class="mb-12"> <h2 class="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
Featured Posts
</h2> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post, "featured": true })}`)} </div> </section>`} <!-- Regular Posts Section --> <section> <h2 class="mb-8 text-3xl font-bold text-gray-800 dark:text-white"> ${currentPage === 1 ? "Latest Posts" : `Page ${currentPage}`} </h2> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${displayPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post })}`)} </div> </section> <!-- pagination nav --> <!-- Pagination --> ${renderComponent($$result2, "PaginationBlog", $$PaginationBlog, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/blog" })} </div> </section>  ` })}`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/User/Documents/program/astronot/myboy/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
