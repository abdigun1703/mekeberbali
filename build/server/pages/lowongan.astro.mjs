import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRct4VzT.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_FLgYSAKe.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_Cb24s3FI.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.mekeber.com");
const $$JobCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$JobCard;
  const { post } = Astro2.props;
  post.data.excerpt || "";
  typeof post.data.image === "string" ? post.data.image : post.data.image?.src;
  const { title, publishDate, categories = [] } = post.data;
  new Date(publishDate).toLocaleDateString("id-ID", {
    day: "numeric",
    // tanggal
    month: "long",
    // bulan dalam teks (Agustus)
    year: "numeric"
    // tahun
  });
  return renderTemplate`${maybeRenderHead()}<article class="wow fadeInUp group relative overflow-hidden rounded-[10px] bg-white shadow-two duration-300 hover:shadow-one dark:bg-dark-2 dark:shadow-three dark:hover:shadow-gray-dark"> <div class="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"> <div class="mb-5 flex flex-col sm:flex-row sm:items-center gap-3"> <h3> <a${addAttribute(`/lowongan/${post.slug}`, "href")} class="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"> ${title} </a> </h3> </div> </div> </article>`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/components/JobCard.astro", void 0);

const $$Astro = createAstro("https://www.mekeber.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const currentPage = parseInt(url.searchParams.get("p") || "1", 10);
  let allJobs = await getCollection(
    "jobs",
    ({ data }) => !data.draft && new Date(data.publishDate) < /* @__PURE__ */ new Date()
  );
  allJobs.sort((a, b) => {
    const aTime = a.data.publishDate.getTime();
    const bTime = b.data.publishDate.getTime();
    return bTime - aTime;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Play Astro is a free and open-source Astro template, built for SaaS, startup, business and software website. Play crafted in a way that you can use with almost all sort of web project.", "title": "Lowongan | Play Astro" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {}, { "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`Lowongan` })}` })} ${maybeRenderHead()}<section class="pt-8 pb-10 lg:pt-10 lg:pb-20 dark:bg-dark"> <div class="max-w-[1240px] container mx-auto"> <h2 class="mb-8 text-3xl font-bold text-gray-800 dark:text-white"> ${currentPage === 1 ? "Lowongan Terbaru" : `Page ${currentPage}`} </h2> <div class="grid gap-10 md:grid-cols-2"> ${allJobs.map((post) => renderTemplate`${renderComponent($$result2, "JobCard", $$JobCard, { "post": post })}`)} </div> <p class="mt-20">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo
			viverra. Adipiscing enim eu turpis egestas pretium. Euismod elementum nisi quis eleifend quam
			adipiscing. In hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus
			et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
			vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea dictumst quisque
			sagittis. Integer quis auctor elit sed vulputate mi. Dictumst quisque sagittis purus sit amet.
</p> </div> </section> ` })}`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/pages/lowongan/index.astro", void 0);

const $$file = "C:/Users/User/Documents/program/astronot/myboy/src/pages/lowongan/index.astro";
const $$url = "/lowongan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
