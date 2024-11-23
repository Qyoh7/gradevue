import { XMLParser, XMLBuilder } from "fast-xml-parser";
const alwaysArray = [
  "Gradebook.Courses.Course",
  "Gradebook.Courses.Course.Marks.Mark.Assignments.Assignment",
  "Gradebook.ReportingPeriods.ReportPeriod"
];
new XMLParser({
  ignoreAttributes: false,
  ignoreDeclaration: true,
  attributeNamePrefix: "_",
  isArray: (_name, jpath) => alwaysArray.includes(jpath)
});
new XMLBuilder({
  ignoreAttributes: false,
  attributeNamePrefix: "_"
});
