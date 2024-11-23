import { B as BROWSER } from "./prod-ssr.js";
import { t as get_store_value } from "./ssr.js";
import { b as gradebookLoaded, g as gradebook, d as attendanceLoaded, c as attendance, j as studentInfoLoaded, s as studentInfo, i as reportCardListLoaded, r as reportCardList, f as documentsListLoaded, e as documentsList, h as mailLoaded, m as mail, a as studentAccount } from "./stores2.js";
const browser = BROWSER;
const writeCacheToStore = (key, store) => {
  const cache = localStorage.getItem(key);
  if (cache) {
    try {
      store.set(JSON.parse(cache));
    } catch (e) {
      console.error(e);
      localStorage.removeItem(key);
    }
  }
};
const loadGradebook = async () => {
  gradebookLoaded.set(false);
  writeCacheToStore("gradebook", gradebook);
  const grades = await get_store_value(studentAccount)?.grades();
  gradebook.set(grades);
  localStorage.setItem("gradebook", JSON.stringify(grades));
  gradebookLoaded.set(true);
};
const loadAttendance = async () => {
  attendanceLoaded.set(false);
  writeCacheToStore("attendance", attendance);
  const attendanceRecord = await get_store_value(studentAccount)?.attendance();
  attendance.set(attendanceRecord);
  localStorage.setItem("attendance", JSON.stringify(attendanceRecord));
  attendanceLoaded.set(true);
};
const loadStudentInfo = async () => {
  studentInfoLoaded.set(false);
  writeCacheToStore("studentInfo", studentInfo);
  const studentInfoRecord = await get_store_value(studentAccount)?.studentInfo();
  studentInfo.set(studentInfoRecord);
  localStorage.setItem("studentInfo", JSON.stringify(studentInfoRecord));
  studentInfoLoaded.set(true);
};
const loadReportCardList = async () => {
  reportCardListLoaded.set(false);
  writeCacheToStore("reportCardList", reportCardList);
  const reportCardListRecord = await get_store_value(studentAccount)?.reportCardList();
  reportCardList.set(reportCardListRecord);
  localStorage.setItem("reportCardList", JSON.stringify(reportCardListRecord));
  reportCardListLoaded.set(true);
};
const loadDocumentsList = async () => {
  documentsListLoaded.set(false);
  writeCacheToStore("documentsList", documentsList);
  const documentsListRecord = await get_store_value(studentAccount)?.documentsList();
  documentsList.set(documentsListRecord);
  localStorage.setItem("documentsList", JSON.stringify(documentsListRecord));
  documentsListLoaded.set(true);
};
const loadMail = async () => {
  mailLoaded.set(false);
  writeCacheToStore("mail", mail);
  const mailRecord = await get_store_value(studentAccount)?.mail();
  mail.set(mailRecord);
  localStorage.setItem("mail", JSON.stringify(mailRecord));
  mailLoaded.set(true);
};
export {
  loadGradebook as a,
  browser as b,
  loadAttendance as c,
  loadDocumentsList as d,
  loadMail as e,
  loadReportCardList as f,
  loadStudentInfo as l
};
