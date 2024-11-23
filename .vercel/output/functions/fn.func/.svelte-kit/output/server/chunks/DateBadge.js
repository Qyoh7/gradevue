import { c as create_ssr_component, b as compute_rest_props, v as validate_component, e as escape, d as add_attribute, j as compute_slots } from "./ssr.js";
import { s as shortDateFormatter, f as fullDateFormatter, a as getRelativeTime } from "./index2.js";
import { B as Badge } from "./Badge.js";
import { P as Popper } from "./Popper.js";
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { defaultClass = "py-2 px-3" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  return `${validate_component(Popper, "Popper").$$render(
    $$result,
    Object.assign({}, { activeContent: true }, { border: true }, { shadow: true }, { rounded: true }, $$restProps, {
      class: "dark:!border-gray-600 " + $$props.class
    }),
    {},
    {
      default: () => {
        return `${$$slots.title || title ? `<div class="py-2 px-3 bg-gray-100 rounded-t-md border-b border-gray-200 dark:border-gray-600 dark:bg-gray-700">${slots.title ? slots.title({}) : ` <h3 class="font-semibold text-gray-900 dark:text-white">${escape(title)}</h3> `}</div>` : ``} <div${add_attribute("class", defaultClass, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )} `;
});
const DateBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  return `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      id: "date-" + date.getTime(),
      color: "dark"
    },
    {},
    {
      default: () => {
        return `${escape(shortDateFormatter.format(date))}`;
      }
    }
  )} ${validate_component(Popover, "Popover").$$render($$result, { triggeredBy: "#date-" + date.getTime() }, {}, {
    default: () => {
      return `${escape(fullDateFormatter.format(date))}
	(${escape(getRelativeTime(date))})`;
    }
  })}`;
});
export {
  DateBadge as D,
  Popover as P
};
