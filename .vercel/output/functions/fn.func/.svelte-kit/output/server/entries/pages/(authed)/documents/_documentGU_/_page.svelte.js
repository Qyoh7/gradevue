import { c as create_ssr_component, a as subscribe, l as is_promise, n as noop, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { L as LoadingBanner } from "../../../../../chunks/LoadingBanner.js";
import { a as studentAccount } from "../../../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $studentAccount, $$unsubscribe_studentAccount;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_studentAccount = subscribe(studentAccount, (value) => $studentAccount = value);
  const reportCardPromise = $studentAccount?.reportCard($page.params.documentGU);
  $$unsubscribe_page();
  $$unsubscribe_studentAccount();
  return `${$$result.head += `<!-- HEAD_svelte-ltn0k1_START -->${$$result.title = `<title>Document - GradeVue</title>`, ""}<!-- HEAD_svelte-ltn0k1_END -->`, ""} ${reportCardPromise ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(LoadingBanner, "LoadingBanner").$$render($$result, { loadingMsg: "Loading report card..." }, {}, {})} `;
    }
    return function(reportCard) {
      return ` <iframe class="w-full h-full" src="${"data:application/pdf;base64," + escape(reportCard.Base64Code, true)}" title="Report Card PDF"></iframe> `;
    }(__value);
  }(reportCardPromise)}` : ``}`;
});
export {
  Page as default
};
