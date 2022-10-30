"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picker = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const DatePicker_1 = require("../date-picker/DatePicker");
const TimePicker_1 = require("../../time-picker/TimePicker");
const react_transition_group_1 = require("react-transition-group");
require("../../animations/animations.css");
require("./datetime-picker.css");
const functions_1 = require("../../functions/functions");
const Picker = ({ dateValue, timeValue, onSelectDate, onSelectTime, }) => {
    const datePickerRef = (0, react_2.useRef)(null);
    const timePickerRef = (0, react_2.useRef)(null);
    const [selectedDateTime, setSelectedDateTime] = (0, react_2.useState)((0, functions_1.createInitialDateTime)());
    const [dateTimePickerMode, setDateTimePickerMode] = (0, react_2.useState)({
        date: false,
        time: false,
    });
    (0, react_1.useEffect)(() => {
        if (dateValue) {
            setSelectedDateTime(prevState => (Object.assign(Object.assign({}, prevState), (0, functions_1.getDateNumber)(dateValue))));
        }
    }, [dateValue]);
    (0, react_1.useEffect)(() => {
        if (timeValue) {
            setSelectedDateTime(prevState => (Object.assign(Object.assign({}, prevState), (0, functions_1.getTimeNumber)(timeValue))));
        }
    }, [timeValue]);
    (0, react_1.useEffect)(() => {
        if (onSelectDate && (0, functions_1.isValidDate)(selectedDateTime)) {
            onSelectDate((0, functions_1.getDateString)(selectedDateTime));
        }
        if (onSelectTime && (0, functions_1.isValidTime)(selectedDateTime)) {
            onSelectTime((0, functions_1.getTimeString)(selectedDateTime));
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
    return (react_1.default.createElement("div", { className: "datetimepicker-container" },
        react_1.default.createElement("div", { className: "datetimepicker-buttons-container" },
            react_1.default.createElement("div", { onClick: toggleDateMode, style: {
                    backgroundColor: dateTimePickerMode.date ? "#63A5D9" : "#FAFCFF",
                }, className: "datetimepicker-left-button-container" },
                react_1.default.createElement("img", { className: "datetimepicker-iconbutton icon", src: require(`../../assets/icons/${dateTimePickerMode.date ? "calendar-white" : "calendar-blue"}.png`) })),
            react_1.default.createElement("div", { onClick: toggleTimeMode, style: {
                    backgroundColor: dateTimePickerMode.time ? "#63A5D9" : "#FAFCFF",
                }, className: "datetimepicker-right-button-container" },
                react_1.default.createElement("img", { className: "datetimepicker-iconbutton icon", src: require(`../../assets/icons/${dateTimePickerMode.time ? "clock-white" : "clock-blue"}.png`) })),
            react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: datePickerRef, in: dateTimePickerMode.date, timeout: 500, classNames: "animations-fadeinout-container", unmountOnExit: true },
                react_1.default.createElement("div", { ref: datePickerRef },
                    react_1.default.createElement(DatePicker_1.DatePicker, { selectedDateTime: selectedDateTime, setSelectedDateTime: setSelectedDateTime, setDateTimePickerMode: setDateTimePickerMode }))),
            react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: timePickerRef, in: dateTimePickerMode.time, timeout: 500, classNames: "animations-fadeinout-container", unmountOnExit: true },
                react_1.default.createElement("div", { ref: timePickerRef },
                    react_1.default.createElement(TimePicker_1.TimePicker, { selectedDateTime: selectedDateTime, setSelectedDateTime: setSelectedDateTime, setDateTimePickerMode: setDateTimePickerMode }))))));
};
exports.Picker = Picker;
//# sourceMappingURL=DateTimePicker.js.map