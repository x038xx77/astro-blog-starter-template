globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, e as renderHead, a as renderTemplate, r as renderComponent } from '../../chunks/astro/server_COiPld1w.mjs';
/* empty css                                    */
export { r as renderers } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';

const $$Astro = createAstro("https://aplon.ru");
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { rest = [] } = Astro2.params;
  const isRoot = rest.length === 0;
  return renderTemplate`<html lang="ru"> <head><meta charset="UTF-8"><title>Редактор сайта</title>${renderHead()}</head> <body> ${isRoot ? renderTemplate`<h1>Добро пожаловать в CMS</h1>` : renderTemplate`${renderComponent($$result, "AppCMSReact", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@ui/admin-cms/cms-admin-react/appCMS/AppCMSReact", "client:component-export": "default" })}`} </body></html>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/admin-cms/[...rest].astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/admin-cms/[...rest].astro";
const $$url = "/admin-cms/[...rest]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
