globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../chunks/astro/server_COiPld1w.mjs';
import { g as getCollection } from '../chunks/_astro_content_d0Ob6qz0.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_DCCxQFkR.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_C91TNGXo.mjs';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_2PJY54-i.mjs';
import { t as textProductsPage } from '../chunks/products_DQyL-G0J.mjs';
import { M as MarkdownText } from '../chunks/index_DdepQNjg.mjs';
import { l as localeTextSite } from '../chunks/locale_text_site_yA0_1RcD.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BLcAVN98.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const products = (await getCollection("products")).filter((product) => product.data.is_active).sort((a, b) => a.data.serial_number - b.data.serial_number);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0423\u0441\u043B\u0443\u0433\u0438 | \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B", "description": "\u0421\u043F\u0438\u0441\u043E\u043A \u0438 \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433/\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> <p class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${textProductsPage.title} </p> <p class="text-lg mt-4 "> ${textProductsPage.subtitle} </p> </div> <main class="mt-16"> <ul class="grid gap-16 max-w-4xl mx-auto"> ${products?.map((product, index) => renderTemplate`<li> <a${addAttribute(`/products/${product?.slug}`, "href")}> <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center"> ${renderComponent($$result3, "Picture", $$Picture, { "src": product?.data?.image?.src, "alt": product?.data?.image?.alt, "sizes": "(max-width: 800px) 100vw, 800px", "width": 800, "height": 600, "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": `${"object-cover filter grayscale rounded-lg" } w-full rounded-md object-cover object-center bg-white` })} <div> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${localeTextSite.pages.products.moreDetail} </span> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${product?.data?.category} </span> <div class="text-3xl font-semibold leading-snug tracking-tight mt-1 "> ${renderComponent($$result3, "MarkdownText", MarkdownText, { "text": product?.data?.title, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/markdown-text", "client:component-export": "default" })} </div> ${Number(product?.data?.discount) > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": async ($$result4) => renderTemplate` <span class="line-through text-gray-500">${product?.data?.price?.toFixed(2)} ${localeTextSite.pages.products.iconPrice}</span> <span class="ml-2 text-red-500 font-semibold"> ${(product?.data?.price - product?.data?.price * product?.data?.discount / 100)?.toFixed(2)} ${localeTextSite.pages.products.iconPrice}</span> ` })}` : renderTemplate`<span class="text-gray-800 font-semibold">${product?.data?.price?.toFixed(2)} ${localeTextSite.pages.products.iconPrice}</span>`} <div class="flex gap-2 mt-3"> <span class="text-gray-400"> ${product?.data?.author} </span> <span class="text-gray-400">• </span> <p class="date"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": product?.data?.pubDate })} </p> </div> </div> </div> </a> </li>`)} </ul> </main> ` })}` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/products/index.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
