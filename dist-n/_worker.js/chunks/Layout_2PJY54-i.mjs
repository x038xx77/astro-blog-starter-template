globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, e as renderHead, F as Fragment } from './astro/server_COiPld1w.mjs';
import { s as seoData } from './seo-data-site_D_Z3JnBH.mjs';
import { s as styles } from './_slug_.e97f4c15_DGcTVd5B.mjs';
import { R as React, a as reactExports } from './_@astro-renderers_BLcAVN98.mjs';
import { l as localeTextSite } from './locale_text_site_yA0_1RcD.mjs';
/* empty css                         */

const $$Astro$a = createAstro("https://aplon.ru");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["max-w-screen-xl mx-auto p-10 ", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/Container.astro", void 0);

const $$Astro$9 = createAstro("https://aplon.ru");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://aplon.ru");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://aplon.ru");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://aplon.ru");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://aplon.ru");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://aplon.ru");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://aplon.ru");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://aplon.ru");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/node_modules/astro-seo/src/SEO.astro", void 0);

const bgTheme = "black";
const textColorTheme = "white";
const bgBtnOne = "#db1200";
const colorBtnOne = "linear-gradient(135deg, #E5E4E2, #C0C0C0, #B0B0B0, #FFFFFF); box-shadow: 10px 0 20px rgba(255, 255, 255, 0.8), 0 0 20px rgba(224, 224, 224, 0.5); border-radius: 10px; filter: brightness(1.2) contrast(1.1); padding: 15px; color: #ccfaf5;";
const bgBtnTwo = "black";
const colorBtnTwo = "linear-gradient(135deg, #E5E4E2, #C0C0C0, #B0B0B0, #FFFFFF); box-shadow: 10px 0 20px rgba(55, 255, 255, 0.8), 0 0 40px rgba(224, 224, 224, 0.5); border-radius: 10px; filter: brightness(1.2) contrast(1.1); padding: 15px; color: #ccfaf5;";
const title$1 = "Автоворонка продаж под ключ\n\nСАЙТ + ОПЛАТА + TELEGRAM + РЕКЛАМА";
const subtitle = "# \n\n---\n\n## **✔️ Мгновенный запуск бизнеса**\nГотовый комплекс: сайт, приём оплат, Telegram-продавец и реклама.\n\n## **✔️ Гибкость и контроль**\nМеняйте контент даже когда реклама уже работает.\n\n## **✔️ Для любого бизнеса**\nИнтернет-магазин, услуги, консультации, обучение.\n\n## **✔️ Без абонплаты**\nОплачиваете только нужные функции. \n\n---\n\n";
const button_one = "Получить";
const button_two = "Заявка";
const link_button_one = "/contact";
const link_button_two = "/call-to-action";
const isCustomHero = false;
const isHeroBackgroundImg = false;
const colorTextIsBackgroundImg = "#ccfaf5";
const heroText = {
  bgTheme,
  textColorTheme,
  bgBtnOne,
  colorBtnOne,
  bgBtnTwo,
  colorBtnTwo,
  title: title$1,
  subtitle,
  button_one,
  button_two,
  link_button_one,
  link_button_two,
  isCustomHero,
  isHeroBackgroundImg,
  colorTextIsBackgroundImg,
};

const $$Astro$1 = createAstro("https://aplon.ru");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/HeaderLink.astro", void 0);

const bgNavbar = "linear-gradient(135deg, #E5E4E2, #C0C0C0, #B0B0B0, #FFFFFF); box-shadow: 10px 0 20px rgba(255, 255, 255, 0.8), 0 0 20px rgba(224, 224, 224, 0.5); border-radius: 10px; filter: brightness(1.2) contrast(1.1); padding: 15px; color: #ccfaf5;";
const textColorNavbar = "#000000";
const roundedNavbar = true;
const bgBurger = "#ffffff";
const textColorBurger = "#000000";
const links$1 = [{"path":"/","label":"Главная","is_active":true},{"path":"/about","label":"О нас","is_active":true},{"path":"/products","label":"Услуги","is_active":true,"badge":false,"titleBadge":"Акция"},{"path":"/portfolio","label":"Наши работы","is_active":true},{"path":"/#reviews","label":"Отзывы","is_active":true},{"path":"/contact","label":"Контакты","is_active":true},{"path":"/offer-agreement","label":"Оферта","is_active":false},{"path":"tel:+79500790722","label":"+7 (950) 079 07 22","is_active":true}];
const linksNavbar = {
  bgNavbar,
  textColorNavbar,
  roundedNavbar,
  bgBurger,
  textColorBurger,
  links: links$1,
};

const title = "Иркутск";
const path = "/logo.svg";
const alt = "Иркутск Storelike";
const widthLogo = "82px";
const heightLogo = "82px";
const PropsLogoNavbar = {
  title,
  path,
  alt,
  widthLogo,
  heightLogo,
};

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center lg:space-x-2"> <img${addAttribute(PropsLogoNavbar.path, "src")}${addAttribute(PropsLogoNavbar.alt, "alt")}${addAttribute(PropsLogoNavbar.widthLogo, "width")}${addAttribute(PropsLogoNavbar.heightLogo, "height")}> ${renderTemplate`<span class="font-bold text-[clamp(6px,4vw,18px)]">${PropsLogoNavbar.title}</span>`} </a>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/ui/Logo.astro", void 0);

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && /*#__PURE__*/React.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FiPhone (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function LiaTelegram (props) {
  return GenIcon({"attr":{"viewBox":"0 0 32 32"},"child":[{"tag":"path","attr":{"d":"M 26.070313 3.996094 C 25.734375 4.011719 25.417969 4.109375 25.136719 4.21875 L 25.132813 4.21875 C 24.847656 4.332031 23.492188 4.902344 21.433594 5.765625 C 19.375 6.632813 16.703125 7.757813 14.050781 8.875 C 8.753906 11.105469 3.546875 13.300781 3.546875 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.25 13.394531 2.875 13.652344 C 2.683594 13.777344 2.472656 13.949219 2.289063 14.21875 C 2.105469 14.488281 1.957031 14.902344 2.011719 15.328125 C 2.101563 16.050781 2.570313 16.484375 2.90625 16.722656 C 3.246094 16.964844 3.570313 17.078125 3.570313 17.078125 L 3.578125 17.078125 L 8.460938 18.722656 C 8.679688 19.425781 9.949219 23.597656 10.253906 24.558594 C 10.433594 25.132813 10.609375 25.492188 10.828125 25.765625 C 10.933594 25.90625 11.058594 26.023438 11.207031 26.117188 C 11.265625 26.152344 11.328125 26.179688 11.390625 26.203125 C 11.410156 26.214844 11.429688 26.21875 11.453125 26.222656 L 11.402344 26.210938 C 11.417969 26.214844 11.429688 26.226563 11.441406 26.230469 C 11.480469 26.242188 11.507813 26.246094 11.558594 26.253906 C 12.332031 26.488281 12.953125 26.007813 12.953125 26.007813 L 12.988281 25.980469 L 15.871094 23.355469 L 20.703125 27.0625 L 20.8125 27.109375 C 21.820313 27.550781 22.839844 27.304688 23.378906 26.871094 C 23.921875 26.433594 24.132813 25.875 24.132813 25.875 L 24.167969 25.785156 L 27.902344 6.65625 C 28.007813 6.183594 28.035156 5.742188 27.917969 5.3125 C 27.800781 4.882813 27.5 4.480469 27.136719 4.265625 C 26.769531 4.046875 26.40625 3.980469 26.070313 3.996094 Z M 25.96875 6.046875 C 25.964844 6.109375 25.976563 6.101563 25.949219 6.222656 L 25.949219 6.234375 L 22.25 25.164063 C 22.234375 25.191406 22.207031 25.25 22.132813 25.308594 C 22.054688 25.371094 21.992188 25.410156 21.667969 25.28125 L 15.757813 20.75 L 12.1875 24.003906 L 12.9375 19.214844 C 12.9375 19.214844 22.195313 10.585938 22.59375 10.214844 C 22.992188 9.84375 22.859375 9.765625 22.859375 9.765625 C 22.886719 9.3125 22.257813 9.632813 22.257813 9.632813 L 10.082031 17.175781 L 10.078125 17.15625 L 4.242188 15.191406 L 4.242188 15.1875 C 4.238281 15.1875 4.230469 15.183594 4.226563 15.183594 C 4.230469 15.183594 4.257813 15.171875 4.257813 15.171875 L 4.289063 15.15625 L 4.320313 15.144531 C 4.320313 15.144531 9.53125 12.949219 14.828125 10.71875 C 17.480469 9.601563 20.152344 8.476563 22.207031 7.609375 C 24.261719 6.746094 25.78125 6.113281 25.867188 6.078125 C 25.949219 6.046875 25.910156 6.046875 25.96875 6.046875 Z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function IoIosLogIn (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M417 80H137c-25.4 0-46 20.6-46 46 0 7.7 6.3 14 14 14s14-6.3 14-14c0-9.9 8.1-18 18-18h280c9.9 0 18 8.1 18 18v260c0 9.9-8.1 18-18 18H137c-9.9 0-18-8.1-18-18 0-7.7-6.3-14-14-14s-14 6.3-14 14c0 25.4 20.6 46 46 46h280c25.4 0 46-20.6 46-46V126c0-25.4-20.6-46-46-46z"},"child":[]},{"tag":"path","attr":{"d":"M224 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.6-84.4c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H63c-7.7 0-14 6.3-14 14s6.3 14 14 14h224.6L224 334.2z"},"child":[]}]})(props);
}function IoLogoWhatsapp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"},"child":[]}]})(props);
}

