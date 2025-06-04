globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_COiPld1w.mjs';

const $$Astro = createAstro("https://aplon.ru");
const $$IconSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IconSVG;
  const {
    name,
    class: classAttr = "",
    ariaLabel = name,
    width = "24",
    height = "24"
  } = Astro2.props;
  const iconUrl = `/icons/${name}.svg`;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(iconUrl, "src")}${addAttribute(classAttr, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(ariaLabel, "alt")} loading="lazy" role="img">`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/IconSVG.astro", void 0);

export { $$IconSVG as $ };
