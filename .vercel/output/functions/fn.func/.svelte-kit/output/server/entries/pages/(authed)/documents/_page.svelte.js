import { c as create_ssr_component, a as subscribe, v as validate_component, k as each, e as escape } from "../../../../chunks/ssr.js";
import { b as browser, d as loadDocumentsList } from "../../../../chunks/cache.js";
import { D as DateBadge } from "../../../../chunks/DateBadge.js";
import { L as LoadingBanner } from "../../../../chunks/LoadingBanner.js";
import { e as documentsList, f as documentsListLoaded } from "../../../../chunks/stores2.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { C as Card } from "../../../../chunks/Card.js";
import { T as Tabs, a as TabItem } from "../../../../chunks/Tabs.js";
function getDocumentColor(documentType) {
  switch (documentType) {
    case "Report Card":
      return "yellow";
    case "Transcript":
      return "red";
    case "MAP Growth Family Report":
      return "blue";
    default:
      return "primary";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let documents;
  let documentCategories;
  let $documentsList, $$unsubscribe_documentsList;
  let $documentsListLoaded, $$unsubscribe_documentsListLoaded;
  $$unsubscribe_documentsList = subscribe(documentsList, (value) => $documentsList = value);
  $$unsubscribe_documentsListLoaded = subscribe(documentsListLoaded, (value) => $documentsListLoaded = value);
  if (!$documentsList && browser) loadDocumentsList();
  const sortPriority = ["Transcript", "Report Card"];
  documents = $documentsList?.StudentDocumentDatas?.StudentDocumentData ?? [];
  documentCategories = new Set(documents.map((document) => document._DocumentType).toSorted((a, b) => {
    const aPriority = sortPriority.indexOf(a);
    const bPriority = sortPriority.indexOf(b);
    if (aPriority == -1 && bPriority == -1) return a.localeCompare(b);
    if (aPriority == -1) return 1;
    if (bPriority == -1) return -1;
    return aPriority - bPriority;
  }));
  $$unsubscribe_documentsList();
  $$unsubscribe_documentsListLoaded();
  return `${$$result.head += `<!-- HEAD_svelte-ho7ahq_START -->${$$result.title = `<title>Documents - GradeVue</title>`, ""}<!-- HEAD_svelte-ho7ahq_END -->`, ""} ${validate_component(LoadingBanner, "LoadingBanner").$$render(
    $$result,
    {
      show: !$documentsListLoaded,
      loadingMsg: "Loading documents..."
    },
    {},
    {}
  )} ${$documentsList ? `${validate_component(Tabs, "Tabs").$$render($$result, { class: "m-4 mb-0", contentClass: "p-4" }, {}, {
    default: () => {
      return `${validate_component(TabItem, "TabItem").$$render($$result, { title: "All", open: true }, {}, {
        default: () => {
          return `<ol class="space-y-4">${each(documents, (document) => {
            return `<li>${validate_component(Card, "Card").$$render(
              $$result,
              {
                href: "/documents/" + document._DocumentGU,
                class: "dark:text-white max-w-none flex flex-row items-center gap-2 flex-wrap"
              },
              {},
              {
                default: () => {
                  return `<h2 class="text-md">${escape(document._DocumentComment)}</h2> ${validate_component(DateBadge, "DateBadge").$$render($$result, { date: new Date(document._DocumentDate) }, {}, {})} ${validate_component(Badge, "Badge").$$render(
                    $$result,
                    {
                      color: getDocumentColor(document._DocumentType)
                    },
                    {},
                    {
                      default: () => {
                        return `${escape(document._DocumentType)} `;
                      }
                    }
                  )} `;
                }
              }
            )} </li>`;
          })}</ol>`;
        }
      })} ${each(documentCategories, (category) => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { title: category }, {}, {
          default: () => {
            return `<ol class="space-y-4">${each(documents.filter((document) => document._DocumentType == category), (document) => {
              return `<li>${validate_component(Card, "Card").$$render(
                $$result,
                {
                  href: "/documents/" + document._DocumentGU,
                  class: "dark:text-white max-w-none flex flex-row items-center gap-2 flex-wrap"
                },
                {},
                {
                  default: () => {
                    return `<h2 class="text-md">${escape(document._DocumentComment)}</h2> ${validate_component(DateBadge, "DateBadge").$$render($$result, { date: new Date(document._DocumentDate) }, {}, {})} `;
                  }
                }
              )} </li>`;
            })}</ol> `;
          }
        })}`;
      })}`;
    }
  })}` : ``}`;
});
export {
  Page as default
};
