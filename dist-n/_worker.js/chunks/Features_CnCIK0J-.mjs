globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, f as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_COiPld1w.mjs';
import { $ as $$Picture } from './_astro_assets_DCCxQFkR.mjs';
import { $ as $$IconSVG } from './IconSVG_ReBr8EfC.mjs';
import { h as heroText, a as $$Container } from './Layout_2PJY54-i.mjs';
import { M as MarkdownText } from './index_DdepQNjg.mjs';

const heroImage = new Proxy({"src":"/_astro/hero.a_IX6uQB.webp","width":600,"height":429,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/assets/hero.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://aplon.ru");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    id,
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    textColor,
    bgColor,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
    primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
    orange: "bg-orange-500 text-black hover:bg-orange-600 border-2 border-transparent",
    inverted: "bg-white text-black border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(id, "id")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}${addAttribute({
    color: textColor || (style === "primary" ? "white" : "black"),
    backgroundColor: bgColor || (style === "primary" ? "black" : "transparent")
  }, "style")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/ui/Link.astro", void 0);

const $$Astro = createAstro("https://aplon.ru");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const isBackgroundImg = Boolean(heroText?.isHeroBackgroundImg);
  return renderTemplate`${!isBackgroundImg ? renderTemplate`${maybeRenderHead()}<section${addAttribute(`color: ${heroText.colorTextIsBackgroundImg}`, "style")} class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"><div class="order-first lg:order-none"><h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter w-full">${heroText.title}</h1><div class="py-6 order-last md:order-none md:block lg:hidden">${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "formats": ["avif", "webp"], "class": `${"rounded-2xl" } ${"rounded-lg"} ` })}</div><!-- Подзаголовок --><div class="text-lg max-w-xl">${renderComponent($$result, "MarkdownText", MarkdownText, { "text": heroText.subtitle, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/markdown-text", "client:component-export": "default" })}</div><!-- Кнопки --><div class="flex flex-col sm:flex-row gap-3">${renderTemplate`${renderComponent($$result, "Link", $$Link, { "id": "btnOne", "style": "orange", "bgColor": heroText?.bgBtnOne, "textColor": heroText?.colorBtnOne, "href": heroText?.link_button_one, "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconSVG", $$IconSVG, { "name": "order", "class": "text-blue-300" })}${heroText.button_one}` })}`}${renderTemplate`${renderComponent($$result, "Link", $$Link, { "id": "btnTwo", "size": "lg", "style": "outline", "bgColor": heroText?.bgBtnTwo, "textColor": heroText?.colorBtnTwo, "rel": "noopener", "href": heroText?.link_button_two, "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconSVG", $$IconSVG, { "name": "chat", "class": "text-orange-300" })}${heroText.button_two}` })}`}</div></div><!-- Блок с картинкой для десктопной версии --><div${addAttribute(`${"rounded-full" } py-6 order-none hidden lg:block`, "class")}>${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "formats": ["avif", "webp"], "class": `${"rounded-2xl" } ${"rounded-lg"} ` })}</div></section>` : renderTemplate`<section id="bg-fon-main-img" class="p-3 rounded-2xl  bg-cover sm:p-3 bg-auto md:bg-cover bg-no-repeat "><section${addAttribute(`color: ${heroText.colorTextIsBackgroundImg}`, "style")} class="grid  lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"><div class="order-first lg:order-none"><h1 class="text-3xl pb-2 lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter ">${heroText.title}</h1><div class="text-lg max-w-xl">${renderComponent($$result, "MarkdownText", MarkdownText, { "text": heroText.subtitle, "client:load": true, "client:component-hydration": "load", "client:component-path": "@ui/components/react-components/markdown-text", "client:component-export": "default" })}</div><div class="flex flex-col sm:flex-row gap-3">${renderTemplate`${renderComponent($$result, "Link", $$Link, { "id": "btnOne", "style": "orange", "bgColor": heroText?.bgBtnOne, "textColor": heroText?.colorBtnOne, "href": heroText?.link_button_one, "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconSVG", $$IconSVG, { "name": "order", "class": "text-blue-300" })}${heroText.button_one}` })}`}${renderTemplate`${renderComponent($$result, "Link", $$Link, { "id": "btnTwo", "size": "lg", "style": "outline", "bgColor": heroText?.bgBtnTwo, "textColor": heroText?.colorBtnTwo, "rel": "noopener", "href": heroText?.link_button_two, "class": "flex gap-1 items-center justify-center", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconSVG", $$IconSVG, { "name": "chat", "class": "text-orange-300" })}${heroText.button_two}` })}`}</div></div></section></section>`}${heroText.isCustomHero}<!-- New Section --><section class="relative mt-12 md:mt-16 w-full">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`<div class="mx-auto lg:mx-0 p-5 sm:p-4 py-4 sm:py-4 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12"><div class="text-center "><h2 class="font-semibold text-xl sm:text-lg md:text-4xl text-heading-1">