// THIS FILE IS AUTO GENERATED
function TfiEmail (props) {
  return GenIcon({"attr":{"version":"1.1","viewBox":"0 0 17 17"},"child":[{"tag":"g","attr":{},"child":[]},{"tag":"path","attr":{"d":"M0 2v13h17v-13h-17zM8.494 9.817l-6.896-6.817h13.82l-6.924 6.817zM5.755 8.516l-4.755 4.682v-9.383l4.755 4.701zM6.466 9.219l2.026 2.003 1.996-1.966 4.8 4.744h-13.677l4.855-4.781zM11.201 8.555l4.799-4.725v9.467l-4.799-4.742z"},"child":[]}]})(props);
}

const BurgerMenu = {"main_burger":{"label":"Основной бургер","title":"ETStudio | Иркутск"},"main_burger_subtitle":{"label":"Подзаголовок основного бургера","title":"Помогаем бизнесу быть онлайн. Без ежегодных и ежемесячных платежей."},"main":{"label":"Главная страница","title":"Главная","is_active":true,"link":"/"},"about":{"label":"О нас","title":"О нас","is_active":true,"link":"/about"},"products":{"label":"Услуги","title":"Услуги","is_active":true,"link":"/products"},"portfolio":{"label":"Мои работы","title":"Наши работы","is_active":true,"link":"/portfolio"},"offer_agreement":{"label":"Соглашение оферта","title":"Соглашение оферта","is_active":true,"link":"/offer-agreement"},"privacy_policy":{"label":"Политика конфиденциальности","title":"Политика конфиденциальности","is_active":false,"link":"privacy-policy"},"user_agreement":{"label":"Пользовательское соглашение","title":"Пользовательское соглашение","is_active":false,"link":"user-agreement"},"сontact":{"label":"Контакты","title":"Контакты","is_active":true,"link":"contact"},"delivery_rules":{"label":"Правила доставки","title":"Правила доставки","is_active":false,"link":"delivery-rules"},"phone":{"label":"Номер телефона","title":"+79500790722"},"telegram_number":{"label":"Номер Telegram","title":"ETStudio38Bot"},"whatsapp_number":{"label":"Номер WhatsApp","title":"+79500790722"},"vk_link":{"label":"вконтакте","title":"buildberries"},"email":{"label":"Электронная почта","title":"team@x038it.ru"},"login":{"label":"Кнопка входа","title":"Войти"}};
const textBurgerMenu = {
  BurgerMenu,
};

