import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SpaDate = props => {
  let { datePicked, handleDatePicked } = props;
  return (
    <div>
      <DatePicker selected={datePicked} onChange={handleDatePicked} />
    </div>
  );
};

export default SpaDate;
