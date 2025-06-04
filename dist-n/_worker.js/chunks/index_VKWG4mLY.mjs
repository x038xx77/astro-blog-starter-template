globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_COiPld1w.mjs';
import { j as jsxRuntimeExports, G as GenIcon } from './Layout_2PJY54-i.mjs';
import { a as reactExports } from './_@astro-renderers_BLcAVN98.mjs';
import { s as styles } from './index.a03de564_Cez-lP1n.mjs';
/* empty css                         */

const title = "Отзывы";
const list = [{"id":1,"author":"Иван Иванов","rating":5,"comment":"Прекрасный инструмент для создания сайтов!"},{"id":2,"author":"Мария Петрова","rating":4,"comment":"Удобный интерфейс и высокое качество."},{"id":3,"author":"Алексей Смирнов","rating":3,"comment":"Хороший сервис, но есть некоторые недоработки."},{"id":4,"author":"Елена Кузнецова","rating":5,"comment":"Идеальное решение для бизнеса!"},{"id":5,"author":"Дмитрий Лебедев","rating":4,"comment":"Легко настраивать и работать без программистов!"}];
const reviewsData = {
  title,
  list,
};

const ReviewReact = ({ author, rating, comment }) => {
  const [isHovered, setIsHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border p-4 rounded-md shadow-md flex flex-col justify-between mx-2",
      style: { width: "100%", maxWidth: "300px", height: isHovered ? "auto" : "150px" },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg", children: author }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-1", children: [...Array(5)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: index < rating ? "text-yellow-500" : "text-gray-300", children: "★" }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 transition-all duration-300 ${isHovered ? "" : "line-clamp-3"}`, children: comment })
      ]
    }
  ) });
};
const ReviewsReact = () => {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const reviewsLength = reviewsData?.list.length || 0;
  const scrollRef = reactExports.useRef(null);
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsLength);
  };
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsLength) % reviewsLength);
  };
  reactExports.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * (scrollRef.current.clientWidth / 3),
        // 3 — количество видимых отзывов
        behavior: "smooth"
        // Плавная прокрутка
      });
    }
  }, [currentIndex]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-full mx-auto p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold mb-4 text-center", children: reviewsData?.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex overflow-x-scroll ${styles.scrollbarHide}`, ref: scrollRef, children: reviewsData?.list.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-shrink-0 w-64 md:w-80 px-2",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReviewReact,
          {
            author: review?.author,
            rating: review?.rating,
            comment: review?.comment
          }
        )
      },
      review?.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevReview, className: "text-lg", children: "←" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextReview, className: "text-lg", children: "→" })
    ] })
  ] });
};

const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="reviews"> ${renderComponent($$result, "ReviewsReact", ReviewsReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/react-components/reviews-react", "client:component-export": "default" })} </div>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/Reviews.astro", void 0);

const bgFAQ = "#d68d66";
const textColorFAQ = "#000000";
const faq_title = "Часто задаваемые вопросы";
const faqs = [{"question":"Можно ли редактировать интернет-магазин без программистов?","answer":"Да, вы можете самостоятельно редактировать тексты, логотипы, фото и карточки товаров через удобную административную панель без необходимости в программистах."},{"question":"Как настроить квиз для клиентов?","answer":"Квиз уже встроен в систему. Вы можете легко настроить вопросы и добавить новые через панель управления, чтобы повышать конверсию клиентов."},{"question":"Как интегрировать магазин с Telegram-каналом?","answer":"Интеграция с Telegram бесплатна и настраивается в несколько кликов. Все заявки поступают мгновенно на ваш телефон через Telegram-канал для удобства обработки."},{"question":"Есть ли поддержка продвижения в Яндекс.Директ?","answer":"Да, ваш магазин готов к быстрому запуску рекламных кампаний в Яндекс.Директ с помощью встроенных инструментов для продвижения."},{"question":"Какая стоимость за обработку заявок?","answer":"Все заявки обрабатываются бесплатно и мгновенно поступают на ваш телефон через систему магазина, без дополнительных сборов."}];
const textJsonFAQ = {
  bgFAQ,
  textColorFAQ,
  faq_title,
  faqs,
};

const FAQReact = () => {
  const [activeAccordion, setActiveAccordion] = reactExports.useState(null);
  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => prevIndex === index ? null : index);
  };
  const isAccordionActive = (index) => activeAccordion === index;
  const faqItems = textJsonFAQ?.faqs;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "max-w-screen-md  p-5 mx-auto  ",
          id: "idFAQ",
          style: {
            backgroundColor: textJsonFAQ.bgFAQ,
            color: textJsonFAQ.textColorFAQ,
            borderRadius: "30px" 
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl lg:text-3xl font-extrabold tracking-tight text-center lg:mb-8 lg:text-3xl", children: textJsonFAQ.faq_title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-screen-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "accordion-flush", "data-accordion": "collapse", children: faqItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: `accordion-flush-heading-${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: `flex  items-center justify-between w-full py-5 font-medium text-left ${isAccordionActive(index) ? "rounded-lg p-2 border-b border-gray-200 dark:border-gray-700" : "border-b border-gray-200 dark:border-gray-700"}`,
                  onClick: () => handleAccordionClick(index),
                  "aria-expanded": isAccordionActive(index),
                  "aria-controls": `accordion-flush-body-${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.question }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: `w-6 h-6 ${isAccordionActive(index) ? "rotate-180" : ""}`,
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          }
                        )
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  id: `accordion-flush-body-${index + 1}`,
                  className: `${isAccordionActive(index) ? "" : "hidden"} py-5 border-b border-gray-200 dark:border-gray-700`,
                  "aria-labelledby": `accordion-flush-heading-${index + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 p-3 rounded-lg", children: item.answer })
                }
              )
            ] }, index)) }) })
          ]
        }
      )
    }
  );
};

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "FAQReact", FAQReact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/faq-react", "client:component-export": "default" })} </div>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/FAQ.astro", void 0);

// THIS FILE IS AUTO GENERATED
function TbLampOff (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M9 20h6"},"child":[]},{"tag":"path","attr":{"d":"M12 20v-8"},"child":[]},{"tag":"path","attr":{"d":"M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676"},"child":[]},{"tag":"path","attr":{"d":"M3 3l18 18"},"child":[]}]})(props);
}function TbTruckDelivery (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":"2","strokeLinecap":"round","strokeLinejoin":"round"},"child":[{"tag":"path","attr":{"d":"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},"child":[]},{"tag":"path","attr":{"d":"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},"child":[]},{"tag":"path","attr":{"d":"M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"},"child":[]},{"tag":"path","attr":{"d":"M3 9l4 0"},"child":[]}]})(props);
}

export { $$Reviews as $, TbLampOff as T, TbTruckDelivery as a, $$FAQ as b };
