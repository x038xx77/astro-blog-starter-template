globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_COiPld1w.mjs';
import { G as GenIcon, j as jsxRuntimeExports, $ as $$Layout, a as $$Container } from '../chunks/Layout_2PJY54-i.mjs';
import { $ as $$Hero, a as $$Features } from '../chunks/Features_CnCIK0J-.mjs';
import { s as seoData } from '../chunks/seo-data-site_D_Z3JnBH.mjs';
import { T as TbLampOff, a as TbTruckDelivery, $ as $$Reviews, b as $$FAQ } from '../chunks/index_VKWG4mLY.mjs';
import { g as getCollection } from '../chunks/_astro_content_d0Ob6qz0.mjs';
import { t as textProductsPage } from '../chunks/products_DQyL-G0J.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BLcAVN98.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BLcAVN98.mjs';
import { s as styles, a as styles$1, b as styles$2 } from '../chunks/index.95d291e9_C_06gBgo.mjs';
import { M as MarkdownText } from '../chunks/index_DdepQNjg.mjs';
import { l as localeTextSite } from '../chunks/locale_text_site_yA0_1RcD.mjs';

// THIS FILE IS AUTO GENERATED
function AiOutlineClose (props) {
  return GenIcon({"attr":{"viewBox":"0 0 1024 1024","fill":"currentColor","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},"child":[]}]})(props);
}

const ProductDescriptionModal = ({ productSlug, title, description, onClose }) => {
  const handleMoreDetails = () => {
    window.location.href = `/products/${productSlug}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      style: { zIndex: 9999 },
      className: ` ${styles.modalOverlay}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-[500px] overflow-y-auto ${styles.modalContent}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "absolute bg-red-300 rounded-full p-1 top-2 right-10 text-gray-500 hover:text-gray-800",
            onClick: onClose,
            "aria-label": "Close modal",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AiOutlineClose, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pt-4 ${styles.modalTitle}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownText, { text: title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.modalDescription, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownText, { text: description }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles.closeButton, onClick: handleMoreDetails, children: localeTextSite.components.reactComponents.productDescription.btnDetails })
      ] })
    }
  );
};

const ProductCard = ({ productData, productSlug, onMoreDetails }) => {
  const { title, price, discount, image, is_active, is_delivery } = productData;
  const discountedPrice = price - price * Number(discount) / 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: { backgroundColor: textProductsPage?.bgCard, color: textProductsPage?.cardTextColor },
      className: styles$1.productCard,
      children: [
        image?.src && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.imageWrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: `${image.src}?w=600&h=400&format=webp`,
            alt: title,
            className: `${styles$1.productImage} ${"grayscale" }`
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.productDetails, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.productTitle, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownText, { text: title }) }),
          !is_active && /* @__PURE__ */ jsxRuntimeExports.jsx(TbLampOff, { size: 48, color: "red", className: styles$1.statusIcon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.priceContainer, children: Number(discount) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.originalPrice, children: [
              price.toFixed(2),
              " ",
              localeTextSite.globalSettings.iconCurrency
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.discountedPrice, children: [
              discountedPrice.toFixed(2),
              " ",
              localeTextSite.globalSettings.iconCurrency
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.productPrice, children: [
            price.toFixed(2),
            " ",
            localeTextSite.globalSettings.iconCurrency
          ] }) }),
          is_delivery && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.deliveryIcon, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TbTruckDelivery, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.buttonsContainer, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.moreButton, onClick: () => productSlug && onMoreDetails(productSlug), children: localeTextSite.components.reactComponents.productCard.btnDetails }),
            productData.is_payment_button ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/init-payment/${productSlug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.payButton, children: localeTextSite.components.reactComponents.productCard.btnPay }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/send-order/${productSlug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: styles$1.payButton, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "orderText", children: textProductsPage?.text_button_to_order }) }) })
          ] })
        ] })
      ]
    }
  );
};

const ProductList = ({ productsColection }) => {
  const [selectedProduct, setSelectedProduct] = reactExports.useState(null);
  const formatProducts = productsColection?.map((product) => ({
    ...product,
    data: {
      ...product.data,
      price: typeof product.data.price === "string" ? parseFloat(product.data.price) : product.data.price,
      discount: typeof product.data.discount === "string" ? parseFloat(product.data.discount) : product.data.discount
    }
  }));
  const filteredProducts = formatProducts.filter((product) => product.data.is_active).sort((a, b) => {
    const serialA = Number(a.data.serial_number ?? 0);
    const serialB = Number(b.data.serial_number ?? 0);
    return serialA - serialB;
  });
  const openModal = (slug, title, body) => {
    setSelectedProduct({ slug, title, body });
  };
  const closeModal = () => {
    setSelectedProduct(null);
  };
  if (filteredProducts.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2.container, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.productList, children: [
    filteredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductCard,
      {
        productSlug: product.slug,
        productData: product.data,
        onMoreDetails: () => product.slug && openModal(product.slug, product.data.title, product.data.description)
      },
      product.id
    )),
    selectedProduct && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProductDescriptionModal,
      {
        productSlug: selectedProduct.slug,
        title: selectedProduct.title,
        description: selectedProduct.body,
        onClose: closeModal
      }
    )
  ] }) });
};

const $$ListProductSection = createComponent(async ($$result, $$props, $$slots) => {
  const rawProducts = await getCollection("products");
  const productsColection = rawProducts.map(({ id, slug, data }) => ({
    id,
    slug,
    data: {
      draft: data.draft,
      title: data.title,
      snippet: data.snippet,
      image: {
        src: data.image.src,
        alt: data.image.alt
      },
      pubDate: data.pubDate,
      author: data.author,
      category: data.category,
      tags: data.tags,
      price: typeof data.price === "string" ? parseFloat(data.price) : data.price,
      discount: typeof data.discount === "string" ? parseFloat(data.discount) : data.discount,
      is_active: data.is_active,
      is_delivery: data.is_delivery
    }
  })).sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${productsColection.length !== 0 && renderTemplate`<div class="mt-10 text-left"> <p class="text-4xl lg:text-5xl font-bold lg:tracking-tight">${textProductsPage.title}</p> <p class="text-lg mt-4">${textProductsPage.subtitle}</p> </div>`} <div class="flex justify-center mt-6"> <!-- @ts-ignore --> ${renderComponent($$result, "ProductList", ProductList, { "productsColection": productsColection.length ? productsColection : [], "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/products-react/product-list", "client:component-export": "default" })} </div> </div>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/ListProductSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoData.SITE_TITLE, "description": seoData.SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "ListProductSection", $$ListProductSection, {})} ${renderComponent($$result3, "Reviews", $$Reviews, {})} ${renderComponent($$result3, "FAQ", $$FAQ, {})} ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/index.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
