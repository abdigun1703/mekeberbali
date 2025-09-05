import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent, F as Fragment } from '../chunks/astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_FLgYSAKe.mjs';
import { $ as $$Layout } from '../chunks/Layout_BRct4VzT.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricingsection = createComponent(($$result, $$props, $$slots) => {
  const priceboxes = [
    {
      popular: false,
      packageName: "Starter",
      price: "25.00",
      subtitle: "Features",
      btn: "Purchase Now",
      purchaseLink: "/#",
      offerlist: [
        { title: "Up to 1 User" },
        { title: "All UI components" },
        { title: "Lifetime access" },
        { title: "Free updates" }
      ]
    },
    {
      popular: true,
      packageName: "Basic",
      price: "59.00",
      subtitle: "Features",
      btn: "Purchase Now",
      purchaseLink: "/#",
      offerlist: [
        { title: "Up to 1 User" },
        { title: "All UI components" },
        { title: "Lifetime access" },
        { title: "Free updates" }
      ]
    },
    {
      popular: false,
      packageName: "Premium",
      price: "99.00",
      subtitle: "Features",
      btn: "Purchase Now",
      purchaseLink: "/#",
      offerlist: [
        { title: "Up to 1 User" },
        { title: "All UI components" },
        { title: "Lifetime access" },
        { title: "Free updates" }
      ]
    }
  ];
  return renderTemplate`<!-- ====== Pricing Section Start -->${maybeRenderHead()}<section id="pricing" class="relative z-20 overflow-hidden bg-white dark:bg-gray-800 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"> <div class="max-w-[1240px] container mx-auto"> <div class="flex flex-wrap"> <div class="w-full px-4"> <div class="mx-auto mb-[60px] max-w-[510px] text-center"> <span class="mb-2 block text-lg font-semibold text-blue-500">
Pricing Table
</span> <h2 class="mb-3 text-3xl font-bold text-gray-700 dark:text-slate-400 sm:text-4xl md:leading-[1.2] md:text-[40px]">
Awesome Pricing Plan
</h2> <p class="text-base text-body-color dark:text-dark-6">
There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form.
</p> </div> </div> </div> <div class="-mx-4 flex flex-wrap justify-center"> ${priceboxes.map((pricebox) => renderTemplate`<div class="w-full px-4 md:w-1/2 lg:w-1/3"> <div${addAttribute(`wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-white dark:bg-emerald-500 py-10 px-8 shadow-lg sm:p-12 lg:py-10 lg:px-6 xl:p-14`, "class")} data-wow-delay=".15s"> ${pricebox.popular && renderTemplate`<p class="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-tl-md rounded-bl-md bg-primary py-2 px-5 text-base font-medium text-white">
Recommended
</p>`} <span${addAttribute(`mb-5 block text-xl font-medium text-gray-700 dark:text-slate-400`, "class")}> ${pricebox.packageName} </span> <h2 class="mb-11 text-4xl font-semibold text-gray-700 dark:text-slate-400 xl:leading-[1.21] xl:text-[42px]"> <span class="text-xl font-medium">$</span> <span class="ml-1 -tracking-[2px]">${pricebox.price}</span> <span class="text-base font-normal text-blue-500">
Per Month
</span> </h2> <div class="mb-[50px]"> <h5 class="mb-5 text-lg font-medium text-gray-700 dark:text-slate-400">${pricebox.subtitle}</h5> <div class="flex flex-col gap-[14px]"> ${pricebox.offerlist.map((item) => renderTemplate`<p${addAttribute(`text-base text-body-color dark:text-dark-6`, "class")}> ${item.title} </p>`)} </div> </div> <a${addAttribute(pricebox.purchaseLink, "href")}${addAttribute(`inline-block rounded-md bg-primary py-3 px-7 text-center text-base font-medium text-white transition hover:bg-blue-dark`, "class")}> ${pricebox.btn} </a> </div> </div>`)} </div> </div> </section> <!-- ====== Pricing Section End -->`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/components/Pricingsection.astro", void 0);

const $$Astro = createAstro("https://www.mekeber.com");
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Play Astro is a free and open-source Astro template, built for SaaS, startup, business and software website. Play crafted in a way that you can use with almost all sort of web project.", "title": "Pricing | Play Astro" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {}, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`Pricing Page` })}` })} ${renderComponent($$result2, "Pricingsection", $$Pricingsection, {})} ` })}`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/pages/pricing.astro", void 0);

const $$file = "C:/Users/User/Documents/program/astronot/myboy/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
