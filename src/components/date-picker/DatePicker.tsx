import React from "react";
import { useState } from "react";
import { DAYS_OF_WEEK, MONTHS } from "../../constants/constants";
import { getDaysArr } from "../../functions/functions";
import { DateNumber, DateTime } from "../../types/types";
import { DateTimePickerMode } from "../../types/types";

import "./datepicker.css";

type DatePickerProps = {
  selectedDateTime: DateTime;
  setSelectedDateTime: React.Dispatch<React.SetStateAction<DateTime>>;
  setDateTimePickerMode: React.Dispatch<
    React.SetStateAction<DateTimePickerMode>
  >;
};

export const DatePicker = ({
  selectedDateTime,
  setSelectedDateTime,
  setDateTimePickerMode,
}: DatePickerProps) => {
  const [yearMonth, setYearMonth] = useState<Pick<DateTime, "year" | "month">>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  const renderPrevMonth = () => {
    if (yearMonth.month === 0) {
      setYearMonth({
        year: yearMonth.year - 1,
        month: 11,
      });
    } else {
      setYearMonth({
        year: yearMonth.year,
        month: yearMonth.month - 1,
      });
    }
  };
  const renderNextMonth = () => {
    if (yearMonth.month === 11) {
      setYearMonth({
        year: yearMonth.year + 1,
        month: 0,
      });
    } else {
      setYearMonth({
        year: yearMonth.year,
        month: yearMonth.month + 1,
      });
    }
  };

  const handleSelectDate = (date: DateNumber) => {
    return setSelectedDateTime((prevState) => ({
      ...prevState,
      year: date.year,
      month: date.month,
      day: date.day,
    }));
  };

  return (
    <div className="picker-container datepicker-container">
      <div className="datepicker-header">
        <img
          onClick={renderPrevMonth}
          className="datepicker-header-iconbutton icon"
          src={require("../../assets/icons/left-arrow.png")}
        />

        <div className="datepicker-header-title">
          <p style={{ fontWeight: "500", color: "white" }} className="p2">
            {MONTHS[yearMonth.month]} {yearMonth.year}
          </p>
        </div>
        <img
          onClick={renderNextMonth}
          className="datepicker-header-iconbutton icon"
          src={require("../../assets/icons/right-arrow.png")}
        />
      </div>

      <div className="datepicker-body">
        <div className="datepicker-days-grid">
          {DAYS_OF_WEEK.map((day, index) => {
            return (
              <div key={index} className="datepicker-day-cell">
                <p style={{ fontWeight: "700" }} className="p4">
                  {day[0]}
                </p>
              </div>
            );
          })}
        </div>
        <div className="datepicker-dates-grid">
          {getDaysArr(yearMonth.year, yearMonth.month).map((day, index) => {
            return (
              <DateButton
                key={index}
                date={{
                  year: yearMonth.year,
                  month: yearMonth.month,
                  day: day,
                }}
                selectedDate={{
                  year: selectedDateTime.year,
                  month: selectedDateTime.month,
                  day: selectedDateTime.day,
                }}
                handleSelectDate={handleSelectDate}
                setDateTimePickerMode={setDateTimePickerMode}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

type DateButtonProps = {
  date: DateNumber;
  selectedDate: DateNumber;
  handleSelectDate: Function;
  setDateTimePickerMode: React.Dispatch<
    React.SetStateAction<DateTimePickerMode>
  >;
};

const DateButton = ({
  date,
  selectedDate,
  handleSelectDate,
  setDateTimePickerMode,
}: DateButtonProps) => {
  const isToday = (): boolean => {
    const today = new Date();
    return (
      date.year === today.getFullYear() &&
      date.month === today.getMonth() &&
      date.day === today.getDate()
    );
  };

  const isSelectedDate = (): boolean => {
    return (
      date.year === selectedDate.year &&
      date.month === selectedDate.month &&
      date.day === selectedDate.day
    );
  };

  return (
    <div className="datepicker-date-cell">
      <div
        onMouseDown={() => {
          handleSelectDate(date);
          setDateTimePickerMode({ date: false, time: true });
        }}
        className={
          date.day !== 0
            ? `datepicker-date-cell-button ${
                isSelectedDate() && "datepicker-date-cell-button-selected"
              }`
            : ""
        }
      >
        {date.day !== 0 && (
          <p style={{ fontWeight: isToday() ? "700" : "400" }} className="p4">
            {date.day}
          </p>
        )}
      </div>
    </div>
  );
};
