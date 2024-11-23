import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, k as each } from "../../../../chunks/ssr.js";
import { r as removeClassID, g as getColorForGrade } from "../../../../chunks/index2.js";
import { b as gradebookLoaded, a as studentAccount, g as gradebook } from "../../../../chunks/stores2.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { D as Dropdown, a as DropdownItem, P as Progressbar } from "../../../../chunks/Progressbar.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { M as MapPinAltOutline, C as ChevronUpOutline } from "../../../../chunks/MapPinAltOutline.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_gradebookLoaded;
  let $$unsubscribe_studentAccount;
  let $gradebook, $$unsubscribe_gradebook;
  $$unsubscribe_gradebookLoaded = subscribe(gradebookLoaded, (value) => value);
  $$unsubscribe_studentAccount = subscribe(studentAccount, (value) => value);
  $$unsubscribe_gradebook = subscribe(gradebook, (value) => $gradebook = value);
  let dropdownOpen = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-fqddk4_START -->${$$result.title = `<title>Grades - GradeVue</title>`, ""}<!-- HEAD_svelte-fqddk4_END -->`, ""} ${$gradebook ? `<div class="m-4 flex flex-col justify-center">${validate_component(Button, "Button").$$render(
      $$result,
      {
        color: "light",
        class: "mx-auto flex items-center"
      },
      {},
      {
        default: () => {
          return `${escape($gradebook.ReportingPeriod._GradePeriod)} ${dropdownOpen ? `${validate_component(ChevronUpOutline, "ChevronUpOutline").$$render(
            $$result,
            {
              size: "sm",
              class: "ml-2 focus:outline-none"
            },
            {},
            {}
          )}` : `${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
            $$result,
            {
              size: "sm",
              class: "ml-2 focus:outline-none"
            },
            {},
            {}
          )}`}`;
        }
      }
    )} ${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      { open: dropdownOpen },
      {
        open: ($$value) => {
          dropdownOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each($gradebook.ReportingPeriods.ReportPeriod ?? [], (period, index) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { class: "flex items-center" }, {}, {
              default: () => {
                return `${period._GradePeriod == $gradebook.ReportingPeriod._GradePeriod ? `${validate_component(MapPinAltOutline, "MapPinAltOutline").$$render($$result, { size: "sm", class: "mr-2" }, {}, {})}` : ``} ${escape(period._GradePeriod)} `;
              }
            })}`;
          })}`;
        }
      }
    )}</div> <ol class="space-y-4 p-4 pt-0">${each($gradebook.Courses.Course ?? [], ({ _Title: title, Marks: { Mark: { _CalculatedScoreString: grade, _CalculatedScoreRaw: percent } } }, index) => {
      return `<li>${validate_component(Card, "Card").$$render(
        $$result,
        {
          class: "dark:text-white text-xl max-w-none flex flex-row justify-between items-center",
          href: "/grades/" + index.toString()
        },
        {},
        {
          default: () => {
            return `<span class="line-clamp-1 mr-2">${escape(removeClassID(title))}</span> <span class="shrink-0 ml-auto mr-2">${escape(grade)} ${escape(parseFloat(percent))}%</span> ${validate_component(Progressbar, "Progressbar").$$render(
              $$result,
              {
                color: getColorForGrade(grade),
                progress: Math.min(isNaN(parseFloat(percent)) ? 0 : parseFloat(percent), 100),
                animate: true,
                class: "hidden sm:block w-1/3 shrink-0"
              },
              {},
              {}
            )} `;
          }
        }
      )} </li>`;
    })}</ol>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_gradebookLoaded();
  $$unsubscribe_studentAccount();
  $$unsubscribe_gradebook();
  return $$rendered;
});
export {
  Page as default
};
