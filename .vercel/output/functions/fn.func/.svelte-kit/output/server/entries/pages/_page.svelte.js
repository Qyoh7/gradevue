import { c as create_ssr_component, b as compute_rest_props, i as getContext, f as spread, g as escape_attribute_value, h as escape_object, d as add_attribute, e as escape, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { a as studentAccount } from "../../chunks/stores2.js";
import "../../chunks/synergy.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Card } from "../../chunks/Card.js";
import { twMerge } from "tailwind-merge";
import { E as EyeSlashOutline } from "../../chunks/EyeSlashOutline.js";
import { G as GithubSolid } from "../../chunks/GithubSolid.js";
import { G as GridPlusOutline } from "../../chunks/GridPlusOutline.js";
const ChartOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "chart outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"></path></svg>`} `;
});
const ClockOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "clock outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_studentAccount;
  $$unsubscribe_studentAccount = subscribe(studentAccount, (value) => value);
  $$unsubscribe_studentAccount();
  return `${$$result.head += `<!-- HEAD_svelte-x16wo8_START -->${$$result.title = `<title>Gradevue - The best way to check your grades on StudentVue</title>`, ""}<!-- HEAD_svelte-x16wo8_END -->`, ""} <div class="p-4 flex flex-col gap-4 items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render($$result, { class: "w-full sm:w-auto" }, {}, {
    default: () => {
      return `<h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-svelte-h="svelte-1897gkh">GradeVue</h1> <p class="mt-2 font-normal text-gray-700 dark:text-gray-400" data-svelte-h="svelte-1o6sovt">An better way to view your grades on StudentVue that shows all of your Synergy information in
			one place.</p> <div class="mt-4 flex space-x-4">${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "/login",
          color: "light",
          class: "w-full"
        },
        {},
        {
          default: () => {
            return `Log in`;
          }
        }
      )} ${validate_component(Button, "Button").$$render($$result, { href: "/signup", class: "w-full" }, {}, {
        default: () => {
          return `Sign up`;
        }
      })}</div>`;
    }
  })} <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-xl dark:text-white mb-2 flex items-center gap-2">${validate_component(ChartOutline, "ChartOutline").$$render($$result, { class: "inline focus:outline-none" }, {}, {})}
				Grade Calculator</h2> <p data-svelte-h="svelte-1m80855">GradeVue&#39;s powerful Hypothetical Mode allows you to calculate what your grade would be if
				you got a score on an assignment, as well as how each assignment affects your grade.</p>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-xl dark:text-white mb-2 flex items-center gap-2">${validate_component(GridPlusOutline, "GridPlusOutline").$$render($$result, { class: "inline focus:outline-none" }, {}, {})}
				Shows Hidden Assignments</h2> <p data-svelte-h="svelte-1qwxxsv">GradeVue is able to reveal hidden assignments and will factor them into your grade
				calculations. You never have to worry about your grade calculations being inaccurate!</p>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-xl dark:text-white mb-2 flex items-center gap-2">${validate_component(EyeSlashOutline, "EyeSlashOutline").$$render($$result, { class: "inline focus:outline-none" }, {}, {})}
				Private Login</h2> <p data-svelte-h="svelte-1trqw6n">GradeVue does not have access to your login information. When you use GradeVue, your device
				connects directly to StudentVue. We never see your password or your grades!
				<a href="/privacy" class="text-primary-600 underline">Learn more</a></p>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<h2 class="text-xl dark:text-white mb-2 flex items-center gap-2">${validate_component(ClockOutline, "ClockOutline").$$render($$result, { class: "inline focus:outline-none" }, {}, {})}
				Attendance and more</h2> <p data-svelte-h="svelte-1wa2pdp">GradeVue breaks down your attendance by day and shows what periods you missed. It also
				shows your report cards, documents, and messages.</p>`;
    }
  })}</div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://github.com/Nonexistent-Name/gradevue",
      target: "_blank",
      color: "light",
      class: "gap-2"
    },
    {},
    {
      default: () => {
        return `${validate_component(GithubSolid, "GithubSolid").$$render($$result, { class: "inline focus:outline-none" }, {}, {})}
		Open Source`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
