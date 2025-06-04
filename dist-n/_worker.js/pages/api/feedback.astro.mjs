globalThis.process ??= {}; globalThis.process.env ??= {};
import { l as localeTextSite } from '../../chunks/locale_text_site_yA0_1RcD.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BLcAVN98.mjs';

const POST = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: localeTextSite.pages.api.feedback.requiredFieldsMsg
        }),
        { status: 400 }
      );
    }
    return new Response(
      JSON.stringify({
        message: localeTextSite.pages.api.feedback.successMsgSend
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: localeTextSite.pages.api.feedback.errorMsgSend
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
