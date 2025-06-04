globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_COiPld1w.mjs';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_2PJY54-i.mjs';
import { s as seoData } from '../chunks/seo-data-site_D_Z3JnBH.mjs';
import { $ as $$Hero, a as $$Features } from '../chunks/Features_CnCIK0J-.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BLcAVN98.mjs';

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${seoData.SITE_TITLE}`, "description": `${seoData.SITE_DESCRIPTION}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${maybeRenderHead()}<div class="flex items-center justify-center"> ${renderComponent($$result3, "AppReact", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@ui/components/react-components/app-react", "client:component-export": "default" })} </div> ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/call-to-action.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/call-to-action.astro";
const $$url = "/call-to-action";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CallToAction,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
