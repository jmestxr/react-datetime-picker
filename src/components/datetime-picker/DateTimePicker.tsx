import React, { FC, useEffect } from "react";
import { useRef, useState } from "react";
import { DatePicker } from "../date-picker/DatePicker";
import { TimePicker } from "../time-picker/TimePicker";

import { DateTime, DateTimePickerMode } from "../../types/types";

import { CSSTransition } from "react-transition-group";

import "../../animations/animations.css";
import "./datetime-picker.css";
import {
  createInitialDateTime,
  getDateNumber,
  getDateString,
  getTimeNumber,
  getTimeString,
  isValidDate,
  isValidTime,
} from "../../functions/functions";

type PickerProps = {
  dateValue?: string;
  timeValue?: string;
  onSelectDate?: (value: string) => void;
  onSelectTime?: (value: string) => void;
};

export const Picker: FC<PickerProps> = ({
  dateValue,
  timeValue,
  onSelectDate,
  onSelectTime,
}) => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const timePickerRef = useRef<HTMLDivElement>(null);

  const [selectedDateTime, setSelectedDateTime] = useState<DateTime>(
    createInitialDateTime()
  );

  const [dateTimePickerMode, setDateTimePickerMode] =
    useState<DateTimePickerMode>({
      date: false,
      time: false,
    });

  useEffect(() => {
    if (dateValue) {
      setSelectedDateTime(prevState => ({...prevState, ...getDateNumber(dateValue)}));
    }
  }, [dateValue])

  useEffect(() => {
    if (timeValue) {
      setSelectedDateTime(prevState => ({...prevState, ...getTimeNumber(timeValue)}));
    }
  }, [timeValue])

  useEffect(() => {
    if (onSelectDate && isValidDate(selectedDateTime)) {
      onSelectDate(getDateString(selectedDateTime));
    }
    if (onSelectTime && isValidTime(selectedDateTime)) {
      onSelectTime(getTimeString(selectedDateTime));
    }
  }, [selectedDateTime]);

  const toggleDateMode = () => {
    if (dateTimePickerMode.date) {
      setDateTimePickerMode({ date: false, time: false });
    } else {
      setDateTimePickerMode({ date: true, time: false });
    }
  };

  const toggleTimeMode = () => {
    if (dateTimePickerMode.time) {
      setDateTimePickerMode({ date: false, time: false });
    } else {
      setDateTimePickerMode({ date: false, time: true });
    }
  };

  return (
    <div className="datetimepicker-container">
      <div className="datetimepicker-buttons-container">
        <div
          onClick={toggleDateMode}
          style={{
            backgroundColor: dateTimePickerMode.date ? "#63A5D9" : "#FAFCFF",
          }}
          className="datetimepicker-left-button-container"
        >
          <img
            className="datetimepicker-iconbutton icon"
            src={require(`../../assets/icons/${
              dateTimePickerMode.date ? "calendar-white" : "calendar-blue"
            }.png`)}
          />
        </div>
        <div
          onClick={toggleTimeMode}
          style={{
            backgroundColor: dateTimePickerMode.time ? "#63A5D9" : "#FAFCFF",
          }}
          className="datetimepicker-right-button-container"
        >
          <img
            className="datetimepicker-iconbutton icon"
            src={require(`../../assets/icons/${
              dateTimePickerMode.time ? "clock-white" : "clock-blue"
            }.png`)}
          />
        </div>

        <CSSTransition
          nodeRef={datePickerRef}
          in={dateTimePickerMode.date}
          timeout={500}
          classNames="animations-fadeinout-container"
          unmountOnExit
        >
          <div ref={datePickerRef}>
            <DatePicker
              selectedDateTime={selectedDateTime}
              setSelectedDateTime={setSelectedDateTime}
              setDateTimePickerMode={setDateTimePickerMode}
            />
          </div>
        </CSSTransition>

        <CSSTransition
          nodeRef={timePickerRef}
          in={dateTimePickerMode.time}
          timeout={500}
          classNames="animations-fadeinout-container"
          unmountOnExit
        >
          <div ref={timePickerRef}>
            <TimePicker
              selectedDateTime={selectedDateTime}
              setSelectedDateTime={setSelectedDateTime}
              setDateTimePickerMode={setDateTimePickerMode}
            />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
