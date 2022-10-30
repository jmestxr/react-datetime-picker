import React, { useState } from "react";
import { DateTimePicker } from "../src";

export default {
  title: "My Component/DateTimePicker",
  component: DateTimePicker,
};

export const Main = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
      <TestDisplay displayDate={date} displayTime={time} />
      <DateTimePicker dateValue={date} timeValue={time} onSelectDate={setDate} onSelectTime={setTime} />
    </div>
  );
};

/* ==================================================================================================== */
/* Test Component to display the selected date & time
/* ==================================================================================================== */
type TestDisplayProps = {
  displayDate: string;
  displayTime: string;
}
const TestDisplay = ({displayDate, displayTime}: TestDisplayProps) => {
  return (
    <div style={{display:'flex', flexDirection:'column', margin:'0 10px'}}>
    <p className="p2"><b>Date:</b> {displayDate || "--/--/----"}</p>
    <p className="p2"><b>Time:</b> {displayTime || "--:-- --"}</p>
    </div>
  )
}