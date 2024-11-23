function getColorForGrade(grade) {
  if (typeof grade == "number") {
    if (grade > 100) return "blue";
    if (grade >= 90) return "green";
    else if (grade >= 80) return "yellow";
    else return "red";
  }
  if (grade.match(/^A\+?-?$/)) return "green";
  else if (grade.match(/^B\+?-?$/)) return "yellow";
  else if (grade.match(/^[CDEF]\+?-?$/)) return "red";
  return "gray";
}
const removeClassID = (name) => name.replace(/ \([A-Z]+\)( \([0-9]+\))?$/, "");
function extractPoints(score) {
  if (score.endsWith(" Points Possible"))
    return [NaN, parseFloat(score.replace(/ Points Possible$/, ""))];
  const [num, denom] = score.split(" / ").map(parseFloat);
  return [num, denom ?? 0];
}
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
function getRelativeTime(date) {
  const now = /* @__PURE__ */ new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (seconds < 60) {
    return rtf.format(-seconds, "second");
  } else if (minutes < 60) {
    return rtf.format(-minutes, "minute");
  } else if (hours < 24) {
    return rtf.format(-hours, "hour");
  } else if (days < 30) {
    return rtf.format(-days, "day");
  } else if (months < 12) {
    return rtf.format(-months, "month");
  } else {
    return rtf.format(-years, "year");
  }
}
const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short"
});
const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full"
});
export {
  getRelativeTime as a,
  extractPoints as e,
  fullDateFormatter as f,
  getColorForGrade as g,
  removeClassID as r,
  shortDateFormatter as s
};
