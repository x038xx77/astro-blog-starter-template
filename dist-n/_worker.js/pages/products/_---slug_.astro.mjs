globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot, F as Fragment } from '../../chunks/astro/server_COiPld1w.mjs';
import { g as getCollection } from '../../chunks/_astro_content_d0Ob6qz0.mjs';
import { $ as $$Layout, a as $$Container } from '../../chunks/Layout_2PJY54-i.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_C91TNGXo.mjs';
import { M as MarkdownText } from '../../chunks/index_DdepQNjg.mjs';
import { l as localeTextSite } from '../../chunks/locale_text_site_yA0_1RcD.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';

const $$Astro$1 = createAstro("https://aplon.ru");
const $$DetailsProductLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DetailsProductLayout;
  const { title, description, category, author, pubDate, tags, price, discount } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class=" mx-auto max-w-[735px] mt-14 "> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${category} </span> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight flex flex-col gap-2"> ${renderComponent($$result3, "MarkdownText", MarkdownText, { "text": title, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/markdown-text", "client:component-export": "default" })} <div class="flex items-center gap-4"> ${discount > 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <span class="text-2xl font-semibold  line-through"> ${price} ${localeTextSite.globalSettings.iconCurrency} </span> <span class="text-2xl font-semibold "> ${Math.round(price * (1 - discount / 100))} ${localeTextSite.globalSettings.iconCurrency} </span> ` })}` : renderTemplate`<span class="text-2xl font-semibold "> ${price} ${localeTextSite.globalSettings.iconCurrency} </span>`} </div> </h1> <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap"> <span class="text-gray-200"> ${author} </span> <span class="text-gray-200">•</span> <p class="date"> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": pubDate })} </p> <span class="text-gray-200 hidden md:block">•</span> <div class="w-full md:w-auto flex flex-wrap gap-3"> ${tags.map((tag) => renderTemplate`<span class="text-sm text-gray-300">#${tag}</span>`)} </div> </div> <div class=" mx-auto   mt-6"> ${renderComponent($$result3, "MarkdownText", MarkdownText, { "text": description, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/markdown-text", "client:component-export": "default" })} </div> </div> <div class="mx-auto    mt-6"> ${renderSlot($$result3, $$slots["default"])} </div> <div class="text-center  mt-8"> <a href="/products" class=" bg-blue-300 px-5 py-3 rounded-md hover:bg-blue-700 transition">← ${localeTextSite.globalSettings.btnBack}</a> </div> ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/layouts/DetailsProductLayout.astro", void 0);

const $$Astro = createAstro("https://aplon.ru");
async function getStaticPaths() {
  const products = await getCollection("products");
  return products.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "DetailsProductLayout", $$DetailsProductLayout, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/products/[...slug].astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
