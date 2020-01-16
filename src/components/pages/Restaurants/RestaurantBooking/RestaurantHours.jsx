import React from "react";

const RestaurantHours = props => {
  const { hours, handleHours } = props;

  const Select = ({ selectedValue, options, onDataChange }) => (
    <select
      onChange={({ target: { value } }) => onDataChange(value)}
      value={selectedValue}
    >
      {options.map(option => (
        <option value={option.value} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );

  const hourOptions = [
    { name: "8.00am", value: "Breakfast at 8.00am" },
    { name: "9.00am", value: "Breakfast at 9.00am" },
    { name: "10.00am", value: "Breakfast at 10.00am" },
    { name: "11.00am", value: "Breakfast at 11.00am" },
    { name: "12.00pm", value: "Lunch at 12.00pm" },
    { name: "01.00pm", value: "Lunch at 01.00pm" },
    { name: "02.00pm", value: "Lunch at 02.00pm" },
    { name: "07.00pm", value: "Dinner at 07.00pm" },
    { name: "08.00pm", value: "Dinner at 08.00pm" },
    { name: "09.00pm", value: "Dinner at 09.00pm" },
    { name: "10.00pm", value: "Dinner at 10.00pm" }
  ];
  return (
    <div className="RestaurantHours">
      <Select
        selectedValue={hours}
        options={hourOptions}
        onDataChange={handleHours}
      />
      {/* {hours === 0 ? "" : <span>Reservation for {hours} people</span>} */}
    </div>
  );
};

export default RestaurantHours;
