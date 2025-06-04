globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as jsxRuntimeExports } from './Layout_2PJY54-i.mjs';
import './_@astro-renderers_BLcAVN98.mjs';

const LoadingIndicator = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-5 w-full max-w-4xl flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600" }) });

const LoadingWrapper = ({ loading, children }) => {
  return loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingIndicator, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4  w-full md:p-5 ", children });
};

export { LoadingWrapper as L };
