import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dn91b2kv.mjs';
import { manifest } from './manifest_DqdZzc0Z.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/about2.astro.mjs');
const _page4 = () => import('./pages/bandar/judol/siap.astro.mjs');
const _page5 = () => import('./pages/blog/categories/_category_.astro.mjs');
const _page6 = () => import('./pages/blog/categories.astro.mjs');
const _page7 = () => import('./pages/blog/_single_.astro.mjs');
const _page8 = () => import('./pages/blog.astro.mjs');
const _page9 = () => import('./pages/contact.astro.mjs');
const _page10 = () => import('./pages/lowongan/_single_.astro.mjs');
const _page11 = () => import('./pages/lowongan.astro.mjs');
const _page12 = () => import('./pages/pricing.astro.mjs');
const _page13 = () => import('./pages/robots.txt.astro.mjs');
const _page14 = () => import('./pages/rss.xml.astro.mjs');
const _page15 = () => import('./pages/signin.astro.mjs');
const _page16 = () => import('./pages/signup.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/about2.astro", _page3],
    ["src/pages/bandar/judol/siap.astro", _page4],
    ["src/pages/blog/categories/[category].astro", _page5],
    ["src/pages/blog/categories/index.astro", _page6],
    ["src/pages/blog/[single].astro", _page7],
    ["src/pages/blog/index.astro", _page8],
    ["src/pages/contact.astro", _page9],
    ["src/pages/lowongan/[single].astro", _page10],
    ["src/pages/lowongan/index.astro", _page11],
    ["src/pages/pricing.astro", _page12],
    ["src/pages/robots.txt.ts", _page13],
    ["src/pages/rss.xml.js", _page14],
    ["src/pages/signin.astro", _page15],
    ["src/pages/signup.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/User/Documents/program/astronot/myboy/build/client/",
    "server": "file:///C:/Users/User/Documents/program/astronot/myboy/build/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
