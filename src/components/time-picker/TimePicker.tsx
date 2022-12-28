import React from "react";
import { useState } from "react";
import {
  get12Hour,
  isAM,
  padNumberWithZero,
} from "../../functions/functions";
import { DateTime, DateTimePickerMode, TimeNumber } from "../../types/types";
import "./timepicker.css";

type TimePickerMode = {
  hour: boolean;
  minute: boolean;
  dayNight: boolean;
};

type TimePickerProps = {
  selectedDateTime: DateTime;
  setSelectedDateTime: React.Dispatch<React.SetStateAction<DateTime>>;
  setDateTimePickerMode: React.Dispatch<React.SetStateAction<DateTimePickerMode>>;
};

export const TimePicker = ({
  selectedDateTime,
  setSelectedDateTime,
  setDateTimePickerMode,
}: TimePickerProps) => {
  const [timePickerMode, setTimePickerMode] = useState<TimePickerMode>({
    hour: true,
    minute: false,
    dayNight: false,
  });

  const [viewedTime, setViewedTime] = useState<TimeNumber>(selectedDateTime);

  const handleSelectTime = (target: string, value: number) => {
    setSelectedDateTime((prevState) => ({ ...prevState, [target]: value }));
  };

  const handleViewTime = (target: string, value: number) => {
    setViewedTime((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  // ========================================================================
  // FUNCTIONS FOR DIGITS
  // ========================================================================

  // 90 DEGREES
  const handleHourDigit90Deg = (digitIndex: number, select: boolean) => {
    const i = (digitIndex + 1) % 4;
    if (select) {
      handleSelectTime(
        "hour",
        i === 0 ? 12 : isAM(selectedDateTime.hour) ? i * 3 : i * 3 + 12
      );
    } else {
      handleViewTime("hour", i === 0 ? 12 : i * 3);
    }
  };

  const handleMinuteDigit90Deg = (digitIndex: number, select: boolean) => {
    const i = (digitIndex + 1) % 4;
    if (select) {
      handleSelectTime("minute", i * 15);
    } else {
      handleViewTime("minute", i * 15);
    }
  };

  // 30 DEGREES
  const handleHourDigit30Deg = (digitIndex: number, select: boolean) => {
    const i = (digitIndex + 3) % 12;
    if (select) {
      handleSelectTime("hour", isAM(selectedDateTime.hour) ? i : i + 12);
    } else {
      handleViewTime("hour", i);
    }
  };

  const handleMinuteDigit30Deg = (digitIndex: number, select: boolean) => {
    const i = (digitIndex + 3) % 12;
    if (select) {
      handleSelectTime("minute", i * 5);
    } else {
      handleViewTime("minute", i * 5);
    }
  };

  // 6 DEGREES
  const handleMinuteDigit6Deg = (digitIndex: number, select: boolean) => {
    const i = (digitIndex + 15) % 60;
    if (select) {
      handleSelectTime("minute", i);
    } else {
      handleViewTime("minute", i);
    }
  };

  return (
    <div className="picker-container timepicker-container">
      <div className="timepicker-clock-frame">
        {(timePickerMode.hour || timePickerMode.minute) &&
          // 90 DEGREES
          Array.from(Array(4).keys()).map((i) => {
            return (
              <div
                key={i}
                onMouseEnter={() => {
                  timePickerMode.hour
                    ? handleHourDigit90Deg(i, false)
                    : handleMinuteDigit90Deg(i, false);
                }}
                onMouseLeave={() =>
                  setViewedTime({
                    hour: selectedDateTime.hour,
                    minute: selectedDateTime.minute,
                  })
                }
                onMouseDown={(e) => {
                  e.stopPropagation();
                  if (timePickerMode.hour) {
                    handleHourDigit90Deg(i, true);
                    setTimePickerMode({
                      hour: false,
                      minute: true,
                      dayNight: false,
                    });
                  } else {
                    handleMinuteDigit90Deg(i, true);
                    setTimePickerMode({
                      hour: false,
                      minute: false,
                      dayNight: true,
                    });
                  }
                }}
                className={`deg${i * 90} timepicker-clock-digit-frame`}
              >
                <div className="timepicker-clock-large-digit"></div>
              </div>
            );
          })}

        {(timePickerMode.hour || timePickerMode.minute) &&
          // 30 DEGREES
          Array.from(Array(12).keys()).map((i) => {
            return (
              i % 3 !== 0 && (
                <div
                  key={i}
                  onMouseEnter={() =>
                    timePickerMode.hour
                      ? handleHourDigit30Deg(i, false)
                      : handleMinuteDigit30Deg(i, false)
                  }
                  onMouseLeave={() =>
                    setViewedTime({
                      hour: selectedDateTime.hour,
                      minute: selectedDateTime.minute,
                    })
                  }
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    if (timePickerMode.hour) {
                      handleHourDigit30Deg(i, true);
                      setTimePickerMode({
                        hour: false,
                        minute: true,
                        dayNight: false,
                      });
                    } else {
                      handleMinuteDigit30Deg(i, true);
                      setTimePickerMode({
                        hour: false,
                        minute: false,
                        dayNight: true,
                      });
                    }
                  }}
                  className={`deg${i * 30} timepicker-clock-digit-frame`}
                >
                  <div className="timepicker-clock-medium-digit"></div>
                </div>
              )
            );
          })}

        {timePickerMode.minute &&
          // 6 DEGREES
          Array.from(Array(60).keys()).map((i) => {
            return (
              i % 5 !== 0 && (
                <div
                  key={i}
                  onMouseEnter={() => handleMinuteDigit6Deg(i, false)}
                  onMouseLeave={() =>
                    setViewedTime({
                      hour: selectedDateTime.hour,
                      minute: selectedDateTime.minute,
                    })
                  }
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    handleMinuteDigit6Deg(i, true);
                    setTimePickerMode({
                      hour: false,
                      minute: false,
                      dayNight: true,
                    });
                  }}
                  style={{ transform: `rotate(${i * 6}deg) translate(3em)` }}
                  className="timepicker-clock-digit-frame"
                >
                  <div className="timepicker-clock-small-digit"></div>
                </div>
              )
            );
          })}

        <TimePickerInput
          timePickerMode={timePickerMode}
          setTimePickerMode={setTimePickerMode}
          viewedTime={viewedTime}
          selectedTime={{hour: selectedDateTime.hour, minute: selectedDateTime.minute}}
          handleSelectTime={handleSelectTime}
          setDateTimePickerMode={setDateTimePickerMode}
        />
      </div>
    </div>
  );
};

