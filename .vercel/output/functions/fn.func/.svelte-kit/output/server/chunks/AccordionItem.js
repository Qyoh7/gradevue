import { c as create_ssr_component, b as compute_rest_props, s as setContext, v as validate_component, i as getContext, a as subscribe, d as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
import { F as Frame } from "./Frame.js";
import { twMerge } from "tailwind-merge";
import { i as is_void } from "./names.js";
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "multiple",
    "flush",
    "activeClass",
    "inactiveClass",
    "defaultClass",
    "classActive",
    "classInactive"
  ]);
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClass = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  let { classActive = "" } = $$props;
  let { classInactive = "" } = $$props;
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, classActive),
    inactiveClass: twMerge(inactiveClass, classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0) $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0) $$bindings.flush(flush);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0) $$bindings.classInactive(classInactive);
  frameClass = twMerge(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: frameClass }, { color: "none" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} `;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contentClass;
  let $$unsubscribe_selected;
  let { tag = "h2" } = $$props;
  let { open = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { inactiveClass = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  let { paddingFlush = "py-5" } = $$props;
  let { paddingDefault = "p-5" } = $$props;
  let { textFlushOpen = "text-gray-900 dark:text-white" } = $$props;
  let { textFlushDefault = "text-gray-500 dark:text-gray-400" } = $$props;
  let { borderClass = "border-s border-e group-first:border-t" } = $$props;
  let { borderOpenClass = "border-s border-e" } = $$props;
  let { borderBottomClass = "border-b" } = $$props;
  let { borderSharedClass = "border-gray-200 dark:border-gray-700" } = $$props;
  let { classActive = void 0 } = $$props;
  let { classInactive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0) $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0) $$bindings.transitionParams(transitionParams);
  if ($$props.paddingFlush === void 0 && $$bindings.paddingFlush && paddingFlush !== void 0) $$bindings.paddingFlush(paddingFlush);
  if ($$props.paddingDefault === void 0 && $$bindings.paddingDefault && paddingDefault !== void 0) $$bindings.paddingDefault(paddingDefault);
  if ($$props.textFlushOpen === void 0 && $$bindings.textFlushOpen && textFlushOpen !== void 0) $$bindings.textFlushOpen(textFlushOpen);
  if ($$props.textFlushDefault === void 0 && $$bindings.textFlushDefault && textFlushDefault !== void 0) $$bindings.textFlushDefault(textFlushDefault);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0) $$bindings.borderClass(borderClass);
  if ($$props.borderOpenClass === void 0 && $$bindings.borderOpenClass && borderOpenClass !== void 0) $$bindings.borderOpenClass(borderOpenClass);
  if ($$props.borderBottomClass === void 0 && $$bindings.borderBottomClass && borderBottomClass !== void 0) $$bindings.borderBottomClass(borderBottomClass);
  if ($$props.borderSharedClass === void 0 && $$bindings.borderSharedClass && borderSharedClass !== void 0) $$bindings.borderSharedClass(borderSharedClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  if ($$props.classInactive === void 0 && $$bindings.classInactive && classInactive !== void 0) $$bindings.classInactive(classInactive);
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  $$unsubscribe_selected();
  return `${((tag$1) => {
    return tag$1 ? `<${tag} class="group">${is_void(tag$1) ? "" : `<button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``} ${open ? `${slots.arrowup ? slots.arrowup({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg> `}` : `${slots.arrowdown ? slots.arrowdown({}) : ` <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg> `}`}</button>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} ${open ? `<div><div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``} `;
});
export {
  Accordion as A,
  AccordionItem as a
};