3+
</h2><p class="pt-2 text-heading-3">Дней до запуска</p></div><div class="text-center"><h2 class="font-semibold text-xl sm:text-lg md:text-4xl text-heading-1">
100+
</h2><p class="pt-2 text-heading-3">ИИ-ботов</p></div><div class="text-center"><h2 class="font-semibold text-lg sm:text-xl md:text-4xl text-heading-1">
120+
</h2><p class="pt-2 text-heading-3">ИИ-агентов</p></div><div class="text-center"><h2 class="font-semibold text-xl sm:text-xl md:text-4xl text-heading-1">
24/7
</h2><p class="pt-2 text-sm">Онлайн</p></div></div>` })}<!-- New Description Section --><div class="mt-12 p-6  rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Организация командной работы</h3><p>Управляйте проектами и задачами эффективно! Запускаем бесплатные аналоги Jira, Trello, Monday.com, ClickUp, YouTrack. Поддержка Agile, Kanban и Scrum.</p><p class="mt-2 font-semibold">✅ Российские аналоги — Yandex Tracker (от 249 руб. за пользователя или 2490 руб./мес. за 10 человек).</p></div><div class="mt-8 p-6  rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Онлайн-присутствие: Сайт + БОТ + ИИ-ассистент</h3><p>Предоставляем сайт, готовый к запуску рекламы и с системой CMS, которая позволяет создавать, редактировать и управлять содержимым веб-страниц без необходимости программирования, а также интеграцией чат-ботов и ИИ-помощников.</p></div><div class="mt-8 p-6 rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Автоматизация бизнеса с ИИ-ассистентами</h3><p>Боты отвечают на вопросы, собирают заявки и помогают с продажами.</p></div><div class="mt-8 p-6 rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Телеграм-бот, который продает и принимает оплату 24/7</h3><p>🚀 Автоматическая обработка заказов и платежей без участия менеджеров!</p></div><div class="mt-8 p-6  rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Организация бухгалтерского учета</h3><p>Доступ к 1С по почасовой оплате — платите только за фактическое время работы. База данных будет у вас навсегда, а не на сторонних серверах.</p></div><div class="mt-8 p-6  rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Честный ЗНАК, ЭДО и все необходимое</h3><p>Интеграция с электронным документооборотом для бизнеса.</p></div><div class="mt-8 p-6  rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">🔹 Интеграция с маркетплейсами</h3><p>Автоматизация работы с Wildberries, Ozon, Яндекс.Маркет и другими площадками.</p></div><div class="mt-8 p-6 rounded-3xl w-full"><h3 class="text-2xl font-semibold text-heading-1 mb-4">💡 Делегируйте рутину ИИ-ассистентам и сосредоточьтесь на росте бизнеса!</h3><p>🚀 Ускорьте рост вашего бизнеса с автоматизацией процессов с помощью ИИ!</p></div></section><!-- End new section --><section><div class="mx-auto py-12"><h2 class="text-3xl font-bold mb-8">
Как получить первые заказы или набрать подписчиков в ваш Телеграм-канал
</h2><div class="relative pl-10"><!-- Линия --><div class="absolute top-0 left-7 h-full w-0.5 bg-gray-300"></div><!-- Шаги --><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
1
</div></div><div class="ml-6"><h2 class="text-xl font-semibold">
Подайте заявку!
</h2><p class="">
Заполните форму с описанием вашего бизнеса. Наш менеджер свяжется с
            вами, чтобы обсудить ваш сайт и стратегию развития.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
2
</div></div><div class="ml-6"><h2 class="text-xl font-semibold">Настроим рекламу и сайт</h2><p class="">
Мы создадим для вас современный сайт и запустим рекламу. Вы сможете
            в любой момент обновлять контент самостоятельно.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
3
</div></div><div class="ml-6"><h2 class="text-xl font-semibold">Пополните счёт</h2><p class="">
Получите доступ к рекламному кабинету Яндекс.Директ. Пополните
            баланс от 3000 ₽, чтобы запустить рекламу. Возможен бонус до 20 000
            ₽ при первом запуске.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
4
</div></div><div class="ml-6"><h2 class="text-xl font-semibold">Получайте заявки и звонки</h2><p class="">
Реклама привлечёт клиентов, которые будут звонить вам и оставлять
            заявки. 📌 Также возможно набрать подписчиков в ваш Телеграм-канал
            через эту платформу.
</p></div></div><div class="flex items-start"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
5
</div></div><div class="ml-6"><h2 class="text-xl font-semibold">Обновляйте сайт</h2><p class="">
Вносите изменения в конструкторе сайта, когда это нужно. Сайт
            поддерживает прием платежей банковскими картами, который можно
            подключить или отключить простыми действиями. Вы можете пользоваться
            сайтом без приема оплат и без рекламы. Оплата требуется только за
            продвижение, если вы решите продвигать ваши услуги или товары в
            Яндекс.Директе
</p></div></div></div><div class="mx-auto py-2"><h2 class="text-3xl font-bold mb-8">
Для тех, кто планирует принимать оплату на сайте
</h2><div class="relative pl-10"><!-- Линия --><div class="absolute top-0 left-7 h-full w-0.5 bg-gray-300"></div><!-- Преимущества --><div class="flex items-start mb-2"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
1
</div></div><div class="ml-6"><h3 class="text-xl font-semibold">
Автоматическая отправка чеков (За каждый чек 0.4 или 1.5%)
</h3><p class="">
Сервис автоматической отправки чеков в налоговую и покупателям
              включается за пару кликов и освобождает вас от рутинной работы.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
2
</div></div><div class="ml-6"><h3 class="text-xl font-semibold">Легкость подключения</h3><p class="">
Вы можете включить функцию приема платежей на сайте и отправки
              чеков в несколько кликов, а также отключить эту опцию, когда не
              требуется.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
3
</div></div><div class="ml-6"><h3 class="text-xl font-semibold">Соответствие 54-ФЗ</h3><p class="">
Мы обеспечиваем полное соответствие требованиям 54-ФЗ,
              автоматизируя процессы отправки чеков в налоговую и покупателям,
              без необходимости арендовать онлайн-кассу.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
4
</div></div><div class="ml-6"><h3 class="text-xl font-semibold">
Отсутствие дополнительных расходов
</h3><p class="">
Вам не нужно будет покупать фискальный накопитель или
              контролировать срок его работы. Также мы избавляем от
              необходимости настройки передачи данных и других рутинных задач.
</p></div></div><div class="flex items-start mb-10"><div class="flex-shrink-0"><div class="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center rounded-full shadow-lg border-2 border-gray-400">
5
</div></div><div class="ml-6"><h3 class="text-xl font-semibold">Гибкость оплаты</h3><p class="">
Вы платите только за использование системы при подключении, не
              тратя деньги на период, когда не работаете или не используете
              систему.
</p></div></div></div></div></div></section>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/Hero.astro", void 0);

const title = "Рекламируйте товары или услуги, меняйте контент под любую нишу, даже когда реклама уже в деле!";
const subtitle = "В комплект поставки входят CMS. В нем использованы лучшие компоненты самых современных инструментов и добавлены собственные инновации.";
const items = [{"title":"Используйте свой CMS","description":"Создавайте сайт без программистов, или добавьте веб-компоненты простого HTML.","icon":"bx:bxs-briefcase"},{"title":"100% статичный HTML, без JS","description":"Этот сайт рендерит всю страницу в статичный HTML, по умолчанию исключая весь JavaScript из итоговой сборки.","icon":"bx:bxs-window-alt"},{"title":"Компоненты по требованию","description":"Нужен JS? Сайт может автоматически оживлять интерактивные компоненты, когда они становятся видимыми на странице.","icon":"bx:bxs-data"},{"title":"Широкая интеграция","description":"Сайт поддерживает TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX и любые другие npm-пакеты.","icon":"bx:bxs-bot"},{"title":"SEO-оптимизация","description":"Автоматические карты сайта, RSS-ленты, пагинация и коллекции упрощают SEO и распространение. Просто работает!","icon":"bx:bxs-file-find"},{"title":"Сообщество","description":"Buildberries — это проект, который планируется поддерживается сотнями участников, создающих тысячи индивидуальных вкладов.","icon":"bx:bxs-user"}];
const features = {
  title,
  subtitle,
  items,
};

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-screen-xl	"> <div class="mt-16 md:mt-0"> <h2 class="text-2xl lg:text-5xl font-bold lg:tracking-tight"> ${features.title} </h2> <p class="text-lg mt-4 "> ${features.subtitle} </p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features?.items?.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "IconSVG", $$IconSVG, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3> <p class=" mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div> </section>`;
}, "/home/john/DevJohn/open-source-storelike-ui-admin/admin-host-app/src/components/Features.astro", void 0);

export { $$Hero as $, $$Features as a };
