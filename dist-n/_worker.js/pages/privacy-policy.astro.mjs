globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_COiPld1w.mjs';
import { j as jsxRuntimeExports, $ as $$Layout, a as $$Container } from '../chunks/Layout_2PJY54-i.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BLcAVN98.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BLcAVN98.mjs';
import { L as LoadingWrapper } from '../chunks/index_Dzh9D43S.mjs';
import { l as localeTextSite } from '../chunks/locale_text_site_yA0_1RcD.mjs';

const title = "Политика конфиденциальности";
const textPrivacyPolicy = {
  title,
};

const PrivacyPolicyReact = () => {
  const [htmlContent, setHtmlContent] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadHtmlFragment = async () => {
      try {
        const response = await fetch("/fragmentPrivacyPolicy.html");
        if (response.ok) {
          const text = await response.text();
          setHtmlContent(text);
        } else {
          console.error(localeTextSite.components.reactComponents.flatpagesReact.errorLoadForm, response.status);
        }
      } catch (error) {
        console.error(localeTextSite.components.reactComponents.flatpagesReact.errorLoadForm, error);
      } finally {
        setLoading(false);
      }
    };
    loadHtmlFragment();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center min-h-screen rounded-lg ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "pt-10 text-4xl font-bold ", children: textPrivacyPolicy.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingWrapper, { loading, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: { __html: htmlContent } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "/",
        className: "mb-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors",
        children: localeTextSite.globalSettings.btnToMain
      }
    )
  ] });
};

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": localeTextSite.pages.privacyPolicy.title, "description": localeTextSite.pages.privacyPolicy.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PrivacyPolicyReact", PrivacyPolicyReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/flatpages-react/privacy-policy", "client:component-export": "default" })} ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/privacy-policy.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PrivacyPolicy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
