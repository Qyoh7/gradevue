import { c as create_ssr_component, a as subscribe, v as validate_component, k as each, e as escape } from "../../../../chunks/ssr.js";
import { b as browser, f as loadReportCardList } from "../../../../chunks/cache.js";
import { D as DateBadge } from "../../../../chunks/DateBadge.js";
import { L as LoadingBanner } from "../../../../chunks/LoadingBanner.js";
import { r as reportCardList, i as reportCardListLoaded } from "../../../../chunks/stores2.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { C as Card } from "../../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $reportCardList, $$unsubscribe_reportCardList;
  let $reportCardListLoaded, $$unsubscribe_reportCardListLoaded;
  $$unsubscribe_reportCardList = subscribe(reportCardList, (value) => $reportCardList = value);
  $$unsubscribe_reportCardListLoaded = subscribe(reportCardListLoaded, (value) => $reportCardListLoaded = value);
  if (!$reportCardList && browser) loadReportCardList();
  $$unsubscribe_reportCardList();
  $$unsubscribe_reportCardListLoaded();
  return `${$$result.head += `<!-- HEAD_svelte-1l05ht5_START -->${$$result.title = `<title>Report Cards - GradeVue</title>`, ""}<!-- HEAD_svelte-1l05ht5_END -->`, ""} ${validate_component(LoadingBanner, "LoadingBanner").$$render(
    $$result,
    {
      show: !$reportCardListLoaded,
      loadingMsg: "Loading report cards..."
    },
    {},
    {}
  )} ${$reportCardList ? `<ol class="p-4 space-y-4">${each($reportCardList, (reportCard) => {
    return `<li>${reportCard._DocumentGU ? `${validate_component(Card, "Card").$$render(
      $$result,
      {
        href: "/documents/" + reportCard._DocumentGU,
        class: "dark:text-white max-w-none flex-row items-center gap-2"
      },
      {},
      {
        default: () => {
          return `<h2 class="text-xl">${escape(reportCard._ReportingPeriodName)}</h2> ${validate_component(DateBadge, "DateBadge").$$render($$result, { date: new Date(reportCard._EndDate) }, {}, {})} `;
        }
      }
    )}` : `${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "dark:text-white max-w-none flex-row items-center gap-2"
      },
      {},
      {
        default: () => {
          return `<h2 class="text-xl">${escape(reportCard._ReportingPeriodName)}</h2> ${validate_component(DateBadge, "DateBadge").$$render($$result, { date: new Date(reportCard._EndDate) }, {}, {})} ${validate_component(Badge, "Badge").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `PDF not available`;
            }
          })} `;
        }
      }
    )}`} </li>`;
  })}</ol>` : ``}`;
});
export {
  Page as default
};
