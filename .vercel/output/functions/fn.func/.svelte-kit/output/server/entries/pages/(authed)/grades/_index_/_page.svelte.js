import { c as create_ssr_component, b as compute_rest_props, i as getContext, k as each, v as validate_component, e as escape, f as spread, g as escape_attribute_value, h as escape_object, d as add_attribute, j as compute_slots, s as setContext, a as subscribe } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { g as getColorForGrade, r as removeClassID, e as extractPoints } from "../../../../../chunks/index2.js";
import { D as DateBadge, P as Popover } from "../../../../../chunks/DateBadge.js";
import { B as Badge } from "../../../../../chunks/Badge.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { C as Card } from "../../../../../chunks/Card.js";
import { D as Dropdown, a as DropdownItem, P as Progressbar } from "../../../../../chunks/Progressbar.js";
import { twMerge, twJoin } from "tailwind-merge";
import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { C as ChevronDownOutline } from "../../../../../chunks/ChevronDownOutline.js";
import { I as InfoCircleOutline } from "../../../../../chunks/InfoCircleOutline.js";
import { g as gradebook } from "../../../../../chunks/stores2.js";
import { A as Alert } from "../../../../../chunks/Alert.js";
import { w as writable } from "../../../../../chunks/index.js";
import { T as Tabs, a as TabItem } from "../../../../../chunks/Tabs.js";
import { G as GridPlusOutline } from "../../../../../chunks/GridPlusOutline.js";
const colorClasses = {
  primary: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",
  secondary: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => twMerge(inline ? "inline-flex" : "flex", "items-center", extraClass);
const inputClass = (custom, color, rounded, tinted, spacing, extraClass) => twMerge(
  "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",
  spacing,
  tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
  custom && "sr-only peer",
  "rounded",
  colorClasses[color],
  extraClass
);
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "custom",
    "inline",
    "group",
    "choices",
    "value",
    "checked",
    "spacing",
    "groupLabelClass",
    "groupInputClass"
  ]);
  let $$slots = compute_slots(slots);
  let { color = "primary" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { choices = [] } = $$props;
  let { value = "on" } = $$props;
  let { checked = void 0 } = $$props;
  let { spacing = $$slots.default ? "me-2" : "" } = $$props;
  let { groupLabelClass = "" } = $$props;
  let { groupInputClass = "" } = $$props;
  let background = getContext("background");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0) $$bindings.custom(custom);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0) $$bindings.inline(inline);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.choices === void 0 && $$bindings.choices && choices !== void 0) $$bindings.choices(choices);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0) $$bindings.spacing(spacing);
  if ($$props.groupLabelClass === void 0 && $$bindings.groupLabelClass && groupLabelClass !== void 0) $$bindings.groupLabelClass(groupLabelClass);
  if ($$props.groupInputClass === void 0 && $$bindings.groupInputClass && groupInputClass !== void 0) $$bindings.groupInputClass(groupInputClass);
  return `${choices.length > 0 ? `${each(choices, ({ value: value2, label }, i) => {
    return `${validate_component(Label, "Label").$$render(
      $$result,
      {
        class: labelClass(inline, groupLabelClass),
        show: $$slots.default,
        for: `checkbox-${i}`
      },
      {},
      {
        default: () => {
          return `${escape(label)} <input${spread(
            [
              {
                id: escape_attribute_value(`checkbox-${i}`)
              },
              { type: "checkbox" },
              { value: escape_attribute_value(value2) },
              escape_object($$restProps),
              {
                class: escape_attribute_value(inputClass(custom, color, true, background, spacing, groupInputClass))
              }
            ],
            {}
          )}${~group.indexOf(value2) ? add_attribute("checked", true, 1) : ""}> ${slots.default ? slots.default({}) : ``} `;
        }
      }
    )}`;
  })}` : `${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: labelClass(inline, $$props.class),
      show: $$slots.default
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "checkbox" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass(custom, color, true, background, spacing, $$slots.default || $$props.class))
            }
          ],
          {}
        )}${add_attribute("checked", checked, 1)}> ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`} `;
});
const NumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value"]);
  let { value = 0 } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  return `${validate_component(Input, "Input").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: ({ props }) => {
      return `<input${spread([escape_object(props), { type: "number" }], {})}${add_attribute("value", value, 0)}>`;
    }
  })} `;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "divClass",
    "striped",
    "hoverable",
    "noborder",
    "shadow",
    "color",
    "customeColor",
    "items",
    "filter",
    "placeholder",
    "innerDivClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "inputClass",
    "classInput",
    "classSvgDiv"
  ]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  let { items = [] } = $$props;
  let { filter = null } = $$props;
  let { placeholder = "Search" } = $$props;
  let { innerDivClass = "p-4" } = $$props;
  let { searchClass = "relative mt-1" } = $$props;
  let { svgDivClass = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" } = $$props;
  let { svgClass = "w-5 h-5 text-gray-500 dark:text-gray-400" } = $$props;
  let { inputClass: inputClass2 = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let { classInput = "" } = $$props;
  let { classSvgDiv = "" } = $$props;
  let searchTerm = "";
  let inputCls = twMerge(inputClass2, classInput);
  let svgDivCls = twMerge(svgDivClass, classSvgDiv);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  const searchTermStore = writable(searchTerm);
  const filterStore = writable(filter);
  setContext("searchTerm", searchTermStore);
  setContext("filter", filterStore);
  setContext("sorter", writable(null));
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0) $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0) $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0) $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0) $$bindings.customeColor(customeColor);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.innerDivClass === void 0 && $$bindings.innerDivClass && innerDivClass !== void 0) $$bindings.innerDivClass(innerDivClass);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0) $$bindings.searchClass(searchClass);
  if ($$props.svgDivClass === void 0 && $$bindings.svgDivClass && svgDivClass !== void 0) $$bindings.svgDivClass(svgDivClass);
  if ($$props.svgClass === void 0 && $$bindings.svgClass && svgClass !== void 0) $$bindings.svgClass(svgClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass2 !== void 0) $$bindings.inputClass(inputClass2);
  if ($$props.classInput === void 0 && $$bindings.classInput && classInput !== void 0) $$bindings.classInput(classInput);
  if ($$props.classSvgDiv === void 0 && $$bindings.classSvgDiv && classSvgDiv !== void 0) $$bindings.classSvgDiv(classSvgDiv);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  {
    setContext("items", items);
  }
  {
    searchTermStore.set(searchTerm);
  }
  {
    {
      if (filter) filterStore.set(filter);
    }
  }
  return `<div${add_attribute("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}>${filter ? `${slots.search ? slots.search({}) : ` <div${add_attribute("class", innerDivClass, 0)}><label for="table-search" class="sr-only" data-svelte-h="svelte-1m8vpa4">Search</label> <div${add_attribute("class", searchClass, 0)}><div${add_attribute("class", svgDivCls, 0)}>${slots.svgSearch ? slots.svgSearch({}) : ` <svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> `}</div> <input type="text" id="table-search"${add_attribute("class", inputCls, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", searchTerm, 0)}></div> ${slots.header ? slots.header({}) : ``}</div> `}` : ``} <table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let filtered;
  let sorted;
  let $$restProps = compute_rest_props($$props, ["tableBodyClass"]);
  let $sorter, $$unsubscribe_sorter;
  let $searchTerm, $$unsubscribe_searchTerm;
  let $filter, $$unsubscribe_filter;
  let { tableBodyClass = void 0 } = $$props;
  let filter = getContext("filter");
  $$unsubscribe_filter = subscribe(filter, (value) => $filter = value);
  let searchTerm = getContext("searchTerm");
  $$unsubscribe_searchTerm = subscribe(searchTerm, (value) => $searchTerm = value);
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0) $$bindings.tableBodyClass(tableBodyClass);
  items = getContext("items") || [];
  filtered = $filter ? items.filter((item) => $filter(item, $searchTerm)) : items;
  sorted = $sorter ? filtered.toSorted((a, b) => $sorter.sortDirection * $sorter.sort(a, b)) : filtered;
  $$unsubscribe_sorter();
  $$unsubscribe_searchTerm();
  $$unsubscribe_filter();
  return `<tbody${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tableBodyClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} ${each(sorted, (item) => {
    return `${slots.row ? slots.row({ item }) : ``}`;
  })}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0) $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `<td${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(tdClassfinal)
      }
    ],
    {}
  )}>${$$props.onclick ? `<button>${slots.default ? slots.default({}) : ``}</button>` : `${slots.default ? slots.default({}) : ``}`}</td> `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0) $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0) $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding", "sort", "defaultDirection", "defaultSort", "direction"]);
  let $sorter, $$unsubscribe_sorter;
  let { padding = "px-6 py-3" } = $$props;
  let { sort = null } = $$props;
  let { defaultDirection = "asc" } = $$props;
  let { defaultSort = false } = $$props;
  let { direction = defaultSort ? defaultDirection : null } = $$props;
  let sorter = getContext("sorter");
  $$unsubscribe_sorter = subscribe(sorter, (value) => $sorter = value);
  let sortId = Math.random().toString(36).substring(2);
  if (defaultSort) {
    sortItems();
  }
  function sortItems() {
    if (!sort || !sorter) return;
    sorter.update((sorter2) => {
      return {
        id: sortId,
        sort,
        sortDirection: sorter2?.id === sortId ? -sorter2.sortDirection : defaultDirection === "asc" ? 1 : -1
      };
    });
  }
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0) $$bindings.sort(sort);
  if ($$props.defaultDirection === void 0 && $$bindings.defaultDirection && defaultDirection !== void 0) $$bindings.defaultDirection(defaultDirection);
  if ($$props.defaultSort === void 0 && $$bindings.defaultSort && defaultSort !== void 0) $$bindings.defaultSort(defaultSort);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0) $$bindings.direction(direction);
  direction = $sorter?.id === sortId ? $sorter.sortDirection === 1 ? "asc" : "desc" : null;
  $$unsubscribe_sorter();
  return `${sort && sorter ? `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value($$props.class)
      },
      {
        "aria-sort": escape_attribute_value(direction ? `${direction}ending` : void 0)
      }
    ],
    {}
  )}><button${add_attribute("class", twMerge("w-full text-left", "after:absolute after:pl-3", direction === "asc" && 'after:content-["▲"]', direction === "desc" && 'after:content-["▼"]', padding), 0)}>${slots.default ? slots.default({}) : ``}</button></th>` : `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>`} `;
});
const ExclamationCircleSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "desc", "ariaLabel"]);
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
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "exclamation circle solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
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
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: escape_attribute_value(color) },
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"></path></svg>`} `;
});
const Assignment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let percentage;
  let percentageChange;
  let { name } = $$props;
  let { pointsEarned } = $$props;
  let { pointsPossible } = $$props;
  let { gradePercentageChange } = $$props;
  let { notForGrade = false } = $$props;
  let { hidden = false } = $$props;
  let { hypothetical = false } = $$props;
  let { category = void 0 } = $$props;
  let { categoryDropdownOptions = [] } = $$props;
  let { date = void 0 } = $$props;
  let { editable = false } = $$props;
  let { recalculateGradePercentage } = $$props;
  let categoryDropdownOpen = false;
  const getCategoryColor = (category2) => {
    if (category2.match(/final/i)) return "red";
    if (category2.match(/test|quiz|assessment|performance/i)) return "purple";
    if (category2.match(/homework|classwork|activity|activities|assignment|project/i)) return "green";
    return "primary";
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.pointsEarned === void 0 && $$bindings.pointsEarned && pointsEarned !== void 0) $$bindings.pointsEarned(pointsEarned);
  if ($$props.pointsPossible === void 0 && $$bindings.pointsPossible && pointsPossible !== void 0) $$bindings.pointsPossible(pointsPossible);
  if ($$props.gradePercentageChange === void 0 && $$bindings.gradePercentageChange && gradePercentageChange !== void 0) $$bindings.gradePercentageChange(gradePercentageChange);
  if ($$props.notForGrade === void 0 && $$bindings.notForGrade && notForGrade !== void 0) $$bindings.notForGrade(notForGrade);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0) $$bindings.hidden(hidden);
  if ($$props.hypothetical === void 0 && $$bindings.hypothetical && hypothetical !== void 0) $$bindings.hypothetical(hypothetical);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0) $$bindings.category(category);
  if ($$props.categoryDropdownOptions === void 0 && $$bindings.categoryDropdownOptions && categoryDropdownOptions !== void 0) $$bindings.categoryDropdownOptions(categoryDropdownOptions);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0) $$bindings.editable(editable);
  if ($$props.recalculateGradePercentage === void 0 && $$bindings.recalculateGradePercentage && recalculateGradePercentage !== void 0) $$bindings.recalculateGradePercentage(recalculateGradePercentage);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    percentage = pointsEarned / pointsPossible * 100;
    percentageChange = Math.round(gradePercentageChange * 100) / 100;
    $$rendered = `${validate_component(Card, "Card").$$render(
      $$result,
      {
        class: "dark:text-white max-w-none flex flex-row items-center sm:p-4"
      },
      {},
      {
        default: () => {
          return `<div class="mr-2">${editable && hypothetical ? `${validate_component(Input, "Input").$$render(
            $$result,
            { class: "w-48 inline", value: name },
            {
              value: ($$value) => {
                name = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${categoryDropdownOptions.length > 0 ? `${validate_component(Button, "Button").$$render($$result, { color: "light" }, {}, {
            default: () => {
              return `${escape(category ?? "Category")} ${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render(
                $$result,
                {
                  size: "xs",
                  class: "ml-2 focus:outline-none"
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Dropdown, "Dropdown").$$render(
            $$result,
            { open: categoryDropdownOpen },
            {
              open: ($$value) => {
                categoryDropdownOpen = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${each(categoryDropdownOptions, (categoryOption) => {
                  return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(categoryOption)} `;
                    }
                  })}`;
                })}`;
              }
            }
          )}` : ``}` : `<span>${escape(name)}</span>`} ${category && !hypothetical ? `${validate_component(Badge, "Badge").$$render($$result, { color: getCategoryColor(category) }, {}, {
            default: () => {
              return `${escape(category)}`;
            }
          })}` : ``} ${percentage == Infinity ? `${validate_component(Badge, "Badge").$$render($$result, { border: true, color: "indigo" }, {}, {
            default: () => {
              return `Extra Credit`;
            }
          })}` : ``} ${isNaN(pointsEarned) ? `${validate_component(Badge, "Badge").$$render($$result, { border: true, color: "purple" }, {}, {
            default: () => {
              return `Not Graded`;
            }
          })}` : ``} ${notForGrade ? `${validate_component(Badge, "Badge").$$render($$result, { border: true, color: "pink" }, {}, {
            default: () => {
              return `${editable ? `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                { checked: notForGrade },
                {
                  checked: ($$value) => {
                    notForGrade = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `<span class="text-xs" data-svelte-h="svelte-1nq1xw1">Not For Grade</span>`;
                  }
                }
              )}` : `Not For Grade`}`;
            }
          })}` : ``} ${hidden ? `${validate_component(Badge, "Badge").$$render(
            $$result,
            {
              border: true,
              color: "dark",
              class: "hidden-badge"
            },
            {},
            {
              default: () => {
                return `Hidden Assignments ${validate_component(InfoCircleOutline, "InfoCircleOutline").$$render(
                  $$result,
                  {
                    size: "xs",
                    class: "ml-1 focus:outline-none"
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}` : ``} ${hypothetical && name != "Hypothetical Assignment" ? `${validate_component(Badge, "Badge").$$render($$result, { border: true, color: "dark" }, {}, {
            default: () => {
              return `Hypothetical Assignment`;
            }
          })}` : ``} ${date ? `${validate_component(DateBadge, "DateBadge").$$render($$result, { date }, {}, {})}` : ``}</div> <div class="ml-auto mr-2 shrink-0 flex items-center gap-2">${percentageChange < 0 ? `<span class="text-red-500">${escape(percentageChange)}%</span>` : `${percentageChange > 0 ? `<span class="text-green-500">+${escape(percentageChange)}%</span>` : `${!notForGrade && !isNaN(pointsEarned) ? `<span class="text-gray-500" data-svelte-h="svelte-1rc2o5k">+0%</span>` : ``}`}`} ${editable ? `<div class="w-32 flex items-center">${validate_component(NumberInput, "NumberInput").$$render(
            $$result,
            {
              type: "number",
              size: "sm",
              value: pointsEarned
            },
            {
              value: ($$value) => {
                pointsEarned = $$value;
                $$settled = false;
              }
            },
            {}
          )} <span class="mx-1" data-svelte-h="svelte-vlo6fr">/</span> ${validate_component(NumberInput, "NumberInput").$$render(
            $$result,
            {
              type: "number",
              size: "sm",
              value: pointsPossible
            },
            {
              value: ($$value) => {
                pointsPossible = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : `${isNaN(pointsEarned) ? `${escape(pointsPossible)}` : `${escape(pointsEarned)}/${escape(pointsPossible)} ${percentage != Infinity ? `${escape(Math.round(percentage * 100) / 100)}%` : ``}`}`}</div> ${validate_component(Progressbar, "Progressbar").$$render(
            $$result,
            {
              color: getColorForGrade(percentage),
              progress: Math.min(isNaN(percentage) ? 0 : percentage, 100),
              animate: true,
              class: "hidden sm:block w-1/3 shrink-0"
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let course;
  let courseName;
  let gradeCalcSummary;
  let categories;
  let gradeCategories;
  let totalCategory;
  let assignments;
  let assignmentCategories;
  let categoryDropdownOptions;
  let $page, $$unsubscribe_page;
  let $gradebook, $$unsubscribe_gradebook;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_gradebook = subscribe(gradebook, (value) => $gradebook = value);
  let displayAssignments = [];
  let hypotheticalAssignments = [];
  function calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory) {
    let gradePercentage = 0;
    if (!gradeCategories) {
      gradePercentage = totalPointsEarned / totalPointsPossible * 100;
      if (isNaN(gradePercentage)) gradePercentage = 0;
      return gradePercentage;
    }
    if (Object.entries(pointsByCategory).length == 0) return 0;
    let totalWeight = 0;
    Object.entries(pointsByCategory).forEach(([categoryName, categoryPoints]) => {
      const category = gradeCategories.find((category2) => category2._Type == categoryName);
      if (!category) return;
      const weight = parseFloat(category._Weight);
      gradePercentage += categoryPoints.pointsEarned / categoryPoints.pointsPossible * weight;
      totalWeight += weight;
    });
    gradePercentage = gradePercentage / totalWeight * 100;
    if (isNaN(gradePercentage)) {
      console.error("Grade percentage is NaN");
      return 0;
    }
    return gradePercentage;
  }
  let hypotheticalMode = false;
  let hypotheticalGrade = 0;
  let rawGradeCalcMatches = true;
  function calculateHypotheticalGrade(assignments2) {
    let pointsByCategory = {};
    let totalPointsEarned = 0;
    let totalPointsPossible = 0;
    assignments2 = assignments2.toReversed().map((assignment) => {
      const { category, notForGrade, pointsEarned, pointsPossible } = assignment;
      if (notForGrade || isNaN(pointsEarned)) return assignment;
      const priorGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
      totalPointsEarned += pointsEarned;
      totalPointsPossible += pointsPossible;
      const categoryPoints = pointsByCategory[category] ?? { pointsEarned: 0, pointsPossible: 0 };
      pointsByCategory[category] = {
        pointsEarned: categoryPoints.pointsEarned + pointsEarned,
        pointsPossible: categoryPoints.pointsPossible + pointsPossible
      };
      const afterGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
      const gradePercentageChange = afterGrade - priorGrade;
      return { ...assignment, gradePercentageChange };
    }).toReversed();
    hypotheticalAssignments = assignments2;
    hypotheticalGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
  }
  function recalculateGradePercentage() {
    hypotheticalAssignments = hypotheticalAssignments.map((assignment) => {
      if (assignment.pointsEarned === null) assignment.pointsEarned = NaN;
      if (assignment.pointsPossible === null) assignment.pointsPossible = NaN;
      return assignment;
    });
    calculateHypotheticalGrade(hypotheticalAssignments);
  }
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    course = $gradebook?.Courses.Course?.[parseInt($page.params.index)];
    courseName = course ? removeClassID(course._Title) : "";
    gradeCalcSummary = course?.Marks.Mark.GradeCalculationSummary;
    categories = typeof gradeCalcSummary != "string" ? gradeCalcSummary?.AssignmentGradeCalc : null;
    gradeCategories = categories?.filter((grade) => grade._Type != "TOTAL");
    totalCategory = categories?.find((grade) => grade._Type == "TOTAL");
    assignments = course?.Marks.Mark.Assignments.Assignment ?? [];
    assignmentCategories = new Set(
      // fix required for Vercel, cannot reproduce locally
      assignments.length > 0 ? assignments.map((assignment) => assignment._Type).toSorted() : []
    );
    categoryDropdownOptions = gradeCategories?.map((category) => category._Type) ?? [];
    {
      {
        let pointsByCategory = {};
        let totalPointsEarned = 0;
        let totalPointsPossible = 0;
        let regularAssignmentsInit = assignments.map((assignment) => {
          const points = extractPoints(assignment._Points);
          return {
            name: assignment._Measure,
            pointsEarned: points[0],
            pointsPossible: points[1],
            gradePercentageChange: 0,
            notForGrade: assignment._Notes === "(Not For Grading)",
            hidden: false,
            hypothetical: false,
            category: assignment._Type,
            date: new Date(assignment._Date)
          };
        });
        regularAssignmentsInit = regularAssignmentsInit.toReversed().map((assignment) => {
          const { category, notForGrade, pointsEarned, pointsPossible } = assignment;
          if (notForGrade || isNaN(pointsEarned)) return assignment;
          const priorGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
          totalPointsEarned += pointsEarned;
          totalPointsPossible += pointsPossible;
          const categoryPoints = pointsByCategory[category] ?? { pointsEarned: 0, pointsPossible: 0 };
          pointsByCategory[category] = {
            pointsEarned: categoryPoints.pointsEarned + pointsEarned,
            pointsPossible: categoryPoints.pointsPossible + pointsPossible
          };
          const afterGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
          const gradePercentageChange = afterGrade - priorGrade;
          return { ...assignment, gradePercentageChange };
        }).toReversed();
        let hiddenAssignmentsInit = [];
        if (categories) {
          gradeCategories?.forEach((category) => {
            const { pointsEarned, pointsPossible } = pointsByCategory[category._Type] ?? { pointsEarned: 0, pointsPossible: 0 };
            const hiddenPointsEarned = parseFloat(category._Points) - pointsEarned;
            const hiddenPointsPossible = parseFloat(category._PointsPossible) - pointsPossible;
            if (!hiddenPointsEarned || !hiddenPointsPossible) return;
            hiddenAssignmentsInit.push({
              name: `Hidden ${category._Type} Assignments`,
              pointsEarned: hiddenPointsEarned,
              pointsPossible: hiddenPointsPossible,
              gradePercentageChange: 0,
              notForGrade: false,
              hidden: true,
              hypothetical: false,
              category: category._Type
            });
          });
          hiddenAssignmentsInit = hiddenAssignmentsInit.map((assignment) => {
            const { pointsEarned, pointsPossible, category } = assignment;
            const priorGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
            totalPointsEarned += pointsEarned;
            totalPointsPossible += pointsPossible;
            const categoryPoints = pointsByCategory[category] ?? { pointsEarned: 0, pointsPossible: 0 };
            pointsByCategory[category] = {
              pointsEarned: categoryPoints.pointsEarned + pointsEarned,
              pointsPossible: categoryPoints.pointsPossible + pointsPossible
            };
            const afterGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
            const gradePercentageChange = afterGrade - priorGrade;
            return { ...assignment, gradePercentageChange };
          });
        } else if (course) {
          let rawGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
          if (isNaN(rawGrade)) rawGrade = 0;
          const synergyGrade = parseFloat(course.Marks.Mark._CalculatedScoreRaw);
          const decimalPlaces = synergyGrade % 1 !== 0 ? synergyGrade.toString().split(".")[1].length : 0;
          if (Math.floor(rawGrade * 10 ** decimalPlaces) / 10 ** decimalPlaces !== synergyGrade) rawGradeCalcMatches = false;
        }
        displayAssignments = [...hiddenAssignmentsInit, ...regularAssignmentsInit];
        hypotheticalAssignments = displayAssignments;
        hypotheticalGrade = calculateGradePercentage(totalPointsEarned, totalPointsPossible, pointsByCategory);
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1epxfzm_START -->${$$result.title = `<title>${escape(courseName)} - GradeVue</title>`, ""}<!-- HEAD_svelte-1epxfzm_END -->`, ""} ${course ? `<div class="h-12 md:h-14"></div> ${gradeCategories ? `<div class="sm:mx-4">${validate_component(Table, "Table").$$render($$result, { shadow: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Category`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Grade`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Weight`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Points`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${each(gradeCategories.toSorted(), (category) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(category._Type)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(category._CalculatedMark)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(category._Weight)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(parseFloat(category._Points))} / ${escape(parseFloat(category._PointsPossible))} `;
                    }
                  })} `;
                }
              })}`;
            })} ${totalCategory ? `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `Total`;
                  }
                })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(totalCategory._CalculatedMark)}`;
                  }
                })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(parseFloat(totalCategory._Points))} / ${escape(parseFloat(totalCategory._PointsPossible))}`;
                  }
                })}`;
              }
            })}` : ``}`;
          }
        })}`;
      }
    })}</div>` : ``} ${!rawGradeCalcMatches ? `${validate_component(Alert, "Alert").$$render($$result, { class: "m-4", color: "red", border: true }, {}, {
      icon: () => {
        return `${validate_component(ExclamationCircleSolid, "ExclamationCircleSolid").$$render(
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
        return `<div class="flex flex-col gap-2"><button class="flex items-center"><span class="font-bold text-left">${hypotheticalMode ? `Grade calculations in Hypothetical Mode are inaccurate` : `Grade calculation error`}</span> ${`${validate_component(ChevronDownOutline, "ChevronDownOutline").$$render($$result, { size: "md", class: "focus" }, {}, {})}`}</button> ${``}</div>`;
      }
    })}` : ``} <div class="flex flex-wrap justify-between items-center">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { class: "m-4", checked: hypotheticalMode },
      {
        checked: ($$value) => {
          hypotheticalMode = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div id="hypothetical-toggle" class="flex items-center mr-2">Hypothetical Mode
				${validate_component(InfoCircleOutline, "InfoCircleOutline").$$render(
            $$result,
            {
              size: "sm",
              class: "ml-2 focus:outline-none"
            },
            {},
            {}
          )}</div>`;
        }
      }
    )} ${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        triggeredBy: "#hypothetical-toggle",
        class: "max-w-md"
      },
      {},
      {
        default: () => {
          return `Hypothetical mode allows you to see what your grade would be if you got a certain score on an
			assignment.`;
        }
      }
    )} ${hypotheticalMode ? `<div>${validate_component(Button, "Button").$$render($$result, { color: "light", class: "mx-4" }, {}, {
      default: () => {
        return `${validate_component(GridPlusOutline, "GridPlusOutline").$$render(
          $$result,
          {
            size: "sm",
            class: "mr-2 focus:outline-none"
          },
          {},
          {}
        )}
					Add Hypothetical Assignment`;
      }
    })}</div>` : ``}</div> ${assignments.length > 0 || hypotheticalMode ? `${validate_component(Popover, "Popover").$$render(
      $$result,
      {
        triggeredBy: ".hidden-badge",
        class: "max-w-md"
      },
      {},
      {
        default: () => {
          return `Teachers can choose to have assignments hidden from the assignment list but still calculated
			toward your grade. GradeVue can reveal these assignments.`;
        }
      }
    )} <div>${validate_component(Tabs, "Tabs").$$render($$result, { class: "m-4 mb-0", contentClass: "p-4" }, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "All" }, {}, {
          default: () => {
            return `<ol class="space-y-4">${each(
              hypotheticalMode ? hypotheticalAssignments : displayAssignments,
              ({ name, pointsEarned, pointsPossible, gradePercentageChange, notForGrade, hidden, hypothetical, category, date }) => {
                return `<li>${validate_component(Assignment, "Assignment").$$render(
                  $$result,
                  {
                    gradePercentageChange,
                    hidden,
                    hypothetical,
                    categoryDropdownOptions,
                    date,
                    editable: hypotheticalMode,
                    recalculateGradePercentage,
                    name,
                    pointsEarned,
                    pointsPossible,
                    notForGrade,
                    category
                  },
                  {
                    name: ($$value) => {
                      name = $$value;
                      $$settled = false;
                    },
                    pointsEarned: ($$value) => {
                      pointsEarned = $$value;
                      $$settled = false;
                    },
                    pointsPossible: ($$value) => {
                      pointsPossible = $$value;
                      $$settled = false;
                    },
                    notForGrade: ($$value) => {
                      notForGrade = $$value;
                      $$settled = false;
                    },
                    category: ($$value) => {
                      category = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )} </li>`;
              }
            )}</ol>`;
          }
        })} ${each(assignmentCategories, (category) => {
          return `${validate_component(TabItem, "TabItem").$$render($$result, { title: category }, {}, {
            default: () => {
              return `<ol class="space-y-4">${each(
                (hypotheticalMode ? hypotheticalAssignments : displayAssignments).filter((assignment) => assignment.category === category).map((assignment) => {
                  const { category: category2, ...rest } = assignment;
                  return rest;
                }),
                ({ name, pointsEarned, pointsPossible, gradePercentageChange, notForGrade, hidden, hypothetical, date }) => {
                  return `<li>${validate_component(Assignment, "Assignment").$$render(
                    $$result,
                    {
                      gradePercentageChange,
                      hidden,
                      hypothetical,
                      categoryDropdownOptions,
                      date,
                      editable: hypotheticalMode,
                      recalculateGradePercentage,
                      name,
                      pointsEarned,
                      pointsPossible,
                      notForGrade,
                      category
                    },
                    {
                      name: ($$value) => {
                        name = $$value;
                        $$settled = false;
                      },
                      pointsEarned: ($$value) => {
                        pointsEarned = $$value;
                        $$settled = false;
                      },
                      pointsPossible: ($$value) => {
                        pointsPossible = $$value;
                        $$settled = false;
                      },
                      notForGrade: ($$value) => {
                        notForGrade = $$value;
                        $$settled = false;
                      },
                      category: ($$value) => {
                        category = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} </li>`;
                }
              )}</ol> `;
            }
          })}`;
        })}`;
      }
    })}</div>` : ``} <div class="top-12 left-0 w-full fixed md:top-0"><div class="absolute w-full md:pl-64"><div class="p-4 rounded-b-lg bg-gray-900 rounded flex justify-between"><span class="line-clamp-1 text-2xl">${escape(courseName)}</span> <span class="shrink-0 text-2xl flex items-center">${hypotheticalMode ? `${!gradeCategories && !rawGradeCalcMatches ? `${validate_component(ExclamationCircleSolid, "ExclamationCircleSolid").$$render($$result, { class: "mr-2 focus:outline-none" }, {}, {})}` : ``} ${escape(Math.round(hypotheticalGrade * 1e3) / 1e3)}%` : `${escape(course.Marks.Mark._CalculatedScoreString)} ${escape(course.Marks.Mark._CalculatedScoreRaw)}%`}</span></div></div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_gradebook();
  return $$rendered;
});
export {
  Page as default
};
