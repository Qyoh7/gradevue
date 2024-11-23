import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1is6ese_START -->${$$result.title = `<title>${escape($page.status)} ${escape($page?.error?.message)} - GradeVue</title>`, ""}<!-- HEAD_svelte-1is6ese_END -->`, ""} <div class="flex items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-sm dark:text-gray-200 leading-relaxed space-y-4"
    },
    {},
    {
      default: () => {
        return `<h1 class="text-2xl dark:text-white">${escape($page.status)} ${escape($page?.error?.message)}</h1> ${validate_component(Button, "Button").$$render($$result, { href: "/", class: "w-full" }, {}, {
          default: () => {
            return `Go home`;
          }
        })}`;
      }
    }
  )}</div>`;
});
export {
  Error as default
};
