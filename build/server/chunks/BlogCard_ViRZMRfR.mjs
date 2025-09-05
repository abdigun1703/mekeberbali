import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.mekeber.com");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post, featured = false } = Astro2.props;
  const description = post.data.description || post.data.snippet || "";
  const image = typeof post.data.image === "string" ? post.data.image : post.data.image?.src;
  const { title, publishDate, categories = [], author, authorImg } = post.data;
  const formattedDate = new Date(publishDate).toLocaleDateString("id-ID", {
    day: "numeric",
    // tanggal
    month: "long",
    // bulan dalam teks (Agustus)
    year: "numeric"
    // tahun
  });
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`wow fadeInUp group relative overflow-hidden rounded-[10px] bg-white shadow-two duration-300 hover:shadow-one dark:bg-dark-2 dark:shadow-three dark:hover:shadow-gray-dark ${featured ? "border-2 border-primary" : ""}`, "class")}> ${featured && renderTemplate`<div class="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
Featured
</div>`} ${image && renderTemplate`<div class="relative block h-[220px] w-full overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy"> </div>`} <div class="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"> <div class="mb-5 flex flex-col sm:flex-row sm:items-center gap-3"> ${categories.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2"> ${categories.map((category) => renderTemplate`<a${addAttribute(`/blog/categories/${category.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200"> ${category} </a>`)} </div>`} ${categories.length > 0 && renderTemplate`<span class="hidden sm:inline-block h-5 w-px bg-body-color dark:bg-dark-3"></span>`} <time${addAttribute(publishDate.toISOString(), "datetime")} class="text-sm text-gray-500 dark:text-gray-400"> ${formattedDate} </time> </div> <h3> <a${addAttribute(`/blog/${post.slug}`, "href")} class="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"> ${title} </a> </h3> <p class="mb-6 text-base text-body-color dark:text-dark-6"> ${description} </p> ${author && authorImg && renderTemplate`<div class="flex items-center"> <div class="mr-5 flex items-center"> <div class="mr-4 h-10 w-10 overflow-hidden rounded-full"> <img${addAttribute(authorImg.src, "src")}${addAttribute(authorImg.alt, "alt")} class="w-full" loading="lazy"> </div> <div class="text-sm font-medium text-dark dark:text-white">
By <span class="text-primary">${author}</span> </div> </div> </div>`} </div> </article>`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
