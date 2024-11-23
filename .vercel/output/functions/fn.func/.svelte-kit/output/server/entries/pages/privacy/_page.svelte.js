import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "[email protected]";
  return `${$$result.head += `<!-- HEAD_svelte-1pdnxm0_START -->${$$result.title = `<title>Privacy - GradeVue</title>`, ""}<!-- HEAD_svelte-1pdnxm0_END -->`, ""} <div class="flex items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render($$result, { size: "lg", class: "gap-4" }, {}, {
    default: () => {
      return `<h1 class="text-2xl text-white" data-svelte-h="svelte-gskss2">About the privacy of GradeVue</h1> <p data-svelte-h="svelte-1w1qgtm">I developed GradeVue during winter break after using SynergyPlus and being concerned about the
			privacy of the service. GradeVue is designed to keep students&#39; information private the entire
			time you use the service. It&#39;s similar to using the StudentVue app; even though you&#39;re not
			viewing the offical website, you&#39;re still accessing your grades securely, just in a more
			convenient manner.</p> <p data-svelte-h="svelte-p9hwqg">When a student logs in to GradeVue, their username and password are sent directly to the
			offical website, using the built-in
			<a href="https://ca-pleas-psv.edupoint.com/Service/PXPCommunication.asmx" class="text-primary-600 underline">Synergy API
			</a>. This is different from SynergyPlus, which sends the login information through their
			servers without ever informing the user.</p> <span>If you have questions or concerns about GradeVue, please contact me at
			<a href="${"mailto:" + escape(email, true)}" class="text-primary-600 underline">${escape(email)}</a>.</span>`;
    }
  })}</div>`;
});
export {
  Page as default
};
