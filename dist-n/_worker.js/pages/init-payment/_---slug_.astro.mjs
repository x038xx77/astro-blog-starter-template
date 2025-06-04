globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_COiPld1w.mjs';
import { g as getCollection } from '../../chunks/_astro_content_d0Ob6qz0.mjs';
import { b as appConfig, j as jsxRuntimeExports, R as ReactInputMask, $ as $$Layout, a as $$Container } from '../../chunks/Layout_2PJY54-i.mjs';
import { a as reactExports } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';
import { s as styles, a as styles$1, b as styles$2 } from '../../chunks/_slug_.e3f5baab_yzWmsM3B.mjs';
import { l as localeTextSite } from '../../chunks/locale_text_site_yA0_1RcD.mjs';

const useSendTelegramPay = async (dataPayToSendTelegram) => {
  const api_token = appConfig.TOKEN_TELEGRAM;
  const my_channel_name = appConfig.CHAT_ID_TELEGRAM;
  try {
    await fetch(
      `https://api.telegram.org/bot${api_token}/sendMessage?chat_id=${my_channel_name}&text=Покупатель ${dataPayToSendTelegram?.email_customer || "не указан"}, телефон: ${dataPayToSendTelegram?.phone_customer || "не указан"} оплачивает: ${dataPayToSendTelegram?.title} на сумму: ${dataPayToSendTelegram?.amount} Руб. Заказ №: ${dataPayToSendTelegram?.order_id} Указал доставку: ${dataPayToSendTelegram?.address_delivery || "не указан"} Банк зачисления ${dataPayToSendTelegram.pay_method}`
    ).then(() => {
    }).catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.log("Error Send TELGRAM API");
  }
};

