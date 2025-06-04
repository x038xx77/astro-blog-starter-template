globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_COiPld1w.mjs';
import { b as appConfig, j as jsxRuntimeExports, t as textBurgerMenu, R as ReactInputMask, T as TfiEmail, L as LiaTelegram, I as IoLogoWhatsapp, Y as YandexMetricaButton, $ as $$Layout, a as $$Container } from '../chunks/Layout_2PJY54-i.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_BLcAVN98.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BLcAVN98.mjs';
import { s as seoData } from '../chunks/seo-data-site_D_Z3JnBH.mjs';
import { l as localeTextSite } from '../chunks/locale_text_site_yA0_1RcD.mjs';
import { $ as $$IconSVG } from '../chunks/IconSVG_ReBr8EfC.mjs';

const data = {"title":"Контакты","subtitle":"Мы здесь для того, чтобы помочь.","formTitle":"Чтобы связаться","formSubtitle":"Заполните форму - укажите электронную почту или мобильный телефон.","formPlaceholderName":"ФИО","formPlaceholderTexarea":"Ваше сообщение","address":"664005, г. Иркутск, улица 2-я Железнодорожная, д. 30, кв./оф. 54","phone":"+7 (914) 927-21-11","email":"team@x038it.ru","nameCompany":"ООО ЭЛЬТРАНССЕРВИС38","nameBankTitle":"Банковские реквизиты","inn":"3812115138","kpp":"381201001","paymentAccount":"40702810823350001981","nameBank":"Банк: АО АЛЬФА-БАНК","correspondentAccount":"30101810600000000774","bik":"045004774","operatingMode":"Режим работы","operatingModeWorkDay":"Понедельник - Пятница: 09:00 - 18:00","operatingModeSaturDay":"Суббота: 10:00 - 16:00","operatingModeSunDay":"Воскресенье: выходной"};
const textForm = {
  data,
};

