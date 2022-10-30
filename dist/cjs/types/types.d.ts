export declare type DateTimePickerMode = {
    date: boolean;
    time: boolean;
};
export declare type DateTime = {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
};
export declare type DateNumber = Pick<DateTime, "year" | "month" | "day">;
export declare type TimeNumber = Pick<DateTime, "hour" | "minute">;