const WidgetTinkoffHtml = ({ paidProduct }) => {
  const [productData, setProductData] = reactExports.useState(null);
  const [customAmount, setCustomAmount] = reactExports.useState(0);
  const formRef = reactExports.useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = reactExports.useState(false);
  const discountedPrice = (paidProduct.price - paidProduct.price * paidProduct.discount / 100).toFixed(2);
  reactExports.useEffect(() => {
    if (paidProduct) {
      setProductData(paidProduct);
      if (paidProduct.discount) {
        setCustomAmount(Number(discountedPrice));
      } else {
        setCustomAmount(paidProduct?.amount || 0);
      }
    }
  }, [paidProduct]);
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  reactExports.useEffect(() => {
    const TPF = formRef.current;
    if (TPF) {
      const handleSubmit = (e) => {
        e.preventDefault();
        const { description, amount, email, phone, receipt } = TPF;
        if (receipt) {
          if (!email.value && !phone.value) {
            alert("Поле E-mail или Phone не должно быть пустым");
            return;
          }
          TPF.receipt.value = JSON.stringify({
            EmailCompany: appConfig.TINKOFF_EMAIL_COMPANY,
            Taxation: appConfig.TINKOFF_TAXION_COMPANY,
            FfdVersion: "1.2",
            Items: [
              {
                Name: description.value || "Оплата",
                Price: Number(amount.value * 100),
                Quantity: 1,
                Amount: Number(amount.value * 100),
                PaymentMethod: "full_prepayment",
                PaymentObject: "service",
                Tax: "none",
                MeasurementUnit: "pc"
              }
            ]
          });
        }
        if (window.pay) {
          try {
            const dataPayToSendTelegram = {
              email_customer: productData?.email_customer || "",
              pay_method: "t-bank",
              amount: Number(discountedPrice) || 0,
              order_id: productData?.order_id || "",
              address_delivery: productData?.address_delivery || "",
              phone_customer: productData?.phone_customer || "",
              fio_customer: productData?.fio_customer || "",
              title: productData?.title || ""
            };
            useSendTelegramPay(dataPayToSendTelegram);
          } catch (error) {
            console.log("Error Send Telegram Pay");
          }
          window.pay(TPF);
        } else {
          console.error("Функция pay не найдена.");
        }
      };
      TPF.addEventListener("submit", handleSubmit);
      return () => {
        TPF.removeEventListener("submit", handleSubmit);
      };
    }
  }, [isScriptLoaded, productData]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: styles.formContainer, name: "payform-tinkoff", id: "payform-tinkoff", ref: formRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "terminalkey", value: appConfig.TINKOFF_TERMINAL_KEY }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "frame", value: "false" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "language", value: "ru" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "receipt", value: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "amount", className: `hidden ${styles.mb2} ${styles.textGray100}`, children: "Сумма заказа" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: `hidden ${styles.inputRow}`,
        type: "number",
        placeholder: "Сумма заказа",
        name: "amount",
        value: customAmount,
        onChange: (e) => setCustomAmount(Number(e.target.value)),
        required: true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "order", value: productData?.order_id || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: styles.inputRow,
        type: "hidden",
        name: "description",
        value: `Заказ №${productData?.order_id || ""}, Оплатил: ${productData?.email_customer || ""}, ${productData?.title?.slice(0, 50) || ""}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "name", readOnly: true, value: `${productData?.fio_customer || ""}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "email", value: productData?.email_customer || "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: styles.inputRow, type: "hidden", name: "phone" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${styles.mb6} ${styles.card}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: styles.cardLabel, children: "Ваш заказ:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.mb4} ${styles.cardText}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "№ ",
        productData?.order_id
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `${styles.mb4} ${styles.cardText}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: styles.cardLabel, children: "Название товара:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.cardTextBold, children: productData?.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: ` ${styles.inputRow} ${styles.submitBtn}`, type: "submit", value: ` Оплатить ${customAmount} ₽` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden", children: "Выше можно изменить сумму оплаты!" })
    ] })
  ] }) });
};

const TinkoffPaymentComponent = ({ paidProduct }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " items-center justify-center  p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetTinkoffHtml, { paidProduct }) }) }) }) });
};

const PaymentProcessModal = ({ isOpen, onClose, payData }) => {
  if (!isOpen) return null;
  const { product, payerData, orderId } = payData;
  const discountedPrice = product.discount > 0 ? product.price - product.price * product.discount / 100 : product.price;
  const paidProduct = {
    id: orderId,
    pay_method: "t-bank",
    title: product.title,
    description: payData.orderId,
    price: product.price,
    discount: product.discount,
    is_delivery: product.is_delivery,
    amount: product.price,
    quantity: 1,
    fio_customer: payerData?.name,
    email_customer: payerData?.email,
    phone_customer: payerData?.phone,
    address_delivery: payerData?.address,
    order_id: orderId
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.modalOverlay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.modalContent, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Оплата" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$1.productInfo, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image.src, alt: product.image.alt, className: styles$1.productImage }),
      product.discount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-bold", children: [
        "Цена:",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.originalPrice, children: [
          product.price.toFixed(2),
          " ₽"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Со скидкой:  ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$1.discountedPrice, children: [
          discountedPrice.toFixed(2),
          " ₽"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$1.price, children: [
        product.price.toFixed(2),
        " ₽"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TinkoffPaymentComponent, { paidProduct }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$1.modalActions, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: styles$1.cancelButton, children: "Отмена" }) })
  ] }) });
};

const IninPaymentPage = ({ product }) => {
  const { title, price, discount, image, is_delivery } = product || {};
  const discountedPrice = discount > 0 ? price - price * discount / 100 : price;
  const [payerData, setPayerData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [isModalOpen, setModalOpen] = reactExports.useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPayerData({ ...payerData, [name]: value });
  };
  const generateOrderId = () => {
    const now = /* @__PURE__ */ new Date();
    const formattedDate = now.toISOString().replace(/[-:T]/g, "").split(".")[0];
    return `${formattedDate}`;
  };
  const payDataProduct = {
    product,
    payerData,
    orderId: generateOrderId()
  };
  const handleConfirmPayment = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.container, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.card, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$2.textBase, children: "Страница оплаты" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: styles$2.textRed500, children: "На главную" }),
      product && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.productInfo, children: [
        image.src && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image.src, alt: title, className: styles$2.productImage }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2.productDetails, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: title }),
          discount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$2.originalPrice, children: [
              price.toFixed(2),
              " ₽"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$2.discountedPrice, children: [
              discountedPrice.toFixed(2),
              " ₽"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: styles$2.price, children: [
            price.toFixed(2),
            " ₽"
          ] }),
          is_delivery && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Требуется доставка" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Данные плательщика" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "name",
            placeholder: "ФИО",
            value: payerData.name,
            onChange: handleInputChange,
            required: true,
            className: styles$2.inputField
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            name: "email",
            placeholder: "Email",
            value: payerData.email,
            onChange: handleInputChange,
            required: true,
            className: styles$2.inputField
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReactInputMask,
          {
            mask: "+7 (999) 999-99-99",
            name: "phone",
            value: payerData.phone,
            placeholder: "Ваш телефон",
            onChange: handleInputChange,
            className: styles$2.inputField,
            required: true
          }
        ),
        is_delivery && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "address",
            placeholder: "Адрес доставки",
            value: payerData.address,
            onChange: handleInputChange,
            required: true,
            className: styles$2.inputField
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleConfirmPayment, className: styles$2.payButton, children: "Подтвердить" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentProcessModal, { isOpen: isModalOpen, onClose: closeModal, payData: payDataProduct })
  ] });
};

const $$Astro$1 = createAstro("https://aplon.ru");
const $$InitPaymentProductLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InitPaymentProductLayout;
  const props = Astro2.props;
  const { slug, title, price, discount, image, is_delivery } = props;
  const orderDataPay = {
    slug,
    title,
    price,
    discount,
    image,
    is_delivery
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "IninPaymentReact", IninPaymentPage, { "product": orderDataPay, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/init-payment-react", "client:component-export": "default" })} ${maybeRenderHead()}<div class="text-center mt-8"> <a href="/" class="bg-blue-500 px-5 py-3 rounded-md hover:bg-blue-700 transition">
← ${localeTextSite.globalSettings.btnToMain} </a> </div> ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/layouts/InitPaymentProductLayout.astro", void 0);

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
  const slug = post.slug;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "InitPaymentProductLayout", $$InitPaymentProductLayout, { "slug": slug, ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/init-payment/[...slug].astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/init-payment/[...slug].astro";
const $$url = "/init-payment/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
