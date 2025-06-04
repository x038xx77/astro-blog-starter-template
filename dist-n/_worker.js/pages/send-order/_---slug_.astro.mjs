globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_COiPld1w.mjs';
import { g as getCollection } from '../../chunks/_astro_content_d0Ob6qz0.mjs';
import { b as appConfig, j as jsxRuntimeExports, c as IoClose, R as ReactInputMask, Y as YandexMetricaButton, S as SpinnerLoaderTextButton, $ as $$Layout, a as $$Container } from '../../chunks/Layout_2PJY54-i.mjs';
import { a as reactExports } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';
import { l as localeTextSite } from '../../chunks/locale_text_site_yA0_1RcD.mjs';
import { s as seoData } from '../../chunks/seo-data-site_D_Z3JnBH.mjs';

const sendOrderToTelegram = async (sendTelegramAllData) => {
  const { name, phone, email, message, orderDataSendTelegram, delivery } = sendTelegramAllData;
  const messageToSend = `
    Новый ЗАКАЗ:
    Имя: ${name}
    Телефон: ${phone}
    Email: ${email}
    Продукт: ${orderDataSendTelegram.title}
    Цена со скидкой: ${orderDataSendTelegram.discountedPrice}
    Данные по доставке: ${delivery}
    Дополнительная информация: ${message}
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

const FormSendOrderReact = ({ orderDataSendTelegram }) => {
  const [phoneError, setPhoneError] = reactExports.useState("");
  const [sendTelegramAllData, setSendTelegramAllData] = reactExports.useState({
    name: "NotName",
    phone: "",
    email: "",
    message: "Интересует оформление заказа / подробности (форма продукты/услуги)",
    delivery: "",
    orderDataSendTelegram
  });
  const [loadingSend, setLoadingSend] = reactExports.useState(false);
  const [contactMethod, setContactMethod] = reactExports.useState("phone");
  const [agreeToTerms, setAgreeToTerms] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length !== 11) {
        setPhoneError("Номер телефона должен содержать 11 цифр.");
      } else {
        setPhoneError("");
      }
    }
    setSendTelegramAllData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length === 11;
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isContactValid = contactMethod === "email" && validateEmail(sendTelegramAllData.email) || contactMethod === "phone" && validatePhone(sendTelegramAllData.phone);
  const isFormValid = sendTelegramAllData.name.trim() !== "" && sendTelegramAllData.message.trim() !== "" && (!orderDataSendTelegram.is_delivery || sendTelegramAllData.delivery.trim() !== "") && isContactValid && agreeToTerms;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoadingSend(true);
    try {
      const result = await sendOrderToTelegram(sendTelegramAllData);
      setLoadingSend(true);
      if (result.success) {
        const queryString = new URLSearchParams({
          name: sendTelegramAllData.name,
          phone: sendTelegramAllData.phone,
          email: sendTelegramAllData.email,
          message: sendTelegramAllData.message,
          delivery: sendTelegramAllData.delivery || localeTextSite.components.reactComponents.formSendOrderReact.deliveryEmptyMsg
        }).toString();
        setLoadingSend(false);
        window.location.href = `/thank-you?${queryString}`;
      } else {
        setErrorMessage(result.message || localeTextSite.components.reactComponents.formSendOrderReact.errorMessage);
        setLoadingSend(false);
      }
    } catch (error) {
      setErrorMessage(localeTextSite.components.reactComponents.formSendOrderReact.errorMessage);
      setLoadingSend(false);
    }
  };
  const onCloseSendOrder = () => {
    window.location.href = `/`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed text-gray-900 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md w-80 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => onCloseSendOrder(),
        className: "absolute top-2 right-2 text-gray-500 hover:text-gray-700",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoClose, { size: 24 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold mb-4 text-center", children: localeTextSite.components.reactComponents.formSendOrderReact.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          name: "name",
          value: sendTelegramAllData.name,
          placeholder: localeTextSite.components.reactComponents.formSendOrderReact.namePlaceholder,
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
      contactMethod === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReactInputMask,
          {
            mask: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.maskPlaceholder,
            name: "phone",
            value: sendTelegramAllData.phone,
            placeholder: localeTextSite.components.reactComponents.callToActionIconReact.formCallToAction.phonePlaceholder,
            onChange: handleInputChange,
            className: `block w-full p-2 mb-2 border rounded ${phoneError ? "border-red-400 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`,
            required: true
          }
        ),
        phoneError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: phoneError })
      ] }),
      contactMethod === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          name: "email",
          value: sendTelegramAllData.email,
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
          value: sendTelegramAllData.message,
          placeholder: localeTextSite.components.reactComponents.formSendOrderReact.messagePlaceholder,
          onChange: handleInputChange,
          className: `${"hidden"} block w-full p-2 mb-2 border rounded`,
          rows: 4
        }
      ),
      orderDataSendTelegram.is_delivery && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name: "delivery",
          value: sendTelegramAllData.delivery,
          placeholder: localeTextSite.components.reactComponents.formSendOrderReact.deliveryPlaceholder,
          onChange: handleInputChange,
          className: `block w-full p-2 mb-2 border rounded`,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(YandexMetricaButton, { yaGoalTitle: seoData.yaGoalTitleSendOrder, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: `mt-2 w-full px-4 py-2 rounded-md ${isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SpinnerLoaderTextButton, { loading: loadingSend, spinTitleText: localeTextSite.components.reactComponents.formSendOrderReact.btnSpinnerLoader, titleText: localeTextSite.components.reactComponents.formSendOrderReact.btnSend }) }) })
    ] }),
    errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-red-500", children: [
      localeTextSite.components.reactComponents.formSendOrderReact.errorDefaultMessage,
      " ",
      errorMessage
    ] })
  ] }) });
};

const $$Astro$1 = createAstro("https://aplon.ru");
const $$SendOrderLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SendOrderLayout;
  const props = Astro2.props;
  const { title, price, discount, is_delivery } = props;
  const priceDiscont = price - price * discount / 100;
  const orderDataSendTelegram = {
    title,
    discountedPrice: priceDiscont,
    is_delivery
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FormSendOrderReact", FormSendOrderReact, { "orderDataSendTelegram": orderDataSendTelegram, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/form-send-order-react", "client:component-export": "default" })} ${maybeRenderHead()}<div class="text-center mt-8"> <a href="/" class=" bg-blue-500 px-5 py-3 rounded-md hover:bg-blue-700 transition">← ${localeTextSite.globalSettings.btnToMain}</a> </div> ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/layouts/SendOrderLayout.astro", void 0);

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
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "SendOrderLayout", $$SendOrderLayout, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/send-order/[...slug].astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/send-order/[...slug].astro";
const $$url = "/send-order/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
