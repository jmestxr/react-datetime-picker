import React from "react";
import { DateTime, DateTimePickerMode } from "../types/types";
import "./timepicker.css";
declare type TimePickerProps = {
    selectedDateTime: DateTime;
    setSelectedDateTime: React.Dispatch<React.SetStateAction<DateTime>>;
    setDateTimePickerMode: React.Dispatch<React.SetStateAction<DateTimePickerMode>>;
};
export declare const TimePicker: ({ selectedDateTime, setSelectedDateTime, setDateTimePickerMode, }: TimePickerProps) => JSX.Element;
export {};
