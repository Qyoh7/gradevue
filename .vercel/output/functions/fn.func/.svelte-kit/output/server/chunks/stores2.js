import { w as writable } from "./index.js";
const studentAccount = writable();
const gradebook = writable();
const gradebookLoaded = writable(false);
const attendance = writable();
const attendanceLoaded = writable(false);
const studentInfo = writable();
const studentInfoLoaded = writable(false);
const reportCardList = writable();
const reportCardListLoaded = writable(false);
const documentsList = writable();
const documentsListLoaded = writable(false);
const mail = writable();
const mailLoaded = writable(false);
export {
  studentAccount as a,
  gradebookLoaded as b,
  attendance as c,
  attendanceLoaded as d,
  documentsList as e,
  documentsListLoaded as f,
  gradebook as g,
  mailLoaded as h,
  reportCardListLoaded as i,
  studentInfoLoaded as j,
  mail as m,
  reportCardList as r,
  studentInfo as s
};
