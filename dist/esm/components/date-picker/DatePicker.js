import React from "react";
import { useState } from "react";
import { DAYS_OF_WEEK, MONTHS } from "../../constants/constants";
import { getDaysArr } from "../../functions/functions";
import "./datepicker.css";
export const DatePicker = ({ selectedDateTime, setSelectedDateTime, setDateTimePickerMode, }) => {
    const [yearMonth, setYearMonth] = useState({
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
    return (React.createElement("div", { className: "picker-container datepicker-container" },
        React.createElement("div", { className: "datepicker-header" },
            React.createElement("img", { onClick: renderPrevMonth, className: "datepicker-header-iconbutton icon", src: require("../../assets/icons/left-arrow.png") }),
            React.createElement("div", { className: "datepicker-header-title" },
                React.createElement("p", { style: { fontWeight: "500", color: "white" }, className: "p2" },
                    MONTHS[yearMonth.month],
                    " ",
                    yearMonth.year)),
            React.createElement("img", { onClick: renderNextMonth, className: "datepicker-header-iconbutton icon", src: require("../../assets/icons/right-arrow.png") })),
        React.createElement("div", { className: "datepicker-body" },
            React.createElement("div", { className: "datepicker-days-grid" }, DAYS_OF_WEEK.map((day, index) => {
                return (React.createElement("div", { key: index, className: "datepicker-day-cell" },
                    React.createElement("p", { style: { fontWeight: "700" }, className: "p4" }, day[0])));
            })),
            React.createElement("div", { className: "datepicker-dates-grid" }, getDaysArr(yearMonth.year, yearMonth.month).map((day, index) => {
                return (React.createElement(DateButton, { key: index, date: {
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
    return (React.createElement("div", { className: "datepicker-date-cell" },
        React.createElement("div", { onMouseDown: () => {
                handleSelectDate(date);
                setDateTimePickerMode({ date: false, time: true });
            }, className: date.day !== 0
                ? `datepicker-date-cell-button ${isSelectedDate() && "datepicker-date-cell-button-selected"}`
                : "" }, date.day !== 0 && (React.createElement("p", { style: { fontWeight: isToday() ? "700" : "400" }, className: "p4" }, date.day)))));
};
//# sourceMappingURL=DatePicker.js.map