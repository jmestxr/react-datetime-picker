import { DateNumber, DateTime, TimeNumber } from "../types/types";
export declare const getDateString: (dateNumber: DateTime | DateNumber) => string;
export declare const getTimeString: (timeNumber: DateTime | TimeNumber) => string;
export declare const getDateNumber: (dateString: string) => DateNumber;
export declare const getTimeNumber: (timeString: string) => TimeNumber;
export declare const createInitialDateTime: () => DateTime;
export declare const createInitialDate: () => DateNumber;
export declare const createInitialTime: () => TimeNumber;
export declare const isValidDate: (dt: DateTime | DateNumber) => boolean;
export declare const isValidTime: (dt: DateTime | TimeNumber) => boolean;
export declare const isAM: (hour: number) => boolean;
export declare const get12Hour: (hour: number) => number;
export declare const padNumberWithZero: (number: number) => string;
export declare const getDaysArr: (year: number, month: number) => number[];
