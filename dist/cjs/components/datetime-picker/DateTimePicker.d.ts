import { FC } from "react";
import "../../animations/animations.css";
import "./datetime-picker.css";
declare type PickerProps = {
    dateValue?: string;
    timeValue?: string;
    onSelectDate?: (value: string) => void;
    onSelectTime?: (value: string) => void;
};
export declare const Picker: FC<PickerProps>;
export {};
