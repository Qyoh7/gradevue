import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { b as browser, l as loadStudentInfo } from "../../../../chunks/cache.js";
import { L as LoadingBanner } from "../../../../chunks/LoadingBanner.js";
import { s as studentInfo, j as studentInfoLoaded } from "../../../../chunks/stores2.js";
import { C as Card } from "../../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $studentInfo, $$unsubscribe_studentInfo;
  let $studentInfoLoaded, $$unsubscribe_studentInfoLoaded;
  $$unsubscribe_studentInfo = subscribe(studentInfo, (value) => $studentInfo = value);
  $$unsubscribe_studentInfoLoaded = subscribe(studentInfoLoaded, (value) => $studentInfoLoaded = value);
  if (!$studentInfo && browser) loadStudentInfo();
  $$unsubscribe_studentInfo();
  $$unsubscribe_studentInfoLoaded();
  return `${$$result.head += `<!-- HEAD_svelte-opdtgp_START -->${$$result.title = `<title>Student Info - GradeVue</title>`, ""}<!-- HEAD_svelte-opdtgp_END -->`, ""} ${validate_component(LoadingBanner, "LoadingBanner").$$render(
    $$result,
    {
      show: !$studentInfoLoaded,
      loadingMsg: "Loading student info..."
    },
    {},
    {}
  )} ${$studentInfo ? `<div class="p-4 flex justify-center">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "max-w-none flex flex-row gap-4 dark:text-white"
    },
    {},
    {
      default: () => {
        return `<img class="rounded h-xl" src="${"data:image/png;base64," + escape($studentInfo.Photo, true)}" alt="Student Portrait"> <div class="w-full flex flex-col"><h1 class="text-2xl w-full">${escape($studentInfo.FormattedName)}</h1> <span class="text-xl">${escape($studentInfo.PermID)}</span> <span>Grade ${escape($studentInfo.Grade)}</span> <span>${escape($studentInfo.Gender)}</span></div>`;
      }
    }
  )}</div>` : ``}`;
});
export {
  Page as default
};
