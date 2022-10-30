import React from "react";
import { DateTime } from "../../types/types";
import { DateTimePickerMode } from "../../types/types";
import "./datepicker.css";
declare type DatePickerProps = {
    selectedDateTime: DateTime;
    setSelectedDateTime: React.Dispatch<React.SetStateAction<DateTime>>;
    setDateTimePickerMode: React.Dispatch<React.SetStateAction<DateTimePickerMode>>;
};
export declare const DatePicker: ({ selectedDateTime, setSelectedDateTime, setDateTimePickerMode, }: DatePickerProps) => JSX.Element;
export {};
