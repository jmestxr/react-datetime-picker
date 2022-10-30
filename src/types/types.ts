export type DateTimePickerMode = {
  date: boolean;
  time: boolean;
};

/* ===================================================== */
/* COMMON
/* ===================================================== */
export type DateTime = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
};

export type DateNumber = Pick<DateTime, "year" | "month" | "day">;

export type TimeNumber = Pick<DateTime, "hour" | "minute"> ;
