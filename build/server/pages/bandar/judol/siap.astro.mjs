import { a as createComponent, r as renderComponent, e as renderHead, b as renderTemplate } from '../../../chunks/astro/server_2Hbhgjc_.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header } from '../../../chunks/Header_hrjBIrpt.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../../../chunks/consts_BUCA18RE.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Siap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> <h1 class="text-red-600 font-bold">
Siap kebulan?
</h1> </main> </body></html>`;
}, "C:/Users/User/Documents/program/astronot/myboy/src/pages/bandar/judol/siap.astro", void 0);

const $$file = "C:/Users/User/Documents/program/astronot/myboy/src/pages/bandar/judol/siap.astro";
const $$url = "/bandar/judol/siap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Siap,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
