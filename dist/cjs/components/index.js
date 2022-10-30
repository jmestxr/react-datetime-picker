"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimePicker = void 0;
const react_1 = __importDefault(require("react"));
const DateTimePicker_1 = require("./datetime-picker/DateTimePicker");
const styled_components_1 = require("styled-components");
const theme_1 = __importDefault(require("../theme/theme"));
const GlobalStyles_1 = __importDefault(require("../theme/GlobalStyles"));
require("../theme/theme.css");
const DateTimePicker = ({ size = "sm", dateValue, timeValue, onSelectDate, onSelectTime, }) => {
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: (0, theme_1.default)(size) },
        react_1.default.createElement(GlobalStyles_1.default, null),
        react_1.default.createElement(DateTimePicker_1.Picker, { dateValue: dateValue, timeValue: timeValue, onSelectDate: onSelectDate, onSelectTime: onSelectTime })));
};
exports.DateTimePicker = DateTimePicker;
//# sourceMappingURL=index.js.map