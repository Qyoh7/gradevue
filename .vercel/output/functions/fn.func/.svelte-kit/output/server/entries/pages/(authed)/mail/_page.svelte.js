import { c as create_ssr_component, b as compute_rest_props, i as getContext, f as spread, g as escape_attribute_value, h as escape_object, d as add_attribute, e as escape, v as validate_component, a as subscribe, k as each } from "../../../../chunks/ssr.js";
import { D as DateBadge } from "../../../../chunks/DateBadge.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { C as Card } from "../../../../chunks/Card.js";
import { twMerge } from "tailwind-merge";
import { b as browser, e as loadMail } from "../../../../chunks/cache.js";
import { L as LoadingBanner } from "../../../../chunks/LoadingBanner.js";
import { m as mail, h as mailLoaded } from "../../../../chunks/stores2.js";
const UserOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "user outline" } = $$props;
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>` : `<svg${spread(
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
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`} `;
});
const MessageCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let attachments;
  let { message } = $$props;
  const domParser = new DOMParser();
  const doc = domParser.parseFromString(message._MessageText, "text/html");
  let linkCount = [...doc.querySelectorAll("a")].filter((link) => new URL(link.href).hostname).length;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  attachments = typeof message.Attachments !== "string" ? message.Attachments.AttachmentXML instanceof Array ? message.Attachments.AttachmentXML : [message.Attachments.AttachmentXML] : void 0;
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "dark:text-white max-w-none flex flex-row justify-between gap-2",
      padding: "sm",
      href: "#"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col gap-2"><h2 class="text-md text-left">${escape(message._Subject)}</h2> <div class="flex flex-row items-center gap-2 flex-wrap">${validate_component(Badge, "Badge").$$render($$result, { color: "blue" }, {}, {
          default: () => {
            return `${validate_component(UserOutline, "UserOutline").$$render(
              $$result,
              {
                size: "xs",
                class: "focus:outline-none mr-1"
              },
              {},
              {}
            )} ${escape(message.From.RecipientXML._Details1)} (${escape(message.From.RecipientXML._Details2)})`;
          }
        })} ${validate_component(DateBadge, "DateBadge").$$render($$result, { date: new Date(message._SendDateTime) }, {}, {})} ${linkCount > 0 ? `${validate_component(Badge, "Badge").$$render($$result, { color: "green" }, {}, {
          default: () => {
            return `${escape(linkCount)} ${escape(linkCount === 1 ? "Link" : "Links")}`;
          }
        })}` : ``} ${attachments ? `${validate_component(Badge, "Badge").$$render($$result, { color: "indigo" }, {}, {
          default: () => {
            return `${escape(attachments.length)} ${escape(attachments.length === 1 ? "Attachment" : "Attachments")}`;
          }
        })}` : ``}</div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mail, $$unsubscribe_mail;
  let $mailLoaded, $$unsubscribe_mailLoaded;
  $$unsubscribe_mail = subscribe(mail, (value) => $mail = value);
  $$unsubscribe_mailLoaded = subscribe(mailLoaded, (value) => $mailLoaded = value);
  if (!$mail && browser) loadMail();
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-vie1t3_START -->${$$result.title = `<title>Mail - GradeVue</title>`, ""}<!-- HEAD_svelte-vie1t3_END -->`, ""} ${validate_component(LoadingBanner, "LoadingBanner").$$render(
      $$result,
      {
        show: !$mailLoaded,
        loadingMsg: "Loading mail..."
      },
      {},
      {}
    )} <h1 class="text-2xl font-bold p-4 pb-0" data-svelte-h="svelte-hozww">Inbox</h1> ${$mail ? `<ol class="p-4 space-y-4">${each($mail.InboxItemListings.MessageXML, (message) => {
      return `<li><button class="w-full">${validate_component(MessageCard, "MessageCard").$$render($$result, { message }, {}, {})}</button> </li>`;
    })}</ol> ${``}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_mail();
  $$unsubscribe_mailLoaded();
  return $$rendered;
});
export {
  Page as default
};
