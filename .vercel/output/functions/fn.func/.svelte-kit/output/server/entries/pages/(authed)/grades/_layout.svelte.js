import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { b as browser, a as loadGradebook } from "../../../../chunks/cache.js";
import { L as LoadingBanner } from "../../../../chunks/LoadingBanner.js";
import { g as gradebook, b as gradebookLoaded } from "../../../../chunks/stores2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gradebook, $$unsubscribe_gradebook;
  let $gradebookLoaded, $$unsubscribe_gradebookLoaded;
  $$unsubscribe_gradebook = subscribe(gradebook, (value) => $gradebook = value);
  $$unsubscribe_gradebookLoaded = subscribe(gradebookLoaded, (value) => $gradebookLoaded = value);
  if (!$gradebook && browser) loadGradebook();
  $$unsubscribe_gradebook();
  $$unsubscribe_gradebookLoaded();
  return `${validate_component(LoadingBanner, "LoadingBanner").$$render(
    $$result,
    {
      show: !$gradebookLoaded,
      loadingMsg: "Loading grades..."
    },
    {},
    {}
  )} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
