import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1lmqx7a_START -->${$$result.title = `<title>Sign Up - GradeVue</title>`, ""}<!-- HEAD_svelte-1lmqx7a_END -->`, ""} <div class="flex items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-sm dark:text-gray-200 leading-relaxed space-y-4"
    },
    {},
    {
      default: () => {
        return `<h1 class="text-xl dark:text-white" data-svelte-h="svelte-1iz4kyy">Sign up for GradeVue</h1> ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>`;
});
export {
  Layout as default
};
