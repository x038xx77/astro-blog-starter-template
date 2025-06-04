globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_COiPld1w.mjs';

const $$Astro = createAstro("https://aplon.ru");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const formattedDate = typeof date === "string" ? new Date(date) : date;
  if (!(formattedDate instanceof Date) || isNaN(formattedDate.valueOf())) {
    throw new Error("Invalid date provided to FormattedDate component");
  }
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(formattedDate.toISOString(), "datetime")}> ${formattedDate.toLocaleDateString("ru-ru", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
