import React from "react";

const SpaHours = props => {
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
    { name: "6.00am", value: "at 6.00am" },
    { name: "7.00am", value: " at 7.00am" },
    { name: "8.00am", value: " at 8.00am" },
    { name: "9.00am", value: " at 9.00am" },
    { name: "10.00am", value: " at 10.00am" },
    { name: "11.00am", value: " at 11.00am" },
    { name: "12.00pm", value: " at 12.00pm" },

    { name: "02.00pm", value: " at 02.00pm" },
    { name: "03.00pm", value: " at 03.00pm" },
    { name: "04.00pm", value: " at 04.00pm" },
    { name: "05.00pm", value: " at 05.00pm" },
    { name: "06.00pm", value: " at 06.00pm" },

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

export default SpaHours;
