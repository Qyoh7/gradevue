import { n as noop, c as create_ssr_component, b as compute_rest_props, s as setContext, v as validate_component, d as add_attribute, j as compute_slots, i as getContext, f as spread, g as escape_attribute_value, h as escape_object, p as assign, q as identity, a as subscribe, e as escape } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { P as Popper } from "./Popper.js";
import { w as writable } from "./index.js";
import { i as is_void } from "./names.js";
import { W as Wrapper } from "./Wrapper.js";
import { c as cubicOut } from "./ChevronDownOutline.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerCls;
  let headerCls;
  let ulCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive",
    "arrow",
    "trigger",
    "placement",
    "color",
    "shadow",
    "rounded"
  ]);
  let $$slots = compute_slots(slots);
  let { activeUrl = void 0 } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { classContainer = void 0 } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let { classActive = void 0 } = $$props;
  let { arrow = false } = $$props;
  let { trigger = "click" } = $$props;
  let { placement = "bottom" } = $$props;
  let { color = "dropdown" } = $$props;
  let { shadow = true } = $$props;
  let { rounded = true } = $$props;
  const activeUrlStore = writable("");
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.classContainer === void 0 && $$bindings.classContainer && classContainer !== void 0) $$bindings.classContainer(classContainer);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0) $$bindings.arrow(arrow);
  if ($$props.trigger === void 0 && $$bindings.trigger && trigger !== void 0) $$bindings.trigger(trigger);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl ?? "");
    }
    containerCls = twMerge(containerClass, classContainer);
    headerCls = twMerge(headerClass, classHeader);
    ulCls = twMerge("py-1", $$props.class);
    footerCls = twMerge(footerClass, classFooter);
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { trigger }, { arrow }, { placement }, { shadow }, { rounded }, { color }, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function") duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Progressbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "progress",
    "precision",
    "tweenDuration",
    "animate",
    "size",
    "labelInside",
    "labelOutside",
    "easing",
    "color",
    "labelInsideClass",
    "divClass",
    "progressClass",
    "classLabelOutside"
  ]);
  let $_progress, $$unsubscribe__progress;
  let { progress = "45" } = $$props;
  let { precision = 0 } = $$props;
  let { tweenDuration = 400 } = $$props;
  let { animate = false } = $$props;
  let { size = "h-2.5" } = $$props;
  let { labelInside = false } = $$props;
  let { labelOutside = "" } = $$props;
  let { easing = cubicOut } = $$props;
  let { color = "primary" } = $$props;
  let { labelInsideClass = "text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full" } = $$props;
  let { divClass = "w-full bg-gray-200 rounded-full dark:bg-gray-700" } = $$props;
  let { progressClass = "" } = $$props;
  let { classLabelOutside = "" } = $$props;
  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  $$unsubscribe__progress = subscribe(_progress, (value) => $_progress = value);
  const barColors = {
    primary: "bg-primary-600",
    blue: "bg-blue-600",
    gray: "bg-gray-600 dark:bg-gray-300",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    purple: "bg-purple-600 dark:bg-purple-500",
    indigo: "bg-indigo-600 dark:bg-indigo-500"
  };
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0) $$bindings.progress(progress);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0) $$bindings.precision(precision);
  if ($$props.tweenDuration === void 0 && $$bindings.tweenDuration && tweenDuration !== void 0) $$bindings.tweenDuration(tweenDuration);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0) $$bindings.animate(animate);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.labelInside === void 0 && $$bindings.labelInside && labelInside !== void 0) $$bindings.labelInside(labelInside);
  if ($$props.labelOutside === void 0 && $$bindings.labelOutside && labelOutside !== void 0) $$bindings.labelOutside(labelOutside);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0) $$bindings.easing(easing);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.labelInsideClass === void 0 && $$bindings.labelInsideClass && labelInsideClass !== void 0) $$bindings.labelInsideClass(labelInsideClass);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  if ($$props.progressClass === void 0 && $$bindings.progressClass && progressClass !== void 0) $$bindings.progressClass(progressClass);
  if ($$props.classLabelOutside === void 0 && $$bindings.classLabelOutside && classLabelOutside !== void 0) $$bindings.classLabelOutside(classLabelOutside);
  {
    _progress.set(Number(progress));
  }
  $$unsubscribe__progress();
  return `${labelOutside ? `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex justify-between mb-1", classLabelOutside))
      }
    ],
    {}
  )}><span class="text-base font-medium text-blue-700 dark:text-white">${escape(labelOutside)}</span> <span class="text-sm font-medium text-blue-700 dark:text-white">${escape(progress)}%</span></div>` : ``} <div${add_attribute("class", twMerge(divClass, size, $$props.class), 0)}>${labelInside ? `<div${add_attribute("class", twMerge(barColors[color], labelInsideClass), 0)} style="${"width: " + escape($_progress, true) + "%"}">${escape($_progress.toFixed(precision))}%</div>` : `<div${add_attribute("class", twMerge(barColors[color], size, "rounded-full", progressClass), 0)} style="${"width: " + escape($_progress, true) + "%"}"></div>`}</div> `;
});
export {
  Dropdown as D,
  Progressbar as P,
  DropdownItem as a
};
