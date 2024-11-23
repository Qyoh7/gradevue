import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Card } from "../../../../chunks/Card.js";
import { G as GithubSolid } from "../../../../chunks/GithubSolid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1m5ra6r_START -->${$$result.title = `<title>Feedback - GradeVue</title>`, ""}<!-- HEAD_svelte-1m5ra6r_END -->`, ""} <div class="p-4 flex flex-col items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "https://github.com/Nonexistent-Name/gradevue/issues",
      class: "flex flex-row items-center gap-4"
    },
    {},
    {
      default: () => {
        return `${validate_component(GithubSolid, "GithubSolid").$$render(
          $$result,
          {
            size: "xl",
            class: "focus:outline-none text-white"
          },
          {},
          {}
        )} <h1 class="text-xl text-gray-900 dark:text-white" data-svelte-h="svelte-ojerwq">Report an Issue or Suggest a Feature on GitHub</h1>`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
