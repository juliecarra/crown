import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const RestaurantDate = props => {
  let { datePicked, handleDatePicked } = props;
  return (
    <div>
      <DatePicker selected={datePicked} onChange={handleDatePicked} />
    </div>
  );
};

export default RestaurantDate;