// THIS FILE IS AUTO GENERATED
function FaBars (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},"child":[]}]})(props);
}function FaPhone (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},"child":[]}]})(props);
}function FaTimes (props) {
  return GenIcon({"attr":{"viewBox":"0 0 352 512"},"child":[{"tag":"path","attr":{"d":"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},"child":[]}]})(props);
}

const darkenColor = (color, amount) => {
  const hex = color.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
const BurgerMenuButton = ({ isOpen, toggleMenu }) => {
  const textColor = linksNavbar.textColorBurger;
  const hoverColor = darkenColor(textColor, 0.2);
  const style = {
    "--burger-color": textColor,
    "--burger-hover-color": hoverColor
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      id: "btnBurger",
      className: `${styles.burgerButton} bg-[${linksNavbar.bgBurger}] rounded-lg hover:scale-110
`,
      style,
      onClick: toggleMenu,
      "aria-label": "Menu",
      children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(FaTimes, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FaBars, { className: "h-6 w-6" })
    }
  );
};

const BurgerMenuReact = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [mouseInsideMenu, setMouseInsideMenu] = reactExports.useState(false);
  const menuRef = reactExports.useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  reactExports.useEffect(() => {
    if (!isOpen) return;
    const closeMenuAfterDelay = setTimeout(() => {
      if (!mouseInsideMenu) {
        setIsOpen(false);
      }
    }, 5e3);
    return () => clearTimeout(closeMenuAfterDelay);
  }, [isOpen, mouseInsideMenu]);
  const handleMouseEnter = () => setMouseInsideMenu(true);
  const handleMouseLeave = () => setMouseInsideMenu(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BurgerMenuButton, { isOpen, toggleMenu }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "#e6edf0",
          color: linksNavbar.textColorNavbar
        },
        ref: menuRef,
        className: "overflow-y-auto fixed top-0 right-0 w-64  shadow-lg rounded-lg z-40 h-full p-4",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center  mt-4 space-y-4 ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-10 text-lg font-bold", children: textBurgerMenu.BurgerMenu.main_burger.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center", children: textBurgerMenu.BurgerMenu.main_burger_subtitle.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col  items-center space-y-2 w-full 	", children: Object.entries(textBurgerMenu.BurgerMenu).map(([key, value]) => typeof value === "object" && value.is_active && value.link && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: value.link,
              className: "bg-blue-200 w-full text-center text-gray-900 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white",
              children: value.title
            },
            key
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4 mt-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${textBurgerMenu.BurgerMenu.phone.title}`,
                className: "w-full text-center text-[#00FF00] transition-colors duration-300 hover:text-[#FF00FF] bg-gray-900 rounded-lg p-2 flex justify-center items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FiPhone, { size: 24 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: textBurgerMenu.BurgerMenu.phone.title })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://t.me/${textBurgerMenu.BurgerMenu.telegram_number.title}`,
                className: "w-full text-center text-[#00FF00] transition-colors duration-300 hover:text-[#FF00FF] bg-gray-900 rounded-lg p-2 flex justify-center items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LiaTelegram, { size: 24 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Telegram" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/${textBurgerMenu.BurgerMenu.whatsapp_number.title}`,
                className: "w-full text-center text-[#00FF00] transition-colors duration-300 hover:text-[#FF00FF] bg-gray-900 rounded-lg p-2 flex justify-center items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IoLogoWhatsapp, { size: 24 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://vk.com/${textBurgerMenu.BurgerMenu.vk_link.title}`,
                className: "w-full text-center text-[#00FF00] transition-colors duration-300 hover:text-[#FF00FF] bg-gray-900 rounded-lg p-2 flex justify-center items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/VKLogo.png", width: 24, height: 24, alt: "Logo VK" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ВКонтакте" })
                ]
              }
            ),
            textBurgerMenu.BurgerMenu.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${textBurgerMenu.BurgerMenu.email.title}`,
                className: "w-full text-center text-[#00FF00] transition-colors duration-300 hover:text-[#FF00FF] bg-gray-900 rounded-lg p-2 flex justify-center items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TfiEmail, { size: 24 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Email" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/index-editor",
                className: "w-full text-center text-gray-900 py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white flex justify-center items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IoIosLogIn, { size: 24 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: textBurgerMenu.BurgerMenu.login.title })
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
};

const $$BurgerMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BurgerMenuReact", BurgerMenuReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/burger-menu-react", "client:component-export": "default" })} </div>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/ui/BurgerMenu.astro", void 0);

// THIS FILE IS AUTO GENERATED
function IoClose (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},"child":[]}]})(props);
}

const password_admin = "password38";
const email_admin = "admin@storelike.ru";
const TOKEN_TELEGRAM = "6985872588:AAEDsBILdqiXGF3YhaSZZ_qjmIS7foCB2p4";
const CHAT_ID_TELEGRAM = "-1001910712578";
const TINKOFF_EMAIL_COMPANY = "83952280298@mail.ru";
const TINKOFF_TAXION_COMPANY = "usn_income_outcome";
const TINKOFF_TERMINAL_KEY = "1728982674167";
const TINKOFF_SUCCES_URL = "название вышего сайта (https://доменное имя/tinkoff-page-success)";
const is_payment_button = true;
const button_to_order = "Заказать";
const appConfig = {
  password_admin,
  email_admin,
  TOKEN_TELEGRAM,
  CHAT_ID_TELEGRAM,
  TINKOFF_EMAIL_COMPANY,
  TINKOFF_TAXION_COMPANY,
  TINKOFF_TERMINAL_KEY,
  TINKOFF_SUCCES_URL,
  is_payment_button,
  button_to_order,
};

const sendToTelegramCallToAction = async (userData) => {
  const { name, phone, email, message } = userData;
  const messageToSend = `
    Новый запрос на связь:
    Имя: ${name}
    Телефон: ${phone}
    Email: ${email}
    Сообщение: ${message}
  `;
  const url = `https://api.telegram.org/bot${appConfig.TOKEN_TELEGRAM}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: appConfig.CHAT_ID_TELEGRAM,
        text: messageToSend,
        parse_mode: "HTML"
      })
    });
    if (!response.ok) {
      throw new Error("Ошибка при отправке данных в Telegram");
    }
    return { success: true, message: "Сообщение успешно отправлено в Telegram." };
  } catch (error) {
    console.error("Ошибка при отправке данных в Telegram:", error);
    return { success: false, message: "Ошибка при отправке данных в Telegram." };
  }
};

