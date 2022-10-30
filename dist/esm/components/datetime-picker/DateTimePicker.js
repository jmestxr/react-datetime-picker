import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { DatePicker } from "../date-picker/DatePicker";
import { TimePicker } from "../../time-picker/TimePicker";
import { CSSTransition } from "react-transition-group";
import "../../animations/animations.css";
import "./datetime-picker.css";
import { createInitialDateTime, getDateNumber, getDateString, getTimeNumber, getTimeString, isValidDate, isValidTime, } from "../../functions/functions";
export const Picker = ({ dateValue, timeValue, onSelectDate, onSelectTime, }) => {
    const datePickerRef = useRef(null);
    const timePickerRef = useRef(null);
    const [selectedDateTime, setSelectedDateTime] = useState(createInitialDateTime());
    const [dateTimePickerMode, setDateTimePickerMode] = useState({
        date: false,
        time: false,
    });
    useEffect(() => {
        if (dateValue) {
            setSelectedDateTime(prevState => (Object.assign(Object.assign({}, prevState), getDateNumber(dateValue))));
        }
    }, [dateValue]);
    useEffect(() => {
        if (timeValue) {
            setSelectedDateTime(prevState => (Object.assign(Object.assign({}, prevState), getTimeNumber(timeValue))));
        }
    }, [timeValue]);
    useEffect(() => {
        if (onSelectDate && isValidDate(selectedDateTime)) {
            onSelectDate(getDateString(selectedDateTime));
        }
        if (onSelectTime && isValidTime(selectedDateTime)) {
            onSelectTime(getTimeString(selectedDateTime));
        }
    }, [selectedDateTime]);
    const toggleDateMode = () => {
        if (dateTimePickerMode.date) {
            setDateTimePickerMode({ date: false, time: false });
        }
        else {
            setDateTimePickerMode({ date: true, time: false });
        }
    };
    const toggleTimeMode = () => {
        if (dateTimePickerMode.time) {
            setDateTimePickerMode({ date: false, time: false });
        }
        else {
            setDateTimePickerMode({ date: false, time: true });
        }
    };
    return (React.createElement("div", { className: "datetimepicker-container" },
        React.createElement("div", { className: "datetimepicker-buttons-container" },
            React.createElement("div", { onClick: toggleDateMode, style: {
                    backgroundColor: dateTimePickerMode.date ? "#63A5D9" : "#FAFCFF",
                }, className: "datetimepicker-left-button-container" },
                React.createElement("img", { className: "datetimepicker-iconbutton icon", src: require(`../../assets/icons/${dateTimePickerMode.date ? "calendar-white" : "calendar-blue"}.png`) })),
            React.createElement("div", { onClick: toggleTimeMode, style: {
                    backgroundColor: dateTimePickerMode.time ? "#63A5D9" : "#FAFCFF",
                }, className: "datetimepicker-right-button-container" },
                React.createElement("img", { className: "datetimepicker-iconbutton icon", src: require(`../../assets/icons/${dateTimePickerMode.time ? "clock-white" : "clock-blue"}.png`) })),
            React.createElement(CSSTransition, { nodeRef: datePickerRef, in: dateTimePickerMode.date, timeout: 500, classNames: "animations-fadeinout-container", unmountOnExit: true },
                React.createElement("div", { ref: datePickerRef },
                    React.createElement(DatePicker, { selectedDateTime: selectedDateTime, setSelectedDateTime: setSelectedDateTime, setDateTimePickerMode: setDateTimePickerMode }))),
            React.createElement(CSSTransition, { nodeRef: timePickerRef, in: dateTimePickerMode.time, timeout: 500, classNames: "animations-fadeinout-container", unmountOnExit: true },
                React.createElement("div", { ref: timePickerRef },
                    React.createElement(TimePicker, { selectedDateTime: selectedDateTime, setSelectedDateTime: setSelectedDateTime, setDateTimePickerMode: setDateTimePickerMode }))))));
};
//# sourceMappingURL=DateTimePicker.js.map