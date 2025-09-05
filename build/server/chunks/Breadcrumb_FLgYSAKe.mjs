import { a as createComponent, m as maybeRenderHead, f as renderSlot, b as renderTemplate } from './astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px] bg-emerald-400"> <div class="w-full h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0 absolute left-0 bottom-0"></div> <div class="max-w-[1240px] container mx-auto"> <div class="-mx-4 flex flex-wrap items-center"> <div class="w-full px-4"> <div class="text-center"> <h1 class="mb-4 text-3xl font-bold text-dark text-slate-100 dark:text-slate-100 sm:text-4xl md:text-[40px] md:leading-[1.2]"> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </h1> <p class="mb-5 text-base text-slate-100 dark:text-slate-100">
There are many variations of passages of Lorem Ipsum available.
</p> <ul class="flex items-center justify-center gap-[10px]"> <li> <a href="/" class="flex items-center gap-[10px] text-base font-medium text-slate-100">
Home
</a> </li> <li> <a href="javascript:void(0)" class="flex items-center gap-[10px] text-base font-medium text-slate-100"> <span class="text-body-color dark:text-dark-6"> / </span> ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)} </a> </li> </ul> </div> </div> </div> </div> </section>`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/components/layout/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