const ModalCallToAction = ({ open, onClose, message }) => {
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium text-gray-900", children: message }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onClose,
        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",
        children: localeTextSite.components.reactComponents.callToActionIconReact.modalCallToAction.btnClose
      }
    ) })
  ] }) });
};

const SpinnerLoaderTextButton = ({ loading, spinTitleText, titleText }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "flex animate-spin h-5 w-5 mr-2 text-white", viewBox: "0 0 24 24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })
    ] }),
    spinTitleText
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    " ",
    titleText,
    " "
  ] }) });
};

const YandexMetricaButton = ({
  yaGoalTitle,
  onClick,
  children
}) => {
  const hiddenInputRef = reactExports.useRef(null);
  const handleClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
    if (onClick) {
      onClick();
    }
  };
  const yaGoalNumber = seoData.numberYandexMetric;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "button",
        ref: hiddenInputRef,
        style: { display: "none" },
        onClick: () => {
          if (window.ym && typeof window.ym === "function") {
            window.ym(yaGoalNumber, "reachGoal", yaGoalTitle);
            console.log(`Goal "${yaGoalTitle}" with number ${yaGoalNumber} reached`);
          } else {
            console.warn("Yandex Metrica is not initialized.");
          }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: handleClick, role: "button", tabIndex: 0, children })
  ] });
};

