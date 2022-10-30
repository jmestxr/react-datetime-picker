"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysArr = exports.padNumberWithZero = exports.get12Hour = exports.isAM = exports.isValidTime = exports.isValidDate = exports.createInitialTime = exports.createInitialDate = exports.createInitialDateTime = exports.getTimeNumber = exports.getDateNumber = exports.getTimeString = exports.getDateString = void 0;
/* DateString Format: "DD/MM/YYYY"
  - DD: 2 digit number representing day, padded with leading zero.
  - MM: 2 digit number representing month (1-indexed), i.e. January - December represented by 01-12, padded with leading zero.
  - YY: 4 digit number representing year.
*/
const getDateString = (dateNumber) => {
    const dayString = (0, exports.padNumberWithZero)(dateNumber.day);
    const monthString = (0, exports.padNumberWithZero)(dateNumber.month + 1);
    const yearString = dateNumber.year;
    return `${dayString}/${monthString}/${yearString}`;
};
exports.getDateString = getDateString;
/* TimeString Format: "HH:MM DayPeriod"
  - HH: 2 digit number representing hour (12 hour clock), with padded with leading zero.
  - MM: 2 digit number representing minute, padded with leading zero.
  - DayPeriod: AM or PM
*/
const getTimeString = (timeNumber) => {
    const hourString = (0, exports.padNumberWithZero)((0, exports.get12Hour)(timeNumber.hour));
    const minuteString = (0, exports.padNumberWithZero)(timeNumber.minute);
    const dayPeriodString = (0, exports.isAM)(timeNumber.hour) ? "AM" : "PM";
    return `${hourString}:${minuteString} ${dayPeriodString}`;
};
exports.getTimeString = getTimeString;
// Parses DateString into DateNumber
const getDateNumber = (dateString) => {
    if (dateString === "")
        return (0, exports.createInitialDate)();
    const day = parseInt(dateString.slice(0, 2));
    const month = parseInt(dateString.slice(3, 5)) - 1;
    const year = parseInt(dateString.slice(6));
    return { year: year, month: month, day: day };
};
exports.getDateNumber = getDateNumber;
// Parses TimeString into TimeNumber
const getTimeNumber = (timeString) => {
    if (timeString === "")
        return (0, exports.createInitialTime)();
    let hour = parseInt(timeString.slice(0, 2));
    const dayPeriod = timeString.slice(6);
    if (dayPeriod === "AM") {
        hour = hour !== 12 ? hour : 0;
    }
    else {
        hour = hour !== 12 ? hour + 12 : 12;
    }
    const minute = parseInt(timeString.slice(3, 5));
    return { hour: hour, minute: minute };
};
exports.getTimeNumber = getTimeNumber;
const createInitialDateTime = () => {
    return Object.assign(Object.assign({}, (0, exports.createInitialDate)()), (0, exports.createInitialTime)());
};
exports.createInitialDateTime = createInitialDateTime;
const createInitialDate = () => {
    return { year: -1, month: -1, day: -1 };
};
exports.createInitialDate = createInitialDate;
const createInitialTime = () => {
    return { hour: -1, minute: -1 };
};
exports.createInitialTime = createInitialTime;
const isValidDate = (dt) => {
    return dt.year !== -1 && dt.month !== -1 && dt.day !== -1;
};
exports.isValidDate = isValidDate;
const isValidTime = (dt) => {
    return dt.hour !== -1 && dt.minute !== -1;
};
exports.isValidTime = isValidTime;
const isAM = (hour) => {
    return hour <= 11; // NOTE: define hour < 0 as AM
};
exports.isAM = isAM;
const get12Hour = (hour) => {
    if (hour === 0) {
        return 12;
    }
    else if (hour >= 13 && hour < 24) {
        return hour - 12;
    }
    return hour;
};
exports.get12Hour = get12Hour;
const padNumberWithZero = (number) => {
    if (number >= 0 && number <= 9) {
        return "0" + number;
    }
    return number.toString();
};
exports.padNumberWithZero = padNumberWithZero;
const getDaysArr = (year, month) => {
    const datesArray = new Array(35).fill(0);
    const noOfDaysInMonth = new Date(year, month, 0).getDate();
    const dayOfFirstDate = new Date(year, month, 1).getDay();
    let i = dayOfFirstDate == 0 ? 6 : dayOfFirstDate - 1;
    let currDate = 1;
    while (currDate <= noOfDaysInMonth) {
        datesArray[i] = currDate;
        i += 1;
        currDate += 1;
    }
    return datesArray;
};
exports.getDaysArr = getDaysArr;
//# sourceMappingURL=functions.js.map