type TimePickerInputProps = {
  timePickerMode: TimePickerMode;
  setTimePickerMode: Function;
  viewedTime: TimeNumber;
  selectedTime: TimeNumber;
  handleSelectTime: Function;
  setDateTimePickerMode: React.Dispatch<React.SetStateAction<DateTimePickerMode>>;
};

const TimePickerInput = ({
  timePickerMode,
  setTimePickerMode,
  viewedTime,
  selectedTime,
  handleSelectTime,
  setDateTimePickerMode,
}: TimePickerInputProps) => {
  const setAMHour = () => {
    const hour = viewedTime.hour;
    return handleSelectTime("hour", !isAM(hour) ? hour - 12 : hour);
  };

  const setPMHour = () => {
    const hour = viewedTime.hour;
    return handleSelectTime("hour", isAM(hour) ? hour + 12 : hour);
  };

  const hasViewedHour = (): boolean => {
    return viewedTime.hour !== -1;
  }
  const hasViewedMinute = (): boolean => {
    return viewedTime.minute !== -1;
  }

  return (
    <div className="timepicker-clock-input-frame">
      <div className="timepicker-time-input-row-frame">
        <div
          onClick={() =>
            setTimePickerMode({ hour: true, minute: false, dayNight: false })
          }
          className="timepicker-time-input-text-frame"
        >
          <h4
            className={`${
              timePickerMode.hour ? "timepicker-time-input-text-focus" : ""
            } timepicker-time-input-text h5`}
          >
            {hasViewedHour() ? get12Hour(viewedTime.hour) : "–"}
          </h4>
        </div>
        <div className="timepicker-time-input-text-frame">
          <h4
            className={`${
              !timePickerMode.dayNight ? "timepicker-time-input-text-focus" : ""
            } timepicker-time-input-text h5`}
          >
            :
          </h4>
        </div>
        <div
          onClick={() =>
            setTimePickerMode({ hour: false, minute: true, dayNight: false })
          }
          className="timepicker-time-input-text-frame"
        >
          <h4
            className={`${
              timePickerMode.minute ? "timepicker-time-input-text-focus" : ""
            } timepicker-time-input-text h5`}
          >
            {hasViewedMinute() ? padNumberWithZero(viewedTime.minute) : "–"}
          </h4>
        </div>
      </div>

      <div className="timepicker-time-input-row-frame">
        {(isAM(selectedTime.hour) || timePickerMode.dayNight) && (
          <div
            onMouseDown={() => {
              if (!timePickerMode.dayNight) {
                setTimePickerMode({
                  hour: false,
                  minute: false,
                  dayNight: true,
                });
              } else {
                setAMHour();
                setDateTimePickerMode({ date: false, time: false });
              }
            }}
            className="timepicker-time-input-text-frame"
          >
            <p
              className={`${
                isAM(selectedTime.hour) && timePickerMode.dayNight
                  ? "timepicker-time-input-text-focus"
                  : ""
              } timepicker-time-input-text p1`}
            >
              AM
            </p>
          </div>
        )}
        {timePickerMode.dayNight && (
          <div className="timepicker-time-input-text-frame">
            <h6
              className={`${
                timePickerMode.dayNight
                  ? "timepicker-time-input-text-focus"
                  : ""
              } timepicker-time-input-text h4`}
            >
              │
            </h6>
          </div>
        )}

        {(!isAM(selectedTime.hour) || timePickerMode.dayNight) && (
          <div
            onMouseDown={() => {
              if (!timePickerMode.dayNight) {
                setTimePickerMode({
                  hour: false,
                  minute: false,
                  dayNight: true,
                });
              } else {
                setPMHour();
                setDateTimePickerMode({ date: false, time: false });
              }
            }}
            className="timepicker-time-input-text-frame"
          >
            <p
              className={`${
                !isAM(selectedTime.hour) && timePickerMode.dayNight
                  ? "timepicker-time-input-text-focus"
                  : ""
              } timepicker-time-input-text p1`}
            >
              PM
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