const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  let result = "+7";
  if (digits.length > 0) result += " (" + digits.slice(0, 3);
  if (digits.length >= 4) result += ") " + digits.slice(3, 6);
  if (digits.length >= 7) result += "-" + digits.slice(6, 8);
  if (digits.length >= 9) result += "-" + digits.slice(8, 10);
  return result;
};
const ReactInputMask = ({
  value,
  name = "phone",
  placeholder = "Ваш телефон",
  onChange,
  className = "",
  required = false
}) => {
  const handleChange = (e) => {
    const raw = e.target.value;
    const formatted = formatPhone(raw);
    const fakeEvent = {
      ...e,
      target: {
        ...e.target,
        value: formatted
      }
    };
    onChange(fakeEvent);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type: "tel",
      name,
      value,
      placeholder,
      onChange: handleChange,
      className: `block w-full p-2 mb-2 border rounded ${className}`,
      required
    }
  );
};

const CalToActionForm = ({ externalData, onClose }) => {
  const [userData, setUserData] = reactExports.useState({
    name: "NotName",
    phone: "",
    email: "",
    message: "Интересует оформление заказа / подробности (форма связаться)",
    externalData
  });
  const [contactMethod, setContactMethod] = reactExports.useState("phone");
  const [agreeToTerms, setAgreeToTerms] = reactExports.useState(false);
  const [modalOpen, setModalOpen] = reactExports.useState(false);
  const [modalMessage, setModalMessage] = reactExports.useState("");
  const [loadingSend, setLoadingSend] = reactExports.useState(false);
  const [formErrors, setFormErrors] = reactExports.useState({
    phone: false,
    terms: false,
    contact: false
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length === 11;
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isFormValid = userData.name.trim() !== "" && userData.message.trim() !== "" && agreeToTerms && (contactMethod === "phone" && validatePhone(userData.phone) || contactMethod === "email" && validateEmail(userData.email));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoadingSend(true);
    setFormErrors({ phone: false, terms: false, contact: false });
    try {
      const result = await sendToTelegramCallToAction(userData);
      if (result.success) {
        const queryString = new URLSearchParams({
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
          message: userData.message
        }).toString();
        setLoadingSend(false);
        window.location.href = `/thank-you?${queryString}`;
      } else {
        setModalMessage(result.message || localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.errorMessageDefault);
        setLoadingSend(false);
        setModalOpen(true);
      }
    } catch (error) {
      setModalMessage(localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.errorMessage);
      setLoadingSend(false);
      setModalOpen(true);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed text-gray-900 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md w-80 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onClose(userData),
        className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoClose, { size: 24 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold mb-4 text-center", children: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          name: "name",
          value: userData.name,
          placeholder: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.namePlaceholder,
          onChange: handleInputChange,
          className: `${"hidden"} block w-full p-2 mb-2 border rounded`,
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setContactMethod("phone"),
            className: `px-2 py-1 rounded border ${contactMethod === "phone" ? "bg-blue-500 text-white" : "bg-gray-200"}`,
            children: "Телефон"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setContactMethod("email"),
            className: `px-2 py-1 rounded border ${contactMethod === "email" ? "bg-blue-500 text-white" : "bg-gray-200"}`,
            children: "Email"
          }
        )
      ] }),
      contactMethod === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReactInputMask,
        {
          mask: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.maskPlaceholder,
          name: "phone",
          value: userData.phone,
          placeholder: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.phonePlaceholder,
          onChange: handleInputChange,
          className: `block w-full p-2 mb-2 border rounded ${formErrors.phone ? "border-red-400 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`,
          required: true
        }
      ),
      contactMethod === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          name: "email",
          value: userData.email,
          placeholder: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.emailPlaceholder,
          onChange: handleInputChange,
          className: "block w-full p-2 mb-2 border rounded",
          required: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name: "message",
          value: userData.message,
          placeholder: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.messagePlaceholder,
          onChange: handleInputChange,
          className: `${"hidden"} block text-gray-900 w-full p-2 mb-2 border rounded`,
          required: true,
          rows: 4
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            id: "agreeToTerms",
            checked: agreeToTerms,
            onChange: () => setAgreeToTerms(!agreeToTerms),
            className: "mt-1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "agreeToTerms", className: "text-sm", children: [
          "Я соглашаюсь с",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy-policy", target: "_blank", className: "text-blue-600 underline", children: "политикой конфиденциальности" }),
          " ",
          "и",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/user-agreement", target: "_blank", className: "text-blue-600 underline", children: "пользовательским соглашением" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(YandexMetricaButton, { yaGoalTitle: seoData.yaGoalTitleCallToAction, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          disabled: !isFormValid,
          className: `mt-2 w-full px-4 py-2 rounded-md ${isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SpinnerLoaderTextButton,
            {
              loading: loadingSend,
              spinTitleText: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.btnSpinnerLoader,
              titleText: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.btnSend
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModalCallToAction,
      {
        open: modalOpen,
        onClose: () => setModalOpen(false),
        message: modalMessage
      }
    )
  ] }) });
};

const CallToActionIcon = () => {
  const [isFormOpen, setIsFormOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setIsFormOpen((prev) => !prev),
        className: "flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors",
        "aria-label": localeTextSite.components.reactComponents.callToActionIconReact.indexCallToActionIconReact.ariaLabel,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPhone, { size: 24 })
      }
    ),
    isFormOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(CalToActionForm, { onClose: () => setIsFormOpen(false) })
  ] });
};

const PhoneNav = ({ data }) => {
  const phoneLink = data.links.find((link) => link.path.startsWith("tel:"));
  if (!phoneLink && phoneLink.is_active) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-2 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "border border-gray-300 rounded-lg px-[clamp(8px,2vw,16px)] py-[clamp(4px,1vw,10px)] bg-transparent text-gray-800 shadow-md max-w-[clamp(120px,40vw,200px)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: phoneLink.path,
          className: "block font-bold hover:shadow-lg hover:scale-110 text-[clamp(10px,2vw,18px)] whitespace-nowrap",
          children: phoneLink.label
        }
      )
    }
  ) });
};

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-s4yhteap> <nav id="navbar" class="fixed top-0 left-0 z-50 w-full"${addAttribute({
    background: linksNavbar.bgNavbar,
    color: linksNavbar.textColorNavbar,
    borderRadius: linksNavbar.roundedNavbar ? "30px" : "0",
    marginTop: linksNavbar.roundedNavbar ? "0.5rem" : "0"
  }, "style")} data-astro-cid-s4yhteap> <div class="flex items-center justify-between min-h-[65px] px-4" data-astro-cid-s4yhteap> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-s4yhteap": true })} ${renderComponent($$result, "PhoneNav", PhoneNav, { "data": linksNavbar, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/phone-nav", "client:component-export": "default", "data-astro-cid-s4yhteap": true })} <div style="margin-right: 20px;" class="flex items-center space-x-4 " data-astro-cid-s4yhteap> ${linksNavbar.links.map(
    (item, index) => item.is_active && renderTemplate`${renderComponent($$result, "HeaderLink", $$HeaderLink, { "key": index, "href": item.path, "class:list": "navbar-links", "data-astro-cid-s4yhteap": true }, { "default": ($$result2) => renderTemplate`${item.label}${item.badge && renderTemplate`<span class="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full align-super" data-astro-cid-s4yhteap> ${item.titleBadge} </span>`}` })}`
  )} </div> </div> </nav> <div class=" z-50 fixed " data-astro-cid-s4yhteap> ${renderComponent($$result, "BurgerMenu", $$BurgerMenu, { "data-astro-cid-s4yhteap": true })} </div> <div class="z-30 fixed top-1/2 right-5" data-astro-cid-s4yhteap> ${renderComponent($$result, "CallToActionIcon", CallToActionIcon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/call-to-action-icon-react", "client:component-export": "default", "data-astro-cid-s4yhteap": true })} </div> ${renderComponent($$result, "MainQuiz", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-s4yhteap": true, "client:component-path": "@ui/components/react-components/quiz-questions-react/main-quiz", "client:component-export": "default" })}  </header>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/navbar/Navbar.astro", void 0);

const bgFooter = "#000000";
const textColorFooter = "#ffffff";
const colorTextBoxLinkFooterPhone = "#000000";
const bgBoxLinkFooterPhone = "#c8ddc6";
const colorTextBoxLinkFooterTelegram = "#000000";
const bgBoxLinkFooterTelegram = "#c8ddc6";
const colorTextBoxLinkFooterWhatsApp = "#000000";
const bgBoxLinkFooterWhatsApp = "#c8ddc6";
const colorTextBoxLinkFooterEmail = "#000000";
const bgBoxLinkFooterEmail = "#c8ddc6";
const titleFooter = "Интернет-Магазин для быстрого старта";
const links = [{"path":"/","label":"Главная","is_active":false},{"path":"/about","label":"О нас","is_active":false},{"path":"/products","label":"Услуги","is_active":false},{"path":"/#reviews","label":"Отзывы","is_active":false},{"path":"/contact-us","label":"Контакты","is_active":false},{"path":"/offer-agreement","label":"Оферта","is_active":false},{"path":"/privacy-policy","label":"Политика конфиденциальности","is_active":true},{"path":"/user-agreement","label":"Пользовательское соглашение","is_active":true},{"path":"/delivery-rules","label":"Правила доставки","is_active":false}];
const contentFooter = {
  bgFooter,
  textColorFooter,
  colorTextBoxLinkFooterPhone,
  bgBoxLinkFooterPhone,
  colorTextBoxLinkFooterTelegram,
  bgBoxLinkFooterTelegram,
  colorTextBoxLinkFooterWhatsApp,
  bgBoxLinkFooterWhatsApp,
  colorTextBoxLinkFooterEmail,
  bgBoxLinkFooterEmail,
  titleFooter,
  links,
};

const LinksListFooterReact = () => {
  const [links, setLinks] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const activeLinks = contentFooter.links.filter((link) => link.is_active);
    setLinks(activeLinks);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4", children: links.map((link, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: link.path,
      className: " hover:underline",
      children: link.label
    },
    index
  )) });
};

const FooterBoxLinks = () => {
  const {
    colorTextBoxLinkFooterPhone,
    bgBoxLinkFooterPhone,
    colorTextBoxLinkFooterTelegram,
    bgBoxLinkFooterTelegram,
    colorTextBoxLinkFooterWhatsApp,
    bgBoxLinkFooterWhatsApp,
    colorTextBoxLinkFooterEmail,
    bgBoxLinkFooterEmail
  } = contentFooter;
  const baseLinkStyle = `
    w-full text-center transition-colors duration-300
    p-2 flex justify-center items-center space-x-2
  `;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4 mt-4 w-[180px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        id: "linkFooterPhone",
        href: `tel:${textBurgerMenu.BurgerMenu.phone.title}`,
        className: `${baseLinkStyle} ${"rounded-full" }`,
        style: {
          color: colorTextBoxLinkFooterPhone,
          backgroundColor: bgBoxLinkFooterPhone
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FiPhone, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: textBurgerMenu.BurgerMenu.phone.title })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        id: "linkFooterTelegram",
        href: `https://t.me/${textBurgerMenu.BurgerMenu.telegram_number.title}`,
        className: `${baseLinkStyle} ${"rounded-full" }`,
        style: {
          color: colorTextBoxLinkFooterTelegram,
          backgroundColor: bgBoxLinkFooterTelegram
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LiaTelegram, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Telegram" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        id: "linkFooterWhatsApp",
        href: `https://wa.me/${textBurgerMenu.BurgerMenu.whatsapp_number.title}`,
        className: `${baseLinkStyle} ${"rounded-full" }`,
        style: {
          color: colorTextBoxLinkFooterWhatsApp,
          backgroundColor: bgBoxLinkFooterWhatsApp
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IoLogoWhatsapp, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        id: "linkFooterVKLink",
        href: `https://vk.com/${textBurgerMenu.BurgerMenu.whatsapp_number.title}`,
        className: `${baseLinkStyle} ${"rounded-full" }`,
        style: {
          color: colorTextBoxLinkFooterWhatsApp,
          backgroundColor: bgBoxLinkFooterWhatsApp
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/VKLogo.png", width: 24, height: 24, alt: "Logo VK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ВКонтакте" })
        ]
      }
    ),
    textBurgerMenu.BurgerMenu.email.title && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        id: "linkFooterEmail",
        href: `mailto:${textBurgerMenu.BurgerMenu.email.title}`,
        className: `${baseLinkStyle} ${"rounded-md"}`,
        style: {
          color: colorTextBoxLinkFooterEmail,
          backgroundColor: bgBoxLinkFooterEmail
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TfiEmail, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Email" })
        ]
      }
    )
  ] });
};

