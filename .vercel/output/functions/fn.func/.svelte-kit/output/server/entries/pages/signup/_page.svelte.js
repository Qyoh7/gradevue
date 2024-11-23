import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="text-lg" data-svelte-h="svelte-1v1po57">How do you sign in to StudentVue?</h2> <div class="flex space-x-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      class: "w-full",
      href: "/signup/google"
    },
    {},
    {
      default: () => {
        return `with Google`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "light",
      class: "w-full",
      href: "/signup/password"
    },
    {},
    {
      default: () => {
        return `with a password`;
      }
    }
  )}</div> <span data-svelte-h="svelte-1lbqbb9">If you&#39;ve used SynergyPlus before, you&#39;re already signed up. Just use the same password to
	<a href="/login" class="text-primary-600 underline">log in</a>.</span>`;
});
export {
  Page as default
};