const sendTelegramFeedBack = async (userData) => {
  const { name, contact, message } = userData;
  const messageToSend = `
    Новый запрос на связь (форма Контакты):
    Имя: ${name}   
    Email/Телефон: ${contact}
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

function FeedbackForm() {
  const [responseMessage, setResponseMessage] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [loadingSend, setLoadingSend] = reactExports.useState(false);
  const [contactMethod, setContactMethod] = reactExports.useState("phone");
  const [showName, setShowName] = reactExports.useState(false);
  const [agreeToTerms, setAgreeToTerms] = reactExports.useState(false);
  const [formValues, setFormValues] = reactExports.useState({
    name: "NotName",
    contact: "",
    message: "Интересует оформление заказа / подробности"
  });
  const [formErrors, setFormErrors] = reactExports.useState({
    name: false,
    contact: false,
    message: false,
    terms: false
  });
  const [isFormValid, setIsFormValid] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const isMessageValid = formValues.message.trim() !== "";
    let isContactValid = false;
    if (contactMethod === "email") {
      isContactValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.contact);
    } else if (contactMethod === "phone") {
      const digitsOnly = formValues.contact.replace(/\D/g, "");
      isContactValid = digitsOnly.length === 11;
    }
    const isFormOkay = isContactValid && isMessageValid && agreeToTerms;
    setIsFormValid(isFormOkay);
  }, [formValues, contactMethod, agreeToTerms]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleContactChange = (e) => {
    const { value } = e.target;
    setFormValues((prev) => ({ ...prev, contact: value }));
  };
  async function submit(e) {
    e.preventDefault();
    setLoadingSend(true);
    setResponseMessage(null);
    setError(null);
    const isEmailValid = contactMethod === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.contact) : true;
    const digitsOnly = formValues.contact.replace(/\D/g, "");
    const isPhoneValid = contactMethod === "phone" ? digitsOnly.length === 11 : true;
    const newFormErrors = {
      name: !formValues.name.trim(),
      contact: !formValues.contact || contactMethod === "phone" && !isPhoneValid || contactMethod === "email" && !isEmailValid,
      message: !formValues.message.trim(),
      terms: !agreeToTerms
      // ← вот это важно
    };
    setFormErrors(newFormErrors);
    if (newFormErrors.name || newFormErrors.contact || newFormErrors.message || newFormErrors.terms) {
      setError(localeTextSite.components.reactComponents.feedbackForm.errorRequiredFields);
      setLoadingSend(false);
      return;
    }
    const userData = { ...formValues };
    try {
      const response = await sendTelegramFeedBack(userData);
      if (!response.success) {
        setError(response.message || localeTextSite.components.reactComponents.feedbackForm.errorDefaultSendForm);
        setLoadingSend(false);
        return;
      }
      setResponseMessage(response.message || localeTextSite.components.reactComponents.feedbackForm.successDefaultSendMessage);
      if (contactMethod === "phone") {
        window.location.href = `/thank-you?phone=${formValues.contact}`;
      }
      if (contactMethod === "email") {
        window.location.href = `/thank-you?email=${formValues.contact}`;
      }
    } catch {
      setError(localeTextSite.components.reactComponents.feedbackForm.errorSendForm);
    } finally {
      setLoadingSend(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "bg-white text-gray-900 p-6 rounded-md shadow-md space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          name: "name",
          placeholder: textForm.data.formPlaceholderName,
          value: formValues.name,
          onChange: handleInputChange,
          className: `${"hidden"} w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${formErrors.name ? "border-red-400 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`
        }
      ),
      formErrors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: localeTextSite.components.reactComponents.feedbackForm.errorFormName })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              name: "contactMethod",
              value: "phone",
              checked: contactMethod === "phone",
              onChange: () => setContactMethod("phone")
            }
          ),
          localeTextSite.components.reactComponents.feedbackForm.labelPhone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "radio",
              name: "contactMethod",
              value: "email",
              checked: contactMethod === "email",
              onChange: () => setContactMethod("email")
            }
          ),
          localeTextSite.components.reactComponents.feedbackForm.labelEmail
        ] })
      ] }),
      contactMethod === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        ReactInputMask,
        {
          mask: localeTextSite.components.reactComponents.feedbackForm.maskPlaceholder,
          placeholder: localeTextSite.components.reactComponents.feedbackForm.contactMethodPlaceholder,
          name: "contact",
          value: formValues.contact,
          onChange: handleContactChange,
          required: true,
          className: `w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${formErrors.contact ? "border-red-400 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`
        }
      ),
      contactMethod === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "email",
          placeholder: localeTextSite.components.reactComponents.feedbackForm.emailPlaceholder,
          name: "contact",
          value: formValues.contact,
          onChange: handleInputChange,
          required: true,
          className: `w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${formErrors.contact ? "border-red-400 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`
        }
      ),
      formErrors.contact && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: contactMethod === "phone" ? localeTextSite.components.reactComponents.feedbackForm.errorFormPhone : localeTextSite.components.reactComponents.feedbackForm.errorFormEmail })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          name: "message",
          rows: 4,
          placeholder: textForm.data.formPlaceholderTexarea,
          value: formValues.message,
          onChange: handleInputChange,
          required: true,
          className: `${"hidden"} w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-4 ${formErrors.message ? "border-red-400 ring-red-100" : "border-gray-300 focus:border-gray-600 ring-gray-100"}`
        }
      ),
      formErrors.message && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: localeTextSite.components.reactComponents.feedbackForm.errorFormMessage })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          name: "agreeToTerms",
          type: "checkbox",
          id: "agreeToTerms",
          checked: agreeToTerms,
          onChange: () => setAgreeToTerms(!agreeToTerms),
          className: "mt-1"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "agreeToTerms", className: "text-sm", children: [
        "Я соглашаюсь с ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/privacy-policy", target: "_blank", className: "text-blue-600 underline", children: "политикой конфиденциальности" }),
        " и ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/user-agreement", target: "_blank", className: "text-blue-600 underline", children: "пользовательским соглашением" }),
        "."
      ] })
    ] }),
    formErrors.terms && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: "Чтобы продолжить необходимо принять условия." }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      YandexMetricaButton,
      {
        yaGoalTitle: seoData.yaGoalTitleContactForm,
        onClick: () => submit,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: !isFormValid || loadingSend,
            className: `w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`,
            children: loadingSend ? localeTextSite.components.reactComponents.feedbackForm.btnSpinnerLoader : localeTextSite.components.reactComponents.feedbackForm.btnSend
          }
        )
      }
    ),
    responseMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-500 mt-4", children: responseMessage }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 mt-4", children: error })
  ] });
}

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FeedbackForm", FeedbackForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/feedback-form", "client:component-export": "default" })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": localeTextSite.pages.contactUs.title, "description": localeTextSite.pages.contactUs.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> <p class="text-4xl lg:text-5xl font-bold lg:tracking-tight"> ${textForm.data.title} </p> <p class="text-lg mt-4 text-slate-600"> ${textForm.data.subtitle} </p> </div> <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-gray-800">${textForm.data.formTitle} </h2> <p class="text-lg leading-relaxed text-slate-500 mt-3"> ${textForm.data.formSubtitle} </p> <div class="mt-2"> <div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "IconSVG", $$IconSVG, { "class": "text-gray-400 w-4 h-4", "name": "uil:map-marker" })} <span>${textForm.data.address}</span> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "IconSVG", $$IconSVG, { "class": "text-gray-400 w-4 h-4", "name": "uil:envelope" })}<a${addAttribute(`mailto:${textForm.data.email}`, "href")}>${textForm.data.email}</a> </div><div class="flex items-center mt-2 space-x-2 text-gray-600"> ${renderComponent($$result3, "IconSVG", $$IconSVG, { "class": "text-gray-400 w-4 h-4", "name": "uil:phone" })}<a${addAttribute(`tel:${textForm.data.phone}`, "href")}>${textForm.data.phone}</a> </div> ${renderTemplate`<div class="mt-3 text-sm max-w-md mx-auto bg-gray-100 p-3 rounded-lg shadow-md"> <h2 class=" font-bold text-gray-800 mb-2">${textForm.data.nameCompany}</h2> <h3 class="font-bold text-gray-800 mb-2">${textForm.data.nameBankTitle}</h3> <ul class="text-gray-700"> <li><span class="font-semibold">${localeTextSite.pages.contactUs.dataTitle.innTitle}:</span> ${textForm.data.inn}</li> <li><span class="font-semibold">${localeTextSite.pages.contactUs.dataTitle.kppTitle}:</span> ${textForm.data.kpp}</li> <li><span class="font-semibold">${localeTextSite.pages.contactUs.dataTitle.paymentAccountTitle}:</span> ${textForm.data.paymentAccount}</li> <li><span class="font-semibold">${localeTextSite.pages.contactUs.dataTitle.bankTitle}</span> ${textForm.data.nameBank}</li> <li><span class="font-semibold">${localeTextSite.pages.contactUs.dataTitle.correspondentAccountTitle}:</span> ${textForm.data.correspondentAccount}</li> <li><span class="font-semibold">${localeTextSite.pages.contactUs.dataTitle.bikTitle}:</span> ${textForm.data.bik}</li> </ul> <h2 class=" font-bold text-gray-800 mt-3 mb-4">${textForm.data.operatingMode}</h2> <ul class="text-gray-700"> <li><span class="font-semibold">${textForm.data.operatingModeWorkDay}</span></li> <li><span class="font-semibold">${textForm.data.operatingModeSaturDay}</span></li> <li><span class="font-semibold">${textForm.data.operatingModeSunDay}</span></li> </ul> </div>`} </div> </div> <div> ${renderComponent($$result3, "ContactForm", $$ContactForm, {})} </div> </div> ` })} ` })}`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/contact.astro", void 0);

const $$file = "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