function DevelopedBy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden flex space-x-4 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://buildberries.ru",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block px-4 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded",
        children: "Код"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-r border-gray-300 h-6" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://storelike.ru",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block px-4 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded",
        children: "oX1c.ru"
      }
    )
  ] });
}

const FooterReact = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-8",
      id: "footer",
      style: {
        color: contentFooter?.textColorFooter,
        background: contentFooter?.bgFooter,
        borderRadius: "0px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center w-full mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-syne font-bold", children: textBurgerMenu.BurgerMenu.main_burger_subtitle.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-syne font-bold lowercase underline", children: textBurgerMenu.BurgerMenu.email.title })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FooterBoxLinks, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between gap-10 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "w-36 rounded-md",
              src: "/logo.svg",
              width: PropsLogoNavbar.widthLogo,
              height: PropsLogoNavbar.heightLogo,
              alt: "Главная страница"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md font-syne font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: textBurgerMenu.BurgerMenu.main_burger.title }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-md font-syne font-bold text-center", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          contentFooter.titleFooter
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LinksListFooterReact, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DevelopedBy, {})
      ]
    }
  );
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> ${renderComponent($$result, "FooterReact", FooterReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/footer-react", "client:component-export": "default" })} </footer>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/Footer.astro", void 0);

const YA_METRICA_ID = seoData.numberYandexMetric;
const YandexAnalytics = () => {
  reactExports.useEffect(() => {
    let loadedMetrica = false;
    let timerId = null;
    const loadMetrica = (e) => {
      if (loadedMetrica) return;
      if (e && e.type) {
        console.log(`Event triggered: ${e.type}`);
      } else {
        console.log("Fallback: DOMContentLoaded");
      }
      (function(m, e2, t, r, i, k, a) {
        m[i] = //@ts-ignore
        m[i] || function() {
          (m[i].a = m[i].a || []).push(arguments);
        };
        m[i].l = 1 * /* @__PURE__ */ new Date();
        k = e2.createElement(t);
        a = e2.getElementsByTagName(t)[0];
        k.async = true;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js",
        "ym"
      );
      window.ym(YA_METRICA_ID, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });
      loadedMetrica = true;
      if (timerId) clearTimeout(timerId);
      removeEventListeners();
    };
    const removeEventListeners = () => {
      window.removeEventListener("scroll", loadMetrica);
      window.removeEventListener("touchstart", loadMetrica);
      document.removeEventListener("mouseenter", loadMetrica);
      document.removeEventListener("click", loadMetrica);
      document.removeEventListener("DOMContentLoaded", loadFallback);
    };
    const loadFallback = () => {
      timerId = setTimeout(loadMetrica, 1e3);
    };
    if (navigator.userAgent.includes("YandexMetrika")) {
      loadMetrica();
    } else {
      window.addEventListener("scroll", loadMetrica, { passive: true });
      window.addEventListener("touchstart", loadMetrica, { passive: true });
      document.addEventListener("mouseenter", loadMetrica);
      document.addEventListener("click", loadMetrica);
      document.addEventListener("DOMContentLoaded", loadFallback);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
      removeEventListeners();
    };
  }, []);
  return null;
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://aplon.ru");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = (seoData.siteHTTPS).replace(/\/$/, "");
  const {
    nameImgOpengraph,
    titleSiteDefault,
    twitterCreator,
    twitterSite,
    twitterCard,
    numberGoogleMetric: rawGoogleMetric,
    yandexWebmaster,
    seoKeywords
  } = seoData;
  const numberGoogleMetric = Number(rawGoogleMetric) || null;
  const resolvedImageWithDomain = new URL(nameImgOpengraph.startsWith("http") ? nameImgOpengraph : `${canonicalURL}${nameImgOpengraph}`).toString() ;
  const { title, description } = Astro2.props;
  const makeTitle = title ? `${title} | ${titleSiteDefault}` : titleSiteDefault;
  return renderTemplate`<html${addAttribute(localeTextSite.globalSettings.locale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" href="/fonts/Old-Soviet.otf" as="font" type="font/otf" crossorigin="anonymous"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="keywords"${addAttribute(seoKeywords, "content")}><meta name="yandex-verification"${addAttribute(yandexWebmaster, "content")}>${numberGoogleMetric && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="text/partytown"', '><\/script><script type="text/partytown">\n          {`\n            window.dataLayer = window.dataLayer || [];\n            function gtag() {\n              dataLayer.push(arguments);\n            }\n            gtag("js", new Date());\n            gtag("config", "${numberGoogleMetric}");\n          `}\n        <\/script>'], ['<script type="text/partytown"', '><\/script><script type="text/partytown">\n          {\\`\n            window.dataLayer = window.dataLayer || [];\n            function gtag() {\n              dataLayer.push(arguments);\n            }\n            gtag("js", new Date());\n            gtag("config", "\\${numberGoogleMetric}");\n          \\`}\n        <\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${numberGoogleMetric}`, "src")) })}`}<link rel="canonical"${addAttribute(canonicalURL, "href")}>${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": description, "canonical": canonicalURL, "twitter": {
    creator: twitterCreator,
    site: twitterSite,
    card: twitterCard
  }, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: titleSiteDefault,
      image: resolvedImageWithDomain
    },
    image: {
      alt: titleSiteDefault
    }
  } })}${renderHead()}</head> ${renderComponent($$result, "Navbar", $$Navbar, {})}  ${numberGoogleMetric && renderTemplate`<noscript> <iframe${addAttribute(`https://www.googletagmanager.com/ns.html?id=${numberGoogleMetric}`, "src")} height="0" width="0" style="display:none;visibility:hidden"></iframe> </noscript>`}  <div class="pt-16" id="bgTheme"${addAttribute({
    background: heroText.bgTheme,
    color: heroText.textColorTheme
  }, "style")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderTemplate`${renderComponent($$result, "YandexAnalytics", YandexAnalytics, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@ui/components/react-components/app-react/seo/yandex-analytics", "client:component-export": "default" })}`} </html>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/layouts/Layout.astro", void 0);

export { $$Layout as $, GenIcon as G, IoLogoWhatsapp as I, LiaTelegram as L, ReactInputMask as R, SpinnerLoaderTextButton as S, TfiEmail as T, YandexMetricaButton as Y, $$Container as a, appConfig as b, IoClose as c, heroText as h, jsxRuntimeExports as j, textBurgerMenu as t };
