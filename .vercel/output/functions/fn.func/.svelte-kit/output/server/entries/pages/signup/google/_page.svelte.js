import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { A as Alert } from "../../../../chunks/Alert.js";
import { B as Button } from "../../../../chunks/Button.js";
import { I as InfoCircleOutline } from "../../../../chunks/InfoCircleOutline.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1drpmyq">GradeVue isn&#39;t able to use Sign in with Google to sign you in. You&#39;ll need to create a password
	for StudentVue that GradeVue can sign you in with instead.
	<span class="font-bold">You&#39;ll still be able to use Sign in with Google with StudentVue afterwards.</span></p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://ca-pleas-psv.edupoint.com/PXP2_Password_Help.aspx",
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `Set your StudentVue password`;
      }
    }
  )} ${validate_component(Alert, "Alert").$$render($$result, { color: "dark", class: "p-0" }, {}, {
    icon: () => {
      return `${validate_component(InfoCircleOutline, "InfoCircleOutline").$$render(
        $$result,
        {
          slot: "icon",
          size: "sm",
          class: "focus:outline-none"
        },
        {},
        {}
      )}`;
    },
    default: () => {
      return `If you&#39;ve used SynergyPlus before, you can use the same password to
	<a href="/login" class="text-primary-600 underline" data-svelte-h="svelte-15wkemd">log in to GradeVue</a>.`;
    }
  })} <p data-svelte-h="svelte-q7bgvh">You should receive an email that will contain a link to set your password. <span class="font-bold">This may take a few minutes.</span>
	Once you&#39;ve created your password, you can
	<a href="/login" class="text-primary-600 underline">log in</a>.</p>`;
});
export {
  Page as default
};
