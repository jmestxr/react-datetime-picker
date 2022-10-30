import React from "react";
import { Picker } from "./datetime-picker/DateTimePicker";
import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";
import "../theme/theme.css";
export const DateTimePicker = ({ size = "sm", dateValue, timeValue, onSelectDate, onSelectTime, }) => {
    return (React.createElement(ThemeProvider, { theme: theme(size) },
        React.createElement(GlobalStyles, null),
        React.createElement(Picker, { dateValue: dateValue, timeValue: timeValue, onSelectDate: onSelectDate, onSelectTime: onSelectTime })));
};
//# sourceMappingURL=index.js.map