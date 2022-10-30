"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePicker = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const functions_1 = require("../functions/functions");
require("./timepicker.css");
const TimePicker = ({ selectedDateTime, setSelectedDateTime, setDateTimePickerMode, }) => {
    const [timePickerMode, setTimePickerMode] = (0, react_2.useState)({
        hour: true,
        minute: false,
        dayNight: false,
    });
    const [viewedTime, setViewedTime] = (0, react_2.useState)(selectedDateTime);
    const handleSelectTime = (target, value) => {
        setSelectedDateTime((prevState) => (Object.assign(Object.assign({}, prevState), { [target]: value })));
    };
    const handleViewTime = (target, value) => {
        setViewedTime((prevState) => (Object.assign(Object.assign({}, prevState), { [target]: value })));
    };
    // ========================================================================
    // FUNCTIONS FOR DIGITS
    // ========================================================================
    // 90 DEGREES
    const handleHourDigit90Deg = (digitIndex, select) => {
        const i = (digitIndex + 1) % 4;
        if (select) {
            handleSelectTime("hour", i === 0 ? 12 : (0, functions_1.isAM)(selectedDateTime.hour) ? i * 3 : i * 3 + 12);
        }
        else {
            handleViewTime("hour", i === 0 ? 12 : i * 3);
        }
    };
    const handleMinuteDigit90Deg = (digitIndex, select) => {
        const i = (digitIndex + 1) % 4;
        if (select) {
            handleSelectTime("minute", i * 15);
        }
        else {
            handleViewTime("minute", i * 15);
        }
    };
    // 30 DEGREES
    const handleHourDigit30Deg = (digitIndex, select) => {
        const i = (digitIndex + 3) % 12;
        if (select) {
            handleSelectTime("hour", (0, functions_1.isAM)(selectedDateTime.hour) ? i : i + 12);
        }
        else {
            handleViewTime("hour", i);
        }
    };
    const handleMinuteDigit30Deg = (digitIndex, select) => {
        const i = (digitIndex + 3) % 12;
        if (select) {
            handleSelectTime("minute", i * 5);
        }
        else {
            handleViewTime("minute", i * 5);
        }
    };
    // 6 DEGREES
    const handleMinuteDigit6Deg = (digitIndex, select) => {
        const i = (digitIndex + 15) % 60;
        if (select) {
            handleSelectTime("minute", i);
        }
        else {
            handleViewTime("minute", i);
        }
    };
    return (react_1.default.createElement("div", { className: "picker-container timepicker-container" },
        react_1.default.createElement("div", { className: "timepicker-clock-frame" },
            (timePickerMode.hour || timePickerMode.minute) &&
                // 90 DEGREES
                Array.from(Array(4).keys()).map((i) => {
                    return (react_1.default.createElement("div", { key: i, onMouseEnter: () => {
                            timePickerMode.hour
                                ? handleHourDigit90Deg(i, false)
                                : handleMinuteDigit90Deg(i, false);
                        }, onMouseLeave: () => setViewedTime({
                            hour: selectedDateTime.hour,
                            minute: selectedDateTime.minute,
                        }), onMouseDown: (e) => {
                            e.stopPropagation();
                            if (timePickerMode.hour) {
                                handleHourDigit90Deg(i, true);
                                setTimePickerMode({
                                    hour: false,
                                    minute: true,
                                    dayNight: false,
                                });
                            }
                            else {
                                handleMinuteDigit90Deg(i, true);
                                setTimePickerMode({
                                    hour: false,
                                    minute: false,
                                    dayNight: true,
                                });
                            }
                        }, className: `deg${i * 90} timepicker-clock-digit-frame` },
                        react_1.default.createElement("div", { className: "timepicker-clock-large-digit" })));
                }),
            (timePickerMode.hour || timePickerMode.minute) &&
                // 30 DEGREES
                Array.from(Array(12).keys()).map((i) => {
                    return (i % 3 !== 0 && (react_1.default.createElement("div", { key: i, onMouseEnter: () => timePickerMode.hour
                            ? handleHourDigit30Deg(i, false)
                            : handleMinuteDigit30Deg(i, false), onMouseLeave: () => setViewedTime({
                            hour: selectedDateTime.hour,
                            minute: selectedDateTime.minute,
                        }), onMouseDown: (e) => {
                            e.stopPropagation();
                            if (timePickerMode.hour) {
                                handleHourDigit30Deg(i, true);
                                setTimePickerMode({
                                    hour: false,
                                    minute: true,
                                    dayNight: false,
                                });
                            }
                            else {
                                handleMinuteDigit30Deg(i, true);
                                setTimePickerMode({
                                    hour: false,
                                    minute: false,
                                    dayNight: true,
                                });
                            }
                        }, className: `deg${i * 30} timepicker-clock-digit-frame` },
                        react_1.default.createElement("div", { className: "timepicker-clock-medium-digit" }))));
                }),
            timePickerMode.minute &&
                // 6 DEGREES
                Array.from(Array(60).keys()).map((i) => {
                    return (i % 5 !== 0 && (react_1.default.createElement("div", { key: i, onMouseEnter: () => handleMinuteDigit6Deg(i, false), onMouseLeave: () => setViewedTime({
                            hour: selectedDateTime.hour,
                            minute: selectedDateTime.minute,
                        }), onMouseDown: (e) => {
                            e.stopPropagation();
                            handleMinuteDigit6Deg(i, true);
                            setTimePickerMode({
                                hour: false,
                                minute: false,
                                dayNight: true,
                            });
                        }, style: { transform: `rotate(${i * 6}deg) translate(3em)` }, className: "timepicker-clock-digit-frame" },
                        react_1.default.createElement("div", { className: "timepicker-clock-small-digit" }))));
                }),
            react_1.default.createElement(TimePickerInput, { timePickerMode: timePickerMode, setTimePickerMode: setTimePickerMode, viewedTime: viewedTime, selectedTime: { hour: selectedDateTime.hour, minute: selectedDateTime.minute }, handleSelectTime: handleSelectTime, setDateTimePickerMode: setDateTimePickerMode }))));
};
exports.TimePicker = TimePicker;
const TimePickerInput = ({ timePickerMode, setTimePickerMode, viewedTime, selectedTime, handleSelectTime, setDateTimePickerMode, }) => {
    const setAMHour = () => {
        const hour = viewedTime.hour;
        return handleSelectTime("hour", !(0, functions_1.isAM)(hour) ? hour - 12 : hour);
    };
    const setPMHour = () => {
        const hour = viewedTime.hour;
        return handleSelectTime("hour", (0, functions_1.isAM)(hour) ? hour + 12 : hour);
    };
    const hasViewedHour = () => {
        return viewedTime.hour !== -1;
    };
    const hasViewedMinute = () => {
        return viewedTime.minute !== -1;
    };
    return (react_1.default.createElement("div", { className: "timepicker-clock-input-frame" },
        react_1.default.createElement("div", { className: "timepicker-time-input-row-frame" },
            react_1.default.createElement("div", { onClick: () => setTimePickerMode({ hour: true, minute: false, dayNight: false }), className: "timepicker-time-input-text-frame" },
                react_1.default.createElement("h4", { className: `${timePickerMode.hour ? "timepicker-time-input-text-focus" : ""} timepicker-time-input-text h5` }, hasViewedHour() ? (0, functions_1.get12Hour)(viewedTime.hour) : "–")),
            react_1.default.createElement("div", { className: "timepicker-time-input-text-frame" },
                react_1.default.createElement("h4", { className: `${!timePickerMode.dayNight ? "timepicker-time-input-text-focus" : ""} timepicker-time-input-text h5` }, ":")),
            react_1.default.createElement("div", { onClick: () => setTimePickerMode({ hour: false, minute: true, dayNight: false }), className: "timepicker-time-input-text-frame" },
                react_1.default.createElement("h4", { className: `${timePickerMode.minute ? "timepicker-time-input-text-focus" : ""} timepicker-time-input-text h5` }, hasViewedMinute() ? (0, functions_1.padNumberWithZero)(viewedTime.minute) : "–"))),
        react_1.default.createElement("div", { className: "timepicker-time-input-row-frame" },
            ((0, functions_1.isAM)(selectedTime.hour) || timePickerMode.dayNight) && (react_1.default.createElement("div", { onMouseDown: () => {
                    if (!timePickerMode.dayNight) {
                        setTimePickerMode({
                            hour: false,
                            minute: false,
                            dayNight: true,
                        });
                    }
                    else {
                        setAMHour();
                        setDateTimePickerMode({ date: false, time: false });
                    }
                }, className: "timepicker-time-input-text-frame" },
                react_1.default.createElement("p", { className: `${(0, functions_1.isAM)(selectedTime.hour) && timePickerMode.dayNight
                        ? "timepicker-time-input-text-focus"
                        : ""} timepicker-time-input-text p1` }, "AM"))),
            timePickerMode.dayNight && (react_1.default.createElement("div", { className: "timepicker-time-input-text-frame" },
                react_1.default.createElement("h6", { className: `${timePickerMode.dayNight
                        ? "timepicker-time-input-text-focus"
                        : ""} timepicker-time-input-text h4` }, "\u2502"))),
            (!(0, functions_1.isAM)(selectedTime.hour) || timePickerMode.dayNight) && (react_1.default.createElement("div", { onMouseDown: () => {
                    if (!timePickerMode.dayNight) {
                        setTimePickerMode({
                            hour: false,
                            minute: false,
                            dayNight: true,
                        });
                    }
                    else {
                        setPMHour();
                        setDateTimePickerMode({ date: false, time: false });
                    }
                }, className: "timepicker-time-input-text-frame" },
                react_1.default.createElement("p", { className: `${!(0, functions_1.isAM)(selectedTime.hour) && timePickerMode.dayNight
                        ? "timepicker-time-input-text-focus"
                        : ""} timepicker-time-input-text p1` }, "PM"))))));
};
//# sourceMappingURL=TimePicker.js.map