import { c as create_ssr_component, a as subscribe, v as validate_component, k as each, e as escape } from "../../../../chunks/ssr.js";
import { b as browser, c as loadAttendance } from "../../../../chunks/cache.js";
import { f as fullDateFormatter, r as removeClassID } from "../../../../chunks/index2.js";
import { L as LoadingBanner } from "../../../../chunks/LoadingBanner.js";
import { c as attendance, d as attendanceLoaded } from "../../../../chunks/stores2.js";
import { A as Accordion, a as AccordionItem } from "../../../../chunks/AccordionItem.js";
import { B as Badge } from "../../../../chunks/Badge.js";
function getAbsenceType(periods) {
  const reasons = periods.map((period) => period._Name);
  if (reasons.some((reason) => reason === "Absent" || reason === "Non ADA")) return "Absent";
  if (reasons.some((reason) => reason.match(/Tardy/))) return "Tardy";
  if (reasons.some((reason) => reason.match(/Field Trip|School Pass|Excused|Medical\/Dent|Comp Ed\/Court-Religi|Illness or Sickness|SB14 Wellness\/Illnes/))) return "Excused";
  if (reasons.some((reason) => reason === "Present")) return "Present";
  return "Unknown";
}
function getAbsenceColor(absenceType) {
  switch (absenceType) {
    case "Absent":
      return "red";
    case "Tardy":
      return "yellow";
    case "Excused":
    case "Present":
      return "green";
    default:
      return "primary";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $attendance, $$unsubscribe_attendance;
  let $attendanceLoaded, $$unsubscribe_attendanceLoaded;
  $$unsubscribe_attendance = subscribe(attendance, (value) => $attendance = value);
  $$unsubscribe_attendanceLoaded = subscribe(attendanceLoaded, (value) => $attendanceLoaded = value);
  if (!$attendance && browser) loadAttendance();
  $$unsubscribe_attendance();
  $$unsubscribe_attendanceLoaded();
  return `${$$result.head += `<!-- HEAD_svelte-1j798or_START -->${$$result.title = `<title>Attendance - GradeVue</title>`, ""}<!-- HEAD_svelte-1j798or_END -->`, ""} ${validate_component(LoadingBanner, "LoadingBanner").$$render(
    $$result,
    {
      show: !$attendanceLoaded,
      loadingMsg: "Loading attendance..."
    },
    {},
    {}
  )} ${$attendance ? `${validate_component(Accordion, "Accordion").$$render($$result, { class: "p-4" }, {}, {
    default: () => {
      return `${each($attendance.Absences.Absence ?? [], (absence) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "dark:" }, {}, {
          header: () => {
            return `<div slot="header">${escape(fullDateFormatter.format(new Date(absence._AbsenceDate)))} ${getAbsenceType(absence.Periods.Period ?? []) ? `${validate_component(Badge, "Badge").$$render(
              $$result,
              {
                color: getAbsenceColor(getAbsenceType(absence.Periods.Period ?? []) ?? "unknown"),
                large: true
              },
              {},
              {
                default: () => {
                  return `${escape(getAbsenceType(absence.Periods.Period ?? []))} `;
                }
              }
            )}` : ``} </div>`;
          },
          default: () => {
            return `<ol>${each(absence.Periods.Period?.filter((course) => course._Name) ?? [], (period) => {
              return `<li>${escape(removeClassID(period._Course))}: ${escape(period._Name)}</li>`;
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
