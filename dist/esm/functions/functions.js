/* DateString Format: "DD/MM/YYYY"
  - DD: 2 digit number representing day, padded with leading zero.
  - MM: 2 digit number representing month (1-indexed), i.e. January - December represented by 01-12, padded with leading zero.
  - YY: 4 digit number representing year.
*/
export const getDateString = (dateNumber) => {
    const dayString = padNumberWithZero(dateNumber.day);
    const monthString = padNumberWithZero(dateNumber.month + 1);
    const yearString = dateNumber.year;
    return `${dayString}/${monthString}/${yearString}`;
};
/* TimeString Format: "HH:MM DayPeriod"
  - HH: 2 digit number representing hour (12 hour clock), with padded with leading zero.
  - MM: 2 digit number representing minute, padded with leading zero.
  - DayPeriod: AM or PM
*/
export const getTimeString = (timeNumber) => {
    const hourString = padNumberWithZero(get12Hour(timeNumber.hour));
    const minuteString = padNumberWithZero(timeNumber.minute);
    const dayPeriodString = isAM(timeNumber.hour) ? "AM" : "PM";
    return `${hourString}:${minuteString} ${dayPeriodString}`;
};
// Parses DateString into DateNumber
export const getDateNumber = (dateString) => {
    if (dateString === "")
        return createInitialDate();
    const day = parseInt(dateString.slice(0, 2));
    const month = parseInt(dateString.slice(3, 5)) - 1;
    const year = parseInt(dateString.slice(6));
    return { year: year, month: month, day: day };
};
// Parses TimeString into TimeNumber
export const getTimeNumber = (timeString) => {
    if (timeString === "")
        return createInitialTime();
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
export const createInitialDateTime = () => {
    return Object.assign(Object.assign({}, createInitialDate()), createInitialTime());
};
export const createInitialDate = () => {
    return { year: -1, month: -1, day: -1 };
};
export const createInitialTime = () => {
    return { hour: -1, minute: -1 };
};
export const isValidDate = (dt) => {
    return dt.year !== -1 && dt.month !== -1 && dt.day !== -1;
};
export const isValidTime = (dt) => {
    return dt.hour !== -1 && dt.minute !== -1;
};
export const isAM = (hour) => {
    return hour <= 11; // NOTE: define hour < 0 as AM
};
export const get12Hour = (hour) => {
    if (hour === 0) {
        return 12;
    }
    else if (hour >= 13 && hour < 24) {
        return hour - 12;
    }
    return hour;
};
export const padNumberWithZero = (number) => {
    if (number >= 0 && number <= 9) {
        return "0" + number;
    }
    return number.toString();
};
export const getDaysArr = (year, month) => {
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
//# sourceMappingURL=functions.js.map