globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_BLcAVN98.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DJg4CHaL.mjs';
import { manifest } from './manifest_H7dtajtY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin-cms.astro.mjs');
const _page4 = () => import('./pages/admin-cms/_---rest_.astro.mjs');
const _page5 = () => import('./pages/api/feedback.astro.mjs');
const _page6 = () => import('./pages/call-to-action.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/delivery-rules.astro.mjs');
const _page9 = () => import('./pages/init-payment/_---slug_.astro.mjs');
const _page10 = () => import('./pages/offer-agreement.astro.mjs');
const _page11 = () => import('./pages/portfolio.astro.mjs');
const _page12 = () => import('./pages/privacy-policy.astro.mjs');
const _page13 = () => import('./pages/products.astro.mjs');
const _page14 = () => import('./pages/products/_---slug_.astro.mjs');
const _page15 = () => import('./pages/rss.xml.astro.mjs');
const _page16 = () => import('./pages/send-order/_---slug_.astro.mjs');
const _page17 = () => import('./pages/thank-you.astro.mjs');
const _page18 = () => import('./pages/user-agreement.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin-cms/index.astro", _page3],
    ["src/pages/admin-cms/[...rest].astro", _page4],
    ["src/pages/api/feedback.ts", _page5],
    ["src/pages/call-to-action.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/delivery-rules.astro", _page8],
    ["src/pages/init-payment/[...slug].astro", _page9],
    ["src/pages/offer-agreement.astro", _page10],
    ["src/pages/portfolio.astro", _page11],
    ["src/pages/privacy-policy.astro", _page12],
    ["src/pages/products/index.astro", _page13],
    ["src/pages/products/[...slug].astro", _page14],
    ["src/pages/rss.xml.js", _page15],
    ["src/pages/send-order/[...slug].astro", _page16],
    ["src/pages/thank-you.astro", _page17],
    ["src/pages/user-agreement.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
