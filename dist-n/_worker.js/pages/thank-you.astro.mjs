globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_COiPld1w.mjs';
import { $ as $$Layout, a as $$Container } from '../chunks/Layout_2PJY54-i.mjs';
import { l as localeTextSite } from '../chunks/locale_text_site_yA0_1RcD.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BLcAVN98.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": localeTextSite.pages.thankYou.title, "description": localeTextSite.pages.thankYou.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {})} ${renderComponent($$result2, "AppReact", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@ui/components/react-components/app-react", "client:component-export": "default" })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/thank-you.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ThankYou,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
