import { c as create_ssr_component, a as subscribe, l as is_promise, n as noop, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { L as LoadingBanner } from "../../../../../chunks/LoadingBanner.js";
import { a as studentAccount } from "../../../../../chunks/stores2.js";
import { Buffer } from "buffer";
import { fileTypeFromBuffer } from "file-type";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as Card } from "../../../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $studentAccount, $$unsubscribe_studentAccount;
  let $page, $$unsubscribe_page;
  $$unsubscribe_studentAccount = subscribe(studentAccount, (value) => $studentAccount = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const attachmentGU = $page.url.searchParams.get("attachmentGU");
  let attachmentPromise;
  let mimeType;
  if ($studentAccount && attachmentGU) {
    attachmentPromise = $studentAccount.attachmentBase64(attachmentGU);
    attachmentPromise.then((attachment) => {
      fileTypeFromBuffer(Buffer.from(attachment.Base64Code, "base64")).then((type) => {
        if (!type?.mime) return;
        mimeType = type.mime;
      });
    });
  }
  $$unsubscribe_studentAccount();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1d2mwvl_START -->${$$result.title = `<title>Attachment - GradeVue</title>`, ""}<!-- HEAD_svelte-1d2mwvl_END -->`, ""} ${$studentAccount ? `${attachmentGU ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(LoadingBanner, "LoadingBanner").$$render($$result, { loadingMsg: "Loading attachment..." }, {}, {})} `;
    }
    return function(attachment) {
      return ` <iframe class="w-full h-full" src="${"data:" + escape(mimeType, true) + ";base64," + escape(attachment.Base64Code, true)}" title="Attachment"></iframe> `;
    }(__value);
  }(attachmentPromise)}` : `<div class="flex items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-sm dark:text-gray-200 leading-relaxed space-y-4"
    },
    {},
    {
      default: () => {
        return `<h1 class="text-2xl dark:text-white" data-svelte-h="svelte-1uhjrpu">AttachmentGU Required</h1> ${validate_component(Button, "Button").$$render($$result, { href: "/mail", class: "w-full" }, {}, {
          default: () => {
            return `Return to Mail`;
          }
        })}`;
      }
    }
  )}</div>`}` : ``}`;
});
export {
  Page as default
};
