import React, { FC } from "react";

import { Picker } from "./datetime-picker/DateTimePicker";

import { ThemeProvider } from "styled-components";
import theme from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";
import "../theme/theme.css";

type DateTimePickerProps = {
  size?: "sm" | "lg";
  dateValue?: string; // Has to be of format: "DD/MM/YYYY"
  timeValue?: string; // Has to be of format: "HH:MM DayPeriod"
  onSelectDate?: (value: string) => void;
  onSelectTime?: (value: string) => void;
};

export const DateTimePicker: FC<DateTimePickerProps> = ({
  size = "sm",
  dateValue,
  timeValue,
  onSelectDate,
  onSelectTime,
}) => {
  return (
    <ThemeProvider theme={theme(size)}>
      <GlobalStyles />
      <Picker
        dateValue={dateValue}
        timeValue={timeValue}
        onSelectDate={onSelectDate}
        onSelectTime={onSelectTime}
      />
    </ThemeProvider>
  );
};
