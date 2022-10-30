"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const constants_1 = require("../../constants/constants");
const functions_1 = require("../../functions/functions");
require("./datepicker.css");
const DatePicker = ({ selectedDateTime, setSelectedDateTime, setDateTimePickerMode, }) => {
    const [yearMonth, setYearMonth] = (0, react_2.useState)({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
    });
    const renderPrevMonth = () => {
        if (yearMonth.month === 0) {
            setYearMonth({
                year: yearMonth.year - 1,
                month: 11,
            });
        }
        else {
            setYearMonth({
                year: yearMonth.year,
                month: yearMonth.month - 1,
            });
        }
    };
    const renderNextMonth = () => {
        if (yearMonth.month === 11) {
            setYearMonth({
                year: yearMonth.year + 1,
                month: 0,
            });
        }
        else {
            setYearMonth({
                year: yearMonth.year,
                month: yearMonth.month + 1,
            });
        }
    };
    const handleSelectDate = (date) => {
        return setSelectedDateTime((prevState) => (Object.assign(Object.assign({}, prevState), { year: date.year, month: date.month, day: date.day })));
    };
    return (react_1.default.createElement("div", { className: "picker-container datepicker-container" },
        react_1.default.createElement("div", { className: "datepicker-header" },
            react_1.default.createElement("img", { onClick: renderPrevMonth, className: "datepicker-header-iconbutton icon", src: require("../../assets/icons/left-arrow.png") }),
            react_1.default.createElement("div", { className: "datepicker-header-title" },
                react_1.default.createElement("p", { style: { fontWeight: "500", color: "white" }, className: "p2" },
                    constants_1.MONTHS[yearMonth.month],
                    " ",
                    yearMonth.year)),
            react_1.default.createElement("img", { onClick: renderNextMonth, className: "datepicker-header-iconbutton icon", src: require("../../assets/icons/right-arrow.png") })),
        react_1.default.createElement("div", { className: "datepicker-body" },
            react_1.default.createElement("div", { className: "datepicker-days-grid" }, constants_1.DAYS_OF_WEEK.map((day, index) => {
                return (react_1.default.createElement("div", { key: index, className: "datepicker-day-cell" },
                    react_1.default.createElement("p", { style: { fontWeight: "700" }, className: "p4" }, day[0])));
            })),
            react_1.default.createElement("div", { className: "datepicker-dates-grid" }, (0, functions_1.getDaysArr)(yearMonth.year, yearMonth.month).map((day, index) => {
                return (react_1.default.createElement(DateButton, { key: index, date: {
                        year: yearMonth.year,
                        month: yearMonth.month,
                        day: day,
                    }, selectedDate: {
                        year: selectedDateTime.year,
                        month: selectedDateTime.month,
                        day: selectedDateTime.day,
                    }, handleSelectDate: handleSelectDate, setDateTimePickerMode: setDateTimePickerMode }));
            })))));
};
exports.DatePicker = DatePicker;
const DateButton = ({ date, selectedDate, handleSelectDate, setDateTimePickerMode, }) => {
    const isToday = () => {
        const today = new Date();
        return (date.year === today.getFullYear() &&
            date.month === today.getMonth() &&
            date.day === today.getDate());
    };
    const isSelectedDate = () => {
        return (date.year === selectedDate.year &&
            date.month === selectedDate.month &&
            date.day === selectedDate.day);
    };
    return (react_1.default.createElement("div", { className: "datepicker-date-cell" },
        react_1.default.createElement("div", { onMouseDown: () => {
                handleSelectDate(date);
                setDateTimePickerMode({ date: false, time: true });
            }, className: date.day !== 0
                ? `datepicker-date-cell-button ${isSelectedDate() && "datepicker-date-cell-button-selected"}`
                : "" }, date.day !== 0 && (react_1.default.createElement("p", { style: { fontWeight: isToday() ? "700" : "400" }, className: "p4" }, date.day)))));
};
//# sourceMappingURL=DatePicker.js.map