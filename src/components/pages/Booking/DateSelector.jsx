import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = props => {
  let {
    checkIn,
    checkOut,
    totalDays,
    handleCheckIn,
    handleCheckOut,
    invalidRange
  } = props;
  return (
    <div>
      <DatePicker selected={checkIn} onChange={handleCheckIn} />

      <DatePicker selected={checkOut} onChange={handleCheckOut} />

      {/* <span>
        {" "}
        Room booked for {totalDays} {totalDays === 1 ? "night" : "nights"}
      </span> */}
      <br />
      {invalidRange && <span>Please put a valid date range</span>}
    </div>
  );
};

export default DateSelector;
