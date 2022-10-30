import { FC } from "react";
import "../theme/theme.css";
declare type DateTimePickerProps = {
    size?: "sm" | "lg";
    dateValue?: string;
    timeValue?: string;
    onSelectDate?: (value: string) => void;
    onSelectTime?: (value: string) => void;
};
export declare const DateTimePicker: FC<DateTimePickerProps>;
export {};
