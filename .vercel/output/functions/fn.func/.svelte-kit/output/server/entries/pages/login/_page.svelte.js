import { c as create_ssr_component, b as compute_rest_props, f as spread, h as escape_object, g as escape_attribute_value, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { L as LoadingBanner } from "../../../chunks/LoadingBanner.js";
import { a as studentAccount } from "../../../chunks/stores2.js";
import "../../../chunks/synergy.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/AccordionItem.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
import { L as Label, I as Input } from "../../../chunks/Input.js";
import { twMerge } from "tailwind-merge";
import { E as EyeSlashOutline } from "../../../chunks/EyeSlashOutline.js";
import { I as InfoCircleOutline } from "../../../chunks/InfoCircleOutline.js";
const Helper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["helperClass", "color"]);
  let { helperClass = "text-xs font-normal text-gray-500 dark:text-gray-300" } = $$props;
  let { color = "gray" } = $$props;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500 grayscale contrast-50"
  };
  if ($$props.helperClass === void 0 && $$bindings.helperClass && helperClass !== void 0) $$bindings.helperClass(helperClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  return `<p${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(helperClass, colorClasses[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_studentAccount;
  $$unsubscribe_studentAccount = subscribe(studentAccount, (value) => value);
  let username;
  let password;
  let domain = "ca-pleas-psv.edupoint.com";
  let loggingIn = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-o85p1x_START -->${$$result.title = `<title>Log In - Gradevue</title>`, ""}<!-- HEAD_svelte-o85p1x_END -->`, ""} ${validate_component(LoadingBanner, "LoadingBanner").$$render(
      $$result,
      {
        show: loggingIn,
        loadingMsg: "Logging you in..."
      },
      {},
      {}
    )} ${``} <div class="flex items-center justify-center min-h-screen">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<form><h1 class="text-xl mb-4 dark:text-white" data-svelte-h="svelte-1n2m0me">Sign in to GradeVue</h1> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-4" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-9difb2">Username</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "text",
                id: "username",
                placeholder: "student@school.net",
                required: true,
                value: username
              },
              {
                value: ($$value) => {
                  username = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-4" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-1kvjhoz">Password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "password",
                id: "password",
                class: "mb-2",
                required: true,
                value: password
              },
              {
                value: ($$value) => {
                  password = $$value;
                  $$settled = false;
                }
              },
              {}
            )} ${validate_component(Helper, "Helper").$$render($$result, { class: "text-xs flex items-center" }, {}, {
              default: () => {
                return `${validate_component(EyeSlashOutline, "EyeSlashOutline").$$render(
                  $$result,
                  {
                    size: "sm",
                    class: "mr-2 focus:outline-none"
                  },
                  {},
                  {}
                )}
					Your device connects directly to StudentVue. We can&#39;t see your password or your grades.`;
              }
            })} ${validate_component(Helper, "Helper").$$render($$result, { class: "text-xs flex items-center" }, {}, {
              default: () => {
                return `${validate_component(InfoCircleOutline, "InfoCircleOutline").$$render(
                  $$result,
                  {
                    size: "sm",
                    class: "mr-2 focus:outline-none"
                  },
                  {},
                  {}
                )} <span data-svelte-h="svelte-1u7qbql">If you&#39;ve never used GradeVue or SynergyPlus before, you may need to
						<a href="/signup" class="text-primary-600 underline">create a password</a>.</span>`;
              }
            })}`;
          }
        })} ${validate_component(Accordion, "Accordion").$$render($$result, { flush: true, class: "mb-4" }, {}, {
          default: () => {
            return `${validate_component(AccordionItem, "AccordionItem").$$render(
              $$result,
              {
                paddingFlush: "mb-2",
                borderBottomClass: "",
                class: "text-white"
              },
              {},
              {
                header: () => {
                  return `<span slot="header" class="text-sm dark:text-gray-300" data-svelte-h="svelte-cw8w50">Advanced</span>`;
                },
                default: () => {
                  return `${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
                    default: () => {
                      return `<span data-svelte-h="svelte-oazy66">Domain</span> ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "text",
                          id: "domain",
                          required: true,
                          value: domain
                        },
                        {
                          value: ($$value) => {
                            domain = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Log in`;
          }
        })}</form>`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_studentAccount();
  return $$rendered;
});
export {
  Page as default
};
